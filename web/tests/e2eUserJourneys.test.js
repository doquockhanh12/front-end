import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createDemoState,
  createClassPost,
  moderateClassPost,
  submitTutorProposal,
  selectTutorProposal,
  sendChatMessage,
  sendInChatOffer,
  respondInChatOffer,
  depositToWallet,
  holdEscrowDeposit,
  disburseEscrowLesson,
  refundEscrowLesson,
  requestTutorPayout,
  processPayoutRequest,
  recordSafetyEvent,
  triggerLessonSOS,
  cancelDomainLessonWithPenalty,
  submitTutorReviewOfLearner,
} from '../src/features/domain/demoDomain.js';
import { selectAdminStats, selectAdminOverview } from '../src/features/domain/useAdminDomain.js';
import { getBookableRanges, isFutureSession } from '../src/data/tutorSchedule.js';
import { bookableSessions } from '../src/features/learner/profileSelection.js';

const referenceDate = new Date('2026-10-06T08:00:00+07:00');

test('E2E-J1: Multi-Account Journey 1 – Class Posting, Admin Moderation, Dual Bidding, Chat Negotiation, and In-Chat Escrow Hold', () => {
  let state = createDemoState(referenceDate);
  const initialRequestsCount = state.requests.length;
  const initialRequestIds = state.requests.map(r=>r.id);
  assert.equal(initialRequestsCount, 9, 'Initial canonical requests must be 9');

  // --- Step 1: Learner (demo-learner) posts a class ---
  const learner = { id: 'demo-learner', fullName: 'Nguyễn Minh Anh', role: 'learner' };
  const postResult = createClassPost(state, learner, {
    subject: 'Toán',
    grade: 'Lớp 10',
    format: 'offline',
    location: 'Bình Thạnh, TP. Hồ Chí Minh',
    address: '456 Lê Quang Định, P.11, Bình Thạnh',
    scheduleDesc: 'Thứ 3 và Thứ 5 (18:30 - 20:00)',
    budgetMode: 'fixed',
    budgetAmount: 300000,
    trialLessonRequested: true,
    learningGoal: 'Luyện thi chuyển cấp và bồi dưỡng đại số nâng cao',
  });
  assert.ok(postResult.postId, 'Class post must be created with ID');
  state = postResult.state;
  const createdPost = state.classPosts.find((cp) => cp.id === postResult.postId);
  assert.equal(createdPost.status, 'open');
  assert.equal(createdPost.budgetAmount, 300000);
  assert.equal(createdPost.trialLessonRequested, true);

  // --- Step 2: Admin (demo-admin) inspects and moderates class post ---
  state = moderateClassPost(state, postResult.postId, 'approved', 'Tin đăng chuẩn mực, học phí hợp lý.');
  const moderatedPost = state.classPosts.find((cp) => cp.id === postResult.postId);
  assert.equal(moderatedPost.moderationStatus, 'approved');

  // --- Step 3: Tutor 1 (demo-tutor - Standard 10% fee) submits Proposal ---
  const tutor1 = {
    id: 'demo-tutor',
    role: 'tutor',
    fullName: 'Trần Gia Bảo',
    university: 'ĐH Sư phạm TP.HCM',
    rating: 4.9,
    verified: true,
    tier: 'active',
  };
  const prop1Result = submitTutorProposal(state, tutor1, {
    classPostId: postResult.postId,
    proposedFee: 300000,
    coverNote: 'Chào phụ huynh, em có 3 năm kinh nghiệm luyện thi vào 10 chuyên.',
  });
  assert.ok(prop1Result.proposalId, 'Proposal 1 created');
  state = prop1Result.state;
  const prop1 = state.proposals.find((p) => p.id === prop1Result.proposalId);
  assert.equal(prop1.proposedFee, 300000);
  assert.equal(prop1.platformFee, 30000, 'Standard 10% platform fee = 30k');
  assert.equal(prop1.netPayout, 270000, 'Tutor 1 net payout = 270k');

  // --- Step 4: Tutor 2 (tutor-thu-trang - Top-Rated 7% fee) submits competitive Proposal ---
  const tutor2 = {
    id: 'tutor-thu-trang',
    role: 'tutor',
    fullName: 'Lê Thu Trang',
    university: 'ĐH Ngoại Thương',
    rating: 5.0,
    verified: true,
    tier: 'top_rated',
  };
  // Controlled runtime setup exercises the real tier rule, rather than trusting
  // a presentation-only account tier flag. Public fixture values stay untouched.
  const topProfile=state.profiles.find(p=>p.id==='thu-trang');
  topProfile.accountId=tutor2.id;topProfile.rating=5;topProfile.punctualityRate=99;
  state.lessons.push(...Array.from({length:30},(_,i)=>({id:`test-tier-completed-${i}`,tutorId:topProfile.id,status:'completed',date:'2026-09-01'})));
  const prop2Result = submitTutorProposal(state, tutor2, {
    classPostId: postResult.postId,
    proposedFee: 280000,
    coverNote: 'Em là gia sư Top-Rated đạt giải Nhì Toán quốc gia.',
  });
  assert.ok(prop2Result.proposalId, 'Proposal 2 created');
  state = prop2Result.state;
  const prop2 = state.proposals.find((p) => p.id === prop2Result.proposalId);
  assert.equal(prop2.proposedFee, 280000);
  assert.equal(prop2.platformFee, 19600, 'Top-Rated 7% fee = 19.6k');
  assert.equal(prop2.netPayout, 260400, 'Tutor 2 net payout = 260.4k');

  // Assert post now has proposalCount = 2
  const updatedPost = state.classPosts.find((cp) => cp.id === postResult.postId);
  assert.equal(updatedPost.proposalCount, 2);

  // --- Step 5: Learner opens chat with Tutor 1 to negotiate ---
  const selected=selectTutorProposal(state,learner.id,prop1Result.proposalId);
  assert.ok(selected.threadId,'Selecting a candidate opens its private negotiation thread');
  state=selected.state;
  assert.equal(state.classPosts.find(p=>p.id===postResult.postId).status,'awaiting_deposit','Selection waits for escrow, not an already matched class');
  const threadId = selected.threadId;
  state = sendChatMessage(state, threadId, learner, 'Chào thầy Gia Bảo, em muốn trao đổi lịch học cụ thể trước khi cọc.');
  const lastMsg = state.messages[state.messages.length - 1];
  assert.equal(lastMsg.senderId, learner.id);
  assert.equal(lastMsg.text, 'Chào thầy Gia Bảo, em muốn trao đổi lịch học cụ thể trước khi cọc.');

  // --- Step 6: Tutor sends Custom Offer Card in chat (4 sessions * 300k = 1.2M Escrow) ---
  const proposals=bookableSessions(getBookableRanges(state.availability,state.lessons,'quoc-bao'),45).filter(p=>isFutureSession(p,referenceDate)).slice(0,4);
  assert.equal(proposals.length,4,'Four concrete future bookable sessions are required');
  state = sendInChatOffer(state, threadId, tutor1, {
    subject: 'Toán 10 Nâng cao',
    grade: 'Lớp 10',
    sessionsCount: 4,
    sessionFee: 300000,
    proposals,
    scheduleDesc: 'Thứ 3 và Thứ 5 hàng tuần',
  });
  const offerMsg = state.messages.find((m) => m.type === 'custom_offer' && m.offerData.totalAmount === 1200000);
  assert.ok(offerMsg, 'Custom offer message must exist in chat');
  assert.equal(offerMsg.offerData.status, 'pending');

  // --- Step 7: Learner deposits funds via VietQR Napas 247 ---
  state = depositToWallet(state, learner.id, 1500000, 'vietqr');
  assert.ok(state.wallets[learner.id].availableBalance >= 1500000, 'Learner wallet must have >= 1.5M');

  // --- Step 8: Learner clicks "Đồng ý & Đặt cọc ngay" on Custom Offer ---
  state = respondInChatOffer(state, offerMsg.id, 'accepted', learner, {proposals}, referenceDate);
  const acceptedOfferMsg = state.messages.find((m) => m.id === offerMsg.id);
  assert.equal(acceptedOfferMsg.offerData.status, 'accepted');

  // Assert Escrow deposit hold: 1.2M held in Escrow
  assert.ok(state.wallets[learner.id].escrowBalance >= 1200000, 'Escrow balance must be updated');
  const heldEscrowTx = state.escrowTransactions.find((e) => e.amount === 1200000 && e.status === 'held');
  assert.ok(heldEscrowTx, 'Escrow transaction held for 1.2M must exist');

  // --- Step 9: Learner formally selects Tutor 1's Proposal on Marketplace ---
  const finalPost = state.classPosts.find((cp) => cp.id === postResult.postId);
  assert.equal(finalPost.status, 'matched', 'Class post must transition to matched');
  const finalProp1 = state.proposals.find((p) => p.id === prop1Result.proposalId);
  const finalProp2 = state.proposals.find((p) => p.id === prop2Result.proposalId);
  assert.equal(finalProp1.status, 'matched', 'Chosen proposal must be linked after escrow acceptance');
  assert.equal(finalProp2.status, 'rejected', 'Other proposal must be rejected');

  // Strict invariant BUG-010 check
  assert.equal(state.requests.length, initialRequestsCount+1, 'Accepted offer creates one new shared request');
  assert.deepEqual(state.requests.filter(r=>initialRequestIds.includes(r.id)).map(r=>r.id),initialRequestIds,'All nine approved seed requests remain');
  assert.equal(state.lessons.filter(l=>l.requestId===heldEscrowTx.requestId).length,4,'Four linked canonical lessons are created');
});

