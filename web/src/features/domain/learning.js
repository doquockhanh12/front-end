import { accountForTutor, profileForTutor, threadHasUser, openDomainConversation, acceptDomainOffer } from './commerce.js';
import { isFutureSession, isValidProposal, selectPublicTutorSchedule, weekDates, subtractLessons, mergeAdjacentRanges } from '../../data/tutorSchedule.js';
const MAX_FILE = 500 * 1024;
export function reportSuspiciousClass(state, actor, values, now = new Date()) {
  const post = state.classPosts.find(p => p.id === values.classPostId && p.status === 'open' && p.moderationStatus === 'approved');
  if (actor?.role !== 'tutor' || !profileForTutor(state, actor.id) || !post || typeof values.reason !== 'string' || values.reason.trim().length < 20) return { error: 'Chọn tin đang mở và ghi rõ thông tin cần đối chiếu, ít nhất 20 ký tự.' };
  const existing = state.issues.find(i => i.reporterId === actor.id && i.relatedClassPostId === post.id && ['new', 'in_progress'].includes(i.status));
  if (existing) return { ok: true, state, issueId: existing.id };
  let number = 1; while (state.issues.some(i => i.id === `CLASS-REPORT-${number}`)) number++;
  const id = `CLASS-REPORT-${number}`, createdAt = now.toISOString();
  const issue = { id, title: `Cần đối chiếu tin ${post.id}`, category: 'safety', status: 'new', relatedClassPostId: post.id,
    reporterId: actor.id, reportedBy: { id: actor.id, name: actor.fullName }, targetUserId: post.learnerId,
    description: values.reason.trim(), content: values.reason.trim(), createdAt, location: post.address || post.area || post.district || '' };
  const admin = state.users.find(u => u.role === 'admin');
  const notification = admin ? [{ id: `notice-${id}`, recipientId: admin.id, type: 'class_report', title: 'Tin lớp cần đối chiếu', message: issue.title, link: '/admin/issues', isRead: false, createdAt }] : [];
  return { ok: true, issueId: id, state: { ...state, issues: [issue, ...state.issues], notifications: [...notification, ...state.notifications] } };
}
export function validLocalFile(file) {
  const data = file?.dataUrl || file?.data;
  return Boolean(file?.name && ['image/png', 'image/jpeg', 'image/webp', 'application/pdf', 'text/plain'].includes(file.type)
    && data?.startsWith(`data:${file.type};base64,`) && data.length * .75 <= MAX_FILE);
}
export function saveVerificationDocuments(state, actor, documents) {
  const profile = profileForTutor(state, actor?.id);
  if (actor?.role !== 'tutor' || !profile || documents.length !== 2 || !['front', 'back'].every(side => documents.some(d => d.side === side && validLocalFile(d)))) return { error: 'Tải đủ hai mặt thẻ, ảnh/PDF mỗi tệp tối đa 500 KB.' };
  return { ok: true, state: { ...state, profiles: state.profiles.map(p => p.id === profile.id ? { ...p, verificationDocuments: structuredClone(documents), verified: false, moderationStatus: 'pending' } : p) } };
}
export function saveLearningRecord(state, actor, lessonId, values) {
  const lesson = state.lessons.find(l => l.id === lessonId);
  if (!lesson || actor?.role !== 'tutor' || accountForTutor(state, lesson.tutorId) !== actor.id || lesson.status === 'cancelled') return { error: 'Không thể cập nhật buổi học này.' };
  if (values.materials?.some(file => !validLocalFile(file)) || (values.materials?.length || 0) > 3) return { error: 'Tối đa 3 tài liệu ảnh/PDF/TXT, mỗi tệp 500 KB.' };
  const patch = {};
  for (const key of ['progress', 'notes', 'meeting', 'materials']) if (values[key] !== undefined) patch[key] = structuredClone(values[key]);
  return { ok: true, state: { ...state, lessons: state.lessons.map(l => l.id === lessonId ? { ...l, ...patch } : l) } };
}
export function submitLessonReview(state, actor, lessonId, values) {
  const lesson = state.lessons.find(l => l.id === lessonId && l.status === 'completed');
  const owned = actor?.role === 'learner' ? lesson?.learnerId === actor.id : actor?.role === 'tutor' && accountForTutor(state, lesson?.tutorId) === actor.id;
  const rating = Number(values.rating ?? values.studentAttitudeRating);
  if (!lesson || !owned || !Number.isInteger(rating) || rating < 1 || rating > 5) return { error: 'Chỉ hai bên của buổi đã hoàn tất mới được đánh giá từ 1–5 sao.' };
  if (state.twoWayReviews.some(r => r.lessonId === lessonId && r.reviewerId === actor.id)) return { error: 'Bạn đã đánh giá buổi học này.' };
  const review = { id: `review-${lessonId}-${actor.id}`, lessonId, tutorId: lesson.tutorId, learnerId: lesson.learnerId, reviewerId: actor.id, reviewerRole: actor.role, rating, studentAttitudeRating: values.studentAttitudeRating, punctualityRating: values.punctualityRating, comment: values.comment?.trim() || '', moderationStatus: 'pending', createdAt: new Date().toISOString() };
  return { ok: true, state: { ...state, twoWayReviews: [...state.twoWayReviews, review], ...(actor.role === 'learner' ? { reviews: [...state.reviews, { ...review, tutorName: profileForTutor(state, lesson.tutorId)?.name, learnerName: actor.fullName, status: 'pending' }] } : {}) } };
}
export function submitHomework(state, actor, lessonId, file) {
  const lesson = state.lessons.find(l => l.id === lessonId && l.learnerId === actor?.id && l.status !== 'cancelled');
  if (!lesson || actor?.role !== 'learner' || !validLocalFile(file) || (lesson.submissions?.length || 0) >= 3) return { error: 'Chỉ học viên của buổi học được nộp tối đa 3 tệp, mỗi tệp 500 KB.' };
  return { ok: true, state: { ...state, lessons: state.lessons.map(l => l.id === lessonId ? { ...l, submissions: [...(l.submissions || []), { ...structuredClone(file), submittedBy: actor.id, submittedAt: new Date().toISOString() }] } : l) } };
}
export function withdrawDomainProposal(state, actor, id) {
  const proposal = state.proposals.find(p => p.id === id && accountForTutor(state, p.tutorId) === actor?.id && p.status === 'pending');
  if (actor?.role !== 'tutor' || !proposal) return { error: 'Chỉ được rút đơn đang chờ của chính bạn.' };
  return { ok: true, state: { ...state, proposals: state.proposals.map(p => p.id === id ? { ...p, status: 'withdrawn' } : p), classPosts: state.classPosts.map(p => p.id === proposal.classPostId ? { ...p, proposalCount: Math.max(0, (p.proposalCount || 0) - 1) } : p) } };
}
export function renewDomainLesson(state, actor, lessonId, values, now = new Date()) {
  const lesson = state.lessons.find(l => l.id === lessonId && l.learnerId === actor?.id && l.status === 'completed');
  if (!lesson || actor?.role !== 'learner' || ![4, 8, 12].includes(values.sessionsCount) || !Number.isFinite(lesson.sessionFee)) return { error: 'Chọn gia hạn 4/8/12 buổi đã hoàn tất có học phí thỏa thuận.' };
  const opened = openDomainConversation(state, actor, lesson.tutorId);
  if (opened.error) return opened;
  const id = `renew-${lessonId}-${opened.state.messages.length}`;
  const message = { id, threadId: opened.threadId, type: 'custom_offer', senderId: accountForTutor(state, lesson.tutorId), offerData: { id, subject: lesson.subject, grade: lesson.levels?.[0] || '', sessionsCount: values.sessionsCount, sessionFee: lesson.sessionFee, proposals: values.proposals, format: lesson.format, area: lesson.area, status: 'pending' } };
  return acceptDomainOffer({ ...opened.state, messages: [...opened.state.messages, message] }, id, 'accepted', actor, values, now);
}
export function rescheduleDomainLesson(state, actor, lessonId, proposal, now = new Date()) {
  if (!proposal?.date || !Number.isFinite(proposal.start) || !Number.isFinite(proposal.end)) return { error: 'Chọn một buổi còn rảnh trước khi xác nhận đổi lịch.' };
  const lesson = state.lessons.find(l => l.id === lessonId && ['confirmed', 'upcoming'].includes(l.status));
  if (actor?.role !== 'learner' || lesson?.learnerId !== actor.id) return { error: 'Chỉ người học được đổi buổi chưa hoàn tất của mình.' };
  const start = new Date(lesson.date + 'T00:00:00'); start.setMinutes(lesson.start);
  if ((start - now) / 3600000 < 24) return { error: 'Đổi lịch cần thực hiện trước giờ học ít nhất 24 giờ.' };
  const tutor = profileForTutor(state, lesson.tutorId);
  const schedule = selectPublicTutorSchedule(state, tutor, weekDates(0, new Date(proposal.date + 'T12:00:00')));
  if (!isFutureSession(proposal, now) || !isValidProposal(proposal, schedule.ranges, lesson.end - lesson.start)) return { error: 'Chọn buổi còn rảnh có cùng thời lượng.' };
  const lessons = state.lessons.map(l => l.id === lessonId ? { ...l, date: proposal.date, start: proposal.start, end: proposal.end, rescheduledFrom: { date: lesson.date, start: lesson.start, end: lesson.end } } : l);
  const availability = subtractLessons(mergeAdjacentRanges([...state.availability, { id: `rescheduled-free-${lessonId}`, tutorId: lesson.tutorId, date: lesson.date, start: lesson.start, end: lesson.end }]), lessons);
  return { ok: true, state: { ...state, lessons, availability, requests: state.requests.map(r => r.id === lesson.requestId ? { ...r, proposals: (r.proposals || []).map(p => p.date === lesson.date && p.start === lesson.start && p.end === lesson.end ? { ...p, ...proposal } : p) } : r) } };
}
