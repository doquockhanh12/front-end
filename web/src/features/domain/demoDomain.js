import { reconcileSubjectCatalog, hasUploadedStudentCard } from './configuration.js';
import { demoReferenceData as fixture } from '../../data/demoReferenceData.js';
import { linkedEscrow, settleEscrow, accountForTutor, profileForTutor, threadHasUser, openDomainConversation, acceptDomainOffer, selectTutorTier } from './commerce.js';
import { acceptanceResult, CANONICAL_TUTOR_ID, localDateKey, migrateWorkspaceV2, normalizeRanges, normalizeSessionMinutes, subtractLessons, subtractRange, weekDates, weeklyScheduleRanges, selectPublicTutorSchedule, isValidProposal, isFutureSession } from '../../data/tutorSchedule.js';

export const DOMAIN_STORAGE_KEY = 'tnm.demo.domain.v1';
const APPROVED_TIMETABLE_CLEANUP = '2026-10-04-thursday-math-friday-availability';
// One-time, explicitly approved correction of this dated demo, not a lifecycle rule.
function applyApprovedDemoCleanup(state) {
  if (state.appliedDemoCleanups?.includes(APPROVED_TIMETABLE_CLEANUP)) return state;
  const removed = state.lessons.filter((lesson) => lesson.tutorId === CANONICAL_TUTOR_ID
    && lesson.requestId === 'req-1' && lesson.date === '2026-10-01'
    && lesson.subject === 'Toán lớp 8' && lesson.learner === 'Phụ huynh bé An'
    && lesson.start === 1095 && lesson.end === 1185);
  const removedIds = new Set(removed.map((lesson) => lesson.id));
  return { ...state,
    lessons: state.lessons.filter((lesson) => !removedIds.has(lesson.id)),
    requests: state.requests.map((request) => removed.length && request.id === 'req-1' && request.tutorId === CANONICAL_TUTOR_ID
      ? { ...request, proposals: (request.proposals || []).filter((proposal) => !(proposal.date === '2026-10-01' && proposal.start === 1095 && proposal.end === 1185)) } : request),
    availability: state.availability.flatMap((range) => subtractRange(range,
      { tutorId: CANONICAL_TUTOR_ID, date: '2026-10-02', start: 1080, end: 1320 })),
    appliedDemoCleanups: [...(state.appliedDemoCleanups || []), APPROVED_TIMETABLE_CLEANUP],
  };
}
const legacyStatuses = { 'Chờ phản hồi': 'pending', 'Đã xác nhận': 'accepted', 'Hoàn tất': 'accepted', 'Đã hủy': 'cancelled' };
export function normalizeRequest(request, learnerId = request.learnerId ?? null) {
  return { ...request, learnerId, status: legacyStatuses[request.status] || request.status,
    ...(request.status === 'Hoàn tất' ? { legacyLessonStatus: 'completed' } : {}),
    note: request.note ?? request.goal ?? '', goal: request.goal ?? request.note ?? '',
    subjects: request.subjects || [request.subject].filter(Boolean) };
}
export function addLearnerRequest(state, user, values, now = new Date()) {
  const tutor = state.profiles.find((p) => p.id === values.tutorId);
  if (user?.role !== 'learner' || !tutor) return { error: 'Đăng nhập người học và chọn hồ sơ gia sư hợp lệ.' };
  if (!values.subjects?.length || !values.levels?.length || !values.formats?.length || !values.goal?.trim() || (values.formats.includes('Tại nhà') && !values.areas?.length)) return { error: 'Vui lòng hoàn thành các lựa chọn trước khi gửi.' };
  const proposals = values.proposals || [];
  if (!proposals.length || proposals.some((p, index) => {
    const schedule = selectPublicTutorSchedule(state, tutor, weekDates(0, new Date(p.date + 'T12:00:00')), tutor.sessionMinutes);
    return !isFutureSession(p, now) || !isValidProposal(p, schedule.ranges, schedule.sessionMinutes, proposals.slice(0, index));
  })) return { error: 'Buổi học đã qua hoặc lịch rảnh đã thay đổi. Vui lòng chọn lại.' };
  let number = state.nextRequestNumber;
  while (state.requests.some((r) => r.id === 'request-' + number)) number++;
  const id = 'request-' + number;
  const request = normalizeRequest({ ...structuredClone(values), id, learnerId: user.id, learner: user.fullName,
    status: 'pending', received: 'Vừa gửi', area: values.areas?.join(', ') || values.format,
    sessionFee: tutor.price });
  return { id, state: { ...state, nextRequestNumber: number + 1, requests: [...state.requests, request] } };
}
export const defaultSubjects = [
  { id: 'sub-toan', name: 'Toán', category: 'Khoa học tự nhiên', isActive: true, createdAt: '2026-09-01T00:00:00Z' },
  { id: 'sub-van', name: 'Ngữ văn', category: 'Khoa học xã hội', isActive: true, createdAt: '2026-09-01T00:00:00Z' },
  { id: 'sub-anh', name: 'Tiếng Anh', category: 'Ngoại ngữ', isActive: true, createdAt: '2026-09-01T00:00:00Z' },
  { id: 'sub-ly', name: 'Vật lý', category: 'Khoa học tự nhiên', isActive: true, createdAt: '2026-09-01T00:00:00Z' },
  { id: 'sub-hoa', name: 'Hóa học', category: 'Khoa học tự nhiên', isActive: true, createdAt: '2026-09-01T00:00:00Z' },
  { id: 'sub-sinh', name: 'Sinh học', category: 'Khoa học tự nhiên', isActive: true, createdAt: '2026-09-01T00:00:00Z' },
  { id: 'sub-su', name: 'Lịch sử', category: 'Khoa học xã hội', isActive: true, createdAt: '2026-09-01T00:00:00Z' },
  { id: 'sub-dia', name: 'Địa lý', category: 'Khoa học xã hội', isActive: true, createdAt: '2026-09-01T00:00:00Z' },
  { id: 'sub-tin', name: 'Tin học', category: 'Công nghệ', isActive: true, createdAt: '2026-09-01T00:00:00Z' },
  { id: 'sub-ielts', name: 'IELTS', category: 'Chứng chỉ ngoại ngữ', isActive: true, createdAt: '2026-09-01T00:00:00Z' },
  { id: 'sub-toeic', name: 'TOEIC', category: 'Chứng chỉ ngoại ngữ', isActive: true, createdAt: '2026-09-01T00:00:00Z' },
  { id: 'sub-py', name: 'Lập trình Python', category: 'Công nghệ', isActive: true, createdAt: '2026-09-01T00:00:00Z' },
];

export const defaultLocations = [
  { id: 'loc-q1', name: 'Quận 1', city: 'TP. Hồ Chí Minh', district: 'Quận 1', isActive: true, createdAt: '2026-09-01T00:00:00Z' },
  { id: 'loc-q3', name: 'Quận 3', city: 'TP. Hồ Chí Minh', district: 'Quận 3', isActive: true, createdAt: '2026-09-01T00:00:00Z' },
  { id: 'loc-q5', name: 'Quận 5', city: 'TP. Hồ Chí Minh', district: 'Quận 5', isActive: true, createdAt: '2026-09-01T00:00:00Z' },
  { id: 'loc-q7', name: 'Quận 7', city: 'TP. Hồ Chí Minh', district: 'Quận 7', isActive: true, createdAt: '2026-09-01T00:00:00Z' },
  { id: 'loc-q10', name: 'Quận 10', city: 'TP. Hồ Chí Minh', district: 'Quận 10', isActive: true, createdAt: '2026-09-01T00:00:00Z' },
  { id: 'loc-binhthanh', name: 'Bình Thạnh', city: 'TP. Hồ Chí Minh', district: 'Bình Thạnh', isActive: true, createdAt: '2026-09-01T00:00:00Z' },
  { id: 'loc-phunhuan', name: 'Phú Nhuận', city: 'TP. Hồ Chí Minh', district: 'Phú Nhuận', isActive: true, createdAt: '2026-09-01T00:00:00Z' },
  { id: 'loc-thuduc', name: 'Thủ Đức', city: 'TP. Hồ Chí Minh', district: 'TP. Thủ Đức', isActive: true, createdAt: '2026-09-01T00:00:00Z' },
  { id: 'loc-caugiay', name: 'Cầu Giấy', city: 'Hà Nội', district: 'Cầu Giấy', isActive: true, createdAt: '2026-09-01T00:00:00Z' },
  { id: 'loc-dongda', name: 'Đống Đa', city: 'Hà Nội', district: 'Đống Đa', isActive: true, createdAt: '2026-09-01T00:00:00Z' },
];

export const defaultSystemSettings = {
  sessionDurations: [45, 90],
  defaultSessionDuration: 45,
  maxStartHour: '22:00',
  operatingHours: { start: '06:00', end: '24:00' },
  platformFeePercent: 10,
  topRatedFeePercent: 7,
  autoSuspendThreshold: 3,
};

