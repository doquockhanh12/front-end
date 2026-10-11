import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';
import useDemoAuth from '../auth/DemoAuthContext.jsx';
import useDemoDomain from '../domain/DemoDomainContext.jsx';
import { appealLabels, appealTones, appealReasons, selectAppeals, issueReporterId, issueTargetId } from '../domain/appeals.js';
import Badge from '../../components/Badge.jsx';
import Button from '../../components/Button.jsx';
import AdminShell from './AdminShell.jsx';
import AdminSlideOver from './AdminSlideOver.jsx';
import AppealEvidence from '../appeals/AppealEvidence.jsx';
import '../appeals/appeals.css';

const emptyActions = { accountAction: 'none', accountId: '', warningId: '', escrowAction: 'none', escrowId: '', hideReviewId: '' };
const actionLabels = { none: 'Giữ nguyên', unsuspend: 'Mở khóa tài khoản', reduce_warning: 'Giảm cảnh cáo', refund: 'Hoàn cọc cho người học', disburse: 'Giải ngân cho gia sư', split: 'Chia 50/50' };
function PartyEvidence({ title, account, submissions }) {
  return <section className="admin-detail-group appeal-party"><h3>{title}</h3><strong>{account?.fullName || account?.name || 'Chưa có thông tin tài khoản'}</strong>
    {submissions.length ? submissions.map((entry, index) => <article className="appeal-party__submission" key={entry.id || index}><p className="appeal-prose">{entry.content}</p><AppealEvidence evidence={entry.evidence || []} /><small>{entry.createdAt ? new Date(entry.createdAt).toLocaleString('vi-VN') : 'Bằng chứng gửi trong hồ sơ'}</small></article>) : <p>Chưa có giải trình và bằng chứng của bên này.</p>}
  </section>;
}

