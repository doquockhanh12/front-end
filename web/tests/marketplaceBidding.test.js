import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createDemoState,
  createClassPost,
  updateClassPostStatus,
  submitTutorProposal,
  selectTutorProposal,
  moderateClassPost,
} from '../src/features/domain/demoDomain.js';

const now = new Date('2026-10-05T06:00:00+07:00');

test('Marketplace: Posting a class with each of the 4 budget modes', () => {
  const initialState = createDemoState(now);
  const learner = { id: 'demo-learner', fullName: 'Nguyễn Minh Anh', role: 'learner' };

  // Mode 1: Giá cố định (fixed)
  const postRes1 = createClassPost(initialState, learner, {
    subject: 'Toán',
    grade: 'Lớp 8',
    format: 'offline',
    location: 'Quận Bình Thạnh, TP. Hồ Chí Minh',
    address: '123 Điện Biên Phủ, P.15, Bình Thạnh',
    scheduleDesc: 'Thứ 3 và Thứ 5 (18:30 - 20:00)',
    budgetMode: 'fixed',
    budgetAmount: 250000,
    trialLessonRequested: true,
    learningGoal: 'Lấy lại căn bản hình học và ôn thi giữa kỳ',
  });
  assert.ok(postRes1.postId, 'Post 1 must be created');
  const post1 = postRes1.state.classPosts.find((p) => p.id === postRes1.postId);
  assert.equal(post1.budgetMode, 'fixed');
  assert.equal(post1.budgetAmount, 250000);
  assert.equal(post1.trialLessonRequested, true);
  assert.equal(post1.status, 'open');

  // Mode 2: Khoảng giá dao động (range)
  const postRes2 = createClassPost(postRes1.state, learner, {
    subject: 'Tiếng Anh',
    grade: 'Lớp 9',
    format: 'online',
    location: 'Toàn quốc (Online)',
    address: 'Học qua Google Meet',
    scheduleDesc: 'Thứ 2, Thứ 4, Thứ 6 (19:30 - 21:00)',
    budgetMode: 'range',
    minBudget: 200000,
    maxBudget: 300000,
    trialLessonRequested: false,
    learningGoal: 'Luyện đề thi tuyển sinh vào lớp 10 chuyên Anh',
  });
  assert.ok(postRes2.postId, 'Post 2 must be created');
  const post2 = postRes2.state.classPosts.find((p) => p.id === postRes2.postId);
  assert.equal(post2.budgetMode, 'range');
  assert.equal(post2.minBudget, 200000);
  assert.equal(post2.maxBudget, 300000);
  assert.equal(post2.trialLessonRequested, false);
  assert.equal(post2.status, 'open');

  // Mode 3: Mức giá tối đa (max)
  const postRes3 = createClassPost(postRes2.state, learner, {
    subject: 'Vật lý',
    grade: 'Lớp 11',
    format: 'offline',
    location: 'Quận 3, TP. Hồ Chí Minh',
    address: '45 Võ Văn Tần, P.6, Quận 3',
    scheduleDesc: 'Thứ 7 & Chủ nhật (09:00 - 10:30)',
    budgetMode: 'max',
    maxBudget: 320000,
    trialLessonRequested: true,
    learningGoal: 'Nắm vững kiến thức điện xoay chiều',
  });
  assert.ok(postRes3.postId, 'Post 3 must be created');
  const post3 = postRes3.state.classPosts.find((p) => p.id === postRes3.postId);
  assert.equal(post3.budgetMode, 'max');
  assert.equal(post3.maxBudget, 320000);
  assert.equal(post3.trialLessonRequested, true);
  assert.equal(post3.status, 'open');

  // Mode 4: Thương lượng với gia sư (negotiable)
  const postRes4 = createClassPost(postRes3.state, learner, {
    subject: 'Lập trình Python',
    grade: 'Đại học',
    format: 'online',
    location: 'Toàn quốc (Online)',
    address: 'Google Meet',
    scheduleDesc: 'Lịch linh hoạt theo thỏa thuận',
    budgetMode: 'negotiable',
    trialLessonRequested: true,
    learningGoal: 'Học lập trình cơ bản và cấu trúc dữ liệu',
  });
  assert.ok(postRes4.postId, 'Post 4 must be created');
  const post4 = postRes4.state.classPosts.find((p) => p.id === postRes4.postId);
  assert.equal(post4.budgetMode, 'negotiable');
  assert.equal(post4.trialLessonRequested, true);
  assert.equal(post4.status, 'open');

  // BUG-010 Check: Request count must remain strictly 9
  assert.equal(postRes4.state.requests.length, 9, 'BUG-010: Posting classes must strictly preserve 9 requests invariant');
});