export const defaultAuditLogs = [
  {
    id: 'log-001',
    actorId: 'demo-admin',
    actorName: 'Quản trị viên',
    role: 'admin',
    action: 'APPROVE_TUTOR',
    targetType: 'tutor_profile',
    targetId: 'mai-anh',
    details: 'Phê duyệt hồ sơ gia sư và cấp tích xanh chứng nhận thẻ sinh viên',
    createdAt: '2026-10-01T09:30:00+07:00'
  },
  {
    id: 'log-002',
    actorId: 'demo-admin',
    actorName: 'Quản trị viên',
    role: 'admin',
    action: 'RESOLVE_DISPUTE',
    targetType: 'issue',
    targetId: 'ISSUE-101',
    details: 'Hòa giải tranh chấp dời lịch học do gia sư bị sốt cấp tính',
    createdAt: '2026-10-02T14:15:00+07:00'
  },
  {
    id: 'log-003',
    actorId: 'demo-admin',
    actorName: 'Quản trị viên',
    role: 'admin',
    action: 'UPDATE_SETTINGS',
    targetType: 'system_settings',
    targetId: 'fee_configuration',
    details: 'Cập nhật phí sàn 10% và ưu đãi Top-Rated Tutor 7%',
    createdAt: '2026-10-03T10:00:00+07:00'
  }
];

export const defaultNotifications = [
  {
    id: 'notif-001',
    recipientId: 'demo-learner',
    type: 'bid_received',
    title: 'Có gia sư ứng tuyển lớp mới!',
    message: 'Gia sư Trần Gia Bảo vừa gửi hồ sơ ứng tuyển lớp Toán 8 của bạn với học phí 220.000 đ/buổi.',
    link: '/learner/my-classes',
    isRead: false,
    createdAt: '2026-10-04T16:20:00+07:00'
  },
  {
    id: 'notif-002',
    recipientId: 'demo-tutor',
    type: 'new_class',
    title: 'Lớp học mới gần bạn!',
    message: 'Có phụ huynh vừa đăng tin tìm gia sư Tiếng Anh lớp 9 tại Quận Bình Thạnh.',
    link: '/tutor/find-students',
    isRead: false,
    createdAt: '2026-10-04T17:00:00+07:00'
  },
  {
    id: 'notif-003',
    recipientId: 'demo-admin',
    type: 'verification_request',
    title: 'Hồ sơ sinh viên chờ duyệt',
    message: 'Gia sư Lê Thảo Vy vừa cập nhật thẻ sinh viên ĐH Bách Khoa cần đối soát cấp Tích xanh.',
    link: '/admin/tutors',
    isRead: false,
    createdAt: '2026-10-05T08:00:00+07:00'
  }
];

export const defaultWallets = {
  'demo-learner': {
    accountId: 'demo-learner',
    availableBalance: 2500000,
    escrowBalance: 440000,
    ledger: [
      {
        id: 'tx-l-001',
        type: 'deposit_vietqr',
        amount: 3000000,
        description: 'Nạp tiền vào Ví học viên qua VietQR Napas 247',
        status: 'completed',
        createdAt: '2026-10-01T10:00:00+07:00'
      },
      {
        id: 'tx-l-002',
        type: 'escrow_hold',
        amount: -440000,
        description: 'Tạm giữ ký quỹ Escrow bảo vệ 2 buổi Toán lớp 8',
        refId: 'escrow-001',
        status: 'held',
        createdAt: '2026-10-02T11:00:00+07:00'
      }
    ]
  },
  'demo-tutor': {
    accountId: 'demo-tutor',
    availableBalance: 1250000,
    escrowBalance: 0,
    bankAccount: {
      bankName: 'Vietcombank',
      accountNumber: '1012345678',
      accountHolder: 'TRAN GIA BAO'
    },
    ledger: [
      {
        id: 'tx-t-001',
        type: 'lesson_disbursed',
        amount: 396000,
        description: 'Thù lao buổi dạy Toán 8 hoàn tất (440.000đ trừ 10% phí sàn)',
        refId: 'lesson-can-1',
        status: 'completed',
        createdAt: '2026-09-30T20:00:00+07:00'
      },
      {
        id: 'tx-t-002',
        type: 'cancellation_compensation',
        amount: 110000,
        description: 'Đền bù học viên hủy lịch sát giờ (50% học phí 220.000đ)',
        status: 'completed',
        createdAt: '2026-10-03T18:00:00+07:00'
      }
    ]
  }
};

export const defaultEscrowTransactions = [
  {
    id: 'escrow-001',
    classPostId: 'post-101',
    proposalId: 'prop-201',
    learnerId: 'demo-learner',
    tutorId: 'demo-tutor',
    subject: 'Toán lớp 8',
    amount: 440000,
    sessionCount: 2,
    feePerSession: 220000,
    platformFeePercent: 10,
    status: 'held',
    heldAt: '2026-10-02T11:00:00+07:00',
    disbursedAt: null,
    refundedAt: null,
  }
];

export const defaultClassPosts = [
  {
    id: 'post-101',
    learnerId: 'demo-learner',
    learnerName: 'Nguyễn Minh Anh',
    subject: 'Toán',
    grade: 'Lớp 8',
    format: 'offline',
    location: 'Bình Thạnh, TP. Hồ Chí Minh',
    address: '123 Điện Biên Phủ, P.15, Bình Thạnh',
    scheduleDesc: 'Thứ 3 và Thứ 5 (18:30 - 20:00)',
    budgetMode: 'fixed',
    budgetAmount: 220000,
    minBudget: 200000,
    maxBudget: 250000,
    trialLessonRequested: true,
    learningGoal: 'Lấy lại căn bản hình học không gian và ôn thi giữa kỳ',
    status: 'open',
    moderationStatus: 'approved',
    createdAt: '2026-10-03T09:00:00+07:00',
    proposalCount: 2,
  },
  {
    id: 'post-102',
    learnerId: 'demo-learner-2',
    learnerName: 'Trần Thu Hà',
    subject: 'Tiếng Anh',
    grade: 'Lớp 9',
    format: 'online',
    location: 'Toàn quốc (Online)',
    address: 'Học qua Google Meet',
    scheduleDesc: 'Thứ 2, Thứ 4, Thứ 6 (19:30 - 21:00)',
    budgetMode: 'range',
    budgetAmount: 250000,
    minBudget: 220000,
    maxBudget: 280000,
    trialLessonRequested: false,
    learningGoal: 'Luyện đề thi tuyển sinh vào lớp 10 chuyên Anh',
    status: 'open',
    moderationStatus: 'approved',
    createdAt: '2026-10-04T14:30:00+07:00',
    proposalCount: 1,
  },
  {
    id: 'post-103',
    learnerId: 'demo-learner-3',
    learnerName: 'Lê Hoàng Nam',
    subject: 'Vật lý',
    grade: 'Lớp 11',
    format: 'offline',
    location: 'Quận 3, TP. Hồ Chí Minh',
    address: '45 Võ Văn Tần, P.6, Quận 3',
    scheduleDesc: 'Thứ 7 & Chủ nhật (09:00 - 10:30)',
    budgetMode: 'negotiable',
    budgetAmount: 300000,
    minBudget: 250000,
    maxBudget: 350000,
    trialLessonRequested: true,
    learningGoal: 'Nắm vững kiến thức điện xoay chiều và dao động điều hòa',
    status: 'open',
    moderationStatus: 'approved',
    createdAt: '2026-10-05T08:15:00+07:00',
    proposalCount: 0,
  }
];

