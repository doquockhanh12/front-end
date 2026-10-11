import { saveConfiguredAvailability, sessionDurationAllowed } from './configuration.js';
import { createContext, useContext, useEffect, useState } from 'react';
import useDemoAuth from '../auth/DemoAuthContext.jsx';
import {
  DOMAIN_STORAGE_KEY,
  restoreDemoState,
  requestIsCompleted,
  decideRequest,
  updateLearnerRequest,
  completeDomainLesson,
  addLearnerRequest,
  approveTutor,
  rejectTutor,
  setTutorSuspension,
  setUserSuspension,
  moderateReview,
  updateIssueStatus,
  warnUserIssue,
  dismissIssue,
  addDomainSubject,
  updateDomainSubject,
  toggleDomainSubjectStatus,
  addDomainLocation,
  updateDomainLocation,
  toggleDomainLocationStatus,
  updateDomainSystemSettings,
  recordAuditLog,
  addDomainNotification,
  markNotificationRead,
  markAllNotificationsRead,
  depositToWallet,
  holdEscrowDeposit,
  disburseEscrowLesson,
  refundEscrowLesson,
  requestTutorPayout,
  processPayoutRequest,
  createClassPost,
  updateClassPostStatus,
  moderateClassPost,
  submitTutorProposal,
  selectTutorProposal,
  sendChatMessage,
  sendInChatOffer,
  respondInChatOffer,
  recordSafetyEvent,
  triggerLessonSOS,
  cancelDomainLessonWithPenalty,
  markDomainLearnerNoShow,
  submitTutorReviewOfLearner,
} from './demoDomain.js';
import { normalizeSessionMinutes } from '../../data/tutorSchedule.js';
import { selectTutorIncome } from './incomeSelectors.js';
import { submitAppeal, reviewAppeal, submitAppealEvidence as addAppealEvidence } from './appeals.js';
import { acceptDomainOffer, openDomainConversation, openDomainSupport, threadHasUser, profileForTutor, linkedEscrow, settleEscrow, selectTutorTier } from './commerce.js';
import { saveVerificationDocuments, saveLearningRecord, submitLessonReview, withdrawDomainProposal, renewDomainLesson, submitHomework, rescheduleDomainLesson, reportSuspiciousClass as reportClass } from './learning.js';

