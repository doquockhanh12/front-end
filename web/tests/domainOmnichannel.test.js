import test from 'node:test';
import assert from 'node:assert/strict';
import { validOfferProposals } from './offerTestHelpers.js';
import {
  createDemoState,
  restoreDemoState,
  DOMAIN_STORAGE_KEY,
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
  submitTutorReviewOfLearner,
} from '../src/features/domain/demoDomain.js';

const now = new Date('2026-10-05T06:00:00+07:00');

test('OMNI-001: Initial state contains all omnichannel collections with non-empty defaults', () => {
  const state = createDemoState(now);

  assert.ok(Array.isArray(state.subjects) && state.subjects.length >= 10, 'subjects must have >= 10 items');
  assert.ok(Array.isArray(state.locations) && state.locations.length >= 8, 'locations must have >= 8 items');
  assert.ok(state.systemSettings && typeof state.systemSettings === 'object', 'systemSettings must be an object');
  assert.equal(state.systemSettings.platformFeePercent, 10);
  assert.equal(state.systemSettings.topRatedFeePercent, 7);
  assert.ok(Array.isArray(state.auditLogs) && state.auditLogs.length > 0, 'auditLogs must have items');
  assert.ok(Array.isArray(state.notifications) && state.notifications.length > 0, 'notifications must have items');
  assert.ok(state.wallets && typeof state.wallets === 'object', 'wallets must be keyed object');
  assert.ok(state.wallets['demo-learner']?.availableBalance > 0, 'learner wallet initialized');
  assert.ok(state.wallets['demo-tutor']?.availableBalance > 0, 'tutor wallet initialized');
  assert.ok(Array.isArray(state.escrowTransactions) && state.escrowTransactions.length > 0, 'escrowTransactions initialized');
  assert.ok(Array.isArray(state.classPosts) && state.classPosts.length >= 3, 'classPosts must have >= 3 items');
  assert.ok(Array.isArray(state.proposals) && state.proposals.length >= 3, 'proposals must have >= 3 items');
  assert.ok(Array.isArray(state.chatThreads) && state.chatThreads.length > 0, 'chatThreads initialized');
  assert.ok(Array.isArray(state.messages) && state.messages.length > 0, 'messages initialized');
  assert.ok(Array.isArray(state.safetyLogs) && state.safetyLogs.length > 0, 'safetyLogs initialized');
  assert.ok(Array.isArray(state.twoWayReviews) && state.twoWayReviews.length > 0, 'twoWayReviews initialized');
  assert.ok(Array.isArray(state.payoutRequests) && state.payoutRequests.length > 0, 'payoutRequests initialized');
});

test('OMNI-002: Catalog subjects - add, update, toggleStatus pure actions', () => {
  const state = createDemoState(now);
  const initialCount = state.subjects.length;

  const added = addDomainSubject(state, { name: 'Kỹ năng thuyết trình', category: 'Kỹ năng mềm' });
  assert.equal(added.subjects.length, initialCount + 1);
  const newSub = added.subjects[added.subjects.length - 1];
  assert.equal(newSub.name, 'Kỹ năng thuyết trình');
  assert.equal(newSub.category, 'Kỹ năng mềm');
  assert.equal(newSub.isActive, true);

  const updated = updateDomainSubject(added, newSub.id, { name: 'Thuyết trình chuyên nghiệp' });
  assert.equal(updated.subjects.find((s) => s.id === newSub.id).name, 'Thuyết trình chuyên nghiệp');

  const toggled = toggleDomainSubjectStatus(updated, newSub.id);
  assert.equal(toggled.subjects.find((s) => s.id === newSub.id).isActive, false);

  // Original state must be untouched
  assert.equal(state.subjects.length, initialCount);
});