export const defaultProposals = [
  {
    id: 'prop-201',
    classPostId: 'post-101',
    tutorId: 'demo-tutor',
    tutorName: 'Trần Gia Bảo',
    tutorUniversity: 'ĐH Sư Phạm TP.HCM (Sư phạm Toán)',
    tutorRating: 4.9,
    tutorPunctualityRate: 99,
    hasStudentBadge: true,
    tier: 'top_rated',
    proposedFee: 220000,
    platformFee: 22000,
    netPayout: 198000,
    coverNote: 'Chào phụ huynh, em là sinh viên năm 3 Sư Phạm Toán, đã có 2 năm kinh nghiệm dạy kèm toán 8-9 lấy lại căn bản rất nhanh.',
    status: 'pending',
    createdAt: '2026-10-03T11:20:00+07:00',
  },
  {
    id: 'prop-202',
    classPostId: 'post-101',
    tutorId: 'mai-anh',
    tutorName: 'Nguyễn Mai Anh',
    tutorUniversity: 'ĐH Bách Khoa TP.HCM (Khoa học Máy tính)',
    tutorRating: 4.8,
    tutorPunctualityRate: 97,
    hasStudentBadge: true,
    tier: 'pro',
    proposedFee: 240000,
    platformFee: 24000,
    netPayout: 216000,
    coverNote: 'Em có thế mạnh phương pháp tư duy logic và giải toán trắc nghiệm nhanh, sẵn sàng kèm học thử 1 buổi.',
    status: 'pending',
    createdAt: '2026-10-03T15:40:00+07:00',
  },
  {
    id: 'prop-203',
    classPostId: 'post-102',
    tutorId: 'thao-vy',
    tutorName: 'Lê Thảo Vy',
    tutorUniversity: 'ĐH Ngoại Thương TP.HCM (Kinh tế Đối ngoại)',
    tutorRating: 5.0,
    tutorPunctualityRate: 100,
    hasStudentBadge: true,
    tier: 'top_rated',
    proposedFee: 250000,
    platformFee: 17500,
    netPayout: 232500,
    coverNote: 'IELTS 8.0, kinh nghiệm luyện thi vào lớp 10 các trường chuyên Lê Hồng Phong, Trần Đại Nghĩa.',
    status: 'pending',
    createdAt: '2026-10-04T16:10:00+07:00',
  }
];

export const defaultChatThreads = [
  {
    id: 'thread-001',
    learnerId: 'demo-learner',
    tutorId: 'demo-tutor',
    learnerName: 'Nguyễn Minh Anh',
    tutorName: 'Trần Gia Bảo',
    lastMessageText: 'Gia sư vừa gửi đề xuất học phí: 220.000 đ/buổi (2 buổi/tuần)',
    lastMessageAt: '2026-10-04T15:10:00+07:00',
    unreadCountLearner: 1,
    unreadCountTutor: 0,
  }
];

export const defaultMessages = [
  {
    id: 'msg-001',
    threadId: 'thread-001',
    senderId: 'demo-learner',
    senderName: 'Nguyễn Minh Anh',
    senderRole: 'learner',
    text: 'Chào bạn Bảo, bé nhà mình hiện đang bị hổng phần hình học lớp 8, bạn có thể kèm tuần 2 buổi được không?',
    type: 'text',
    offerData: null,
    createdAt: '2026-10-04T14:45:00+07:00'
  },
  {
    id: 'msg-002',
    threadId: 'thread-001',
    senderId: 'demo-tutor',
    senderName: 'Trần Gia Bảo',
    senderRole: 'tutor',
    text: 'Dạ chào chị Minh Anh! Em hoàn toàn sắp xếp được lịch vào tối Thứ 3 và Thứ 5 ạ. Em sẽ mang theo giáo án chuyên biệt để test năng lực buổi đầu cho bé.',
    type: 'text',
    offerData: null,
    createdAt: '2026-10-04T15:00:00+07:00'
  },
  {
    id: 'msg-003',
    threadId: 'thread-001',
    senderId: 'demo-tutor',
    senderName: 'Trần Gia Bảo',
    senderRole: 'tutor',
    text: 'Đề xuất kế hoạch học tập môn Toán 8',
    type: 'custom_offer',
    offerData: {
      id: 'offer-301',
      subject: 'Toán lớp 8',
      grade: 'Lớp 8',
      sessionsCount: 2,
      sessionFee: 220000,
      totalAmount: 440000,
      scheduleSummary: 'Thứ 3 & Thứ 5 (18:30 - 20:00)',
      status: 'pending',
    },
    createdAt: '2026-10-04T15:10:00+07:00'
  }
];

export const defaultSafetyLogs = [
  {
    id: 'safe-001',
    lessonId: 'lesson-can-1',
    tutorId: 'demo-tutor',
    action: 'checkin',
    timestamp: '2026-10-01T18:25:00+07:00',
    location: '123 Điện Biên Phủ, P.15, Bình Thạnh',
    note: 'Gia sư đã check-in an toàn tại điểm dạy nhà phụ huynh',
  }
];

export const defaultTwoWayReviews = [
  {
    id: 'tw-rev-001',
    lessonId: 'lesson-can-1',
    tutorId: 'demo-tutor',
    learnerId: 'demo-learner',
    reviewerRole: 'tutor',
    studentAttitudeRating: 5,
    punctualityRating: 5,
    comment: 'Bé An rất lễ phép, tập trung nghe giảng và làm bài tập đầy đủ. Phụ huynh chuẩn bị góc học tập rất yên tĩnh.',
    createdAt: '2026-10-01T20:05:00+07:00'
  }
];

export const defaultPayoutRequests = [
  {
    id: 'payout-001',
    tutorId: 'demo-tutor',
    tutorName: 'Trần Gia Bảo',
    bankName: 'Vietcombank',
    accountNumber: '1012345678',
    accountHolder: 'TRAN GIA BAO',
    amount: 500000,
    status: 'pending',
    requestedAt: '2026-10-04T16:00:00+07:00',
    processedAt: null,
    adminNote: '',
  }
];

