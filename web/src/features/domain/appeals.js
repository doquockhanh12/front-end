// Pure projections/actions on the existing demo domain, never a second store.
import { settleEscrow } from './commerce.js';
export const appealLabels = { pending: 'Chờ xem xét', in_review: 'Đang xem xét', accepted: 'Chấp nhận', rejected: 'Không chấp nhận' };
export const appealTones = { pending: 'warning', in_review: 'info', accepted: 'success', rejected: 'danger' };
export const appealReasons = { wrongful: 'Bị tố cáo oan', misunderstanding: 'Hiểu nhầm', exceptional: 'Sự cố / hoàn cảnh cần thông cảm' };
export const EVIDENCE_FILE_LIMIT = 500 * 1024;
export const EVIDENCE_TOTAL_LIMIT = 1024 * 1024;
export const evidenceTypes = ['image/png', 'image/jpeg', 'image/webp', 'application/pdf'];

export function issueReporterId(issue) {
  return issue.reportedBy?.id || issue.learnerId || issue.userId || issue.relatedUserId || null;
}
export function issueTargetId(state, issue) {
  const id = issue.targetUser?.id || issue.targetUserId || issue.relatedTutorId || issue.tutorId;
  return (state.users || []).find(u => u.id === id || u.tutorProfileId === id)?.id
    || (state.profiles || []).find(p => p.id === id)?.accountId || id || null;
}
export function accountHistory(state, accountId) {
  const user = (state.users || []).find(u => u.id === accountId);
  const warnings = [...(user?.warnings || [])].sort((a, b) => String(b.warnedAt || '').localeCompare(String(a.warnedAt || '')));
  return {
    accountId,
    reports: (state.issues || []).filter(i => accountId && issueReporterId(i) === accountId)
      .sort((a, b) => String(b.createdAt || '').localeCompare(String(a.createdAt || ''))),
    warnings,
    warningCount: Math.max(user?.warningCount || 0, warnings.length),
  };
}
export function safeEvidenceLink(value) {
  try { const url = new URL(value); return ['http:', 'https:'].includes(url.protocol) && !url.username && !url.password ? url.href : ''; }
  catch { return ''; }
}
export function validateEvidence(evidence) {
  if (!Array.isArray(evidence) || !evidence.length || evidence.length > 3) return 'Cần từ 1 đến 3 bằng chứng.';
  let totalBytes = 0;
  for (const item of evidence) {
    if (!item.description?.trim()) return 'Mô tả rõ nội dung và nguồn của từng bằng chứng.';
    if (item.kind === 'link') {
      if (!safeEvidenceLink(item.url)) return 'Liên kết bằng chứng phải là URL http/https hợp lệ.';
    } else if (item.kind === 'file') {
      if (!item.name?.trim() || !evidenceTypes.includes(item.type) || !item.data?.startsWith(`data:${item.type};base64,`)) return 'Chỉ hỗ trợ ảnh PNG/JPG/WebP hoặc PDF.';
      const payload = item.data.split(',')[1];
      if (!payload || !/^[A-Za-z0-9+/]+={0,2}$/.test(payload)) return 'Tệp bằng chứng không hợp lệ.';
      const bytes = Math.floor(payload.length * 3 / 4);
      if (bytes > EVIDENCE_FILE_LIMIT) return 'Mỗi tệp tối đa 500 KB trong bản demo.';
      totalBytes += bytes;
    } else return 'Loại bằng chứng không hợp lệ.';
  }
  return totalBytes > EVIDENCE_TOTAL_LIMIT ? 'Tổng tệp tối đa 1 MB trong bản demo.' : '';
}
export function submitAppeal(state, actor, values, now = new Date()) {
  if (!actor?.id || !['learner', 'tutor'].includes(actor.role)) return { error: 'Cần xác thực tài khoản người học hoặc gia sư.' };
  const issue = (state.issues || []).find(i => i.id === values.issueId);
  if (!issue || issueTargetId(state, issue) !== actor.id) return { error: 'Chỉ bên bị báo cáo được gửi kháng cáo cho sự cố này.' };
  if (!appealReasons[values.reason] || !values.content?.trim() || values.content.trim().length < 20) return { error: 'Chọn lý do và giải trình ít nhất 20 ký tự.' };
  if (!values.truthful) return { error: 'Cần cam kết nội dung và bằng chứng trung thực.' };
  const evidenceError = validateEvidence(values.evidence);
  if (evidenceError) return { error: evidenceError };
  const appeals = state.appeals || [];
  if (appeals.some(a => a.issueId === issue.id && a.accountId === actor.id && ['pending', 'in_review'].includes(a.status))) return { error: 'Sự cố này đã có kháng cáo đang được xem xét.' };
  let number = state.nextAppealNumber || 1;
  while (appeals.some(a => a.id === `appeal-${number}`)) number++;
  const appeal = { id: `appeal-${number}`, issueId: issue.id, accountId: actor.id, reason: values.reason,
    content: values.content.trim(), evidence: structuredClone(values.evidence), truthful: true, status: 'pending', createdAt: now.toISOString() };
  return { id: appeal.id, state: { ...state, appeals: [...appeals, appeal], nextAppealNumber: number + 1 } };
}
export function submitAppealEvidence(state, actor, id, values, now = new Date()) {
  const appeal = state.appeals.find(a => a.id === id && ['pending', 'in_review'].includes(a.status));
  const issue = state.issues.find(i => i.id === appeal?.issueId);
  if (!appeal || !issue || ![issueReporterId(issue), issueTargetId(state, issue)].includes(actor?.id)) return { error: 'Chỉ hai bên liên quan được bổ sung hồ sơ.' };
  if (!values.truthful || values.content?.trim().length < 20) return { error: 'Giải trình ít nhất 20 ký tự và cam kết trung thực.' };
  const error = validateEvidence(values.evidence); if (error) return { error };
  const response = { accountId: actor.id, role: actor.role, content: values.content.trim(), evidence: structuredClone(values.evidence), truthful: true, createdAt: now.toISOString() };
  return { state: { ...state, appeals: state.appeals.map(a => a.id === id ? { ...a, responses: [...(a.responses || []).filter(r => r.accountId !== actor.id), response] } : a) } };
}
export function reviewAppeal(state, actor, id, status, note, now = new Date(), actions = {}) {
  const target = (state.appeals || []).find(a => a.id === id);
  if (actor?.role !== 'admin' || actor.appealOnly || !target || !['pending', 'in_review'].includes(target.status)) return { error: 'Không thể xét duyệt hồ sơ này.' };
  if (!['in_review', 'accepted', 'rejected'].includes(status) || !note?.trim()) return { error: 'Chọn kết quả và ghi rõ căn cứ xem xét.' };
  const issue = state.issues.find(i => i.id === target.issueId);
  const actionable = actions.accountAction && actions.accountAction !== 'none' || actions.escrowAction && actions.escrowAction !== 'none' || actions.hideReviewId;
  if (actionable && (status !== 'accepted' || actions.confirmed !== true)) return { error: 'Hành động demo cần kết quả chấp nhận và xác nhận rõ ràng.' };
  let next = state;
  if (actions.accountAction && actions.accountAction !== 'none') {
    if (!['unsuspend', 'reduce_warning'].includes(actions.accountAction) || ![issueReporterId(issue), issueTargetId(state, issue)].includes(actions.accountId)) return { error: 'Tài khoản không thuộc sự cố.' };
    const account = state.users.find(u => u.id === actions.accountId);
    if (!account) return { error: 'Không tìm thấy tài khoản.' };
    const warning = actions.accountAction === 'reduce_warning' && account.warnings?.find(w => w.id === actions.warningId && w.issueId === issue.id);
    if (actions.accountAction === 'reduce_warning' && !warning) return { error: 'Chọn cảnh cáo thực tế gắn với sự cố.' };
    next = { ...next, users: next.users.map(u => u.id !== account.id ? u : actions.accountAction === 'unsuspend' ? { ...u, status: 'active', suspendedAt: null, suspendReason: null } : { ...u, warningCount: Math.max(0, (u.warningCount || 0) - 1), warnings: u.warnings.filter(w => w.id !== warning.id) }),
      profiles: next.profiles.map(p => p.accountId === account.id && actions.accountAction === 'unsuspend' ? { ...p, moderationStatus: p.previousModerationStatus || 'approved', status: p.previousModerationStatus || 'approved', suspendedAt: null, suspendReason: null } : p) };
  }
  if (actions.escrowAction && actions.escrowAction !== 'none') {
    const escrow = state.escrowTransactions.find(e => e.id === actions.escrowId && e.status === 'held' && (issue.relatedLessonId || issue.lessonId) && (e.lessonId === (issue.relatedLessonId || issue.lessonId) || e.lessonIds?.includes((issue.relatedLessonId || issue.lessonId))));
    if (!escrow || !['refund', 'disburse', 'split'].includes(actions.escrowAction)) return { error: 'Chỉ quyết toán ký quỹ chưa xử lý của buổi liên quan.' };
    next = settleEscrow(next, escrow.id, { lessonId: (issue.relatedLessonId || issue.lessonId), refundRatio: actions.escrowAction === 'refund' ? 1 : actions.escrowAction === 'split' ? .5 : 0, reason: note, now });
    if (next.escrowTransactions === state.escrowTransactions) return { error: 'Buổi học đã được quyết toán.' };
  }
  if (actions.hideReviewId) {
    const review = state.reviews.find(r => r.id === actions.hideReviewId && (r.id === issue.relatedReviewId || (issue.relatedLessonId || issue.lessonId) && r.lessonId === (issue.relatedLessonId || issue.lessonId)));
    if (!review) return { error: 'Đánh giá không thuộc sự cố.' };
    next = { ...next, reviews: next.reviews.map(r => r.id === review.id ? { ...r, status: 'hidden', moderationStatus: 'hidden' } : r) };
  }
  return { state: { ...next, appeals: next.appeals.map(a => a.id === id ? { ...a, status, reviewNote: note.trim(), actions: structuredClone(actions), appliedActions: structuredClone(actions), reviewedBy: actor.id, reviewedAt: now.toISOString() } : a), auditLogs: [{ id: `audit-appeal-${id}-${status}`, actorId: actor.id, role: 'admin', action: 'APPEAL_DECISION', targetId: id, createdAt: now.toISOString(), details: note }, ...next.auditLogs] } };
}
export function selectAppeals(state, actor) {
  if (!actor?.id) return [];
  return (state.appeals || []).filter(a => actor.role === 'admin' || a.accountId === actor.id || issueReporterId(state.issues.find(i => i.id === a.issueId) || {}) === actor.id)
    .map(a => ({ ...a, accountName: (state.users || []).find(u => u.id === a.accountId)?.fullName || 'Chưa có tên tài khoản',
      issueTitle: (state.issues || []).find(i => i.id === a.issueId)?.title || a.issueId,
      issueReporter: issueReporterId(state.issues.find(i => i.id === a.issueId) || {}),
      target: issueTargetId(state, state.issues.find(i => i.id === a.issueId) || {}),
      responses: a.responses || [],
      linkedEscrowIds: state.escrowTransactions.filter(e => { const lessonId = state.issues.find(i => i.id === a.issueId)?.relatedLessonId || state.issues.find(i => i.id === a.issueId)?.lessonId; return lessonId && (e.lessonId === lessonId || e.lessonIds?.includes(lessonId)); }).map(e => e.id) }))
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}