test('OMNI-003: Catalog locations - add, update, toggleStatus pure actions', () => {
  const state = createDemoState(now);
  const initialCount = state.locations.length;

  const added = addDomainLocation(state, { name: 'Hải Châu', city: 'Đà Nẵng', district: 'Hải Châu' });
  assert.equal(added.locations.length, initialCount + 1);
  const newLoc = added.locations[added.locations.length - 1];
  assert.equal(newLoc.name, 'Hải Châu');
  assert.equal(newLoc.city, 'Đà Nẵng');

  const updated = updateDomainLocation(added, newLoc.id, { name: 'Hải Châu, Đà Nẵng' });
  assert.equal(updated.locations.find((l) => l.id === newLoc.id).name, 'Hải Châu, Đà Nẵng');

  const toggled = toggleDomainLocationStatus(updated, newLoc.id);
  assert.equal(toggled.locations.find((l) => l.id === newLoc.id).isActive, false);
});

test('OMNI-004: System settings and audit logs reducers', () => {
  const state = createDemoState(now);

  const updated = updateDomainSystemSettings(state, { platformFeePercent: 12, autoSuspendThreshold: 4 });
  assert.equal(updated.systemSettings.platformFeePercent, 12);
  assert.equal(updated.systemSettings.autoSuspendThreshold, 4);

  const logged = recordAuditLog(updated, {
    actorId: 'admin-1',
    actorName: 'Admin Test',
    role: 'admin',
    action: 'CHANGE_POLICY',
    details: 'Thay đổi biểu phí',
  });
  assert.equal(logged.auditLogs.length, state.auditLogs.length + 1);
  assert.equal(logged.auditLogs[0].action, 'CHANGE_POLICY');
  assert.equal(logged.auditLogs[0].actorName, 'Admin Test');
});

test('OMNI-005: Notification dispatch and read markers', () => {
  const state = createDemoState(now);

  const added = addDomainNotification(state, {
    recipientId: 'demo-learner',
    type: 'class_accepted',
    title: 'Lớp học đã được ghép!',
    message: 'Gia sư đã xác nhận',
  });
  const notif = added.notifications[0];
  assert.equal(notif.recipientId, 'demo-learner');
  assert.equal(notif.isRead, false);

  const readOne = markNotificationRead(added, notif.id);
  assert.equal(readOne.notifications.find((n) => n.id === notif.id).isRead, true);

  const readAll = markAllNotificationsRead(added, 'demo-learner');
  assert.ok(readAll.notifications.filter((n) => n.recipientId === 'demo-learner').every((n) => n.isRead));
});

test('OMNI-006: Digital wallet deposit and ledger tracking', () => {
  const state = createDemoState(now);
  const learnerId = 'demo-learner';
  const initialBalance = state.wallets[learnerId].availableBalance;

  const deposited = depositToWallet(state, learnerId, 500000, 'vietqr');
  const wallet = deposited.wallets[learnerId];
  assert.equal(wallet.availableBalance, initialBalance + 500000);
  assert.equal(wallet.ledger[0].type, 'deposit_vietqr');
  assert.equal(wallet.ledger[0].amount, 500000);
  assert.equal(wallet.ledger[0].status, 'completed');
});

