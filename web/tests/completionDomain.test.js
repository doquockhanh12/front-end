import test from 'node:test';
import assert from 'node:assert/strict';
import { createDemoState, respondInChatOffer, completeDomainLesson, cancelDomainLessonWithPenalty, createClassPost, selectTutorProposal, updateDomainSystemSettings, warnUserIssue } from '../src/features/domain/demoDomain.js';
const now = new Date('2026-10-05T06:00:00+07:00');
const learner = { id: 'demo-learner', role: 'learner', fullName: 'Nguyễn Minh Anh' };

test('MASTER-L05 insufficient wallet leaves offer pending and all domain collections unchanged', () => {
  const state = createDemoState(now);
  state.wallets[learner.id].availableBalance = 0;
  const message = state.messages.find(m => m.type === 'custom_offer');
  const next = respondInChatOffer(state, message.id, 'accepted', learner);
  assert.equal(next.messages.find(m => m.id === message.id).offerData.status, 'pending');
  assert.deepEqual(next.escrowTransactions, state.escrowTransactions);
  assert.deepEqual(next.requests, state.requests);
  assert.deepEqual(next.lessons, state.lessons);
});

test('MASTER-A05 invalid settings cannot persist at domain boundary', () => {
  const state = createDemoState(now);
  assert.deepEqual(updateDomainSystemSettings(state, { maxStartHour: 'not-a-time' }), state);
  assert.deepEqual(updateDomainSystemSettings(state, { platformFeePercent: -5 }), state);
});

test('MASTER-A09 warning suspension uses configured threshold', () => {
  const state = createDemoState(now);
  state.systemSettings.autoSuspendThreshold = 1;
  const issue = state.issues.find(i => i.targetUser?.id || i.targetUserId || i.relatedTutorId);
  const id = issue.targetUser?.id || issue.targetUserId || issue.relatedTutorId;
  const target = state.users.find(u => u.id === id || u.tutorProfileId === id);
  target.warningCount = 1;
  target.warnings = [];
  target.status = 'active';
  const next = warnUserIssue(state, issue.id, 'Confirmed breach');
  assert.equal(next.users.find(u => u.id === target.id).status, 'suspended');
});

test('MASTER-L03 completed lesson cannot be cancelled or mint compensation', () => {
  const state = createDemoState(now);
  const lesson = state.lessons.find(l => l.status === 'completed');
  const next = cancelDomainLessonWithPenalty(state, lesson.id, 'learner', 1, 'test');
  assert.deepEqual(next, state);
});

test('MASTER-T08 completing linked paid lesson disburses once into tutor account wallet', () => {
  const state = createDemoState(now);
  const lesson = state.lessons.find(l => ['upcoming', 'confirmed'].includes(l.status) && l.tutorId === 'quoc-bao');
  const escrow = state.escrowTransactions[0];
  escrow.lessonId = lesson.id; escrow.tutorId = 'demo-tutor'; escrow.amount = 220000;
  const before = state.wallets['demo-tutor'].availableBalance;
  const next = completeDomainLesson(state, 'quoc-bao', lesson.id);
  assert.equal(next.wallets['demo-tutor'].availableBalance, before + 198000);
  assert.equal(next.escrowTransactions.find(e => e.id === escrow.id).status, 'disbursed');
  assert.deepEqual(completeDomainLesson(next, 'quoc-bao', lesson.id), next);
});

test('MASTER-L09 learner class post requires moderation', () => {
  const state = createDemoState(now);
  const result = createClassPost(state, learner, { subject: 'Tiếng Anh' });
  assert.equal(result.state.classPosts[0].moderationStatus, 'pending');
});

test('MASTER-L10 choosing candidate awaits deposit and opens the same participants thread', () => {
  const state = createDemoState(now);
  const result = selectTutorProposal(state, learner.id, 'prop-201');
  assert.ok(result.threadId);
  assert.equal(result.state.classPosts.find(p => p.id === 'post-101').status, 'awaiting_deposit');
  const thread = result.state.chatThreads.find(t => t.id === result.threadId);
  assert.ok(thread.participants.includes(learner.id));
  assert.ok(thread.participants.includes('demo-tutor'));
});