test('E2E-J2: Multi-Account Journey 2 – Tutor Safety Shield Tracking, Lesson Completion, Escrow Disbursement, and Bank Payout', () => {
  let state = createDemoState(referenceDate);
  const tutorId = 'demo-tutor';
  const learnerId = 'demo-learner';

  // --- Step 1: Tutor Safety Shield Progressive Actions ---
  state = recordSafetyEvent(state, {
    lessonId: 'l-e2e-1',
    tutorId,
    action: 'moving',
    location: 'Đang di chuyển từ Q.Phú Nhuận sang Q.Bình Thạnh',
    note: 'Bắt đầu di chuyển bằng xe máy',
  });
  state = recordSafetyEvent(state, {
    lessonId: 'l-e2e-1',
    tutorId,
    action: 'checkin',
    location: '456 Lê Quang Định, P.11, Bình Thạnh',
    note: 'Đã đến nhà phụ huynh an toàn, bắt đầu buổi dạy',
  });

  const tutorSafetyLogs = state.safetyLogs.filter((s) => s.tutorId === tutorId);
  assert.equal(tutorSafetyLogs.length >= 2, true);
  assert.equal(tutorSafetyLogs[0].action, 'checkin');
  assert.equal(tutorSafetyLogs[1].action, 'moving');

  // --- Step 2: Establish Escrow for session (300k) and Disburse upon completion ---
  state = depositToWallet(state, learnerId, 500000, 'vietqr');
  const holdRes = holdEscrowDeposit(state, {
    learnerId,
    tutorId,
    amount: 300000,
    subject: 'Toán lớp 10',
    sessionCount: 1,
    feePerSession: 300000,
  });
  state = holdRes.state;
  const escrowId = holdRes.escrowId;

  const initialTutorBalance = state.wallets[tutorId]?.availableBalance || 0;

  // Disburse Escrow: 10% platform fee (30k), Tutor receives 90% (270k)
  state = disburseEscrowLesson(state, escrowId);
  const finalTutorBalance = state.wallets[tutorId].availableBalance;
  assert.equal(finalTutorBalance, initialTutorBalance + 270000, 'Tutor receives 270k net');

  const disbursedTx = state.escrowTransactions.find((e) => e.id === escrowId);
  assert.equal(disbursedTx.status, 'disbursed');

  // Tutor check-out safe
  state = recordSafetyEvent(state, {
    lessonId: 'l-e2e-1',
    tutorId,
    action: 'checkout',
    location: '456 Lê Quang Định, P.11, Bình Thạnh',
    note: 'Buổi học kết thúc tốt đẹp, đã ra về an toàn',
  });
  assert.equal(state.safetyLogs[0].action, 'checkout');

  // --- Step 3: Two-Way Review Exchange ---
  state = submitTutorReviewOfLearner(state, {
    lessonId: 'l-e2e-1',
    tutorId,
    learnerId,
    studentAttitudeRating: 5,
    punctualityRating: 5,
    comment: 'Học sinh tiếp thu rất nhanh, phụ huynh nhiệt tình hỗ trợ.',
  });
  const review = state.twoWayReviews.find((r) => r.lessonId === 'l-e2e-1');
  assert.ok(review, 'Two-way review must be persisted');
  assert.equal(review.studentAttitudeRating, 5);
  assert.equal(review.punctualityRating, 5);

  // --- Step 4: Tutor requests bank withdrawal of 250k ---
  const payoutRes = requestTutorPayout(state, {
    tutorId,
    tutorName: 'Trần Gia Bảo',
    amount: 250000,
    bankName: 'MBBank',
    accountNumber: '0987654321',
    accountHolder: 'TRAN GIA BAO',
  });
  assert.ok(payoutRes.payoutId, 'Payout request created');
  state = payoutRes.state;
  assert.equal(state.wallets[tutorId].availableBalance, finalTutorBalance - 250000, 'Tutor balance deducted on withdrawal hold');

  // --- Step 5: Admin approves Payout Request ---
  state = processPayoutRequest(state, payoutRes.payoutId, 'approved', 'Đã chuyển khoản qua Napas 247');
  const approvedPayout = state.payoutRequests.find((p) => p.id === payoutRes.payoutId);
  assert.equal(approvedPayout.status, 'approved');

  // Strict invariant BUG-010 check
  assert.equal(state.requests.length, 9, 'Requests count strictly unchanged');
});

