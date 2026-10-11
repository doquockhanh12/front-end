import test from 'node:test';
import assert from 'node:assert/strict';
import { validOfferProposals } from './offerTestHelpers.js';
import {
  createDemoState,
  sendChatMessage,
  sendInChatOffer,
  respondInChatOffer,
} from '../src/features/domain/demoDomain.js';

const now = new Date('2026-10-05T06:00:00+07:00');
const CANONICAL_REQUEST_IDS = [
  'demo-01',
  'demo-02',
  'demo-03',
  'req-1',
  'req-2',
  'req-3',
  'ref-1',
  'ref-2',
  'ref-3',
];

test('CHAT-001: Sending text message updates conversation history and thread lastMessage preview', () => {
  const state = createDemoState(now);
  const initialMsgCount = state.messages.length;
  const learner = { id: 'demo-learner', fullName: 'Nguyễn Minh Anh', role: 'learner' };
  const text = 'Chào thầy Bảo, em muốn trao đổi thêm về lịch học môn Toán.';

  const nextState = sendChatMessage(state, 'thread-001', learner, text);

  // Message added to collection
  assert.equal(nextState.messages.length, initialMsgCount + 1, 'Messages count should increment by 1');
  const lastMsg = nextState.messages.at(-1);
  assert.equal(lastMsg.threadId, 'thread-001');
  assert.equal(lastMsg.senderId, 'demo-learner');
  assert.equal(lastMsg.senderName, 'Nguyễn Minh Anh');
  assert.equal(lastMsg.senderRole, 'learner');
  assert.equal(lastMsg.text, text);
  assert.equal(lastMsg.type, 'text');
  assert.equal(lastMsg.offerData, null);
  assert.ok(lastMsg.createdAt, 'Message must have a createdAt timestamp');

  // Thread preview updated
  const updatedThread = nextState.chatThreads.find((t) => t.id === 'thread-001');
  assert.ok(updatedThread, 'Thread-001 must exist');
  assert.equal(updatedThread.lastMessageText, text);
  assert.equal(updatedThread.lastMessageAt, lastMsg.createdAt);
});

test('CHAT-002: Sending custom offer calculates total escrow amount correctly and initializes pending offer', () => {
  const state = createDemoState(now);
  const initialMsgCount = state.messages.length;
  const tutor = { id: 'demo-tutor', fullName: 'Trần Gia Bảo', role: 'tutor' };

  const offerPayload = {
    subject: 'Hóa học 10',
    grade: 'Lớp 10',
    sessionsCount: 5,
    sessionFee: 250000,
    scheduleSummary: 'Thứ 2, 4, 6 (19:00 - 20:30)',
  };

  const nextState = sendInChatOffer(state, 'thread-001', tutor, offerPayload);

  // Custom offer message created
  assert.equal(nextState.messages.length, initialMsgCount + 1);
  const offerMsg = nextState.messages.at(-1);
  assert.equal(offerMsg.threadId, 'thread-001');
  assert.equal(offerMsg.senderId, 'demo-tutor');
  assert.equal(offerMsg.senderRole, 'tutor');
  assert.equal(offerMsg.type, 'custom_offer');

  // Offer calculation: totalAmount = sessionFee * sessionsCount
  const expectedTotal = 5 * 250000; // 1,250,000 đ
  assert.ok(offerMsg.offerData, 'Offer data must be present');
  assert.equal(offerMsg.offerData.subject, 'Hóa học 10');
  assert.equal(offerMsg.offerData.grade, 'Lớp 10');
  assert.equal(offerMsg.offerData.sessionsCount, 5);
  assert.equal(offerMsg.offerData.sessionFee, 250000);
  assert.equal(offerMsg.offerData.totalAmount, expectedTotal);
  assert.equal(offerMsg.offerData.scheduleSummary, 'Thứ 2, 4, 6 (19:00 - 20:30)');
  assert.equal(offerMsg.offerData.status, 'pending');

  // Thread preview contains offer notification
  const updatedThread = nextState.chatThreads.find((t) => t.id === 'thread-001');
  assert.ok(updatedThread.lastMessageText.includes('1.250.000'), 'Thread preview must format total amount');
});