test('OMNI-007: Escrow hold, disburse, and refund lifecycle', () => {
  const state = createDemoState(now);
  const learnerId = 'demo-learner';
  const tutorId = 'demo-tutor';

  // 1. Hold
  const holdRes = holdEscrowDeposit(state, {
    learnerId,
    tutorId,
    amount: 400000,
    subject: 'Toán 9',
    sessionCount: 2,
    feePerSession: 200000,
  });
  assert.ok(holdRes.escrowId);
  const heldState = holdRes.state;
  assert.equal(heldState.wallets[learnerId].availableBalance, state.wallets[learnerId].availableBalance - 400000);
  assert.equal(heldState.wallets[learnerId].escrowBalance, state.wallets[learnerId].escrowBalance + 400000);
  const escrowRecord = heldState.escrowTransactions.find((e) => e.id === holdRes.escrowId);
  assert.equal(escrowRecord.status, 'held');

  // 2. Disburse (10% fee deducted => 90% = 360,000 paid to tutor)
  const tutorInitial = heldState.wallets[tutorId].availableBalance;
  const disbursedState = disburseEscrowLesson(heldState, holdRes.escrowId);
  assert.equal(disbursedState.wallets[tutorId].availableBalance, tutorInitial + 360000);
  const disbursedRecord = disbursedState.escrowTransactions.find((e) => e.id === holdRes.escrowId);
  assert.equal(disbursedRecord.status, 'disbursed');

  // 3. Test Refund on another hold
  const hold2 = holdEscrowDeposit(heldState, { learnerId, tutorId, amount: 200000, subject: 'Lý 10' });
  const refundedState = refundEscrowLesson(hold2.state, hold2.escrowId, 200000, 'Gia sư vắng mặt');
  assert.equal(refundedState.wallets[learnerId].availableBalance, heldState.wallets[learnerId].availableBalance);
  const refundRecord = refundedState.escrowTransactions.find((e) => e.id === hold2.escrowId);
  assert.equal(refundRecord.status, 'refunded');
  assert.equal(refundRecord.refundReason, 'Gia sư vắng mặt');
});

test('OMNI-008: Tutor payout request and admin processing', () => {
  const state = createDemoState(now);
  const tutorId = 'demo-tutor';
  const tutorInitial = state.wallets[tutorId].availableBalance;

  // Request payout 500,000
  const reqRes = requestTutorPayout(state, {
    tutorId,
    tutorName: 'Trần Gia Bảo',
    amount: 500000,
    bankName: 'MBBank',
    accountNumber: '999988887777',
    accountHolder: 'TRAN GIA BAO',
  });
  assert.ok(reqRes.payoutId);
  const pendingState = reqRes.state;
  assert.equal(pendingState.wallets[tutorId].availableBalance, tutorInitial - 500000);

  // Admin approves
  const approvedState = processPayoutRequest(pendingState, reqRes.payoutId, 'approved', 'Đã chuyển khoản');
  const reqApp = approvedState.payoutRequests.find((p) => p.id === reqRes.payoutId);
  assert.equal(reqApp.status, 'approved');

  // Admin rejects another payout -> restores funds to tutor wallet
  const reqRes2 = requestTutorPayout(approvedState, {
    tutorId,
    amount: 200000,
    bankName: 'ACB',
    accountNumber: '112233',
    accountHolder: 'TRAN GIA BAO',
  });
  const rejectedState = processPayoutRequest(reqRes2.state, reqRes2.payoutId, 'rejected', 'Sai số tài khoản');
  const reqRej = rejectedState.payoutRequests.find((p) => p.id === reqRes2.payoutId);
  assert.equal(reqRej.status, 'rejected');
  assert.equal(rejectedState.wallets[tutorId].availableBalance, approvedState.wallets[tutorId].availableBalance);
});

test('OMNI-009: Marketplace class posting, bidding, and proposal selection', () => {
  const state = createDemoState(now);
  const learner = { ...state.users.find(u => u.id === 'demo-learner'), role: 'learner' };
  const tutor = { ...state.users.find(u => u.id === 'demo-tutor'), role: 'tutor' };

  // 1. Post class
  const postRes = createClassPost(state, learner, {
    subject: 'Hóa học',
    grade: 'Lớp 10',
    budgetMode: 'fixed',
    budgetAmount: 230000,
    learningGoal: 'Luyện thi kiểm tra 1 tiết',
  });
  assert.ok(postRes.postId);
  const postedState = moderateClassPost(postRes.state, postRes.postId, 'approved');
  const newPost = postedState.classPosts.find((p) => p.id === postRes.postId);
  assert.equal(newPost.subject, 'Hóa học');
  assert.equal(newPost.status, 'open');

  // 2. Submit proposal
  const bidRes = submitTutorProposal(postedState, tutor, {
    classPostId: postRes.postId,
    proposedFee: 220000,
    coverNote: 'Em có 2 năm kinh nghiệm dạy Hóa 10.',
  });
  assert.ok(bidRes.proposalId);
  const bidState = bidRes.state;
  assert.equal(bidState.classPosts.find((p) => p.id === postRes.postId).proposalCount, 1);
  const bidItem = bidState.proposals.find((p) => p.id === bidRes.proposalId);
  assert.equal(bidItem.proposedFee, 220000);
  assert.equal(bidItem.netPayout, 198000); // 10% fee

  // 3. Select proposal
  const selectRes = selectTutorProposal(bidState, learner.id, bidRes.proposalId);
  assert.ok(selectRes.state);
  const selectedPost = selectRes.state.classPosts.find((p) => p.id === postRes.postId);
  assert.equal(selectedPost.status, 'awaiting_deposit');
  assert.ok(selectRes.threadId);
  assert.equal(selectRes.state.proposals.find((p) => p.id === bidRes.proposalId).status, 'selected');
});

