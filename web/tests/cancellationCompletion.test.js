import test from 'node:test';
import assert from 'node:assert/strict';
import { createDemoState, cancelDomainLessonWithPenalty, markDomainLearnerNoShow } from '../src/features/domain/demoDomain.js';
import { acceptDomainOffer } from '../src/features/domain/commerce.js';
import { validOfferProposals } from './offerTestHelpers.js';

const seedTime = new Date('2026-10-05T06:00:00+07:00');
function cancellationFixture(hours) {
  const state = createDemoState(seedTime);
  const lesson = state.lessons.find(l => ['confirmed', 'upcoming'].includes(l.status));
  const tutor = state.users.find(u => u.id === 'demo-tutor');
  const start = new Date(lesson.date + 'T00:00:00'); start.setMinutes(lesson.start);
  return { state, lesson, tutor, now: new Date(start.getTime() - hours * 3600000) };
}

test('CANCEL-COMP-01 Tutor cancellation at least 24 hours ahead adds no warning or suspension', () => {
  for (const hours of [24, 26]) {
    const { state, lesson, tutor, now } = cancellationFixture(hours);
    const next = cancelDomainLessonWithPenalty(state, lesson.id, 'tutor', 1, 'Đổi lịch cá nhân', tutor, now);
    const account = next.users.find(u => u.id === tutor.id);
    assert.equal(account.warningCount, tutor.warningCount);
    assert.deepEqual(account.warnings, tutor.warnings);
    assert.equal(account.status, tutor.status);
    assert.equal(next.lessons.find(l => l.id === lesson.id).status, 'cancelled');
  }
});

test('CANCEL-COMP-02 late Tutor cancellation applies the configured warning threshold', () => {
  const { state, lesson, tutor, now } = cancellationFixture(5);
  state.systemSettings.autoSuspendThreshold = 1;
  const next = cancelDomainLessonWithPenalty(state, lesson.id, 'tutor', 26, 'Hủy muộn', tutor, now);
  const account = next.users.find(u => u.id === tutor.id);
  assert.equal(account.warningCount, tutor.warningCount + 1);
  assert.equal(account.status, 'suspended');
});

function fundedFixture() {
  const state = createDemoState(seedTime);
  const learner = state.users.find(u => u.id === 'demo-learner');
  const paid = acceptDomainOffer(state, 'msg-003', 'accepted', learner, { proposals: validOfferProposals(state, 2, seedTime) }, seedTime);
  assert.ok(paid.ok, paid.error);
  const lesson = paid.state.lessons.find(l => l.id === paid.lessonIds[0]);
  const start = new Date(lesson.date + 'T00:00:00'); start.setMinutes(lesson.start);
  return { state: paid.state, lesson, tutor: state.users.find(u => u.id === 'demo-tutor'), start };
}

test('MASTER-NOSHOW confirmed owned attendance resolution pays only the linked allocation exactly once', () => {
  const { state, lesson, tutor, start } = fundedFixture();
  const result = markDomainLearnerNoShow(state, lesson.id, tutor, { confirmed: true }, start);
  assert.ok(result.ok, result.error);
  assert.equal(result.settled, true);
  assert.equal(result.state.wallets[tutor.id].availableBalance - state.wallets[tutor.id].availableBalance, lesson.sessionFee);
  assert.equal(result.state.wallets['demo-learner'].availableBalance, state.wallets['demo-learner'].availableBalance);
  assert.equal(result.state.escrowTransactions[0].settlements.length, 1);
  assert.equal(result.state.escrowTransactions[0].settlements[0].platformFee, 0);
  assert.equal(result.state.escrowTransactions[0].status, 'held');
  assert.equal(result.state.lessons.find(l => l.id === lesson.id).cancellationCode, 'learner_no_show');
  assert.ok(markDomainLearnerNoShow(result.state, lesson.id, tutor, { confirmed: true }, start).error);
});

test('MASTER-NOSHOW rejects early, unconfirmed, unrelated, learner and ineligible Lesson actions without mutation', () => {
  const { state, lesson, tutor, start } = fundedFixture();
  for (const [actor, confirmed, time] of [[tutor, true, new Date(start.getTime() - 1)], [tutor, false, start], [{ ...tutor, id: 'outsider' }, true, start], [state.users.find(u => u.id === 'demo-learner'), true, start]]) {
    assert.ok(markDomainLearnerNoShow(state, lesson.id, actor, { confirmed }, time).error);
  }
  for (const status of ['pending', 'completed', 'cancelled']) {
    const source = { ...state, lessons: state.lessons.map(l => l.id === lesson.id ? { ...l, status } : l) };
    assert.ok(markDomainLearnerNoShow(source, lesson.id, tutor, { confirmed: true }, start).error);
    assert.equal(source.lessons.find(l => l.id === lesson.id).status, status);
  }
});

test('MASTER-NOSHOW no linked escrow preserves unknown compensation and leaves wallets untouched', () => {
  const { state, lesson, tutor, now } = cancellationFixture(0);
  const result = markDomainLearnerNoShow(state, lesson.id, tutor, { confirmed: true }, now);
  assert.ok(result.ok, result.error);
  assert.equal(result.settled, false);
  assert.deepEqual(result.state.wallets, state.wallets);
});