export default function AdminAppealsPage() {
  const { user } = useDemoAuth(); const domain = useDemoDomain();
  const [filter, setFilter] = useState('all'); const [search, setSearch] = useState(''); const [selectedId, setSelectedId] = useState(null);
  const [decision, setDecision] = useState('in_review'); const [note, setNote] = useState(''); const [error, setError] = useState(''); const [feedback, setFeedback] = useState('');
  const [actions, setActions] = useState(emptyActions); const [confirming, setConfirming] = useState(false);
  const appeals = selectAppeals(domain, user);
  const visible = appeals.filter(a => (filter === 'all' || a.status === filter) && `${a.id} ${a.issueId} ${a.accountName} ${a.content}`.toLocaleLowerCase('vi-VN').includes(search.toLocaleLowerCase('vi-VN')));
  const selected = appeals.find(a => a.id === selectedId);
  const issue = domain.issues.find(i => i.id === selected?.issueId);
  const reporterId = issue && issueReporterId(issue); const targetId = issue && issueTargetId(domain, issue);
  const parties = [reporterId, targetId].filter(Boolean).map(id => domain.users.find(u => u.id === id)).filter(Boolean);
  const reporter = parties.find(u => u.id === reporterId); const target = parties.find(u => u.id === targetId);
  const submissions = selected ? [{ accountId: selected.accountId, content: selected.content, evidence: selected.evidence, createdAt: selected.createdAt }, ...(selected.responses || [])] : [];
  const lessonId = issue?.relatedLessonId || issue?.lessonId;
  const linkedEscrows = domain.escrowTransactions.filter(e => lessonId && (e.lessonId === lessonId || e.lessonIds?.includes(lessonId)) && e.status === 'held' && !e.settlements?.some(s => s.lessonId === lessonId));
  const linkedReviews = domain.reviews.filter(r => r.id === issue?.relatedReviewId || r.lessonId && r.lessonId === lessonId);
  const relatedWarnings = parties.find(p => p.id === actions.accountId)?.warnings?.filter(w => w.issueId === selected?.issueId) || [];
  const hasAction = actions.accountAction !== 'none' || actions.escrowAction !== 'none' || Boolean(actions.hideReviewId);
  const open = a => { setSelectedId(a.id); setDecision('in_review'); setNote(''); setError(''); setConfirming(false); setActions({ ...emptyActions, accountId: a.accountId }); };
  const save = confirmed => {
    if (!note.trim()) { setError('Ghi rõ căn cứ xem xét trước khi lưu.'); return; }
    if (decision === 'accepted' && hasAction && !confirmed) { setConfirming(true); setError(''); return; }
    const applied = decision === 'accepted' ? { ...actions, confirmed: Boolean(confirmed), escrowId: actions.escrowId || linkedEscrows[0]?.id || '' } : emptyActions;
    const result = domain.decideAppeal(selected.id, decision, note, applied);
    if (result?.error) { setError(result.error); setConfirming(false); } else { setSelectedId(null); setConfirming(false); setFeedback('Đã lưu kết quả xem xét kháng cáo và các hành động demo đã xác nhận.'); }
  };
  return <AdminShell title="Kháng cáo">
    <div className="admin-page-head"><div><span className="eyebrow">XEM XÉT LẠI BÁO CÁO</span><h1>Kháng cáo</h1><p>Đối chiếu giải trình và bằng chứng của bên bị báo cáo trước khi đưa ra kết quả.</p></div><Link className="admin-link-more" to="/admin/issues">Báo cáo & sự cố</Link></div>
    <div className="admin-filter-bar"><label>Trạng thái kháng cáo<select className="admin-select" value={filter} onChange={e => setFilter(e.target.value)}><option value="all">Tất cả</option>{Object.entries(appealLabels).map(([code, label]) => <option value={code} key={code}>{label}</option>)}</select></label><label className="admin-filter-bar__search"><span className="sr-only">Tìm kháng cáo</span><input type="search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Mã hồ sơ, tài khoản, nội dung..." /></label></div>
    {feedback && <p className="admin-feedback-banner admin-feedback-banner--info" role="status">{feedback}</p>}
    <p className="admin-record-counter">Hiển thị {visible.length} / {appeals.length} hồ sơ</p>
    <section className="admin-section admin-table-section"><div className="admin-table-scroll" tabIndex={0} role="region" aria-label="Bảng kháng cáo"><table className="admin-table admin-table--appeals"><thead><tr><th>Hồ sơ / sự cố</th><th>Tài khoản</th><th>Lý do</th><th>Ngày gửi</th><th>Trạng thái</th><th>Thao tác</th></tr></thead><tbody>
      {visible.map(a => <tr key={a.id}><td><strong>{a.id}</strong><br />{a.issueId}</td><td><span className="admin-cell-truncate" title={a.accountName}>{a.accountName}</span></td><td><span className="admin-cell-truncate" title={appealReasons[a.reason]}>{appealReasons[a.reason]}</span></td><td>{new Date(a.createdAt).toLocaleDateString('vi-VN')}</td><td><Badge tone={appealTones[a.status]}>{appealLabels[a.status]}</Badge></td><td><div className="admin-row-actions"><button aria-label={`Xem kháng cáo ${a.id}`} type="button" onClick={() => open(a)}><Eye size={17} /></button></div></td></tr>)}
    </tbody></table></div>{!visible.length && <p className="admin-table__empty">{appeals.length ? 'Không có hồ sơ phù hợp bộ lọc.' : 'Chưa có kháng cáo. Hồ sơ người dùng gửi sẽ xuất hiện tại đây.'}</p>}</section>
    <AdminSlideOver wide open={Boolean(selected)} onClose={() => setSelectedId(null)} title={selected ? `Kháng cáo ${selected.id}` : 'Kháng cáo'} badge={selected && <Badge tone={appealTones[selected.status]}>{appealLabels[selected.status]}</Badge>} footer={selected && ['pending', 'in_review'].includes(selected.status) && !confirming && <Button size="sm" onClick={() => save(false)}>Lưu kết quả</Button>}>
      {selected && <div className="admin-drawer-detail"><section className="admin-detail-group"><h3>{selected.accountName}</h3><p><strong>{selected.issueId}</strong> · {selected.issueTitle}</p><p>{appealReasons[selected.reason]}</p><p className="appeal-prose">{selected.content}</p><small>Người gửi đã cam kết nội dung và bằng chứng trung thực. Admin cần đối chiếu độc lập.</small></section>
        <div className="appeal-parties"><PartyEvidence title="Người học / Phụ huynh" account={reporter?.role === 'tutor' ? target : reporter} submissions={submissions.filter(s => s.accountId === (reporter?.role === 'tutor' ? targetId : reporterId))} /><PartyEvidence title="Gia sư" account={target?.role === 'tutor' ? target : reporter} submissions={submissions.filter(s => s.accountId === (target?.role === 'tutor' ? targetId : reporterId))} /></div>
        {['pending', 'in_review'].includes(selected.status) ? <section className="admin-detail-group"><h3>Xem xét kháng cáo</h3>
          <label className="admin-form-field">Kết quả xem xét<select className="admin-select" value={decision} onChange={e => { setDecision(e.target.value); setConfirming(false); }}><option value="in_review">Đang xem xét</option><option value="accepted">Chấp nhận</option><option value="rejected">Không chấp nhận</option></select></label>
          <label className="admin-form-field">Căn cứ / phản hồi<textarea className="admin-textarea" rows={4} required value={note} onChange={e => setNote(e.target.value)} /></label>
          {decision === 'accepted' && <div className="appeal-verdict-controls">
            <label className="admin-form-field">Tài khoản áp dụng<select className="admin-select" value={actions.accountId} onChange={e => setActions({ ...actions, accountId: e.target.value })}>{parties.map(p => <option key={p.id} value={p.id}>{p.fullName || p.username}</option>)}</select></label>
            <label className="admin-form-field">Xử lý tài khoản<select className="admin-select" value={actions.accountAction} onChange={e => setActions({ ...actions, accountAction: e.target.value })}><option value="none">Giữ nguyên tài khoản</option><option value="unsuspend">Mở khóa tài khoản</option><option value="reduce_warning">Giảm một cảnh cáo liên quan</option></select></label>
            {actions.accountAction === 'reduce_warning' && <label className="admin-form-field">Cảnh cáo cần xem xét<select className="admin-select" value={actions.warningId} onChange={e => setActions({ ...actions, warningId: e.target.value })}><option value="">Chọn cảnh cáo liên quan tới sự cố</option>{relatedWarnings.map(w => <option key={w.id} value={w.id}>{w.reason || w.note || w.id}</option>)}</select></label>}
            <label className="admin-form-field">Xử lý ký quỹ<select className="admin-select" value={actions.escrowAction} onChange={e => setActions({ ...actions, escrowAction: e.target.value })}><option value="none">Giữ nguyên ký quỹ</option><option value="refund" disabled={!linkedEscrows.length}>Hoàn cọc cho người học</option><option value="disburse" disabled={!linkedEscrows.length}>Giải ngân cho gia sư</option><option value="split" disabled={!linkedEscrows.length}>Chia 50/50 cho hai bên</option></select></label>
            {actions.escrowAction !== 'none' && <label className="admin-form-field">Giao dịch ký quỹ liên quan<select className="admin-select" value={actions.escrowId || linkedEscrows[0]?.id || ''} onChange={e => setActions({ ...actions, escrowId: e.target.value })}>{linkedEscrows.map(e => <option key={e.id} value={e.id}>{e.id} · {e.amount.toLocaleString('vi-VN')} đ</option>)}</select></label>}
            {!linkedEscrows.length && <p className="admin-detail-sub">Không có ký quỹ đang giữ liên kết với buổi học của sự cố; không thể xử lý một giao dịch khác.</p>}
            <label className="admin-form-field">Đánh giá liên quan<select className="admin-select" value={actions.hideReviewId} onChange={e => setActions({ ...actions, hideReviewId: e.target.value })}><option value="">Giữ nguyên đánh giá</option>{linkedReviews.map(r => <option key={r.id} value={r.id}>Ẩn {r.id} · {r.rating}/5</option>)}</select></label>
          </div>}
          {confirming && <section className="appeal-confirmation" aria-label="Xác nhận hành động demo"><h3>Xác nhận xử lý hồ sơ demo</h3><p>Áp dụng quyết định đã chọn vào tài khoản và ký quỹ liên quan. Không có chuyển khoản ngân hàng thật.</p><p><strong>Tài khoản:</strong> {actionLabels[actions.accountAction]} · <strong>Ký quỹ:</strong> {actionLabels[actions.escrowAction]}{actions.hideReviewId && ` · Ẩn ${actions.hideReviewId}`}</p><div className="admin-drawer-actions"><Button variant="secondary" onClick={() => setConfirming(false)}>Quay lại kiểm tra</Button><Button onClick={() => save(true)}>Xác nhận áp dụng demo</Button></div></section>}
          {error && <p role="alert" className="admin-form-error">{error}</p>}</section> : <section className="admin-detail-group"><h3>Kết quả đã lưu</h3><p>{selected.reviewNote}</p>{selected.appliedActions && <p>Đã áp dụng các hành động demo đã xác nhận.</p>}</section>}
      </div>}
    </AdminSlideOver>
  </AdminShell>;
}