test('E2E-J3: Multi-Account Journey 3 – Emergency SOS Alert, Progressive Late Cancellation Penalties, and One-Click 100% Refund', () => {
  let state = createDemoState(referenceDate);
  const tutorId = 'demo-tutor';
  const learnerId = 'demo-learner';

  // --- Scenario A: Emergency SOS Alert triggered by Tutor ---
  state = triggerLessonSOS(state, {
    lessonId: 'lesson-sos-999',
    tutorId,
    note: 'Gia sư phát hiện dấu hiệu lừa đảo và bị đe dọa tại địa điểm dạy.',
    emergencyContact: 'Hotline 113 & 0909123456',
  });

  // Verify SOS log & Admin high-priority notification
  const sosLog = state.safetyLogs.find((s) => s.action === 'sos');
  assert.ok(sosLog, 'SOS log must exist');
  const adminSosNotif = state.notifications.find((n) => n.type === 'sos_alert');
  assert.ok(adminSosNotif, 'Admin notification must be generated');

  // Verify Admin Dashboard reactive SOS detection
  const overview = selectAdminOverview(state);
  assert.equal(overview.hasSosAlert, true, 'Admin overview must flag active SOS');
  assert.equal(overview.activeSosAlert.tutorId, tutorId);

  // --- Scenario B: Progressive Cancellation Penalties ---
  // Seed a test lesson
  const sampleLessonId = 'lesson-penalty-test';
  state.lessons = [
    {
      id: sampleLessonId,
      tutorId: 'quoc-bao', // canonical tutor profile
      learnerId,
      learner: 'Nguyễn Minh Anh',
      date: '2026-10-07',
      start: 1140,
      end: 1230,
      sessionFee: 200000,
      status: 'confirmed',
    },
    ...state.lessons,
  ];
  const fundedPenalty=holdEscrowDeposit(state,{learnerId,tutorId,lessonId:sampleLessonId,amount:200000,subject:'Toán lớp 10',sessionCount:1,feePerSession:200000});
  assert.ok(fundedPenalty.state,'Cancellation compensation must settle real linked escrow');
  state=fundedPenalty.state;

  // Case 1: Cancel > 24h before -> 100% refund, 0 penalty
  const sAfter26h = cancelDomainLessonWithPenalty(state, sampleLessonId, 'learner', 26, 'Bận việc gia đình');
  const tutorWallet26h = sAfter26h.wallets['quoc-bao'] || sAfter26h.wallets['demo-tutor'];
  assert.equal(tutorWallet26h?.ledger?.some((l) => l.description?.includes('Bồi thường')), false, 'No compensation when canceled >24h');

  // Case 2: Cancel 5h before (2h-24h window) -> 50% compensation to tutor (100k)
  const sAfter5h = cancelDomainLessonWithPenalty(state, sampleLessonId, 'learner', 5, 'Học sinh bị cảm sốt');
  const tutorWallet5h = sAfter5h.wallets['demo-tutor'];
  const comp5hTx = tutorWallet5h.ledger.find((l) => l.amount === 100000 && l.type === 'cancellation_compensation');
  assert.ok(comp5hTx, 'Tutor must receive 50% compensation (100k)');

  // Case 3: Cancel 1h before (<2h window) -> 100% compensation to tutor (200k)
  const sAfter1h = cancelDomainLessonWithPenalty(state, sampleLessonId, 'learner', 1, 'Học sinh bùng học sát giờ');
  const tutorWallet1h = sAfter1h.wallets['demo-tutor'];
  const comp1hTx = tutorWallet1h.ledger.find((l) => l.amount === 200000 && l.type === 'cancellation_compensation');
  assert.ok(comp1hTx, 'Tutor must receive 100% compensation (200k)');

  // --- Scenario C: One-Click 100% Incident Refund (Gia sư vắng mặt / No-show) ---
  state = depositToWallet(state, learnerId, 300000, 'vietqr');
  const holdEsc = holdEscrowDeposit(state, {
    learnerId,
    tutorId,
    amount: 300000,
    subject: 'Toán lớp 10',
    sessionCount: 1,
    feePerSession: 300000,
  });
  state = holdEsc.state;
  const activeEscrowId = holdEsc.escrowId;

  const learnerPreRefundBalance = state.wallets[learnerId].availableBalance;

  // Learner claims 100% Escrow Refund
  state = refundEscrowLesson(state, activeEscrowId, 300000, 'Gia sư không đến buổi học (No-show)');
  const learnerPostRefundBalance = state.wallets[learnerId].availableBalance;
  assert.equal(learnerPostRefundBalance, learnerPreRefundBalance + 300000, 'Learner receives full 300k refund');

  const refundedEscrow = state.escrowTransactions.find((e) => e.id === activeEscrowId);
  assert.equal(refundedEscrow.status, 'refunded');
  assert.equal(refundedEscrow.refundReason, 'Gia sư không đến buổi học (No-show)');

  // Strict invariant BUG-010 check
  assert.equal(state.requests.length, 9, 'Requests count strictly unchanged');
});