export function createDemoState(now = new Date()) {
  const seed = structuredClone(fixture);
  const dates = weekDates(0, now);
  const lessons = [...seed.lessonTemplates.map(({ day, ...lesson }) => ({ ...lesson, date: localDateKey(dates[day]) })), ...(seed.historicalLessons || [])];
  const requests = seed.requests.map(({ proposalTemplate, ...request }) => normalizeRequest({ ...request,
    ...(proposalTemplate ? { proposals: proposalTemplate.days.map((day) => ({ date: localDateKey(dates[day]), start: proposalTemplate.start, end: proposalTemplate.end })) } : {}) }));
  return applyApprovedDemoCleanup({
    version: 1,
    profiles: seed.tutorProfiles,
    requests,
    lessons,
    availability: subtractLessons(weeklyScheduleRanges(seed.tutorProfiles.find((t) => t.id === CANONICAL_TUTOR_ID), dates), lessons),
    settings: Object.fromEntries(seed.tutorProfiles.filter((p) => p.accountId).map((p) => [p.id, { sessionMinutes: p.sessionMinutes }])),
    savedByAccount: Object.fromEntries(seed.learnerProfiles.map((p) => [p.accountId, p.savedTutorIds])),
    nextRequestNumber: 1,
    users: seed.accounts || seed.users || [],
    reviews: seed.reviews || [],
    issues: seed.issues || [],
    appeals: [],
    nextAppealNumber: 1,
    subjects: reconcileSubjectCatalog(structuredClone(defaultSubjects), defaultSubjects),
    locations: structuredClone(defaultLocations),
    systemSettings: structuredClone(defaultSystemSettings),
    auditLogs: structuredClone(defaultAuditLogs),
    notifications: structuredClone(defaultNotifications),
    wallets: structuredClone(defaultWallets),
    escrowTransactions: structuredClone(defaultEscrowTransactions),
    classPosts: structuredClone(defaultClassPosts),
    proposals: structuredClone(defaultProposals),
    chatThreads: structuredClone(defaultChatThreads),
    messages: structuredClone(defaultMessages),
    safetyLogs: structuredClone(defaultSafetyLogs),
    twoWayReviews: structuredClone(defaultTwoWayReviews),
    payoutRequests: structuredClone(defaultPayoutRequests),
  });
}
function read(storage, key) { try { return JSON.parse(storage.getItem(key)); } catch { return null; } }
function reconcileLessonSeed(state) {
  const templates = new Map(fixture.lessonTemplates.map((lesson) => [lesson.id, lesson]));
  const lessons = (state.lessons || []).map((lesson) => {
    const seed = templates.get(lesson.id);
    return lesson.sessionFee == null && Number.isFinite(seed?.sessionFee)
      ? { ...lesson, sessionFee: seed.sessionFee } : lesson;
  });
  const ids = new Set(lessons.map((lesson) => lesson.id));
  for (const history of fixture.historicalLessons || []) {
    if (ids.has(history.id)) continue;
    lessons.push(structuredClone(history));
    ids.add(history.id);
  }

  // Reconcile users
  const userMap = new Map((state.users || []).map((u) => [u.id, u]));
  for (const account of fixture.accounts || []) {
    if (!userMap.has(account.id)) {
      userMap.set(account.id, structuredClone(account));
    } else {
      const u = userMap.get(account.id);
      if (!u.status) u.status = account.status || 'active';
    }
  }

  // Reconcile reviews
  const reviewMap = new Map((state.reviews || []).map((r) => [r.id, r]));
  for (const review of fixture.reviews || []) {
    if (!reviewMap.has(review.id)) {
      reviewMap.set(review.id, structuredClone(review));
    }
  }

  // Reconcile issues
  const issueMap = new Map((state.issues || []).map((i) => [i.id, i]));
  for (const issue of fixture.issues || []) {
    if (!issueMap.has(issue.id)) {
      issueMap.set(issue.id, structuredClone(issue));
    }
  }

  // Reconcile profiles
  const profileMap = new Map((state.profiles || []).map((p) => [p.id, p]));
  for (const profile of fixture.tutorProfiles || []) {
    if (!profileMap.has(profile.id)) {
      profileMap.set(profile.id, structuredClone(profile));
    } else {
      const p = profileMap.get(profile.id);
      if (!p.moderationStatus) p.moderationStatus = profile.moderationStatus || 'approved';
      if (!p.documents && profile.documents) p.documents = structuredClone(profile.documents);
      if (!p.verificationDocuments && profile.verificationDocuments) p.verificationDocuments = structuredClone(profile.verificationDocuments);
      if (!p.verificationDocs && profile.verificationDocs) p.verificationDocs = structuredClone(profile.verificationDocs);
    }
  }

  // Saved availability predates newly reconciled history in older demo state.
  // Keep the free portions; occupied time must never remain bookable/rendered as free.
  return applyApprovedDemoCleanup({
    ...state,
    profiles: [...profileMap.values()],
    appeals: state.appeals || [],
    nextAppealNumber: state.nextAppealNumber || 1,
    users: [...userMap.values()],
    reviews: [...reviewMap.values()],
    issues: [...issueMap.values()],
    lessons,
    availability: subtractLessons(state.availability || [], lessons),
    subjects: reconcileSubjectCatalog(state.subjects || structuredClone(defaultSubjects), defaultSubjects),
    locations: state.locations || structuredClone(defaultLocations),
    systemSettings: state.systemSettings || structuredClone(defaultSystemSettings),
    auditLogs: state.auditLogs || structuredClone(defaultAuditLogs),
    notifications: state.notifications || structuredClone(defaultNotifications),
    wallets: state.wallets || structuredClone(defaultWallets),
    escrowTransactions: state.escrowTransactions || structuredClone(defaultEscrowTransactions),
    classPosts: state.classPosts || structuredClone(defaultClassPosts),
    proposals: state.proposals || structuredClone(defaultProposals),
    chatThreads: state.chatThreads || structuredClone(defaultChatThreads),
    messages: state.messages || structuredClone(defaultMessages),
    safetyLogs: state.safetyLogs || structuredClone(defaultSafetyLogs),
    twoWayReviews: state.twoWayReviews || structuredClone(defaultTwoWayReviews),
    payoutRequests: state.payoutRequests || structuredClone(defaultPayoutRequests),
  });
}
export function restoreDemoState(storage, now = new Date()) {
  const current = read(storage, DOMAIN_STORAGE_KEY);
  if (current?.version === 1 && Array.isArray(current.profiles) && Array.isArray(current.requests)) return reconcileLessonSeed(current);
  const state = createDemoState(now);
  // Compatibility inputs below replace fresh arrays; apply their correction after migration.
  delete state.appliedDemoCleanups;
  const profile = read(storage, 'tnm.tutorProfile');
  const workspace = read(storage, 'tnm.tutor.workspace.v3') || (read(storage, 'tnm.tutor.workspace.v2') && migrateWorkspaceV2(read(storage, 'tnm.tutor.workspace.v2'), profile?.sessionMinutes));
  const learner = read(storage, 'tnm.learnerRequests') || [];
  const tutor = workspace?.requests || [...(read(storage, 'tnm.tutorRequests') || []), ...(read(storage, 'tnm.tutor.referenceRequests.v1') || [])];
  const merged = new Map(state.requests.map((r) => [r.id, r]));
  for (const item of learner) merged.set(item.id, normalizeRequest({ ...merged.get(item.id), ...item }, item.learnerId || 'demo-learner'));
  for (const item of tutor) merged.set(item.id, normalizeRequest({ ...merged.get(item.id), ...item, tutorId: item.tutorId || CANONICAL_TUTOR_ID }));
  state.requests = [...merged.values()];
  if (workspace) {
    state.lessons = (workspace.lessons || state.lessons).map((lesson) => ({ ...lesson, tutorId: lesson.tutorId || CANONICAL_TUTOR_ID }));
    state.availability = normalizeRanges(workspace.availability || state.availability);
    state.settings = workspace.settings || state.settings;
  } else {
    const checks = read(storage, 'tnm.tutor.scheduleChecks.v1');
    if (Array.isArray(checks)) {
      const dates = weekDates(0, now); const periods = { morning: [420, 720], afternoon: [720, 1020], evening: [1020, 1320] };
      state.availability = subtractLessons(checks.flatMap((key) => {
        const [period, day] = key.split('-'); const range = periods[period]; const date = dates[Number(day)];
        return range && date ? [{ id: 'daypart-' + key, tutorId: CANONICAL_TUTOR_ID, date: localDateKey(date), start: range[0], end: range[1] }] : [];
      }), state.lessons);
    }
  }
  state.savedByAccount['demo-learner'] = read(storage, 'tnm.savedTutors') || [];
  if (profile) {
    const target = state.profiles.find((t) => t.id === CANONICAL_TUTOR_ID);
    for (const [oldKey, newKey] of Object.entries({ name: 'name', subjects: 'subjects', levels: 'levels', area: 'location', fee: 'price', bio: 'intro' })) {
      if (profile[oldKey] === undefined || JSON.stringify(profile[oldKey]) === JSON.stringify(fixture.legacyTutorProfileDefaults[oldKey])) continue;
      target[newKey] = oldKey === 'subjects' ? String(profile[oldKey]).split(',').map((s) => s.trim()).filter(Boolean) : oldKey === 'fee' ? Number(profile[oldKey]) : profile[oldKey];
    }
    target.areas = [target.location];
    if (!workspace?.settings) state.settings[CANONICAL_TUTOR_ID] = { sessionMinutes: normalizeSessionMinutes(profile.sessionMinutes) };
  }
  return reconcileLessonSeed(state);
}
export function requestIsCompleted(state, request) {
  const lessons = state.lessons.filter((l) => l.requestId === request.id && l.status !== 'cancelled');
  return request.status === 'accepted' && (lessons.length ? lessons.every((l) => l.status === 'completed') : request.legacyLessonStatus === 'completed');
}
export function updateLearnerRequest(state, accountId, id, patch) {
  return { ...state, requests: state.requests.map((request) => {
    if (request.id !== id || request.learnerId !== accountId) return request;
    const next = { ...request };
    if (request.status === 'pending' && patch.status === 'cancelled') next.status = 'cancelled';
    if (requestIsCompleted(state, request) && patch.review) { next.review = patch.review; next.rating = patch.rating; }
    return next;
  }) };
}
export function decideRequest(state, id, status, tutorId) {
  const request = state.requests.find((r) => r.id === id && r.tutorId === tutorId);
  if (!request || request.status !== 'pending') return { error: 'Yêu cầu này không còn chờ phản hồi hoặc không thuộc gia sư.' };
  if (status === 'accepted') return acceptanceResult(state, id);
  if (status !== 'rejected') return { error: 'Trạng thái không hợp lệ.' };
  return { state: { ...state, requests: state.requests.map((r) => r.id === id ? { ...r, status } : r) } };
}
export const canCompleteLesson = (lesson) => ['confirmed', 'upcoming'].includes(lesson?.status);
export function completeDomainLesson(state, tutorId, id) {
  const lesson = state.lessons.find(l => l.id === id && l.tutorId === tutorId && canCompleteLesson(l));
  if (!lesson) return state;
  const escrow = linkedEscrow(state, id);
  const next = escrow ? settleEscrow(state, escrow.id, { lessonId: id }) : state;
  return { ...next, lessons: next.lessons.map(l => l.id === id ? { ...l, status: 'completed', completedAt: new Date().toISOString() } : l) };
}

export function approveTutor(state, tutorId) {
  if (!state?.profiles || !tutorId) return state;
  const target = state.profiles.find((p) => p.id === tutorId);
  if (!target) return state;

  const nowIso = new Date().toISOString();
  const updatedProfile = {
    ...target,
    moderationStatus: 'approved',
    status: 'approved',
    rejectionReason: null,
    approvedAt: target.approvedAt || nowIso,
    verified: hasUploadedStudentCard(target) || Boolean(target.verified),
  };

  const accountId = target.accountId || target.id;
  const updatedUsers = state.users
    ? state.users.map((u) => {
        if (u.id !== accountId && u.id !== tutorId) return u;
        return {
          ...u,
          status: 'active',
          suspendedAt: null,
          suspendReason: null,
        };
      })
    : state.users;

  return {
    ...state,
    profiles: state.profiles.map((p) => (p.id === tutorId ? updatedProfile : p)),
    ...(updatedUsers ? { users: updatedUsers } : {}),
  };
}