test('OMNI-010: Direct chat message, custom offer, and in-chat acceptance', () => {
  const state = createDemoState(now);
  const learner = { id: 'demo-learner', fullName: 'Minh Anh', role: 'learner' };
  const tutor = { id: 'demo-tutor', fullName: 'Gia Bảo', role: 'tutor' };
  const threadId = 'thread-001';

  // 1. Send chat message
  const msgState = sendChatMessage(state, threadId, learner, 'Em có rảnh Thứ 7 không?');
  const lastMsg = msgState.messages[msgState.messages.length - 1];
  assert.equal(lastMsg.text, 'Em có rảnh Thứ 7 không?');
  assert.equal(lastMsg.senderId, 'demo-learner');

  // 2. Send custom offer
  const offerState = sendInChatOffer(msgState, threadId, tutor, {
    subject: 'Toán chuyên',
    sessionFee: 300000,
    sessionsCount: 2,
    scheduleSummary: 'Thứ 7 & CN',
  });
  const offerMsg = offerState.messages[offerState.messages.length - 1];
  assert.equal(offerMsg.type, 'custom_offer');
  assert.equal(offerMsg.offerData.totalAmount, 600000);
  assert.equal(offerMsg.offerData.status, 'pending');

  // 3. Respond offer (Accept) -> holds 600,000 into escrow
  const initialAvailable = offerState.wallets['demo-learner'].availableBalance;
  const acceptedState = respondInChatOffer(offerState, offerMsg.id, 'accepted', learner, { proposals: validOfferProposals(offerState, 2, now) }, now);
  const updatedOfferMsg = acceptedState.messages.find((m) => m.id === offerMsg.id);
  assert.equal(updatedOfferMsg.offerData.status, 'accepted');
  assert.equal(acceptedState.wallets['demo-learner'].availableBalance, initialAvailable - 600000);
});

test('OMNI-011: Tutor safety check-in, check-out, and SOS alert', () => {
  const state = createDemoState(now);

  const checkinState = recordSafetyEvent(state, {
    lessonId: 'lesson-can-1',
    tutorId: 'demo-tutor',
    action: 'checkin',
    location: '123 Điện Biên Phủ',
    note: 'Đã tới nhà học viên',
  });
  assert.equal(checkinState.safetyLogs[0].action, 'checkin');
  assert.equal(checkinState.safetyLogs[0].location, '123 Điện Biên Phủ');

  const sosState = triggerLessonSOS(checkinState, {
    lessonId: 'lesson-can-1',
    tutorId: 'demo-tutor',
    note: 'Nghi vấn dấu hiệu bất thường',
    emergencyContact: '113',
  });
  assert.equal(sosState.safetyLogs[0].action, 'sos');
  assert.equal(sosState.notifications[0].type, 'sos_alert');
  assert.equal(sosState.notifications[0].recipientId, 'demo-admin');
});