test('E2E-J4: Multi-Account Journey 4 – End-to-End Mathematical Consistency & BUG-010 Zero Regression Audit', () => {
  const state = createDemoState(referenceDate);

  // 1. Audit BUG-010 Invariant
  assert.equal(state.requests.length, 9, 'Canonical seed requests MUST BE EXACTLY 9');
  const canonicalRequestIds = ['demo-01', 'demo-02', 'demo-03', 'req-1', 'req-2', 'req-3', 'ref-1', 'ref-2', 'ref-3'];
  assert.deepEqual(state.requests.map((r) => r.id), canonicalRequestIds);

  // 2. Audit Omnichannel Collections Presence
  assert.ok(Array.isArray(state.subjects), 'subjects exists');
  assert.ok(Array.isArray(state.locations), 'locations exists');
  assert.ok(typeof state.systemSettings === 'object', 'systemSettings exists');
  assert.ok(Array.isArray(state.auditLogs), 'auditLogs exists');
  assert.ok(Array.isArray(state.notifications), 'notifications exists');
  assert.ok(typeof state.wallets === 'object', 'wallets exists');
  assert.ok(Array.isArray(state.escrowTransactions), 'escrowTransactions exists');
  assert.ok(Array.isArray(state.classPosts), 'classPosts exists');
  assert.ok(Array.isArray(state.proposals), 'proposals exists');
  assert.ok(Array.isArray(state.chatThreads), 'chatThreads exists');
  assert.ok(Array.isArray(state.messages), 'messages exists');
  assert.ok(Array.isArray(state.safetyLogs), 'safetyLogs exists');
  assert.ok(Array.isArray(state.twoWayReviews), 'twoWayReviews exists');
  assert.ok(Array.isArray(state.payoutRequests), 'payoutRequests exists');

  // 3. Audit Admin Metrics selector
  const stats = selectAdminStats(state);
  assert.equal(typeof stats.escrowBalance, 'number');
  assert.equal(typeof stats.activeClassPostsCount, 'number');
  assert.equal(typeof stats.pendingPayoutsCount, 'number');
  assert.equal(typeof stats.hasSosAlert, 'boolean');
});