export function rejectTutor(state, tutorId, reason) {
  if (!state?.profiles || !tutorId) return state;
  const target = state.profiles.find((p) => p.id === tutorId);
  if (!target) return state;

  const rejectionReason = (reason && String(reason).trim()) || 'Hồ sơ chưa đạt yêu cầu';
  const updatedProfile = {
    ...target,
    moderationStatus: 'rejected',
    status: 'rejected',
    rejectionReason,
    rejectedAt: new Date().toISOString(),
  };

  return {
    ...state,
    profiles: state.profiles.map((p) => (p.id === tutorId ? updatedProfile : p)),
  };
}

export function setTutorSuspension(state, tutorId, isSuspended, reason) {
  if (!state?.profiles || !tutorId) return state;
  const target = state.profiles.find((p) => p.id === tutorId);
  if (!target) return state;

  const nowIso = new Date().toISOString();
  const nextModerationStatus = isSuspended
    ? 'suspended'
    : (target.previousModerationStatus || 'approved');
  const nextStatus = nextModerationStatus;

  const updatedProfile = {
    ...target,
    moderationStatus: nextModerationStatus,
    status: nextStatus,
    ...(isSuspended
      ? {
          previousModerationStatus: target.moderationStatus !== 'suspended'
            ? target.moderationStatus
            : (target.previousModerationStatus || 'approved'),
          suspendedAt: nowIso,
          suspendReason: reason?.trim() || target.suspendReason || null,
        }
      : {
          suspendedAt: null,
          suspendReason: null,
        }),
  };

  const accountId = target.accountId || target.id;
  const updatedUsers = state.users
    ? state.users.map((u) => {
        if (u.id !== accountId && u.id !== tutorId) return u;
        return {
          ...u,
          status: isSuspended ? 'suspended' : 'active',
          suspendedAt: isSuspended ? (u.suspendedAt || nowIso) : null,
          suspendReason: isSuspended ? reason?.trim() || u.suspendReason || null : null,
        };
      })
    : state.users;

  return {
    ...state,
    profiles: state.profiles.map((p) => (p.id === tutorId ? updatedProfile : p)),
    ...(updatedUsers ? { users: updatedUsers } : {}),
  };
}

export function setUserSuspension(state, userId, isSuspended, reason) {
  if (!userId) return state;
  const nowIso = new Date().toISOString();

  const updatedUsers = (state.users || []).map((u) => {
    if (u.id !== userId) return u;
    return {
      ...u,
      status: isSuspended ? 'suspended' : 'active',
      suspendedAt: isSuspended ? (u.suspendedAt || nowIso) : null,
      suspendReason: isSuspended ? reason?.trim() || u.suspendReason || null : null,
    };
  });

  const updatedProfiles = (state.profiles || []).map((p) => {
    if (p.accountId !== userId && p.id !== userId) return p;
    if (isSuspended) {
      return {
        ...p,
        moderationStatus: 'suspended',
        status: 'suspended',
        previousModerationStatus: p.moderationStatus !== 'suspended'
          ? p.moderationStatus
          : (p.previousModerationStatus || 'approved'),
        suspendedAt: nowIso,
      };
    }
    return {
      ...p,
      moderationStatus: p.previousModerationStatus || 'approved',
      status: p.previousModerationStatus || 'approved',
      suspendedAt: null,
      suspendReason: null,
    };
  });

  return {
    ...state,
    users: updatedUsers,
    profiles: updatedProfiles,
  };
}

export function moderateReview(state, reviewId, decision) {
  if (!state?.reviews || !reviewId) return state;
  const target = state.reviews.find((r) => r.id === reviewId);
  if (!target) return state;

  const isApproved = decision === 'approved';
  const nextModerationStatus = isApproved ? 'approved' : (decision === 'rejected' ? 'rejected' : 'hidden');
  const nextVisibility = isApproved ? 'public' : 'hidden';
  const nextStatus = nextModerationStatus;

  const updatedReview = {
    ...target,
    moderationStatus: nextModerationStatus,
    status: nextStatus,
    visibility: nextVisibility,
    moderatedAt: new Date().toISOString(),
  };

  return {
    ...state,
    reviews: state.reviews.map((r) => (r.id === reviewId ? updatedReview : r)),
  };
}

export function updateIssueStatus(state, issueId, status, resolutionNote) {
  if (!state?.issues || !issueId) return state;
  const target = state.issues.find((i) => i.id === issueId);
  if (!target) return state;

  const nowIso = new Date().toISOString();
  const isResolved = status === 'resolved';

  const updatedIssue = {
    ...target,
    status,
    ...(resolutionNote !== undefined ? { resolutionNote: String(resolutionNote).trim() } : {}),
    resolvedAt: isResolved ? (target.resolvedAt || nowIso) : null,
    updatedAt: nowIso,
    ...(isResolved && !target.resolvedBy ? { resolvedBy: 'Quản trị viên' } : {}),
  };

  return {
    ...state,
    issues: state.issues.map((i) => (i.id === issueId ? updatedIssue : i)),
  };
}