test('CHAT-003: Accepting custom offer triggers escrow deposit hold and deducts available balance', () => {
  const state = createDemoState(now);
  const learner = { id: 'demo-learner', fullName: 'Nguyễn Minh Anh', role: 'learner' };
  const tutor = { id: 'demo-tutor', fullName: 'Trần Gia Bảo', role: 'tutor' };

  // 1. Create offer (4 sessions * 200,000 = 800,000 đ)
  const offerState = sendInChatOffer(state, 'thread-001', tutor, {
    subject: 'Toán 8 Nâng cao',
    grade: 'Lớp 8',
    sessionsCount: 4,
    sessionFee: 200000,
    scheduleSummary: 'Thứ 3 & Thứ 5 (18:30 - 20:00)',
  });
  const offerMsg = offerState.messages.at(-1);

  const initialAvailable = offerState.wallets['demo-learner'].availableBalance;
  const initialEscrow = offerState.wallets['demo-learner'].escrowBalance;
  const initialTxCount = offerState.escrowTransactions.length;

  // 2. Accept offer as learner
  const acceptedState = respondInChatOffer(offerState, offerMsg.id, 'accepted', learner, { proposals: validOfferProposals(offerState, 4, now) }, now);

  // Message status updated
  const updatedMsg = acceptedState.messages.find((m) => m.id === offerMsg.id);
  assert.equal(updatedMsg.offerData.status, 'accepted');
  assert.ok(updatedMsg.offerData.decidedAt);

  // Escrow funds held from learner wallet
  const learnerWallet = acceptedState.wallets['demo-learner'];
  assert.equal(learnerWallet.availableBalance, initialAvailable - 800000);
  assert.equal(learnerWallet.escrowBalance, initialEscrow + 800000);

  // Escrow ledger transaction recorded
  assert.equal(acceptedState.escrowTransactions.length, initialTxCount + 1);
  const newTx = acceptedState.escrowTransactions[0];
  assert.equal(newTx.learnerId, 'demo-learner');
  assert.equal(newTx.tutorId, 'demo-tutor');
  assert.equal(newTx.amount, 800000);
  assert.equal(newTx.status, 'held');
  assert.equal(newTx.subject, 'Toán 8 Nâng cao');
  assert.equal(newTx.sessionCount, 4);
  assert.equal(newTx.feePerSession, 200000);
});

test('CHAT-004: Declining custom offer marks status declined without escrow deduction', () => {
  const state = createDemoState(now);
  const learner = { id: 'demo-learner', fullName: 'Nguyễn Minh Anh', role: 'learner' };
  const tutor = { id: 'demo-tutor', fullName: 'Trần Gia Bảo', role: 'tutor' };

  // 1. Create offer (3 sessions * 180,000 = 540,000 đ)
  const offerState = sendInChatOffer(state, 'thread-001', tutor, {
    subject: 'Ngữ văn 9',
    grade: 'Lớp 9',
    sessionsCount: 3,
    sessionFee: 180000,
    scheduleSummary: 'Thứ 7 (14:00 - 16:00)',
  });
  const offerMsg = offerState.messages.at(-1);

  const initialAvailable = offerState.wallets['demo-learner'].availableBalance;
  const initialEscrow = offerState.wallets['demo-learner'].escrowBalance;
  const initialTxCount = offerState.escrowTransactions.length;

  // 2. Decline offer
  const declinedState = respondInChatOffer(offerState, offerMsg.id, 'declined', learner);

  // Message marked declined
  const updatedMsg = declinedState.messages.find((m) => m.id === offerMsg.id);
  assert.equal(updatedMsg.offerData.status, 'declined');

  // Balances remain intact
  assert.equal(declinedState.wallets['demo-learner'].availableBalance, initialAvailable);
  assert.equal(declinedState.wallets['demo-learner'].escrowBalance, initialEscrow);
  assert.equal(declinedState.escrowTransactions.length, initialTxCount);
});

