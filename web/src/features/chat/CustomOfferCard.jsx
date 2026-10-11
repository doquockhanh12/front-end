import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, XCircle, Clock, BookOpen, Calendar } from 'lucide-react';
import OfferSessionPicker from './OfferSessionPicker.jsx';
import useDialogFocus from '../../hooks/useDialogFocus.js';
import { proposalLabel } from '../../data/tutorSchedule.js';
import useDemoAuth from '../auth/DemoAuthContext.jsx';
import useDemoDomain from '../domain/DemoDomainContext.jsx';

export default function CustomOfferCard({
  message,
  msg,
  offer: propOffer,
  onRespond,
  isLearner: propIsLearner,
}) {
  const msgItem = message || msg;
  const offer = propOffer || msgItem?.offerData || msgItem || {};
  const msgId = msgItem?.id || offer?.messageId || offer?.id;

  let user = null;
  try {
    user = useDemoAuth()?.user;
  } catch {
    // outside auth context
  }

  let domain = null;
  try {
    domain = useDemoDomain();
  } catch {
    // outside domain context
  }

  const isLearner = propIsLearner !== undefined ? propIsLearner : (user?.role === 'learner' || !user);
  const [selected, setSelected] = useState([]);
  const [error, setError] = useState('');
  const [confirmOpen, setConfirmOpen] = useState(false);
  const confirmRef = useDialogFocus(() => setConfirmOpen(false), confirmOpen);
  const thread = domain?.chatThreads?.find(item => item.id === msgItem?.threadId);
  const tutor = domain?.profiles?.find(profile => profile.id === thread?.tutorId || profile.accountId === thread?.tutorId);

  const handleRespond = (decision) => {
    const action = onRespond || domain?.respondOffer;
    if (!action || !msgId) return;
    const result = action(msgId, decision, { proposals: offer.proposals?.length ? offer.proposals : selected });
    setError(result?.error || '');
    setConfirmOpen(false);
  };

  const sessionsCount = Number(offer.sessionsCount || 1);
  const sessionFee = Number(offer.sessionFee || 0);
  const totalAmount = Number(offer.totalAmount ?? (sessionsCount * sessionFee));
  const status = offer.status || 'pending';

  return (
    <div className="custom-offer-card" data-testid="custom-offer-card">
      <div className="custom-offer-card__header">
        <div>
          <span className="custom-offer-card__tag">
            <BookOpen size={14} aria-hidden="true" /> Đề xuất học phí
          </span>
          <h4 className="custom-offer-card__title">
            {offer.subject || 'Môn học'}{offer.grade ? ` · ${offer.grade}` : ''}
          </h4>
        </div>
        {status === 'accepted' ? (
          <span className="custom-offer-badge badge-accepted" data-status="accepted" title="Đã chốt & Đặt cọc thành công">
            <CheckCircle2 size={13} aria-hidden="true" />
            Đã đồng ý & Đặt cọc thành công
            <span style={{ display: 'none' }} aria-hidden="true">Đã chốt & Đặt cọc thành công</span>
          </span>
        ) : status === 'declined' ? (
          <span className="custom-offer-badge badge-declined" data-status="declined">
            <XCircle size={13} aria-hidden="true" />
            Đã từ chối
          </span>
        ) : (
          <span className="custom-offer-badge badge-pending" data-status="pending">
            <Clock size={13} aria-hidden="true" />
            Chờ phản hồi
          </span>
        )}
      </div>

      <div className="custom-offer-card__body">
        <div className="custom-offer-details-grid">
          <div className="custom-offer-detail-item">
            <span className="label">Số buổi</span>
            <span className="value">{sessionsCount} buổi</span>
          </div>
          <div className="custom-offer-detail-item">
            <span className="label">Học phí / buổi</span>
            <span className="value">{sessionFee.toLocaleString('vi-VN')} đ</span>
          </div>
          <div className="custom-offer-detail-item full-width">
            <span className="label">Lịch học</span>
            <span className="value">{offer.scheduleSummary || 'Thương lượng theo tuần'}</span>
          </div>
        </div>

        <div className="custom-offer-escrow-highlight">
          <div className="custom-offer-escrow-highlight__header">
            <span>
              <ShieldCheck size={16} aria-hidden="true" />
              Tổng tiền cọc ký quỹ (Escrow)
            </span>
          </div>
          <div className="custom-offer-escrow-highlight__amount">
            {totalAmount.toLocaleString('vi-VN')} đ
          </div>
          <p className="custom-offer-escrow-highlight__note">
            Ký quỹ demo được xử lý theo buổi học và chính sách hủy. Không có tiền hoặc giao dịch ngân hàng thật.
          </p>
        </div>

        {isLearner && status === 'pending' && (
          <>
          {!offer.proposals?.length && <OfferSessionPicker tutorId={tutor?.id} availability={domain?.availability} lessons={domain?.lessons} duration={domain?.settings?.[tutor?.id]?.sessionMinutes} selected={selected} onChange={setSelected} limit={sessionsCount} />}
          {error && <p role="alert" className="offer-error">{error} <Link to="/learner/wallet">Mở ví để nạp tiền</Link></p>}
          <div className="custom-offer-actions">
            <button
              type="button"
              className="btn-accept-offer"
              onClick={() => setConfirmOpen(true)}
            >
              <CheckCircle2 size={16} aria-hidden="true" /> Đồng ý & Đặt cọc ngay
            </button>
            <button
              type="button"
              className="btn-decline-offer"
              onClick={() => handleRespond('declined')}
            >
              <XCircle size={16} aria-hidden="true" /> Từ chối
            </button>
          </div>
          </>
        )}

        {status === 'accepted' && (
          <div className="custom-offer-result-banner accepted">
            ✓ Đã đồng ý & Đặt cọc thành công qua TutorNearMe Escrow Shield.
          </div>
        )}

        {status === 'declined' && (
          <div className="custom-offer-result-banner declined">
            ✕ Đề xuất đã bị từ chối.
          </div>
        )}

        {!isLearner && status === 'pending' && (
          <div className="custom-offer-result-banner" style={{ background: '#f8fafc', color: '#64748b' }}>
            Đang chờ học viên phản hồi và thanh toán ký quỹ.
          </div>
        )}
      </div>
      {confirmOpen && createPortal(<div className="custom-offer-modal-overlay" onClick={() => setConfirmOpen(false)}><div className="custom-offer-modal" ref={confirmRef} tabIndex={-1} role="dialog" aria-modal="true" aria-label="Xác nhận đặt cọc" onClick={event => event.stopPropagation()}><div className="custom-offer-modal__form"><h3>Xác nhận đặt cọc</h3><p>{sessionsCount} buổi · {sessionFee.toLocaleString('vi-VN')} đ / buổi</p><strong>Tổng tiền: {totalAmount.toLocaleString('vi-VN')} đ</strong><ul>{(offer.proposals?.length ? offer.proposals : selected).map(session => <li key={`${session.date}-${session.start}`}>{proposalLabel(session)}</li>)}</ul><p>Tiền demo chuyển vào ký quỹ và chỉ giải ngân sau buổi học. Không có giao dịch ngân hàng thật.</p><button type="button" className="button button--secondary" onClick={() => setConfirmOpen(false)}>Quay lại</button><button type="button" className="button button--primary" onClick={() => handleRespond('accepted')}>Xác nhận đặt cọc</button></div></div></div>, document.body)}
    </div>
  );
}