const Context = createContext(null);
export function DemoDomainProvider({ children }) {
  const { user, updateProfile } = useDemoAuth();
  const [state, setState] = useState(() => restoreDemoState(localStorage));
  const [anonymousSaved, setAnonymousSaved] = useState([]);
  const applyResult = (result) => { if (result.state) setState(result.state); return { ...result, ok: Boolean(result.state) }; };
  const adminMutation = (action, id, details, reducer) => setState(current => {
    if (user?.role !== 'admin' || user.appealOnly) return current;
    const next = reducer(current);
    return next === current ? current : recordAuditLog(next, { actorId: user.id, actorName: user.fullName, role: 'admin', action, targetId: id, details });
  });
  useEffect(() => { setAnonymousSaved([]); }, [user?.id]);
  useEffect(() => {
    if (!user?.id) return;
    setState(current => current.users.some(u => u.id === user.id) ? current : { ...current, users: [...current.users, { id: user.id, fullName: user.fullName, email: user.email, phone: user.phone, role: user.role, username: user.username, status: 'active' }] });
  }, [user?.id]);
  useEffect(() => {
    if (user?.role !== 'tutor') return;
    setState((current) => {
      if (profileForTutor(current, user.id)) return current;
      // New profile values come only from the user's registration fields.
      const profile = { id: user.id, accountId: user.id, name: user.fullName,
        initials: user.fullName.split(/\s+/).slice(-2).map((s) => s[0]).join(''),
        subjects: user.subjects || [], levels: [], location: user.area || '', areas: user.area ? [user.area] : [],
        price: Number(user.fee), university: user.university || '', intro: '', approach: '',
        schedule: [], availability: [], formats: [], sessionMinutes: normalizeSessionMinutes(user.duration),
        rating: null, reviews: 0, verified: false };
      return { ...current, profiles: [...current.profiles, profile],
        settings: { ...current.settings, [profile.id]: { sessionMinutes: profile.sessionMinutes } } };
    });
  }, [user]);
  useEffect(() => { try { localStorage.setItem(DOMAIN_STORAGE_KEY, JSON.stringify(state)); } catch { /* Demo storage may be unavailable. */ } }, [state]);
  const tutorId = user?.role === 'tutor' ? profileForTutor(state, user.id)?.id : undefined;
  const proposals = state.proposals.map(proposal => {
    const profile = profileForTutor(state, proposal.tutorId);
    return profile ? { ...proposal, tier: selectTutorTier(state, profile.id).tier, tutorTier: selectTutorTier(state, profile.id).tier, feePercent: selectTutorTier(state, profile.id).feePercent, tutorName: profile.name, tutorUniversity: profile.university, tutorRating: profile.rating,
      tutorPunctualityRate: profile.punctualityRate, hasStudentBadge: profile.verified,
      ...(proposal.id === 'prop-201' ? { coverNote: '' } : {}) } : proposal;
  });
  const createRequest = (values) => {
    const result = addLearnerRequest(state, user, values);
    if (result.state) setState(result.state);
    return result;
  };
  const decide = (id, status) => { const result = decideRequest(state, id, status, tutorId); if (result.error) return result.error; setState(result.state); return ''; };
  const updateLearnerRequests = (items) => setState((current) => items.reduce((next, item) => updateLearnerRequest(next, user?.id, item.id, item), current));
  const setSaved = (update) => {
    if (user?.role !== 'learner') { setAnonymousSaved(update); return; }
    setState((current) => ({ ...current, savedByAccount: { ...current.savedByAccount,
      [user.id]: typeof update === 'function' ? update(current.savedByAccount[user.id] || []) : update } }));
  };
  const saveAvailability = (ranges, duration) => {
    const result = saveConfiguredAvailability(state, tutorId, ranges, duration);
    if (result.error) return result.error;
    setState(result.state); return '';
  };
  const setSessionMinutes = (duration) => setState(current => !tutorId || !sessionDurationAllowed(current, tutorId, duration) ? current : { ...current, settings: { ...current.settings, [tutorId]: { sessionMinutes: Number(duration) } } });
  const saveTutorProfile = (draft) => {
    if (!tutorId || !sessionDurationAllowed(state, tutorId, draft.sessionMinutes)) return;
    updateProfile({ fullName: draft.name });
    setState((current) => ({ ...current, profiles: current.profiles.map((profile) => profile.id === tutorId ? {
      ...profile, name: draft.name.trim(), initials: draft.name.trim().split(/\s+/).slice(-2).map((s) => s[0]).join(''),
      subjects: draft.subjects.split(',').map((s) => s.trim()).filter(Boolean), levels: [...draft.levels],
      location: draft.area.trim(), areas: [draft.area.trim()], price: Number(draft.fee), intro: draft.bio,
      sessionMinutes: normalizeSessionMinutes(draft.sessionMinutes),
    } : profile), settings: { ...current.settings, [tutorId]: { sessionMinutes: normalizeSessionMinutes(draft.sessionMinutes) } } }));
  };
  const completeLesson = (id) => setState((current) => completeDomainLesson(current, tutorId, id));
  const saveLessonNotes = (id, notes) => setState((current) => ({ ...current, lessons: current.lessons.map((l) => l.id === id && l.tutorId === tutorId ? { ...l, notes } : l) }));

  // Admin Domain Actions
  const approveTutorAction = (targetTutorId) => adminMutation('APPROVE_TUTOR', targetTutorId, 'Phê duyệt hồ sơ; cấp tích xanh khi có đủ hai mặt thẻ đã tải lên.', current => approveTutor(current, targetTutorId));
  const rejectTutorAction = (targetTutorId, reason) => adminMutation('REJECT_TUTOR', targetTutorId, reason, current => rejectTutor(current, targetTutorId, reason));
  const setTutorSuspensionAction = (targetTutorId, isSuspended, reason) => setState((current) => user?.role === 'admin' ? recordAuditLog(setTutorSuspension(current, targetTutorId, isSuspended, reason), { actorId: user.id, actorName: user.fullName, action: isSuspended ? 'SUSPEND_TUTOR' : 'UNSUSPEND_TUTOR', targetId: targetTutorId, details: reason }) : current);
  const toggleSuspendTutor = (targetTutorId) => setState((current) => {
    const tutor = (current.profiles || []).find((p) => p.id === targetTutorId);
    const isCurrentlySuspended = tutor?.moderationStatus === 'suspended' || tutor?.status === 'suspended';
    return setTutorSuspension(current, targetTutorId, !isCurrentlySuspended);
  });
  const setUserSuspensionAction = (userId, isSuspended, reason) => setState((current) => user?.role === 'admin' ? recordAuditLog(setUserSuspension(current, userId, isSuspended, reason), { actorId: user.id, actorName: user.fullName, action: isSuspended ? 'SUSPEND_USER' : 'UNSUSPEND_USER', targetId: userId, details: reason }) : current);
  const toggleSuspendUser = (userId) => setState((current) => {
    const targetUser = (current.users || []).find((u) => u.id === userId);
    const isCurrentlySuspended = targetUser?.status === 'suspended';
    return setUserSuspension(current, userId, !isCurrentlySuspended);
  });
  const moderateReviewAction = (reviewId, decision) => adminMutation(decision === 'hidden' ? 'HIDE_REVIEW' : 'APPROVE_REVIEW', reviewId, decision, current => moderateReview(current, reviewId, decision));
  const approveReview = (reviewId) => adminMutation('APPROVE_REVIEW', reviewId, 'approved', current => moderateReview(current, reviewId, 'approved'));
  const hideReview = (reviewId) => adminMutation('HIDE_REVIEW', reviewId, 'hidden', current => moderateReview(current, reviewId, 'hidden'));
  const updateIssueStatusAction = (issueId, status, resolutionNote) => adminMutation('UPDATE_ISSUE', issueId, resolutionNote || status, current => updateIssueStatus(current, issueId, status, resolutionNote));
  const warnUserIssueAction = (issueId, warningReason) => adminMutation('WARN_USER', issueId, warningReason, current => warnUserIssue(current, issueId, warningReason));
  const dismissIssueAction = (issueId, rejectionReason) => adminMutation('DISMISS_ISSUE', issueId, rejectionReason, current => dismissIssue(current, issueId, rejectionReason));
  const createAppeal = (values) => {
    const result = submitAppeal(state, user, values);
    if (result.state) setState(result.state);
    return result;
  };
  const decideAppeal = (id, status, note, actions) => {
    const result = reviewAppeal(state, user, id, status, note, new Date(), actions);
    if (result.state) setState(result.state);
    return result;
  };
  const submitAppealEvidence = (id, values) => applyResult(addAppealEvidence(state, user, id, values));

  // Omnichannel Actions
  const addSubject = (data) => adminMutation('ADD_SUBJECT', data.name, data.name, current => addDomainSubject(current, data));
  const updateSubject = (id, patch) => adminMutation('UPDATE_SUBJECT', id, patch.name || state.subjects.find(s => s.id === id)?.name, current => updateDomainSubject(current, id, patch));
  const toggleSubjectStatus = (id) => adminMutation('TOGGLE_SUBJECT', id, state.subjects.find(s => s.id === id)?.name, current => toggleDomainSubjectStatus(current, id));

  const addLocation = (data) => adminMutation('ADD_LOCATION', data.name, data.name, current => addDomainLocation(current, data));
  const updateLocation = (id, patch) => adminMutation('UPDATE_LOCATION', id, patch.name || state.locations.find(l => l.id === id)?.name, current => updateDomainLocation(current, id, patch));
  const toggleLocationStatus = (id) => adminMutation('TOGGLE_LOCATION', id, state.locations.find(l => l.id === id)?.name, current => toggleDomainLocationStatus(current, id));

  const updateSystemSettings = (patch) => {
    if (user?.role !== 'admin') return { error: 'Chỉ Admin được thay đổi cấu hình.' };
    const next = updateDomainSystemSettings(state, patch);
    if (next === state) return { error: 'Cấu hình không hợp lệ.' };
    setState(next); return { ok: true };
  };
  const logAudit = (logData) => setState((current) => recordAuditLog(current, logData));

  const addNotification = (notif) => setState((current) => addDomainNotification(current, notif));
  const markNotificationAsRead = (id) => setState((current) => markNotificationRead(current, id));
  const markAllNotificationsAsRead = (recipientId) => setState((current) => markAllNotificationsRead(current, recipientId));

  const depositFunds = (accountId, amount, method) => setState((current) => depositToWallet(current, accountId, amount, method));
  const holdEscrow = (params) => {
    const res = holdEscrowDeposit(state, params);
    if (res.state) setState(res.state);
    return res;
  };
  const disburseEscrow = (escrowId) => setState((current) => disburseEscrowLesson(current, escrowId));
  const refundEscrow = (escrowId, amount, reason, targetLessonId) => {
    const escrow = state.escrowTransactions.find(e => e.id === escrowId && e.status === 'held');
    const linked = state.lessons.filter(l => escrow?.lessonId === l.id || escrow?.lessonIds?.includes(l.id));
    if (!escrow || user?.role !== 'admin' && (user?.role !== 'learner' || escrow.learnerId !== user.id || !linked.some(l => l.learnerId === user.id && ['confirmed', 'upcoming'].includes(l.status)))) return { error: 'Không có ký quỹ hợp lệ thuộc buổi học này.' };
    const lessonId = targetLessonId || (linked.length === 1 ? linked[0].id : null);
    if (user?.role === 'learner' && !lessonId) return { error: 'Chọn đúng buổi học cần hoàn tiền trong khóa học.' };
    const next = user.role === 'admin' ? refundEscrowLesson(state, escrowId, amount, reason) : settleEscrow(state, escrowId, { lessonId, refundRatio: 1, reason });
    if (next === state) return { error: 'Ký quỹ đã được xử lý.' };
    setState({ ...next, lessons: next.lessons.map(l => l.id === lessonId ? { ...l, status: 'cancelled', cancelReason: reason } : l) }); return { ok: true };
  };
  const requestPayout = (params) => {
    const res = requestTutorPayout(state, params);
    if (res.state) setState(res.state);
    return res;
  };
  const processPayout = (payoutId, decision, note) => adminMutation('PROCESS_PAYOUT', payoutId, note || decision, current => processPayoutRequest(current, payoutId, decision, note));

  const postClass = (postData) => {
    const res = createClassPost(state, user, postData);
    if (res.state) setState(res.state);
    return res;
  };
  const setClassPostStatus = (postId, status) => setState((current) => updateClassPostStatus(current, postId, status));
  const moderateClass = (postId, status) => adminMutation('MODERATE_CLASS', postId, status, current => moderateClassPost(current, postId, status));
  const submitProposal = (proposalData) => {
    const res = submitTutorProposal(state, user, proposalData);
    if (res.state) setState(res.state);
    return res;
  };
  const selectProposal = (proposalId) => {
    const res = selectTutorProposal(state, user?.id, proposalId);
    if (res.state) setState(res.state);
    return res;
  };

  const sendMessage = (threadId, text) => setState((current) => sendChatMessage(current, threadId, user, text));
  const sendOffer = (threadId, offerData) => {
    const next = sendInChatOffer(state, threadId, user, offerData);
    if (next === state) return { error: 'Không thể gửi đề xuất: kiểm tra tài khoản và học phí/số buổi.' };
    setState(next); return { ok: true };
  };
  const respondOffer = (msgId, decision, selection) => applyResult(acceptDomainOffer(state, msgId, decision, user, selection));
  const openConversation = (targetTutorId, classPostId) => applyResult(openDomainConversation(state, user, targetTutorId, classPostId));
  const openSupportConversation = () => applyResult(openDomainSupport(state, user));
  const withdrawProposal = (id) => applyResult(withdrawDomainProposal(state, user, id));
  const saveTutorVerificationDocuments = (documents) => applyResult(saveVerificationDocuments(state, user, documents));
  const saveLessonLearningRecord = (id, values) => applyResult(saveLearningRecord(state, user, id, values));
  const submitLearnerReview = (id, values) => applyResult(submitLessonReview(state, user, id, values));
  const renewLesson = (id, values) => applyResult(renewDomainLesson(state, user, id, values));
  const submitLessonHomework = (id, file) => applyResult(submitHomework(state, user, id, file));
  const rescheduleLesson = (id, proposal) => applyResult(rescheduleDomainLesson(state, user, id, proposal));
  const reportSuspiciousClass = (values) => applyResult(reportClass(state, user, values));

  const logSafety = (params) => setState((current) => recordSafetyEvent(current, params));
  const triggerSOS = (params) => setState((current) => triggerLessonSOS(current, params));

  const cancelLessonWithPenalty = (lessonId, role, hours, reason) => {
    const next = cancelDomainLessonWithPenalty(state, lessonId, role, hours, reason, user);
    if (next === state) return { error: 'Buổi học không thuộc tài khoản, đã kết thúc hoặc không thể hủy.' };
    setState(next); return { ok: true };
  };
  const markLearnerNoShow = (lessonId, confirmation) => applyResult(markDomainLearnerNoShow(state, lessonId, user, confirmation));

  const submitTutorReview = (params) => applyResult(submitLessonReview(state, user, params.lessonId, params));

  return (
    <Context.Provider
      value={{
        ...state,
        proposals,
        tutorId,
        sessionMinutes: normalizeSessionMinutes(state.settings[tutorId]?.sessionMinutes ?? user?.duration),
        anonymousSaved,
        createRequest,
        decide,
        updateLearnerRequests,
        setSaved,
        saveAvailability,
        setSessionMinutes,
        saveTutorProfile,
        completeLesson,
        saveLessonNotes,
        // Admin Domain Actions
        approveTutor: approveTutorAction,
        rejectTutor: rejectTutorAction,
        setTutorSuspension: setTutorSuspensionAction,
        toggleSuspendTutor,
        setUserSuspension: setUserSuspensionAction,
        toggleSuspendUser,
        moderateReview: moderateReviewAction,
        approveReview,
        hideReview,
        updateIssueStatus: updateIssueStatusAction,
        warnUserIssue: warnUserIssueAction,
        dismissIssue: dismissIssueAction,
        createAppeal,
        decideAppeal,
        submitAppealEvidence,
        // Omnichannel Actions
        addSubject,
        updateSubject,
        toggleSubjectStatus,
        addLocation,
        updateLocation,
        toggleLocationStatus,
        updateSystemSettings,
        logAudit,
        addNotification,
        markNotificationAsRead,
        markAllNotificationsAsRead,
        depositFunds,
        holdEscrow,
        disburseEscrow,
        refundEscrow,
        requestPayout,
        processPayout,
        postClass,
        setClassPostStatus,
        moderateClass,
        submitProposal,
        selectProposal,
        sendMessage,
        sendOffer,
        respondOffer,
        openConversation,
        openSupportConversation,
        withdrawProposal,
        saveTutorVerificationDocuments,
        saveLessonLearningRecord,
        submitLearnerReview,
        renewLesson,
        submitLessonHomework,
        rescheduleLesson,
        reportSuspiciousClass,
        logSafety,
        triggerSOS,
        cancelLessonWithPenalty,
        markLearnerNoShow,
        submitTutorReview,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export default function useDemoDomain() { const value = useContext(Context); if (!value) throw new Error('DemoDomainProvider missing'); return value; }
export function useTutorIncome(referenceDate = new Date()) {
  const { lessons, tutorId } = useDemoDomain();
  return selectTutorIncome(lessons, tutorId, referenceDate);
}
export function useLearnerRequests() {
  const state = useDemoDomain(); const { user } = useDemoAuth();
  return [state.requests.filter((r) => r.learnerId === user?.id).map((r) => ({ ...r, completed: requestIsCompleted(state, r) })), state.updateLearnerRequests];
}
export function useSavedTutors() { const state = useDemoDomain(); const { user } = useDemoAuth(); return [user?.role === 'learner' ? state.savedByAccount[user.id] || [] : state.anonymousSaved, state.setSaved]; }
export function useTutorProfile() {
  const state = useDemoDomain(); const { user } = useDemoAuth();
  const profile = state.profiles.find((p) => p.id === state.tutorId);
  return [{ name: profile?.name || user?.fullName || '', subjects: profile?.subjects.join(', ') || user?.subjects?.join(', ') || '',
    levels: profile?.levels || [], area: profile?.location || user?.area || '', fee: profile?.price ?? user?.fee ?? '',
    bio: profile?.intro || '', rating: profile?.rating, sessionMinutes: normalizeSessionMinutes(state.settings[state.tutorId]?.sessionMinutes ?? user?.duration) }, state.saveTutorProfile];
}
export function usePublicTutors() {
  return useDemoDomain().profiles.map((tutor) => ({ ...tutor, subject: tutor.subjects[0], area: tutor.location,
    time: tutor.availability[0], fee: tutor.price, tone: tutor.avatarTone, bio: tutor.intro }));
}
