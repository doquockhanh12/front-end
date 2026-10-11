import { isFutureSession, isValidProposal, selectPublicTutorSchedule, weekDates, subtractLessons } from '../../data/tutorSchedule.js';

export const profileForTutor = (state, id) => state.profiles.find(p => p.id === id || p.accountId === id || p.id === state.users?.find(u => u.id === id)?.tutorProfileId);
export const accountForTutor = (state, id) => profileForTutor(state, id)?.accountId || state.users?.find(u => u.tutorProfileId === id)?.id || id;
export const threadHasUser = (thread, id) => Boolean(id && thread && (thread.learnerId === id || thread.tutorId === id || thread.participants?.includes(id)));
const uniqueId = (prefix, collection = []) => { let n = 1; while (collection.some(item => item.id === `${prefix}-${n}`)) n++; return `${prefix}-${n}`; };
const wallet = (state, id) => state.wallets?.[id] || { accountId: id, availableBalance: 0, escrowBalance: 0, ledger: [] };

export function selectTutorTier(state, tutorId) {
  const profile = profileForTutor(state, tutorId);
  const completedCount = state.lessons.filter(l => l.tutorId === profile?.id && l.status === 'completed').length;
  const rating = profile?.rating;
  const punctuality = profile?.punctualityRate;
  const tier = completedCount >= 30 && rating >= 4.9 && punctuality >= 99 ? 'top_rated'
    : completedCount >= 10 && rating >= 4.8 && punctuality >= 95 ? 'pro' : 'active';
  return { tier, completedCount, rating, punctuality, feePercent: tier === 'top_rated' ? state.systemSettings?.topRatedFeePercent ?? 7 : state.systemSettings?.platformFeePercent ?? 10 };
}

export function openDomainConversation(state, actor, tutorId, classPostId) {
  const tutor = profileForTutor(state, tutorId);
  const post = classPostId && state.classPosts.find(p => p.id === classPostId);
  if (!actor?.id || !tutor || (post && post.learnerId !== actor.id && accountForTutor(state, tutor.id) !== actor.id)) return { error: 'Không thể mở cuộc trò chuyện này.' };
  const learnerId = actor.role === 'learner' ? actor.id : post?.learnerId;
  const tutorAccount = accountForTutor(state, tutor.id);
  if (!learnerId || !tutorAccount) return { error: 'Chưa có tài khoản của hai bên để trò chuyện.' };
  const existing = state.chatThreads.find(t => t.learnerId === learnerId && t.tutorId === tutorAccount && (t.classPostId || null) === (classPostId || null));
  if (existing) return { state, threadId: existing.id };
  const threadId = uniqueId('thread', state.chatThreads);
  const learnerName = actor.role === 'learner' ? actor.fullName : post?.learnerName;
  const thread = { id: threadId, learnerId, tutorId: tutorAccount, publicTutorId: tutor.id, participants: [learnerId, tutorAccount], learnerName, tutorName: tutor.name, classPostId: classPostId || null, lastMessageText: '', lastMessageAt: new Date().toISOString() };
  return { threadId, state: { ...state, chatThreads: [...state.chatThreads, thread] } };
}
export function openDomainSupport(state, actor) {
  const admin = state.users.find(u => u.role === 'admin');
  if (!actor?.id || !admin) return { error: 'Đăng nhập để gửi yêu cầu hỗ trợ demo.' };
  const existing = state.chatThreads.find(t => t.kind === 'support' && t.participants?.includes(actor.id));
  if (existing) return { state, threadId: existing.id };
  const id = uniqueId('support', state.chatThreads);
  return { threadId: id, state: { ...state, chatThreads: [...state.chatThreads, { id, kind: 'support', participants: [actor.id, admin.id], learnerId: actor.id, tutorId: admin.id, learnerName: actor.fullName, tutorName: 'Hỗ trợ TutorNearMe (demo)', lastMessageText: '', lastMessageAt: new Date().toISOString() }] } };
}

