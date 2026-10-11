import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createDemoState,
  depositToWallet,
  holdEscrowDeposit,
  refundEscrowLesson,
  requestTutorPayout,
  processPayoutRequest,
  recordSafetyEvent,
  triggerLessonSOS,
  cancelDomainLessonWithPenalty,
} from '../src/features/domain/demoDomain.js';

const testClock = new Date('2026-10-05T06:00:00+07:00');

test('WSS-001: Deposit to wallet via VietQR Napas 247 simulation', () => {
  const state = createDemoState(testClock);
  const learnerId = 'demo-learner';
  const initialBalance = state.wallets[learnerId].availableBalance;
  const depositAmount = 1500000;

  const deposited = depositToWallet(state, learnerId, depositAmount, 'vietqr');
  const wallet = deposited.wallets[learnerId];

  assert.equal(wallet.availableBalance, initialBalance + depositAmount, 'Available balance must increase by deposit amount');
  assert.ok(wallet.ledger.length > 0, 'Ledger must have transaction entries');

  const latestTx = wallet.ledger[0];
  assert.equal(latestTx.type, 'deposit_vietqr', 'Transaction type must be deposit_vietqr');
  assert.equal(latestTx.amount, depositAmount, 'Transaction amount must match');
  assert.equal(latestTx.status, 'completed', 'Transaction status must be completed');

  // Verify pure reducer immutability
  assert.equal(state.wallets[learnerId].availableBalance, initialBalance, 'Original state must remain untouched');
});

test('WSS-002: Tutor payout request creation, validation, and balance deduction', () => {
  const state = createDemoState(testClock);
  const tutorId = 'demo-tutor';
  const initialBalance = state.wallets[tutorId].availableBalance;
  const payoutAmount = 500000;

  // 1. Successful payout request
  const reqRes = requestTutorPayout(state, {
    tutorId,
    tutorName: 'Trần Gia Bảo',
    amount: payoutAmount,
    bankName: 'MBBank',
    accountNumber: '0900000001',
    accountHolder: 'TRAN GIA BAO',
  });

  assert.ok(reqRes.payoutId, 'Payout ID must be generated');
  const pendingState = reqRes.state;
  const tutorWallet = pendingState.wallets[tutorId];

  assert.equal(tutorWallet.availableBalance, initialBalance - payoutAmount, 'Balance must be deducted immediately');

  const latestTx = tutorWallet.ledger[0];
  assert.equal(latestTx.type, 'payout_hold', 'Transaction type must be payout_hold');
  assert.equal(latestTx.amount, -payoutAmount, 'Transaction amount must be negative deduction');
  assert.equal(latestTx.status, 'pending', 'Transaction status must be pending');

  const payoutReq = pendingState.payoutRequests.find((p) => p.id === reqRes.payoutId);
  assert.ok(payoutReq, 'Payout request record must exist in state.payoutRequests');
  assert.equal(payoutReq.status, 'pending', 'Payout status must be pending');
  assert.equal(payoutReq.amount, payoutAmount);
  assert.equal(payoutReq.bankName, 'MBBank');
  assert.equal(payoutReq.accountNumber, '0900000001');

  // 2. Reject payout when amount exceeds available balance
  const excessiveReq = requestTutorPayout(state, {
    tutorId,
    amount: initialBalance + 9999999,
    bankName: 'MBBank',
    accountNumber: '0900000001',
    accountHolder: 'TRAN GIA BAO',
  });
  assert.ok(excessiveReq.error, 'Must reject withdrawal exceeding available balance');
});

test('WSS-003: Cancellation progressive penalty calculation across 26h, 5h, 1h', () => {
  let state = createDemoState(testClock);
  const targetLesson = state.lessons.find(l => l.status === 'confirmed');
  const fee = targetLesson.sessionFee;
  targetLesson.learnerId = 'demo-learner';
  const held = holdEscrowDeposit(state,{learnerId:'demo-learner',tutorId:'demo-tutor',lessonId:targetLesson.id,amount:fee,subject:targetLesson.subject,sessionCount:1,feePerSession:fee});
  assert.ok(held.state, 'Penalty scenarios must have real linked escrow funding');
  state=held.state;
  const tutorId = targetLesson.tutorId;
  const tutorWalletKey = state.wallets[tutorId] ? tutorId : 'demo-tutor';

  // Case A: 26 hours (> 24h) -> 100% refund to learner, 0% penalty, tutor balance unchanged
  const tutorBalBeforeA = state.wallets[tutorWalletKey]?.availableBalance || 0;
  const cancel26h = cancelDomainLessonWithPenalty(state, targetLesson.id, 'learner', 26, 'Bận việc cá nhân trước 1 ngày');
  const cancelledLessonA = cancel26h.lessons.find((l) => l.id === targetLesson.id);
  assert.equal(cancelledLessonA.status, 'cancelled');
  assert.equal(cancel26h.wallets[tutorWalletKey]?.availableBalance, tutorBalBeforeA, 'Tutor receives 0 compensation when cancelled >= 24h');
  assert.ok(cancel26h.availability.some((a) => a.tutorId === tutorId && a.date === targetLesson.date), 'Availability is restored when cancelled >= 24h');

  // Case B: 5 hours (2h - 24h) -> 50% refund, 50% compensation to tutor
  const tutorBalBeforeB = state.wallets[tutorWalletKey]?.availableBalance || 0;
  const cancel5h = cancelDomainLessonWithPenalty(state, targetLesson.id, 'learner', 5, 'Kẹt xe đột xuất');
  const tutorBalAfterB = cancel5h.wallets[tutorWalletKey]?.availableBalance || 0;
  const expectedComp50 = Math.round(fee * 0.5);
  assert.equal(tutorBalAfterB, tutorBalBeforeB + expectedComp50, 'Tutor receives 50% compensation when cancelled within 2-24h');
  const compTxB = cancel5h.wallets[tutorWalletKey].ledger[0];
  assert.equal(compTxB.type, 'cancellation_compensation');
  assert.equal(compTxB.amount, expectedComp50);

  // Case C: 1 hour (< 2h) -> 0% refund, 100% compensation to tutor
  const tutorBalBeforeC = state.wallets[tutorWalletKey]?.availableBalance || 0;
  const cancel1h = cancelDomainLessonWithPenalty(state, targetLesson.id, 'learner', 1, 'Hủy sát giờ học');
  const tutorBalAfterC = cancel1h.wallets[tutorWalletKey]?.availableBalance || 0;
  assert.equal(tutorBalAfterC, tutorBalBeforeC + fee, 'Tutor receives 100% compensation when cancelled < 2h');
  const compTxC = cancel1h.wallets[tutorWalletKey].ledger[0];
  assert.equal(compTxC.type, 'cancellation_compensation');
  assert.equal(compTxC.amount, fee);
});

