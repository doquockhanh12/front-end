import test from 'node:test';
import assert from 'node:assert/strict';
import { createDemoState, completeDomainLesson, cancelDomainLessonWithPenalty, sendChatMessage, createClassPost } from '../src/features/domain/demoDomain.js';
import { acceptDomainOffer, linkedEscrow, selectTutorTier, settleEscrow, openDomainConversation } from '../src/features/domain/commerce.js';
import { saveLearningRecord, saveVerificationDocuments, submitHomework, submitLessonReview, rescheduleDomainLesson } from '../src/features/domain/learning.js';
import { validOfferProposals } from './offerTestHelpers.js';
const now = new Date('2026-10-05T06:00:00+07:00');
const actors = state => ({ learner: state.users.find(u => u.id === 'demo-learner'), tutor: state.users.find(u => u.id === 'demo-tutor') });
function paidState() {
  const state = createDemoState(now), { learner } = actors(state);
  const result = acceptDomainOffer(state, 'msg-003', 'accepted', learner, { proposals: validOfferProposals(state, 2, now) }, now);
  assert.ok(result.ok, result.error);
  return result;
}
test('MASTER-L06 atomic offer holds funds, creates shared request/lessons and rejects replay or stranger', () => {
  const original = createDemoState(now), { learner } = actors(original);
  assert.ok(acceptDomainOffer(original, 'msg-003', 'accepted', { ...learner, id: 'outsider' }, {}, now).error);
  assert.ok(acceptDomainOffer(original, 'msg-003', 'accepted', learner, {}, now).error);
  const result = paidState(); const { state } = result;
  const request = state.requests.find(r => r.id === result.requestId);
  assert.equal(request.learnerId, learner.id); assert.equal(request.tutorId, 'quoc-bao');
  assert.equal(state.lessons.filter(l => l.requestId === request.id).length, 2);
  assert.equal(state.wallets[learner.id].availableBalance, original.wallets[learner.id].availableBalance - 440000);
  assert.equal(state.lessons.find(l => l.id === result.lessonIds[0]).sessionFee, 220000);
  assert.ok(acceptDomainOffer(state, 'msg-003', 'accepted', learner, {}, now).error);
  assert.equal(sendChatMessage(state, 'thread-001', { id: 'outsider' }, 'intrusion'), state);
});
test('MASTER-T08 bundled escrow settles only completed allocation and never duplicates credits', () => {
  const result = paidState(), before = result.state.wallets['demo-tutor'].availableBalance;
  const first = completeDomainLesson(result.state, 'quoc-bao', result.lessonIds[0]);
  assert.equal(first.wallets['demo-tutor'].availableBalance, before + 198000);
  assert.equal(first.escrowTransactions[0].status, 'held');
  assert.equal(first.escrowTransactions[0].settlements.length, 1);
  assert.equal(linkedEscrow(first, result.lessonIds[0]), undefined);
  assert.deepEqual(completeDomainLesson(first, 'quoc-bao', result.lessonIds[0]), first);
  const final = completeDomainLesson(first, 'quoc-bao', result.lessonIds[1]);
  assert.equal(final.wallets['demo-tutor'].availableBalance, before + 396000);
  assert.equal(final.escrowTransactions[0].status, 'disbursed');
  assert.equal(final.escrowTransactions[0].platformFee, 44000);
});
test('MASTER cancellation preserves money for 26/5/1 hour windows and rejects wrong owner/replay', () => {
  for (const [hours, ratio] of [[26, 1], [5, .5], [1, 0]]) {
    const result = paidState(), { state } = result, lessonId = result.lessonIds[0];
    const beforeLearner = state.wallets['demo-learner'].availableBalance;
    const beforeTutor = state.wallets['demo-tutor'].availableBalance;
    const next = cancelDomainLessonWithPenalty(state, lessonId, 'learner', hours, 'fixture cancellation');
    assert.equal(next.wallets['demo-learner'].availableBalance - beforeLearner, 220000 * ratio);
    assert.equal(next.wallets['demo-tutor'].availableBalance - beforeTutor, 220000 * (1 - ratio));
    assert.equal(next.escrowTransactions[0].settlements.length, 1);
    assert.deepEqual(cancelDomainLessonWithPenalty(next, lessonId, 'learner', hours, 'replay'), next);
    assert.equal(cancelDomainLessonWithPenalty(state, lessonId, 'learner', hours, '', { id: 'outsider', role: 'learner' }, now), state);
  }
});
test('MASTER no escrow means no invented compensation or profile-price fallback', () => {
  const state = createDemoState(now), lesson = state.lessons.find(l => ['upcoming', 'confirmed'].includes(l.status));
  const next = cancelDomainLessonWithPenalty(state, lesson.id, 'learner', 1, 'no funded escrow');
  assert.deepEqual(next.wallets, state.wallets);
  assert.equal(settleEscrow(state, 'nonexistent'), state);
});
test('MASTER learning records, real file payload, review and two-sided ownership share one Lesson', () => {
  const result = paidState(), { learner, tutor } = actors(result.state), id = result.lessonIds[0];
  const file = { name: 'homework.txt', type: 'text/plain', dataUrl: 'data:text/plain;base64,aGVsbG8=' };
  assert.ok(saveLearningRecord(result.state, learner, id, { progress: 'wrong actor' }).error);
  const learning = saveLearningRecord(result.state, tutor, id, { materials: [file], progress: 'Completed exercises' }).state;
  const uploaded = submitHomework(learning, learner, id, file).state;
  assert.equal(uploaded.lessons.find(l => l.id === id).submissions[0].submittedBy, learner.id);
  assert.ok(submitLessonReview(uploaded, learner, id, { rating: 5 }).error);
  const completed = completeDomainLesson(uploaded, 'quoc-bao', id);
  const reviewed = submitLessonReview(completed, learner, id, { rating: 5, comment: 'Useful lesson' }).state;
  assert.ok(submitLessonReview(reviewed, learner, id, { rating: 5 }).error);
  assert.ok(submitLessonReview(reviewed, tutor, id, { rating: 5 }).ok);
  assert.equal(reviewed.reviews.at(-1).status, 'pending');
  assert.ok(saveVerificationDocuments(completed, tutor, []).error);
});
test('MASTER reschedule preserves lesson, request, fee and escrow IDs and protects time/ownership', () => {
  const result = paidState(), { state } = result, { learner } = actors(state), id = result.lessonIds[0];
  const proposal = validOfferProposals(state, 1, now)[0];
  const original = state.lessons.find(l => l.id === id);
  const early = new Date('2026-10-01T00:00:00+07:00');
  const changed = rescheduleDomainLesson(state, learner, id, proposal, early);
  assert.ok(changed.ok, changed.error);
  const next = changed.state.lessons.find(l => l.id === id);
  for (const key of ['id', 'requestId', 'sessionFee', 'escrowId']) assert.equal(next[key], original[key]);
  assert.ok(rescheduleDomainLesson(state, { ...learner, id: 'outsider' }, id, proposal, early).error);
  assert.ok(rescheduleDomainLesson(state, learner, id, { ...proposal, end: proposal.end + 1 }, early).error);
});
test('MASTER Tutor tier never invents missing punctuality and back-maps current account/profile IDs', () => {
  const state = createDemoState(now);
  delete state.profiles.find(p => p.id === 'quoc-bao').punctualityRate;
  assert.equal(selectTutorTier(state, 'quoc-bao').tier, 'active');
  const second = state.users.find(u => u.tutorProfileId === 'mai-anh');
  const opened = openDomainConversation(state, actors(state).learner, second.id);
  assert.equal(opened.state.chatThreads.find(t => t.id === opened.threadId).tutorId, second.id);
});