test('OMNI-012: Progressive lesson cancellation rules', () => {
  const state = createDemoState(now);
  const targetLesson = state.lessons[0];
  const fee = targetLesson.sessionFee || 200000;
  const hold = holdEscrowDeposit(state, { learnerId: 'demo-learner', tutorId: 'demo-tutor', lessonId: targetLesson.id, amount: fee, feePerSession: fee, sessionCount: 1 });
  Object.assign(state, hold.state);

  // Case A: Learner cancels >= 24h -> 100% refund, 0% compensation, availability restored
  const cancel24h = cancelDomainLessonWithPenalty(state, targetLesson.id, 'learner', 26, 'Bận việc gia đình');
  assert.equal(cancel24h.lessons.find((l) => l.id === targetLesson.id).status, 'cancelled');
  assert.ok(cancel24h.availability.some((a) => a.tutorId === targetLesson.tutorId && a.date === targetLesson.date));

  // Case B: Learner cancels 2h-24h -> 50% compensation to tutor wallet
  const tutorProfile = state.profiles.find((p) => p.id === targetLesson.tutorId);
  const tutorWalletKey = state.wallets[targetLesson.tutorId] ? targetLesson.tutorId : (tutorProfile?.accountId || targetLesson.tutorId);
  const tutorBalBefore = state.wallets[tutorWalletKey]?.availableBalance || 0;
  const cancel5h = cancelDomainLessonWithPenalty(state, targetLesson.id, 'learner', 5, 'Kẹt lịch đột xuất');
  const tutorBalAfter = cancel5h.wallets[tutorWalletKey]?.availableBalance;
  assert.equal(tutorBalAfter, tutorBalBefore + Math.round(fee * 0.5));

  // Case C: Learner cancels < 2h -> 100% compensation to tutor wallet
  const cancel1h = cancelDomainLessonWithPenalty(state, targetLesson.id, 'learner', 1, 'Hủy sát giờ');
  assert.equal(cancel1h.wallets[tutorWalletKey]?.availableBalance, tutorBalBefore + fee);

  // Case D: Tutor cancels -> +1 warning to tutor user record
  const tutorUser = state.users.find((u) => u.id === tutorWalletKey || u.id === targetLesson.tutorId || u.tutorProfileId === targetLesson.tutorId);
  const tutorWarnBefore = tutorUser?.warningCount || 0;
  const cancelTutor = cancelDomainLessonWithPenalty(state, targetLesson.id, 'tutor', 10, 'Bị bệnh');
  const tutorWarnAfter = cancelTutor.users.find((u) => u.id === tutorUser.id)?.warningCount;
  assert.equal(tutorWarnAfter, tutorWarnBefore + 1);
});

test('OMNI-013: Two-way review submission', () => {
  const state = createDemoState(now);
  const reviewed = submitTutorReviewOfLearner(state, {
    lessonId: 'lesson-1',
    tutorId: 'demo-tutor',
    learnerId: 'demo-learner',
    studentAttitudeRating: 5,
    punctualityRating: 5,
    comment: 'Học sinh rất chăm ngoan, phụ huynh nhiệt tình.',
  });

  const rev = reviewed.twoWayReviews[0];
  assert.equal(rev.reviewerRole, 'tutor');
  assert.equal(rev.studentAttitudeRating, 5);
  assert.equal(rev.comment, 'Học sinh rất chăm ngoan, phụ huynh nhiệt tình.');
});

test('OMNI-014: Omnichannel actions strictly preserve the 9 requests invariant (BUG-010)', () => {
  const state = createDemoState(now);
  assert.equal(state.requests.length, 9, 'Initial request count must strictly be 9');

  let s = addDomainSubject(state, { name: 'Môn mới' });
  s = addDomainLocation(s, { name: 'Quận mới' });
  s = updateDomainSystemSettings(s, { platformFeePercent: 10 });
  s = depositToWallet(s, 'demo-learner', 100000);
  s = createClassPost(s, { id: 'demo-learner', role: 'learner' }, { subject: 'Lớp mới' }).state;
  s = recordSafetyEvent(s, { action: 'checkin' });

  assert.equal(s.requests.length, 9, 'Omnichannel actions must NEVER mutate or alter the 9 canonical requests');
});
