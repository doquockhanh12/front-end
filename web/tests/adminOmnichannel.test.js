import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createDemoState,
  addDomainSubject,
  updateDomainSubject,
  toggleDomainSubjectStatus,
  addDomainLocation,
  updateDomainLocation,
  toggleDomainLocationStatus,
  updateDomainSystemSettings,
  recordAuditLog,
  moderateClassPost,
  processPayoutRequest,
  triggerLessonSOS,
  createClassPost,
} from '../src/features/domain/demoDomain.js';
import {
  selectAdminStats,
  selectAdminOverview,
  selectSosAlerts,
} from '../src/features/domain/useAdminDomain.js';

const now = new Date('2026-10-05T08:00:00+07:00');

// ============================================================================
// 1. ADMIN CATALOG ACTIONS (SUBJECTS & LOCATIONS)
// ============================================================================

test('ADM-OMNI-001: addDomainSubject creates subject with unique id and active status', () => {
  const state = createDemoState(now);
  const initialCount = state.subjects.length;

  const next = addDomainSubject(state, {
    name: 'Tiếng Nhật N3',
    category: 'Ngoại ngữ',
  });

  assert.equal(next.subjects.length, initialCount + 1, 'Subjects count must increase by 1');
  const created = next.subjects.find((s) => s.name === 'Tiếng Nhật N3');
  assert.ok(created, 'Newly created subject must exist');
  assert.ok(created.id.startsWith('sub-'), 'Subject ID must start with prefix sub-');
  assert.equal(created.category, 'Ngoại ngữ');
  assert.equal(created.isActive, true, 'New subject must default to active');
  assert.notEqual(state, next, 'State must be immutably updated');
});

test('ADM-OMNI-002: updateDomainSubject modifies subject attributes purely', () => {
  const state = createDemoState(now);
  const targetId = state.subjects[0].id;
  const originalName = state.subjects[0].name;

  const next = updateDomainSubject(state, targetId, {
    name: `${originalName} (Nâng cao)`,
    category: 'Chuyên sâu',
  });

  const updated = next.subjects.find((s) => s.id === targetId);
  assert.equal(updated.name, `${originalName} (Nâng cao)`);
  assert.equal(updated.category, 'Chuyên sâu');
  assert.equal(state.subjects[0].name, originalName, 'Original state must remain untouched');
});

test('ADM-OMNI-003: toggleDomainSubjectStatus flips isActive flag', () => {
  const state = createDemoState(now);
  const targetId = state.subjects[0].id;
  const initialActive = state.subjects[0].isActive;

  const toggledOff = toggleDomainSubjectStatus(state, targetId);
  assert.equal(
    toggledOff.subjects.find((s) => s.id === targetId).isActive,
    !initialActive,
    'Status should invert to inactive'
  );

  const toggledOn = toggleDomainSubjectStatus(toggledOff, targetId);
  assert.equal(
    toggledOn.subjects.find((s) => s.id === targetId).isActive,
    initialActive,
    'Status should revert to active'
  );
});

test('ADM-OMNI-004: addDomainLocation creates location with unique id and active status', () => {
  const state = createDemoState(now);
  const initialCount = state.locations.length;

  const next = addDomainLocation(state, {
    name: 'Quận Ba Đình',
    city: 'Hà Nội',
    district: 'Ba Đình',
  });

  assert.equal(next.locations.length, initialCount + 1, 'Locations count must increase by 1');
  const created = next.locations.find((l) => l.name === 'Quận Ba Đình');
  assert.ok(created, 'Newly created location must exist');
  assert.ok(created.id.startsWith('loc-'), 'Location ID must start with prefix loc-');
  assert.equal(created.city, 'Hà Nội');
  assert.equal(created.district, 'Ba Đình');
  assert.equal(created.isActive, true, 'New location must default to active');
});

test('ADM-OMNI-005: updateDomainLocation modifies location attributes purely', () => {
  const state = createDemoState(now);
  const targetId = state.locations[0].id;

  const next = updateDomainLocation(state, targetId, {
    name: 'Quận 1 - Trung tâm',
    district: 'Quận 1',
  });

  const updated = next.locations.find((l) => l.id === targetId);
  assert.equal(updated.name, 'Quận 1 - Trung tâm');
  assert.notEqual(state.locations[0].name, updated.name);
});