test('WSS-004: Safety event logs (moving, checkin, checkout) and SOS alert trigger', () => {
  const state = createDemoState(testClock);
  const lessonId = 'lesson-safe-001';
  const tutorId = 'demo-tutor';

  // 1. Log moving
  const movingState = recordSafetyEvent(state, {
    lessonId,
    tutorId,
    action: 'moving',
    location: 'Quận Bình Thạnh',
    note: 'Gia sư bắt đầu di chuyển',
  });
  assert.equal(movingState.safetyLogs[0].action, 'moving');
  assert.equal(movingState.safetyLogs[0].location, 'Quận Bình Thạnh');

  // 2. Log check-in
  const checkinState = recordSafetyEvent(movingState, {
    lessonId,
    tutorId,
    action: 'checkin',
    location: '123 Điện Biên Phủ, P.15, Bình Thạnh',
    note: 'Gia sư đã check-in an toàn tại điểm dạy',
  });
  assert.equal(checkinState.safetyLogs[0].action, 'checkin');

  // 3. Log check-out
  const checkoutState = recordSafetyEvent(checkinState, {
    lessonId,
    tutorId,
    action: 'checkout',
    location: '123 Điện Biên Phủ, P.15, Bình Thạnh',
    note: 'Gia sư ra về an toàn',
  });
  assert.equal(checkoutState.safetyLogs[0].action, 'checkout');

  // 4. Trigger SOS Emergency alert
  const sosState = triggerLessonSOS(checkoutState, {
    lessonId,
    tutorId,
    note: 'BÁO ĐỘNG SOS KHẨN CẤP: Nghi vấn tình huống nguy hiểm',
    emergencyContact: '113',
  });
  assert.equal(sosState.safetyLogs[0].action, 'sos');
  assert.equal(sosState.safetyLogs[0].emergencyContact, '113');

  // SOS notification must notify demo-admin with high priority
  const adminAlert = sosState.notifications.find((n) => n.type === 'sos_alert');
  assert.ok(adminAlert, 'Admin SOS alert notification must be created');
  assert.equal(adminAlert.recipientId, 'demo-admin');
  assert.ok(adminAlert.title.includes('SOS KHẨN CẤP'));
});

test('WSS-005: BUG-010 9 requests invariant is strictly preserved across all operations', () => {
  let state = createDemoState(testClock);
  assert.equal(state.requests.length, 9, 'Initial request count must strictly be 9 (BUG-010 invariant)');

  // 1. Wallet deposit
  state = depositToWallet(state, 'demo-learner', 500000, 'vietqr');
  assert.equal(state.requests.length, 9, 'Must preserve 9 requests after deposit');

  // 2. Tutor payout request
  const payoutRes = requestTutorPayout(state, {
    tutorId: 'demo-tutor',
    amount: 100000,
    bankName: 'MBBank',
    accountNumber: '112233',
    accountHolder: 'TRAN GIA BAO',
  });
  state = payoutRes.state;
  assert.equal(state.requests.length, 9, 'Must preserve 9 requests after payout request');

  // 3. Process payout
  state = processPayoutRequest(state, payoutRes.payoutId, 'approved', 'Đã chuyển tiền');
  assert.equal(state.requests.length, 9, 'Must preserve 9 requests after payout processing');

  // 4. Cancel lesson at 26h
  state = cancelDomainLessonWithPenalty(state, state.lessons[0].id, 'learner', 26, 'Lý do cá nhân');
  assert.equal(state.requests.length, 9, 'Must preserve 9 requests after 26h cancellation');

  // 5. Cancel lesson at 5h
  if (state.lessons[1]) {
    state = cancelDomainLessonWithPenalty(state, state.lessons[1].id, 'learner', 5, 'Lý do cá nhân');
    assert.equal(state.requests.length, 9, 'Must preserve 9 requests after 5h cancellation');
  }

  // 6. Record safety events
  state = recordSafetyEvent(state, { lessonId: 'l-test', tutorId: 'demo-tutor', action: 'checkin' });
  assert.equal(state.requests.length, 9, 'Must preserve 9 requests after safety checkin');

  // 7. Trigger SOS alert
  state = triggerLessonSOS(state, { lessonId: 'l-test', tutorId: 'demo-tutor', emergencyContact: '113' });
  assert.equal(state.requests.length, 9, 'Must preserve 9 requests after trigger SOS');
});