export function warnUserIssue(state, issueId, warningReason) {
  if (!state?.issues || !issueId) return state;
  const targetIssue = state.issues.find((i) => i.id === issueId);
  if (!targetIssue) return state;

  const nowIso = new Date().toISOString();
  const reasonText = String(warningReason || '').trim() || 'Vi phạm chính sách thỏa thuận buổi học';

  // Find target user
  const targetUserId = targetIssue.targetUser?.id || targetIssue.targetUserId || targetIssue.relatedTutorId || targetIssue.tutorId;
  const users = state.users || [];
  const profiles = state.profiles || [];

  const existingUser = users.find((u) => u.id === targetUserId || (u.tutorProfileId && u.tutorProfileId === targetUserId));

  let updatedUsers = users;
  let updatedProfiles = profiles;

  if (existingUser) {
    const currentWarnings = existingUser.warnings || [];
    const newWarning = {
      id: `warn-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      issueId,
      reason: reasonText,
      warnedAt: nowIso,
      warnedBy: 'Quản trị viên',
    };
    const nextWarningCount = (existingUser.warningCount || currentWarnings.length || 0) + 1;
    // Rule: quá 3 lần sẽ bị khóa (tức lần vi phạm thứ 4 trở đi: nextWarningCount > 3)
    const shouldSuspend = nextWarningCount > (state.systemSettings?.autoSuspendThreshold ?? 3);

    const updatedUser = {
      ...existingUser,
      warningCount: nextWarningCount,
      warnings: [...currentWarnings, newWarning],
      ...(shouldSuspend
        ? {
            status: 'suspended',
            suspendedReason: 'Tài khoản của bạn đã bị tạm khóa bởi Quản trị viên do vượt quá 3 lần bị cảnh cáo tranh chấp.',
            suspendedAt: nowIso,
          }
        : {}),
    };

    updatedUsers = users.map((u) => (u.id === existingUser.id ? updatedUser : u));

    if (shouldSuspend && (existingUser.role === 'tutor' || existingUser.tutorProfileId)) {
      const profileId = existingUser.tutorProfileId || existingUser.id;
      updatedProfiles = profiles.map((p) =>
        p.id === profileId
          ? {
              ...p,
              moderationStatus: 'suspended',
              status: 'suspended',
              suspendedReason: updatedUser.suspendedReason,
              suspendedAt: nowIso,
            }
          : p
      );
    }
  }

  const updatedIssue = {
    ...targetIssue,
    status: 'resolved',
    resolutionAction: 'warning_issued',
    resolutionNote: reasonText,
    resolvedAt: nowIso,
    updatedAt: nowIso,
    resolvedBy: 'Quản trị viên',
    warnedUserId: existingUser?.id || targetUserId,
  };

  return {
    ...state,
    users: updatedUsers,
    profiles: updatedProfiles,
    issues: state.issues.map((i) => (i.id === issueId ? updatedIssue : i)),
  };
}

export function dismissIssue(state, issueId, rejectionReason) {
  if (!state?.issues || !issueId) return state;
  const targetIssue = state.issues.find((i) => i.id === issueId);
  if (!targetIssue) return state;

  const nowIso = new Date().toISOString();
  const reasonText = String(rejectionReason || '').trim() || 'Chưa đủ chứng cứ xác thực khiếu nại';

  const updatedIssue = {
    ...targetIssue,
    status: 'dismissed',
    resolutionAction: 'dismissed_unverified',
    resolutionNote: reasonText,
    reporterNotice: reasonText,
    resolvedAt: nowIso,
    dismissedAt: nowIso,
    updatedAt: nowIso,
    resolvedBy: 'Quản trị viên',
  };

  return {
    ...state,
    issues: state.issues.map((i) => (i.id === issueId ? updatedIssue : i)),
  };
}

// ===========================================================================
// OMNICHANNEL DOMAIN REDUCERS
// ===========================================================================

// Catalog: Subjects
export function addDomainSubject(state, subjectData) {
  if (!state || !subjectData?.name?.trim()) return state;
  const name = subjectData.name.trim();
  const id = subjectData.id || `sub-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
  const newSubject = {
    id,
    name,
    category: subjectData.category?.trim() || 'Khác',
    isActive: subjectData.isActive ?? true,
    createdAt: new Date().toISOString(),
  };
  return {
    ...state,
    subjects: [...(state.subjects || []), newSubject],
  };
}

export function updateDomainSubject(state, subjectId, patch) {
  if (!state?.subjects || !subjectId) return state;
  return {
    ...state,
    subjects: state.subjects.map((sub) => (sub.id === subjectId ? { ...sub, ...patch } : sub)),
  };
}

export function toggleDomainSubjectStatus(state, subjectId) {
  if (!state?.subjects || !subjectId) return state;
  return {
    ...state,
    subjects: state.subjects.map((sub) => (sub.id === subjectId ? { ...sub, isActive: !sub.isActive } : sub)),
  };
}

// Catalog: Locations
export function addDomainLocation(state, locationData) {
  if (!state || !locationData?.name?.trim()) return state;
  const name = locationData.name.trim();
  const id = locationData.id || `loc-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
  const newLocation = {
    id,
    name,
    city: locationData.city?.trim() || 'TP. Hồ Chí Minh',
    district: locationData.district?.trim() || name,
    isActive: locationData.isActive ?? true,
    createdAt: new Date().toISOString(),
  };
  return {
    ...state,
    locations: [...(state.locations || []), newLocation],
  };
}

export function updateDomainLocation(state, locationId, patch) {
  if (!state?.locations || !locationId) return state;
  return {
    ...state,
    locations: state.locations.map((loc) => (loc.id === locationId ? { ...loc, ...patch } : loc)),
  };
}

export function toggleDomainLocationStatus(state, locationId) {
  if (!state?.locations || !locationId) return state;
  return {
    ...state,
    locations: state.locations.map((loc) => (loc.id === locationId ? { ...loc, isActive: !loc.isActive } : loc)),
  };
}

// System Settings & Audit Logs
export function updateDomainSystemSettings(state, patch) {
  if (!state || !patch) return state;
  const settings = { ...state.systemSettings, ...patch };
  if (!/^(?:[01]\d|2[0-2]):[0-5]\d$/.test(settings.maxStartHour || '')
    || ![settings.platformFeePercent, settings.topRatedFeePercent].every(v => Number.isFinite(v) && v >= 0 && v <= 100)
    || !Number.isInteger(settings.autoSuspendThreshold) || settings.autoSuspendThreshold < 1 || settings.autoSuspendThreshold > 10
    || !settings.sessionDurations?.length || settings.sessionDurations.some(v => ![45, 90].includes(v))
    || !settings.sessionDurations.includes(settings.defaultSessionDuration)) return state;
  return {
    ...state,
    systemSettings: { ...(state.systemSettings || {}), ...patch },
  };
}

export function recordAuditLog(state, logData) {
  if (!state || !logData) return state;
  const newLog = {
    id: `log-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    actorId: logData.actorId || 'system',
    actorName: logData.actorName || 'Hệ thống',
    role: logData.role || 'admin',
    action: logData.action || 'GENERAL_ACTION',
    targetType: logData.targetType || 'unknown',
    targetId: logData.targetId || null,
    details: logData.details || '',
    createdAt: new Date().toISOString(),
  };
  return {
    ...state,
    auditLogs: [newLog, ...(state.auditLogs || [])],
  };
}

// Notifications
export function addDomainNotification(state, notifData) {
  if (!state || !notifData?.recipientId) return state;
  const newNotif = {
    id: `notif-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    recipientId: notifData.recipientId,
    type: notifData.type || 'info',
    title: notifData.title || 'Thông báo',
    message: notifData.message || '',
    link: notifData.link || null,
    isRead: false,
    createdAt: new Date().toISOString(),
  };
  return {
    ...state,
    notifications: [newNotif, ...(state.notifications || [])],
  };
}

export function markNotificationRead(state, notifId) {
  if (!state?.notifications || !notifId) return state;
  return {
    ...state,
    notifications: state.notifications.map((n) => (n.id === notifId ? { ...n, isRead: true } : n)),
  };
}

export function markAllNotificationsRead(state, recipientId) {
  if (!state?.notifications) return state;
  return {
    ...state,
    notifications: state.notifications.map((n) => (!recipientId || n.recipientId === recipientId ? { ...n, isRead: true } : n)),
  };
}

// Wallets & Escrow
export function depositToWallet(state, accountId, amount, paymentMethod = 'vietqr') {
  if (!state || !accountId || !Number.isFinite(Number(amount)) || Number(amount) <= 0) return state;
  const currentWallets = state.wallets || {};
  const currentWallet = currentWallets[accountId] || { accountId, availableBalance: 0, escrowBalance: 0, ledger: [] };
  const tx = {
    id: `tx-dep-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    type: `deposit_${paymentMethod}`,
    amount: Number(amount),
    description: `Nạp tiền vào ví qua ${paymentMethod.toUpperCase()}`,
    status: 'completed',
    createdAt: new Date().toISOString(),
  };
  const updatedWallet = {
    ...currentWallet,
    availableBalance: (currentWallet.availableBalance || 0) + Number(amount),
    ledger: [tx, ...(currentWallet.ledger || [])],
  };
  return {
    ...state,
    wallets: {
      ...currentWallets,
      [accountId]: updatedWallet,
    },
  };
}

export function holdEscrowDeposit(state, { learnerId, tutorId, amount, classPostId, lessonId, subject, sessionCount, feePerSession }) {
  if (!state || !learnerId || !Number.isFinite(Number(amount)) || Number(amount) <= 0) return { error: 'Dữ liệu cọc không hợp lệ.' };
  const currentWallets = state.wallets || {};
  const learnerWallet = currentWallets[learnerId] || { accountId: learnerId, availableBalance: 0, escrowBalance: 0, ledger: [] };
  if ((learnerWallet.availableBalance || 0) < amount) {
    return { error: 'Số dư khả dụng trong ví không đủ. Vui lòng nạp thêm tiền qua VietQR.' };
  }
  const escrowId = `escrow-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
  const nowIso = new Date().toISOString();
  const tx = {
    id: `tx-esc-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    type: 'escrow_hold',
    amount: -Number(amount),
    description: `Tạm giữ cọc Escrow cho ${subject || 'buổi học'}`,
    refId: escrowId,
    status: 'held',
    createdAt: nowIso,
  };
  const updatedLearnerWallet = {
    ...learnerWallet,
    availableBalance: learnerWallet.availableBalance - Number(amount),
    escrowBalance: (learnerWallet.escrowBalance || 0) + Number(amount),
    ledger: [tx, ...(learnerWallet.ledger || [])],
  };
  const newEscrow = {
    id: escrowId,
    classPostId: classPostId || null,
    lessonId: lessonId || null,
    learnerId,
    tutorId,
    subject: subject || 'Buổi học',
    amount: Number(amount),
    sessionCount: sessionCount || 1,
    feePerSession: feePerSession || Number(amount),
    platformFeePercent: state.systemSettings?.platformFeePercent || 10,
    status: 'held',
    heldAt: nowIso,
    disbursedAt: null,
    refundedAt: null,
  };
  return {
    state: {
      ...state,
      wallets: {
        ...currentWallets,
        [learnerId]: updatedLearnerWallet,
      },
      escrowTransactions: [newEscrow, ...(state.escrowTransactions || [])],
    },
    escrowId,
  };
}

export function disburseEscrowLesson(state, escrowId) {
  return settleEscrow(state, escrowId);
}
export function refundEscrowLesson(state, escrowId, refundAmount, reason) {
  const escrow = state.escrowTransactions.find(e => e.id === escrowId && e.status === 'held');
  if (!escrow || !Number.isFinite(escrow.amount) || escrow.amount <= 0) return state;
  const amount = refundAmount == null ? escrow.amount : Number(refundAmount);
  if (!Number.isFinite(amount) || amount < 0 || amount > escrow.amount) return state;
  return settleEscrow(state, escrowId, { refundRatio: amount / escrow.amount, reason });
}