test('ADM-OMNI-006: toggleDomainLocationStatus flips isActive flag', () => {
  const state = createDemoState(now);
  const targetId = state.locations[0].id;
  const initialActive = state.locations[0].isActive;

  const toggledOff = toggleDomainLocationStatus(state, targetId);
  assert.equal(
    toggledOff.locations.find((l) => l.id === targetId).isActive,
    !initialActive
  );

  const toggledOn = toggleDomainLocationStatus(toggledOff, targetId);
  assert.equal(
    toggledOn.locations.find((l) => l.id === targetId).isActive,
    initialActive
  );
});

// ============================================================================
// 2. ADMIN SYSTEM SETTINGS & AUDIT LOG RECORDING
// ============================================================================

test('ADM-OMNI-007: updateDomainSystemSettings applies configuration patches immutably', () => {
  const state = createDemoState(now);

  const next = updateDomainSystemSettings(state, {
    platformFeePercent: 12,
    topRatedFeePercent: 8,
    autoSuspendThreshold: 4,
  });

  assert.equal(next.systemSettings.platformFeePercent, 12);
  assert.equal(next.systemSettings.topRatedFeePercent, 8);
  assert.equal(next.systemSettings.autoSuspendThreshold, 4);
  assert.equal(state.systemSettings.platformFeePercent, 10, 'Original state should not mutate');
});

test('ADM-OMNI-008: recordAuditLog captures administrative actions and timestamps', () => {
  const state = createDemoState(now);
  const initialLogCount = state.auditLogs.length;

  const next = recordAuditLog(state, {
    actorId: 'admin-001',
    actorName: 'Tổng Quản trị',
    role: 'admin',
    action: 'UPDATE_SYSTEM_SETTINGS',
    targetType: 'system_settings',
    targetId: 'fee_config',
    details: 'Điều chỉnh phí sàn lên 12%',
  });

  assert.equal(next.auditLogs.length, initialLogCount + 1);
  const latestLog = next.auditLogs[0];
  assert.equal(latestLog.actorName, 'Tổng Quản trị');
  assert.equal(latestLog.action, 'UPDATE_SYSTEM_SETTINGS');
  assert.equal(latestLog.details, 'Điều chỉnh phí sàn lên 12%');
  assert.ok(latestLog.createdAt, 'Timestamp must be recorded');
});

// ============================================================================
// 3. ADMIN CLASS MODERATION (APPROVE & REJECT)
// ============================================================================

test('ADM-OMNI-009: moderateClassPost approves class post and updates moderationStatus', () => {
  const state = createDemoState(now);
  // Create a pending class post
  const res = createClassPost(state, state.users.find(u => u.id === 'demo-learner'), {
    subject: 'Toán 12',
    budgetAmount: 300000,
  });
  let s = res.state;
  assert.equal(s.classPosts.find(cp => cp.id === res.postId).moderationStatus, 'pending', 'New classes await actual Admin approval');

  const approvedState = moderateClassPost(s, res.postId, 'approved');
  const post = approvedState.classPosts.find((cp) => cp.id === res.postId);
  assert.equal(post.moderationStatus, 'approved');
});

test('ADM-OMNI-010: moderateClassPost rejects class post and reflects in state', () => {
  const state = createDemoState(now);
  const targetPost = state.classPosts[0];

  const rejectedState = moderateClassPost(state, targetPost.id, 'rejected');
  const post = rejectedState.classPosts.find((cp) => cp.id === targetPost.id);
  assert.equal(post.moderationStatus, 'rejected');
  assert.equal(state.classPosts[0].moderationStatus, 'approved', 'Original state must not mutate');
});

// ============================================================================
// 4. ADMIN FINANCE (PAYOUT APPROVAL & REJECTION)
// ============================================================================

test('ADM-OMNI-011: processPayoutRequest approves payout and updates record status', () => {
  const state = createDemoState(now);
  const pendingPayout = state.payoutRequests.find((p) => p.status === 'pending');
  assert.ok(pendingPayout, 'Demo state should contain at least 1 pending payout request');

  const approvedState = processPayoutRequest(state, pendingPayout.id, 'approved', 'Đã chuyển khoản Napas 24/7');
  const updated = approvedState.payoutRequests.find((p) => p.id === pendingPayout.id);

  assert.equal(updated.status, 'approved');
  assert.equal(updated.adminNote, 'Đã chuyển khoản Napas 24/7');
  assert.ok(updated.processedAt, 'Processed timestamp must be set');
});