// Bundled escrow settles one explicit lesson allocation at a time. No unlinked funds or manufactured compensation.
export function linkedEscrow(state, lessonId) {
  return state.escrowTransactions.find(e => e.status === 'held' && (e.lessonId === lessonId || e.lessonIds?.includes(lessonId)) && !e.settlements?.some(s => s.lessonId === lessonId));
}
export function settleEscrow(state, escrowId, { lessonId, refundRatio = 0, reason = '', now = new Date(), compensation = false } = {}) {
  const escrow = state.escrowTransactions.find(e => e.id === escrowId && e.status === 'held');
  if (!escrow || (lessonId && !(escrow.lessonId === lessonId || escrow.lessonIds?.includes(lessonId))) || escrow.settlements?.some(s => s.lessonId === lessonId) || !Number.isFinite(refundRatio) || refundRatio < 0 || refundRatio > 1) return state;
  const settled = (escrow.settlements || []).reduce((sum, item) => sum + item.amount, 0);
  const remaining = escrow.amount - settled;
  const allocation = lessonId && escrow.lessonIds?.length > 1 ? escrow.feePerSession : remaining;
  if (!Number.isFinite(allocation) || allocation <= 0 || allocation > remaining) return state;
  const refund = Math.round(allocation * refundRatio);
  const tutorGross = allocation - refund;
  const platformFee = compensation ? 0 : Math.round(tutorGross * (escrow.platformFeePercent ?? 10) / 100);
  const tutorNet = tutorGross - platformFee;
  const tutorAccountId = accountForTutor(state, escrow.tutorId);
  const learnerWallet = wallet(state, escrow.learnerId);
  const tutorWallet = wallet(state, tutorAccountId);
  const stamp = now.toISOString();
  const settlement = { lessonId: lessonId || null, amount: allocation, refund, tutorNet, platformFee, at: stamp, reason };
  const settlements = [...(escrow.settlements || []), settlement];
  const finished = settled + allocation === escrow.amount;
  const totalRefund = settlements.reduce((sum, item) => sum + item.refund, 0);
  const status = !finished ? 'held' : totalRefund === 0 ? 'disbursed' : totalRefund === escrow.amount ? 'refunded' : 'partially_refunded';
  const tx = (type, amount) => ({ id: uniqueId(`tx-${escrowId}-${type}`, [...learnerWallet.ledger, ...tutorWallet.ledger]), type, amount, refId: escrow.id, lessonId, status: 'completed', createdAt: stamp, description: reason || 'Quyết toán ký quỹ buổi học (demo)' });
  return { ...state, wallets: { ...state.wallets,
    [escrow.learnerId]: { ...learnerWallet, availableBalance: learnerWallet.availableBalance + refund, escrowBalance: Math.max(0, learnerWallet.escrowBalance - allocation), ledger: refund ? [tx('escrow_refund', refund), ...learnerWallet.ledger] : learnerWallet.ledger },
    [tutorAccountId]: { ...tutorWallet, availableBalance: tutorWallet.availableBalance + tutorNet, ledger: tutorNet ? [tx(compensation ? 'cancellation_compensation' : 'lesson_disbursed', tutorNet), ...tutorWallet.ledger] : tutorWallet.ledger },
  }, escrowTransactions: state.escrowTransactions.map(e => e.id === escrowId ? { ...e, status, settlements, platformFee: settlements.reduce((sum, s) => sum + s.platformFee, 0), disbursedAt: tutorNet ? stamp : e.disbursedAt, refundedAt: refund ? stamp : e.refundedAt, refundReason: reason } : e) };
}