test('UI-COMP-D01 secondary Tutor offer preserves canonical wallet account mapping', () => {
  const state = createDemoState(now), { learner } = actors(state);
  const tutor = state.users.find(u => u.tutorProfileId === 'mai-anh');
  const opened = openDomainConversation(state, learner, tutor.id);
  const message = { id: 'secondary-offer', threadId: opened.threadId, type: 'custom_offer', senderId: tutor.id,
    offerData: { subject: state.profiles.find(p => p.id === 'mai-anh').subjects[0], sessionFee: 220000, sessionsCount: 1, status: 'pending' } };
  const source = { ...opened.state, messages: [...opened.state.messages, message] };
  const proposal = validOfferProposals(state, 1, now);
  source.availability.push(...proposal.map((p, i) => ({ ...p, id: `secondary-availability-${i}`, tutorId: 'mai-anh' })));
  source.settings['mai-anh'] = { sessionMinutes: 45 };
  const accepted = acceptDomainOffer(source, message.id, 'accepted', learner, { proposals: proposal }, now);
  assert.ok(accepted.ok, accepted.error);
  assert.equal(accepted.state.escrowTransactions[0].tutorId, tutor.id);
});

test('UI-COMP-D02 missing reschedule selection returns validation without throwing', () => {
  const result = paidState(), { learner } = actors(result.state);
  assert.doesNotThrow(() => {
    assert.ok(rescheduleDomainLesson(result.state, learner, result.lessonIds[0], undefined, new Date('2026-10-01T00:00:00+07:00')).error);
  });
});

test('UI-COMP-L17 negotiable budget and absent geography remain unknown, not fabricated', () => {
  const state = createDemoState(now), { learner } = actors(state);
  const result = createClassPost(state, learner, { subject: 'Toán', budgetMode: 'negotiable', budgetAmount: null, minBudget: null, maxBudget: null });
  const post = result.state.classPosts.find(p => p.id === result.postId);
  assert.equal(post.budgetAmount, null); assert.equal(post.minBudget, null); assert.equal(post.maxBudget, null);
  assert.equal(post.location, ''); assert.equal(post.grade, '');
});