test('ADM-OMNI-012: processPayoutRequest rejects payout and restores tutor available balance', () => {
  const state = createDemoState(now);
  const pendingPayout = state.payoutRequests.find((p) => p.status === 'pending');
  assert.ok(pendingPayout, 'Pending payout request must exist');

  const tutorId = pendingPayout.tutorId;
  const initialBalance = state.wallets[tutorId]?.availableBalance || 0;

  const rejectedState = processPayoutRequest(state, pendingPayout.id, 'rejected', 'Sai tên chủ tài khoản ngân hàng');
  const updated = rejectedState.payoutRequests.find((p) => p.id === pendingPayout.id);

  assert.equal(updated.status, 'rejected');
  assert.equal(updated.adminNote, 'Sai tên chủ tài khoản ngân hàng');

  const updatedBalance = rejectedState.wallets[tutorId]?.availableBalance || 0;
  assert.equal(
    updatedBalance,
    initialBalance + pendingPayout.amount,
    'Rejected payout amount must be refunded back to tutor availableBalance'
  );

  const refundTx = (rejectedState.wallets[tutorId]?.ledger || []).find(
    (tx) => tx.type === 'payout_rejected_refund' && tx.refId === pendingPayout.id
  );
  assert.ok(refundTx, 'Refund ledger transaction must be logged');
});

// ============================================================================
// 5. DASHBOARD SELECTOR METRICS & EMERGENCY SOS ALERT DETECTION
// ============================================================================

test('ADM-OMNI-013: selectAdminStats and selectAdminOverview calculate escrow balance and active class posts accurately', () => {
  const state = createDemoState(now);
  const stats = selectAdminStats(state);
  const overview = selectAdminOverview(state);

  const expectedHeldEscrow = state.escrowTransactions
    .filter((e) => e.status === 'held')
    .reduce((sum, e) => sum + e.amount, 0);

  const expectedActiveClasses = state.classPosts.filter((c) => c.status === 'open').length;
  const expectedPendingPayouts = state.payoutRequests.filter((p) => p.status === 'pending').length;

  assert.equal(stats.escrowBalance, expectedHeldEscrow);
  assert.equal(overview.escrowBalance, expectedHeldEscrow);

  assert.equal(stats.activeClassPostsCount, expectedActiveClasses);
  assert.equal(overview.activeClassPostsCount, expectedActiveClasses);

  assert.equal(stats.pendingPayoutsCount, expectedPendingPayouts);
  assert.equal(overview.pendingPayoutsCount, expectedPendingPayouts);
});

test('ADM-OMNI-014: Emergency SOS event in safetyLogs triggers activeSosAlert and hasSosAlert flag', () => {
  const state = createDemoState(now);
  assert.equal(selectAdminOverview(state).hasSosAlert, false, 'Initial state has no SOS alerts');

  const sosState = triggerLessonSOS(state, {
    lessonId: 'lesson-can-1',
    tutorId: 'demo-tutor',
    note: 'Báo động nguy hiểm tại điểm dạy!',
    emergencyContact: '0987654321',
  });

  const overview = selectAdminOverview(sosState);
  assert.equal(overview.hasSosAlert, true, 'hasSosAlert must be true after triggerLessonSOS');
  assert.ok(overview.activeSosAlert, 'activeSosAlert must be populated');
  assert.equal(overview.activeSosAlert.tutorId, 'demo-tutor');
  assert.equal(overview.activeSosAlert.note, 'Báo động nguy hiểm tại điểm dạy!');
  assert.equal(overview.activeSosAlert.emergencyContact, '0987654321');
  assert.ok(overview.activeSosAlert.timestamp, 'timestamp must be present');
});

test('ADM-OMNI-015: Emergency SOS event in notifications triggers activeSosAlert detection', () => {
  const state = createDemoState(now);
  const sosNotif = {
    id: 'notif-sos-test',
    recipientId: 'demo-admin',
    type: 'sos_alert',
    title: '🚨 BÁO ĐỘNG SOS KHẨN CẤP TỪ GIA SƯ!',
    message: 'Gia sư mai-anh vừa kích hoạt tín hiệu SOS tại buổi dạy.',
    link: '/admin/dashboard',
    isRead: false,
    createdAt: '2026-10-05T09:00:00+07:00',
  };

  const stateWithNotif = {
    ...state,
    safetyLogs: [], // clear safety logs to test notification-only source
    notifications: [sosNotif, ...state.notifications],
  };

  const overview = selectAdminOverview(stateWithNotif);
  assert.equal(overview.hasSosAlert, true);
  assert.ok(overview.activeSosAlert);
  assert.equal(overview.activeSosAlert.tutorId, 'mai-anh');
});