export function acceptDomainOffer(state, messageId, decision, actor, selection = {}, now = new Date()) {
  const message = state.messages.find(m => m.id === messageId && m.type === 'custom_offer');
  const thread = state.chatThreads.find(t => t.id === message?.threadId);
  if (!message || !threadHasUser(thread, actor?.id) || actor?.role !== 'learner' || thread.learnerId !== actor.id || message.offerData?.status !== 'pending') return { error: 'Đề xuất không còn chờ hoặc không thuộc tài khoản.' };
  const offer = message.offerData;
  if (decision === 'declined') return { ok: true, state: { ...state, messages: state.messages.map(m => m.id === messageId ? { ...m, offerData: { ...offer, status: 'declined', decidedAt: now.toISOString() } } : m) } };
  if (decision !== 'accepted') return { error: 'Quyết định không hợp lệ.' };
  const amount = offer.sessionFee * offer.sessionsCount;
  if (!Number.isFinite(offer.sessionFee) || offer.sessionFee <= 0 || !Number.isInteger(offer.sessionsCount) || offer.sessionsCount < 1 || !Number.isFinite(amount)) return { error: 'Học phí hoặc số buổi không hợp lệ.' };
  if (wallet(state, actor.id).availableBalance < amount) return { error: 'Số dư khả dụng không đủ. Vui lòng nạp thêm tiền.' };
  const tutor = profileForTutor(state, thread.tutorId);
  const proposals = selection.proposals || offer.proposals || [];
  if (!tutor || proposals.length !== offer.sessionsCount || proposals.some((p, i) => {
    const schedule = selectPublicTutorSchedule(state, tutor, weekDates(0, new Date(p.date + 'T12:00:00')));
    return !isFutureSession(p, now) || !isValidProposal(p, schedule.ranges, p.end - p.start, proposals.slice(0, i)) || ![45, 90].includes(p.end - p.start);
  })) return { error: 'Chọn đủ buổi học cụ thể trong lịch rảnh còn hợp lệ của gia sư.' };
  const requestId = uniqueId('request', state.requests);
  const escrowId = uniqueId('escrow', state.escrowTransactions);
  const lessons = proposals.map((p, i) => ({ ...p, id: `${requestId}-lesson-${i + 1}`, requestId, tutorId: tutor.id, learnerId: actor.id, learner: actor.fullName, subject: offer.subject, subjects: [offer.subject], levels: [offer.grade].filter(Boolean), format: offer.format || selection.format || 'Online', area: offer.area || selection.area || '', sessionFee: offer.sessionFee, status: 'confirmed', escrowId }));
  const request = { id: requestId, tutorId: tutor.id, learnerId: actor.id, learner: actor.fullName, subject: offer.subject, subjects: [offer.subject], levels: [offer.grade].filter(Boolean), proposals: structuredClone(proposals), sessionFee: offer.sessionFee, status: 'accepted', offerId: offer.id, threadId: thread.id, classPostId: thread.classPostId || null, escrowId };
  const currentWallet = wallet(state, actor.id);
  const feePercent = selectTutorTier(state, tutor.id).feePercent;
  const escrow = { id: escrowId, requestId, lessonIds: lessons.map(l => l.id), classPostId: thread.classPostId || null, learnerId: actor.id, tutorId: accountForTutor(state, tutor.id), subject: offer.subject, amount, sessionCount: lessons.length, feePerSession: offer.sessionFee, platformFeePercent: feePercent, status: 'held', heldAt: now.toISOString(), settlements: [] };
  const next = { ...state, requests: [...state.requests, request], lessons: [...state.lessons, ...lessons], availability: subtractLessons(state.availability, lessons), escrowTransactions: [escrow, ...state.escrowTransactions],
    wallets: { ...state.wallets, [actor.id]: { ...currentWallet, availableBalance: currentWallet.availableBalance - amount, escrowBalance: currentWallet.escrowBalance + amount, ledger: [{ id: `tx-${escrowId}-hold`, type: 'escrow_hold', amount: -amount, refId: escrowId, status: 'held', createdAt: now.toISOString(), description: `Ký quỹ ${offer.subject}` }, ...currentWallet.ledger] } },
    messages: state.messages.map(m => m.id === messageId ? { ...m, offerData: { ...offer, proposals: structuredClone(proposals), status: 'accepted', requestId, escrowId, decidedAt: now.toISOString() } } : m),
    classPosts: state.classPosts.map(p => p.id === thread.classPostId ? { ...p, status: 'matched', requestId, escrowId } : p),
    proposals: state.proposals.map(p => { const post = state.classPosts.find(item => item.id === thread.classPostId); return p.classPostId === post?.id ? { ...p, status: p.id === post.selectedProposalId ? 'matched' : p.status === 'withdrawn' ? p.status : 'rejected' } : p; }),
  };
  return { ok: true, state: next, requestId, lessonIds: lessons.map(l => l.id) };
}