export function requestTutorPayout(state, { tutorId, tutorName, amount, bankName, accountNumber, accountHolder }) {
  if (!state || !tutorId || !Number.isFinite(Number(amount)) || Number(amount) <= 0) return { error: 'Số tiền rút không hợp lệ.' };
  const currentWallets = state.wallets || {};
  const tutorWallet = currentWallets[tutorId] || { accountId: tutorId, availableBalance: 0, escrowBalance: 0, ledger: [] };
  if ((tutorWallet.availableBalance || 0) < amount) {
    return { error: 'Số dư khả dụng không đủ để tạo lệnh rút tiền.' };
  }
  const nowIso = new Date().toISOString();
  const payoutId = `payout-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
  const tx = {
    id: `tx-wth-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    type: 'payout_hold',
    amount: -Number(amount),
    description: `Tạo lệnh rút tiền về STK ${accountNumber} (${bankName})`,
    refId: payoutId,
    status: 'pending',
    createdAt: nowIso,
  };
  const updatedTutorWallet = {
    ...tutorWallet,
    availableBalance: tutorWallet.availableBalance - Number(amount),
    ledger: [tx, ...(tutorWallet.ledger || [])],
  };
  const newPayoutRequest = {
    id: payoutId,
    tutorId,
    tutorName: tutorName || 'Gia sư',
    bankName,
    accountNumber,
    accountHolder,
    amount: Number(amount),
    status: 'pending',
    requestedAt: nowIso,
    processedAt: null,
    adminNote: '',
  };
  return {
    state: {
      ...state,
      wallets: {
        ...currentWallets,
        [tutorId]: updatedTutorWallet,
      },
      payoutRequests: [newPayoutRequest, ...(state.payoutRequests || [])],
    },
    payoutId,
  };
}