test('ADM-OMNI-016: Multiple SOS events are sorted chronologically with newest prioritized', () => {
  const state = createDemoState(now);
  const stateWithMultiple = {
    ...state,
    safetyLogs: [
      { id: 'sos-older', action: 'sos', tutorId: 'tutor-old', timestamp: '2026-10-05T07:00:00+07:00', note: 'SOS cũ' },
      { id: 'sos-newer', action: 'sos', tutorId: 'tutor-new', timestamp: '2026-10-05T08:30:00+07:00', note: 'SOS mới' },
    ],
  };

  const alerts = selectSosAlerts(stateWithMultiple);
  assert.equal(alerts.length, 2);
  assert.equal(alerts[0].tutorId, 'tutor-new', 'Newest SOS alert must come first');

  const overview = selectAdminOverview(stateWithMultiple);
  assert.equal(overview.activeSosAlert.tutorId, 'tutor-new');
});

test('ADM-OMNI-017: Empty state handles omnichannel stats and SOS events without throwing exceptions', () => {
  const emptyOverview = selectAdminOverview({});
  assert.equal(emptyOverview.escrowBalance, 0);
  assert.equal(emptyOverview.activeClassPostsCount, 0);
  assert.equal(emptyOverview.pendingClassesCount, 0);
  assert.equal(emptyOverview.pendingPayoutsCount, 0);
  assert.equal(emptyOverview.hasSosAlert, false);
  assert.equal(emptyOverview.activeSosAlert, null);
  assert.deepEqual(emptyOverview.sosAlerts, []);
});

// ============================================================================
// 6. INVARIANT PRESERVATION: BUG-010 (9 REQUESTS STRICT INVARIANT)
// ============================================================================

test('ADM-OMNI-018: Omnichannel admin operations strictly preserve the 9 requests invariant (BUG-010)', () => {
  const state = createDemoState(now);
  assert.equal(state.requests.length, 9, 'Initial canonical requests length must strictly be 9');

  let s = addDomainSubject(state, { name: 'Môn học mới' });
  assert.equal(s.requests.length, 9, 'BUG-010 invariant held after addDomainSubject');

  s = updateDomainSubject(s, s.subjects[0].id, { name: 'Môn sửa' });
  assert.equal(s.requests.length, 9, 'BUG-010 invariant held after updateDomainSubject');

  s = toggleDomainSubjectStatus(s, s.subjects[0].id);
  assert.equal(s.requests.length, 9, 'BUG-010 invariant held after toggleDomainSubjectStatus');

  s = addDomainLocation(s, { name: 'Quận mới', city: 'Hà Nội', district: 'Quận mới' });
  assert.equal(s.requests.length, 9, 'BUG-010 invariant held after addDomainLocation');

  s = updateDomainLocation(s, s.locations[0].id, { name: 'Quận sửa' });
  assert.equal(s.requests.length, 9, 'BUG-010 invariant held after updateDomainLocation');

  s = toggleDomainLocationStatus(s, s.locations[0].id);
  assert.equal(s.requests.length, 9, 'BUG-010 invariant held after toggleDomainLocationStatus');

  s = updateDomainSystemSettings(s, { platformFeePercent: 15 });
  assert.equal(s.requests.length, 9, 'BUG-010 invariant held after updateDomainSystemSettings');

  s = recordAuditLog(s, { actorId: 'admin', action: 'TEST_AUDIT', targetType: 'test' });
  assert.equal(s.requests.length, 9, 'BUG-010 invariant held after recordAuditLog');

  s = moderateClassPost(s, s.classPosts[0].id, 'approved');
  assert.equal(s.requests.length, 9, 'BUG-010 invariant held after moderateClassPost (approved)');

  s = moderateClassPost(s, s.classPosts[0].id, 'rejected');
  assert.equal(s.requests.length, 9, 'BUG-010 invariant held after moderateClassPost (rejected)');

  s = processPayoutRequest(s, s.payoutRequests[0].id, 'approved', 'Thanh toan test');
  assert.equal(s.requests.length, 9, 'BUG-010 invariant held after processPayoutRequest');

  s = triggerLessonSOS(s, { lessonId: 'lesson-1', tutorId: 'demo-tutor', note: 'SOS' });
  assert.equal(s.requests.length, 9, 'BUG-010 invariant held after triggerLessonSOS');
});