test('CHAT-005: accepted offer preserves nine seed Requests and adds the shared paid Request', () => {
  let state = createDemoState(now);
  const learner = { id: 'demo-learner', fullName: 'Minh Anh', role: 'learner' };
  const tutor = { id: 'demo-tutor', fullName: 'Gia Bảo', role: 'tutor' };

  // Initial check
  assert.equal(state.requests.length, 9, 'Initial state must have strictly 9 requests (BUG-010)');
  assert.deepEqual(state.requests.map((r) => r.id), CANONICAL_REQUEST_IDS, 'Initial canonical request IDs');

  // Step 1: Send multiple chat messages
  state = sendChatMessage(state, 'thread-001', learner, 'Tin nhắn 1 từ học viên');
  assert.equal(state.requests.length, 9, 'Preserved after learner message');
  assert.deepEqual(state.requests.map((r) => r.id), CANONICAL_REQUEST_IDS);

  state = sendChatMessage(state, 'thread-001', tutor, 'Tin nhắn 2 từ gia sư');
  assert.equal(state.requests.length, 9, 'Preserved after tutor message');
  assert.deepEqual(state.requests.map((r) => r.id), CANONICAL_REQUEST_IDS);

  // Step 2: Send custom offer
  state = sendInChatOffer(state, 'thread-001', tutor, {
    subject: 'Vật lý 11',
    grade: 'Lớp 11',
    sessionsCount: 3,
    sessionFee: 220000,
    scheduleSummary: 'Chủ nhật (08:00 - 10:00)',
  });
  assert.equal(state.requests.length, 9, 'Preserved after custom offer sent');
  assert.deepEqual(state.requests.map((r) => r.id), CANONICAL_REQUEST_IDS);

  // Step 3: Accept custom offer (triggers escrow hold)
  const offer1Msg = state.messages.at(-1);
  state = respondInChatOffer(state, offer1Msg.id, 'accepted', learner, { proposals: validOfferProposals(state, 3, now) }, now);
  assert.equal(state.requests.length, 10, 'Paid offer creates one shared Request');
  assert.deepEqual(state.requests.slice(0, 9).map((r) => r.id), CANONICAL_REQUEST_IDS);
  assert.equal(state.lessons.filter(l => l.requestId === state.requests.at(-1).id).length, 3);

  // Step 4: Send another custom offer and decline it
  state = sendInChatOffer(state, 'thread-001', tutor, {
    subject: 'IELTS Writing',
    grade: 'IELTS 6.5',
    sessionsCount: 2,
    sessionFee: 350000,
    scheduleSummary: 'Thứ 4 & Thứ 6',
  });
  assert.equal(state.requests.length, 10, 'Sending another offer does not create a Request');
  assert.deepEqual(state.requests.slice(0, 9).map((r) => r.id), CANONICAL_REQUEST_IDS);

  const offer2Msg = state.messages.at(-1);
  state = respondInChatOffer(state, offer2Msg.id, 'declined', learner);
  assert.equal(state.requests.length, 10, 'Declining another offer does not create a Request');
  assert.deepEqual(state.requests.slice(0, 9).map((r) => r.id), CANONICAL_REQUEST_IDS);
});

test('CHAT-006: Seed fixture contains initial chat threads and messages with custom offer', () => {
  const state = createDemoState(now);

  assert.ok(Array.isArray(state.chatThreads) && state.chatThreads.length > 0, 'chatThreads initialized');
  assert.ok(Array.isArray(state.messages) && state.messages.length > 0, 'messages initialized');

  const defaultOffer = state.messages.find((m) => m.type === 'custom_offer');
  assert.ok(defaultOffer, 'Seed data must contain a custom offer message');
  assert.equal(defaultOffer.offerData.status, 'pending');
  assert.equal(defaultOffer.offerData.subject, 'Toán lớp 8');
  assert.equal(defaultOffer.offerData.totalAmount, 440000);
});

test('CHAT-007: Edge cases: invalid message inputs and non-existent IDs fail safely', () => {
  const state = createDemoState(now);

  // Empty or whitespace message text
  assert.equal(sendChatMessage(state, 'thread-001', { id: 'u1' }, ''), state);
  assert.equal(sendChatMessage(state, 'thread-001', { id: 'u1' }, '   '), state);
  assert.equal(sendChatMessage(state, 'thread-001', null, 'hello'), state);
  assert.equal(sendChatMessage(state, null, { id: 'u1' }, 'hello'), state);

  // Invalid offer data
  assert.equal(sendInChatOffer(state, 'thread-001', null, {}), state);
  assert.equal(sendInChatOffer(state, 'thread-001', { id: 'u1' }, {}), state);

  // Non-existent message id for respond
  assert.equal(respondInChatOffer(state, 'non-existent-msg-id', 'accepted', { id: 'u1' }), state);
});