test('Marketplace: Proposal submission with transparent 10% vs 7% platform fee calculation', () => {
  const state = createDemoState(now);
  const learner = state.users.find(u => u.id === 'demo-learner');

  // Create an open class post
  const postRes = createClassPost(state, learner, {
    subject: 'Hóa học',
    grade: 'Lớp 10',
    budgetMode: 'fixed',
    budgetAmount: 250000,
    learningGoal: 'Luyện thi kiểm tra 1 tiết',
  });
  assert.ok(postRes.postId);
  const classPostId = postRes.postId;

  // 1. Standard tutor (10% fee)
  const standardTutor = state.users.find(u => u.id === 'demo-tutor');
  const approvedState = moderateClassPost(postRes.state, classPostId, 'approved');

  const bid1Res = submitTutorProposal(approvedState, standardTutor, {
    classPostId,
    proposedFee: 250000,
    coverNote: 'Em có 2 năm kinh nghiệm dạy Hóa 10.',
  });
  assert.ok(bid1Res.proposalId);
  const prop1 = bid1Res.state.proposals.find((p) => p.id === bid1Res.proposalId);
  assert.equal(prop1.proposedFee, 250000);
  assert.equal(prop1.platformFee, 25000, 'Standard tutor incurs 10% platform fee (25.000đ)');
  assert.equal(prop1.netPayout, 225000, 'Standard tutor net payout is 90% (225.000đ)');
  assert.equal(prop1.status, 'pending');
  assert.equal(prop1.tutorPunctualityRate, state.profiles.find(p => p.id === 'quoc-bao').punctualityRate, 'Missing punctuality must remain unknown, never invented as 99%');

  // 2. Top-Rated tutor (7% preferential fee)
  const topRatedTutor = state.users.find(u => u.id === 'user-tutor-active-2');
  const topProfile = bid1Res.state.profiles.find(p => p.id === topRatedTutor.tutorProfileId);
  topProfile.punctualityRate = 99; // Explicit synthetic threshold condition; no production seed changes.
  const exampleLesson = state.lessons.find(l => l.status === 'completed');
  const tierState = { ...bid1Res.state, lessons: [...bid1Res.state.lessons, ...Array.from({ length: 30 }, (_, index) => ({ ...exampleLesson, id: `tier-test-${index}`, tutorId: topProfile.id }))] };

  const bid2Res = submitTutorProposal(tierState, topRatedTutor, {
    classPostId,
    proposedFee: 250000,
    coverNote: 'Gia sư Top-Rated với tỷ lệ đậu 100%.',
  });
  assert.ok(bid2Res.proposalId);
  const prop2 = bid2Res.state.proposals.find((p) => p.id === bid2Res.proposalId);
  assert.equal(prop2.proposedFee, 250000);
  assert.equal(prop2.platformFee, 17500, 'Top-Rated tutor receives 7% platform fee discount (17.500đ)');
  assert.equal(prop2.netPayout, 232500, 'Top-Rated tutor net payout is 93% (232.500đ)');
  assert.equal(prop2.status, 'pending');

  // 3. Duplicate submission prevention
  const dupBidRes = submitTutorProposal(bid2Res.state, topRatedTutor, {
    classPostId,
    proposedFee: 240000,
    coverNote: 'Thử nộp lại lần 2',
  });
  assert.ok(dupBidRes.error, 'Duplicate proposal submission by the same tutor must be rejected');

  // Verify class post proposal count
  const updatedPost = bid2Res.state.classPosts.find((p) => p.id === classPostId);
  assert.equal(updatedPost.proposalCount, 2, 'Class post proposalCount must be 2');

  // BUG-010 Check
  assert.equal(bid2Res.state.requests.length, 9, 'BUG-010: Submitting proposals must strictly preserve 9 requests invariant');
});

test('Marketplace: Proposal selection waits for deposit and connects the same candidate conversation without premature booking', () => {
  const state = createDemoState(now);
  const learner = state.users.find(u => u.id === 'demo-learner');

  // Post class
  const postRes = createClassPost(state, learner, {
    subject: 'Ngữ văn',
    grade: 'Lớp 12',
    budgetMode: 'fixed',
    budgetAmount: 300000,
    learningGoal: 'Luyện thi THPT Quốc Gia môn Văn',
  });
  const classPostId = postRes.postId;

  // Tutor A applies
  const tutorA = state.users.find(u => u.id === 'demo-tutor');
  const approvedState = moderateClassPost(postRes.state, classPostId, 'approved');
  const bidARes = submitTutorProposal(approvedState, tutorA, {
    classPostId,
    proposedFee: 300000,
    coverNote: 'Giải nhì Học sinh giỏi Quốc gia môn Văn',
  });

  // Tutor B applies
  const tutorB = state.users.find(u => u.id === 'user-tutor-active-2');
  const bidBRes = submitTutorProposal(bidARes.state, tutorB, {
    classPostId,
    proposedFee: 280000,
    coverNote: 'Kinh nghiệm luyện đề 5 năm',
  });

  // Learner selects Tutor B
  const selectRes = selectTutorProposal(bidBRes.state, learner.id, bidBRes.proposalId);
  assert.ok(selectRes.state, 'Selection must succeed');

  // Selection does not claim paid/confirmed lessons before a funded offer.
  const postAfterSelect = selectRes.state.classPosts.find((p) => p.id === classPostId);
  assert.equal(postAfterSelect.status, 'awaiting_deposit', 'Selected post waits for deposit');
  assert.equal(selectRes.state.lessons.length, bidBRes.state.lessons.length, 'Selection alone creates no unpaid Lesson');
  assert.deepEqual(selectRes.state.wallets, bidBRes.state.wallets, 'Selection alone moves no money');
  assert.equal(selectRes.state.chatThreads.find(t => t.id === selectRes.threadId).tutorId, tutorB.id, 'Selected candidate resolves the canonical account in the conversation');

  // Verify chosen proposal status is 'selected'
  const chosenProp = selectRes.state.proposals.find((p) => p.id === bidBRes.proposalId);
  assert.equal(chosenProp.status, 'selected', 'Chosen proposal status must be selected');

  // Other candidates remain pending until the learner funds the selected offer.
  const rejectedProp = selectRes.state.proposals.find((p) => p.id === bidARes.proposalId);
  assert.equal(rejectedProp.status, 'pending', 'No premature rejection before deposit');

  // BUG-010 Check: Request count must remain strictly 9
  assert.equal(selectRes.state.requests.length, 9, 'BUG-010: Selecting proposal must strictly preserve 9 requests invariant');
});