export function processPayoutRequest(state, payoutId, decision, adminNote = '') {
  if (!state?.payoutRequests || !payoutId) return state;
  const target = state.payoutRequests.find((p) => p.id === payoutId && p.status === 'pending');
  if (!target) return state;
  const nowIso = new Date().toISOString();
  const isApproved = decision === 'approved';

  let nextWallets = state.wallets || {};
  if (!isApproved) {
    const tutorWallet = nextWallets[target.tutorId] || { accountId: target.tutorId, availableBalance: 0, escrowBalance: 0, ledger: [] };
    const txRestore = {
      id: `tx-wth-res-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      type: 'payout_rejected_refund',
      amount: target.amount,
      description: `Hoàn tiền lệnh rút bị từ chối: ${adminNote || 'Thông tin STK không khớp'}`,
      refId: payoutId,
      status: 'completed',
      createdAt: nowIso,
    };
    nextWallets = {
      ...nextWallets,
      [target.tutorId]: {
        ...tutorWallet,
        availableBalance: (tutorWallet.availableBalance || 0) + target.amount,
        ledger: [txRestore, ...(tutorWallet.ledger || [])],
      },
    };
  }

  const updatedRequest = {
    ...target,
    status: isApproved ? 'approved' : 'rejected',
    processedAt: nowIso,
    adminNote: adminNote.trim(),
  };

  return {
    ...state,
    wallets: nextWallets,
    payoutRequests: state.payoutRequests.map((p) => (p.id === payoutId ? updatedRequest : p)),
  };
}

// Marketplace & Bidding
export function createClassPost(state, learnerUser, postData) {
  if (!state || learnerUser?.role !== 'learner' || !postData?.subject) return { error: 'Dữ liệu bài đăng lớp học không hợp lệ.' };
  const postId = `post-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
  const nowIso = new Date().toISOString();
  const newPost = {
    id: postId,
    learnerId: learnerUser.id,
    learnerName: learnerUser.fullName || 'Học viên',
    subject: postData.subject,
    grade: postData.grade || '',
    format: postData.format || 'offline',
    location: postData.location || '',
    address: postData.address || '',
    scheduleDesc: postData.scheduleDesc || 'Thương lượng',
    budgetMode: postData.budgetMode || 'fixed',
    budgetAmount: postData.budgetMode === 'negotiable' || postData.budgetAmount == null || postData.budgetAmount === '' ? null : Number(postData.budgetAmount),
    minBudget: postData.budgetMode !== 'range' || postData.minBudget == null || postData.minBudget === '' ? null : Number(postData.minBudget),
    maxBudget: !['range', 'max'].includes(postData.budgetMode) || postData.maxBudget == null || postData.maxBudget === '' ? null : Number(postData.maxBudget),
    trialLessonRequested: Boolean(postData.trialLessonRequested),
    learningGoal: postData.learningGoal || '',
    proposals: structuredClone(postData.proposals || []),
    status: 'open',
    moderationStatus: 'pending',
    trialMinutes: postData.trialLessonRequested ? 45 : null,
    createdAt: nowIso,
    proposalCount: 0,
  };
  return {
    state: {
      ...state,
      classPosts: [newPost, ...(state.classPosts || [])],
    },
    postId,
  };
}

export function updateClassPostStatus(state, postId, status) {
  if (!state?.classPosts || !postId) return state;
  return {
    ...state,
    classPosts: state.classPosts.map((cp) => (cp.id === postId ? { ...cp, status } : cp)),
  };
}

export function moderateClassPost(state, postId, moderationStatus) {
  if (!state?.classPosts || !postId) return state;
  return {
    ...state,
    classPosts: state.classPosts.map((cp) => (cp.id === postId ? { ...cp, moderationStatus } : cp)),
  };
}

export function submitTutorProposal(state, tutorUser, proposalData) {
  if (!state || !tutorUser || !proposalData?.classPostId) return { error: 'Dữ liệu ứng tuyển không hợp lệ.' };
  const profile = profileForTutor(state, tutorUser.id);
  if (tutorUser.role !== 'tutor' || !profile) return { error: 'Đăng nhập gia sư có hồ sơ hợp lệ.' };
  const post = (state.classPosts || []).find((cp) => cp.id === proposalData.classPostId);
  if (!post || post.status !== 'open' || post.moderationStatus !== 'approved') return { error: 'Lớp học chưa được duyệt, đã đóng hoặc không tìm thấy.' };
  const existingProp = (state.proposals || []).find((p) => p.classPostId === post.id && accountForTutor(state, p.tutorId) === tutorUser.id && p.status !== 'withdrawn');
  if (existingProp) return { error: 'Bạn đã nộp đơn ứng tuyển cho lớp học này rồi.' };

  const propId = `prop-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
  const nowIso = new Date().toISOString();
  const proposedFee = Number(proposalData.proposedFee);
  if (!Number.isFinite(proposedFee) || proposedFee <= 0) return { error: 'Học phí đề xuất cần là số dương.' };
  const tier = selectTutorTier(state, profile.id);
  const platformFeeRate = tier.feePercent;
  const platformFee = Math.round((proposedFee * platformFeeRate) / 100);
  const netPayout = proposedFee - platformFee;

  const newProposal = {
    id: propId,
    classPostId: post.id,
    tutorId: tutorUser.id,
    tutorName: profile.name,
    tutorUniversity: profile.university || '',
    tutorRating: profile.rating,
    tutorPunctualityRate: profile.punctualityRate,
    hasStudentBadge: profile.verified === true,
    tier: tier.tier,
    proposedFee,
    platformFee,
    netPayout,
    coverNote: proposalData.coverNote || '',
    status: 'pending',
    createdAt: nowIso,
  };

  const updatedClassPosts = state.classPosts.map((cp) =>
    cp.id === post.id ? { ...cp, proposalCount: (cp.proposalCount || 0) + 1 } : cp
  );

  return {
    state: {
      ...state,
      classPosts: updatedClassPosts,
      proposals: [newProposal, ...(state.proposals || [])],
    },
    proposalId: propId,
  };
}

export function selectTutorProposal(state, learnerId, proposalId) {
  const proposal = state.proposals.find(p => p.id === proposalId && p.status === 'pending');
  const post = state.classPosts.find(p => p.id === proposal?.classPostId && p.learnerId === learnerId && p.status === 'open' && p.moderationStatus === 'approved');
  if (!post) return { error: 'Only the owner of an approved open class may choose a candidate.' };
  const user = state.users.find(u => u.id === learnerId) || { id: learnerId, fullName: post.learnerName, role: 'learner' };
  const conversation = openDomainConversation(state, { ...user, role: 'learner' }, proposal.tutorId, post.id);
  if (conversation.error) return conversation;
  return { threadId: conversation.threadId, state: { ...conversation.state,
    proposals: state.proposals.map(p => p.classPostId === post.id ? { ...p, status: p.id === proposalId ? 'selected' : p.status } : p),
    classPosts: state.classPosts.map(p => p.id === post.id ? { ...p, status: 'awaiting_deposit', selectedProposalId: proposalId } : p),
  } };
}

// Direct Chat & In-Chat Commerce
export function sendChatMessage(state, threadId, senderUser, text) {
  if (!state || !threadId || !senderUser || !text?.trim()) return state;
  if (!threadHasUser(state.chatThreads.find(t => t.id === threadId), senderUser.id)) return state;
  const msgId = `msg-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
  const nowIso = new Date().toISOString();
  const trimmed = text.trim();
  const newMsg = {
    id: msgId,
    threadId,
    senderId: senderUser.id,
    senderName: senderUser.fullName || 'Người dùng',
    senderRole: senderUser.role,
    text: trimmed,
    type: 'text',
    offerData: null,
    createdAt: nowIso,
  };

  const updatedThreads = (state.chatThreads || []).map((th) => {
    if (th.id !== threadId) return th;
    return {
      ...th,
      lastMessageText: trimmed,
      lastMessageAt: nowIso,
    };
  });

  return {
    ...state,
    messages: [...(state.messages || []), newMsg],
    chatThreads: updatedThreads,
  };
}

export function sendInChatOffer(state, threadId, tutorUser, offerData) {
  if (!state || !threadId || !tutorUser || !offerData?.subject) return state;
  const thread = state.chatThreads.find(t => t.id === threadId);
  if (tutorUser.role !== 'tutor' || thread?.tutorId !== tutorUser.id) return state;
  const msgId = `msg-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
  const offerId = `offer-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
  const nowIso = new Date().toISOString();
  const fee = Number(offerData.sessionFee);
  const count = Number(offerData.sessionsCount);
  if (!Number.isFinite(fee) || fee <= 0 || !Number.isInteger(count) || count < 1) return state;
  const total = fee * count;

  const newMsg = {
    id: msgId,
    threadId,
    senderId: tutorUser.id,
    senderName: tutorUser.fullName || 'Gia sư',
    senderRole: 'tutor',
    text: `Đề xuất học phí: ${offerData.subject} (${fee.toLocaleString('vi-VN')} đ/buổi)`,
    type: 'custom_offer',
    offerData: {
      id: offerId,
      subject: offerData.subject,
      grade: offerData.grade || 'Toàn khối',
      sessionsCount: count,
      sessionFee: fee,
      totalAmount: total,
      scheduleSummary: offerData.scheduleSummary || 'Thỏa thuận trong chat',
      proposals: structuredClone(offerData.proposals || []),
      format: offerData.format || '',
      area: offerData.area || '',
      status: 'pending',
    },
    createdAt: nowIso,
  };

  const updatedThreads = (state.chatThreads || []).map((th) => {
    if (th.id !== threadId) return th;
    return {
      ...th,
      lastMessageText: `Đề xuất học phí mới: ${total.toLocaleString('vi-VN')} đ`,
      lastMessageAt: nowIso,
    };
  });

  return {
    ...state,
    messages: [...(state.messages || []), newMsg],
    chatThreads: updatedThreads,
  };
}

export function respondInChatOffer(state, messageId, decision, learnerUser, selection, now) {
  return acceptDomainOffer(state, messageId, decision, learnerUser, selection, now).state || state;
}

// Safety Shield
export function recordSafetyEvent(state, { lessonId, tutorId, action, note, location }) {
  if (!state) return state;
  const eventId = `safe-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
  const nowIso = new Date().toISOString();
  const newEvent = {
    id: eventId,
    lessonId: lessonId || null,
    tutorId: tutorId || null,
    action: action || 'checkin',
    timestamp: nowIso,
    location: location || '',
    note: note || '',
  };
  return {
    ...state,
    safetyLogs: [newEvent, ...(state.safetyLogs || [])],
  };
}

export function triggerLessonSOS(state, { lessonId, tutorId, note, emergencyContact }) {
  if (!state) return state;
  const nowIso = new Date().toISOString();
  const eventId = `safe-sos-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
  const newEvent = {
    id: eventId,
    lessonId: lessonId || null,
    tutorId: tutorId || null,
    action: 'sos',
    timestamp: nowIso,
    location: 'Tín hiệu nội bộ demo; không truy cập GPS hoặc gửi SMS',
    note: note || 'BÁO ĐỘNG SOS KHẨN CẤP ĐÃ KÍCH HOẠT!',
    emergencyContact: emergencyContact || 'Hotline 113',
  };

  const adminAlert = {
    id: `notif-sos-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    recipientId: 'demo-admin',
    type: 'sos_alert',
    title: '🚨 BÁO ĐỘNG SOS KHẨN CẤP TỪ GIA SƯ!',
    message: `Gia sư ${tutorId} vừa kích hoạt tín hiệu SOS tại buổi dạy ${lessonId || 'trực tiếp'}.`,
    link: '/admin/dashboard',
    isRead: false,
    createdAt: nowIso,
  };

  return {
    ...state,
    safetyLogs: [newEvent, ...(state.safetyLogs || [])],
    notifications: [adminAlert, ...(state.notifications || [])],
  };
}

// Cancellation with Progressive Penalty
export function cancelDomainLessonWithPenalty(state, lessonId, cancelledByRole, hoursBeforeLesson, reason, actor, now = new Date()) {
  const lesson = state.lessons.find(l => l.id === lessonId);
  if (!lesson || !canCompleteLesson(lesson) || !['learner', 'tutor'].includes(cancelledByRole)) return state;
  if (actor && (actor.role !== cancelledByRole || (actor.role === 'learner' ? lesson.learnerId !== actor.id : accountForTutor(state, lesson.tutorId) !== actor.id))) return state;
  const start = new Date(lesson.date + 'T00:00:00'); start.setMinutes(lesson.start);
  const hours = actor ? (start.getTime() - now.getTime()) / 3600000 : hoursBeforeLesson;
  if (!Number.isFinite(hours) || hours < 0) return state;
  const escrow = linkedEscrow(state, lessonId);
  const refundRatio = cancelledByRole === 'tutor' || hours >= 24 ? 1 : hours >= 2 ? .5 : 0;
  let next = escrow ? settleEscrow(state, escrow.id, { lessonId, refundRatio, compensation: true, reason, now }) : state;
  if (cancelledByRole === 'tutor' && hours < 24) {
    const accountId = accountForTutor(state, lesson.tutorId);
    const warning = { id: 'warning-' + lessonId, reason: reason || 'Cancelled lesson', warnedAt: now.toISOString(), warnedBy: 'system' };
    next = { ...next, users: next.users.map(u => u.id === accountId ? { ...u, warningCount: (u.warningCount || 0) + 1, warnings: [...(u.warnings || []), warning], ...(hours < 2 || (u.warningCount || 0) + 1 > (state.systemSettings?.autoSuspendThreshold ?? 3) ? { status: 'suspended' } : {}) } : u) };
  }
  next = { ...next, lessons: next.lessons.map(l => l.id === lessonId ? { ...l, status: 'cancelled', cancelledAt: now.toISOString(), cancelledByRole, cancelReason: reason || '' } : l) };
  if (hours >= 2) next.availability = normalizeRanges([...next.availability, { id: 'restored-' + lessonId, tutorId: lesson.tutorId, date: lesson.date, start: lesson.start, end: lesson.end }]);
  return next;
}

// Attendance resolution is a confirmed local demo action, distinct from a future cancellation.
export function markDomainLearnerNoShow(state, lessonId, actor, { confirmed = false, reason = '' } = {}, now = new Date()) {
  const lesson = state.lessons.find(l => l.id === lessonId);
  if (!confirmed || actor?.role !== 'tutor' || actor.appealOnly || !lesson || !canCompleteLesson(lesson)
    || accountForTutor(state, lesson.tutorId) !== actor.id) return { error: 'Xác nhận buổi học thuộc gia sư và vẫn đang diễn ra hoặc sắp diễn ra.' };
  const start = new Date(lesson.date + 'T00:00:00'); start.setMinutes(lesson.start);
  if (!Number.isFinite(start.getTime()) || !Number.isFinite(now.getTime()) || now < start) return { error: 'Chỉ ghi nhận người học vắng mặt sau giờ bắt đầu thực tế.' };
  const escrow = linkedEscrow(state, lessonId);
  let next = escrow ? settleEscrow(state, escrow.id, { lessonId, refundRatio: 0, compensation: true, reason: reason.trim() || 'Người học vắng mặt (demo)', now }) : state;
  const settled = next !== state;
  next = { ...next, lessons: next.lessons.map(l => l.id === lessonId ? { ...l, status: 'cancelled', cancelledAt: now.toISOString(), cancelledByRole: 'learner', cancellationCode: 'learner_no_show', cancelReason: reason.trim() || 'Người học vắng mặt (demo)' } : l) };
  return { ok: true, state: next, settled };
}

// Two-Way Reviews
export function submitTutorReviewOfLearner(state, { lessonId, tutorId, learnerId, studentAttitudeRating, punctualityRating, comment }) {
  if (!state || !lessonId || !tutorId) return state;
  const reviewId = `tw-rev-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
  const nowIso = new Date().toISOString();
  const newReview = {
    id: reviewId,
    lessonId,
    tutorId,
    learnerId: learnerId || 'demo-learner',
    reviewerRole: 'tutor',
    studentAttitudeRating: studentAttitudeRating || 5,
    punctualityRating: punctualityRating || 5,
    comment: comment?.trim() || '',
    createdAt: nowIso,
  };
  return {
    ...state,
    twoWayReviews: [newReview, ...(state.twoWayReviews || [])],
  };
}


