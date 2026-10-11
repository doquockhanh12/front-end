import { useState, useMemo } from 'react';
import { Landmark, ShieldCheck, Check, X, ArrowDownRight, ArrowUpRight, DollarSign, Clock, Search, Wallet } from 'lucide-react';
import Badge from '../../components/Badge.jsx';
import Button from '../../components/Button.jsx';
import AdminShell from './AdminShell.jsx';
import AdminSlideOver from './AdminSlideOver.jsx';
import useDemoDomain from '../domain/DemoDomainContext.jsx';
import { formatRecordCount } from './AdminTutorsPage.jsx';
import { selectEscrowFinancials } from '../domain/useAdminDomain.js';

const TABS = ['Lệnh rút tiền ngân hàng', 'Két Ký quỹ Escrow', 'Sổ cái Dòng tiền'];

export default function AdminFinancePage() {
  const {
    payoutRequests = [],
    escrowTransactions = [],
    wallets = {},
    processPayout,
    logAudit,
  } = useDemoDomain();

  const [activeTab, setActiveTab] = useState('Lệnh rút tiền ngân hàng');
  const [searchQuery, setSearchQuery] = useState('');
  const [rejectingPayout, setRejectingPayout] = useState(null);
  const [rejectReason, setRejectReason] = useState('');
  const [feedback, setFeedback] = useState(null);

  // Financial KPIs
  const financials = useMemo(() => selectEscrowFinancials({ escrowTransactions }), [escrowTransactions]);
  const totalEscrowHeld = financials.held;
  const totalDisbursedPlatformEarnings = financials.revenue;

  const pendingPayoutsCount = useMemo(() => {
    return payoutRequests.filter((p) => p.status === 'pending').length;
  }, [payoutRequests]);

  const handleApprovePayout = (payout) => {
    processPayout(payout.id, 'approved', 'Đã phê duyệt chuyển trong bản demo; không gửi lệnh ngân hàng thật.');
    logAudit({
      actorId: 'demo-admin',
      actorName: 'Quản trị viên',
      role: 'admin',
      action: 'APPROVE_PAYOUT',
      targetType: 'payout_request',
      targetId: payout.id,
      details: `Duyệt lệnh rút ${payout.amount.toLocaleString('vi-VN')} đ cho gia sư ${payout.tutorName} về STK ${payout.accountNumber} (${payout.bankName})`,
    });
    setFeedback({
      type: 'success',
      message: `Đã phê duyệt lệnh rút ${payout.amount.toLocaleString('vi-VN')} đ cho gia sư ${payout.tutorName}!`,
    });
    setTimeout(() => setFeedback(null), 3500);
  };

  const handleRejectPayoutSubmit = (e) => {
    e.preventDefault();
    if (!rejectingPayout) return;
    const reason = rejectReason.trim() || 'Thông tin số tài khoản hoặc ngân hàng thụ hưởng không chính xác.';
    processPayout(rejectingPayout.id, 'rejected', reason);
    logAudit({
      actorId: 'demo-admin',
      actorName: 'Quản trị viên',
      role: 'admin',
      action: 'REJECT_PAYOUT',
      targetType: 'payout_request',
      targetId: rejectingPayout.id,
      details: `Từ chối lệnh rút tiền ${rejectingPayout.amount.toLocaleString('vi-VN')} đ của gia sư ${rejectingPayout.tutorName}. Lý do: ${reason}`,
    });
    setFeedback({
      type: 'info',
      message: `Đã từ chối lệnh rút tiền và hoàn trả ${rejectingPayout.amount.toLocaleString('vi-VN')} đ về số dư khả dụng của gia sư.`,
    });
    setRejectingPayout(null);
    setRejectReason('');
    setTimeout(() => setFeedback(null), 4000);
  };

  // Aggregate all ledger entries for Tab 3
  const allLedgerEntries = useMemo(() => {
    const list = [];
    Object.entries(wallets).forEach(([accId, w]) => {
      (w.ledger || []).forEach((item) => {
        list.push({ ...item, accountId: accId });
      });
    });
    return list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [wallets]);

  const matchesSearch = item => !searchQuery.trim() || Object.values(item)
    .filter(value => typeof value === 'string' || typeof value === 'number')
    .join(' ').toLocaleLowerCase('vi-VN').includes(searchQuery.trim().toLocaleLowerCase('vi-VN'));
  const visiblePayouts = payoutRequests.filter(matchesSearch);
  const visibleEscrow = escrowTransactions.filter(matchesSearch);
  const visibleLedger = allLedgerEntries.filter(matchesSearch);

  return (
    <AdminShell title="Quản trị Dòng tiền Ký quỹ & Rút tiền">
      <div className="admin-page-container">
        <div className="admin-page-header">
          <div>
            <h1 className="admin-page-title">Quản trị Tài chính, Ký quỹ Escrow & Phê duyệt Rút tiền</h1>
            <p className="admin-page-subtitle">
              Giám sát ký quỹ và phê duyệt rút tiền trong bản demo. Không có bảo hiểm tiền cọc hoặc chuyển khoản ngân hàng thật.
            </p>
          </div>
        </div>

        {feedback && (
          <div className={`admin-feedback-banner ${feedback.type === 'success' ? 'is-success' : 'is-info'}`} style={{ marginBottom: '1.25rem', padding: '0.85rem 1rem', borderRadius: '8px', background: feedback.type === 'success' ? '#ECFDF5' : '#EFF6FF', color: feedback.type === 'success' ? '#065F46' : '#1E40AF', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
            <Check size={18} />
            <span>{feedback.message}</span>
          </div>
        )}

        {/* 3 KPI Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          <div className="admin-stat-card" style={{ background: '#fff', borderRadius: '12px', padding: '1.25rem', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D97706' }}>
              <ShieldCheck size={26} />
            </div>
            <div>
              <small style={{ color: '#64748B', fontWeight: 600 }}>Tiền cọc đang giữ trong Két Escrow</small>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A' }}>
                {totalEscrowHeld.toLocaleString('vi-VN')} đ
              </div>
            </div>
          </div>

          <div className="admin-stat-card" style={{ background: '#fff', borderRadius: '12px', padding: '1.25rem', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981' }}>
              <DollarSign size={26} />
            </div>
            <div>
              <small style={{ color: '#64748B', fontWeight: 600 }}>Doanh thu phí sàn tích lũy</small>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A' }}>
                {totalDisbursedPlatformEarnings.toLocaleString('vi-VN')} đ
              </div>
            </div>
          </div>

          <div className="admin-stat-card" style={{ background: '#fff', borderRadius: '12px', padding: '1.25rem', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB' }}>
              <Landmark size={26} />
            </div>
            <div>
              <small style={{ color: '#64748B', fontWeight: 600 }}>Lệnh rút tiền chờ duyệt</small>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A' }}>
                {pendingPayoutsCount} lệnh
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="admin-controls-card" style={{ background: '#fff', borderRadius: '12px', padding: '1rem', marginBottom: '1.25rem', border: '1px solid #E2E8F0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <div className="admin-tabs" style={{ display: 'flex', gap: '0.5rem' }}>
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`admin-tab-btn ${activeTab === tab ? 'is-active' : ''}`}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  border: activeTab === tab ? '1px solid #2563EB' : '1px solid #E2E8F0',
                  background: activeTab === tab ? '#2563EB' : '#F8FAFC',
                  color: activeTab === tab ? '#FFF' : '#475569',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                }}
              >
                {tab}
                {tab === 'Lệnh rút tiền ngân hàng' && pendingPayoutsCount > 0 && (
                  <span style={{ marginLeft: '6px', background: activeTab === tab ? '#FFF' : '#EF4444', color: activeTab === tab ? '#2563EB' : '#FFF', padding: '2px 6px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>
                    {pendingPayoutsCount}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="admin-search-wrap" style={{ position: 'relative', minWidth: '280px' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
            <input
              type="text"
              placeholder="Tìm kiếm tài khoản, mã lệnh..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem 0.5rem 2.25rem',
                borderRadius: '8px',
                border: '1px solid #CBD5E1',
                fontSize: '0.875rem',
              }}
            />
          </div>
        </div>

        {/* TAB 1: PAYOUT REQUESTS */}
        {activeTab === 'Lệnh rút tiền ngân hàng' && (
          <div>
            <div style={{ marginBottom: '0.75rem', fontSize: '0.875rem', color: '#64748B', fontWeight: 600 }}>
              {formatRecordCount(visiblePayouts.length, payoutRequests.length)}
            </div>
            <div className="admin-table-container" style={{ background: '#fff', borderRadius: '12px', border: '1px solid #E2E8F0', overflowX: 'auto' }}>
              <table className="admin-table admin-table--finance-payouts" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', color: '#475569', fontWeight: 700 }}>
                    <th style={{ padding: '0.875rem 1rem' }}>Gia sư</th>
                    <th style={{ padding: '0.875rem 1rem' }}>Ngân hàng thụ hưởng</th>
                    <th style={{ padding: '0.875rem 1rem' }}>Số tài khoản & Chủ TK</th>
                    <th style={{ padding: '0.875rem 1rem' }}>Số tiền rút</th>
                    <th style={{ padding: '0.875rem 1rem' }}>Thời gian yêu cầu</th>
                    <th style={{ padding: '0.875rem 1rem' }}>Trạng thái</th>
                    <th style={{ padding: '0.875rem 1rem', textAlign: 'right' }}>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {visiblePayouts.length === 0 ? (
                    <tr>
                      <td colSpan={7} style={{ padding: '3rem 1rem', textAlign: 'center', color: '#94A3B8' }}>
                        <Landmark size={36} style={{ margin: '0 auto 0.5rem auto', opacity: 0.5 }} />
                        <p>Không có lệnh rút tiền nào.</p>
                      </td>
                    </tr>
                  ) : (
                    visiblePayouts.map((p) => (
                      <tr key={p.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                        <td style={{ padding: '0.875rem 1rem', fontWeight: 600, color: '#0F172A' }}>
                          {p.tutorName}
                        </td>
                        <td style={{ padding: '0.875rem 1rem', color: '#334155' }}>
                          <strong>{p.bankName}</strong>
                        </td>
                        <td style={{ padding: '0.875rem 1rem', color: '#334155' }}>
                          <span style={{ fontFamily: 'monospace', fontWeight: 600 }}>{p.accountNumber}</span>
                          <small style={{ display: 'block', color: '#64748B' }}>{p.accountHolder}</small>
                        </td>
                        <td style={{ padding: '0.875rem 1rem', fontWeight: 800, color: '#0F172A' }}>
                          {p.amount?.toLocaleString('vi-VN')} đ
                        </td>
                        <td style={{ padding: '0.875rem 1rem', color: '#64748B' }}>
                          {new Date(p.requestedAt).toLocaleString('vi-VN')}
                        </td>
                        <td style={{ padding: '0.875rem 1rem' }}>
                          <Badge tone={p.status === 'approved' ? 'success' : p.status === 'rejected' ? 'danger' : 'warning'}>
                            {p.status === 'approved' ? 'Đã duyệt chuyển' : p.status === 'rejected' ? 'Đã từ chối' : 'Chờ phê duyệt'}
                          </Badge>
                        </td>
                        <td style={{ padding: '0.875rem 1rem', textAlign: 'right' }}>
                          {p.status === 'pending' ? (
                            <div className="admin-finance-actions">
                              <Button
                                size="sm"
                                variant="primary"
                                icon={Check}
                                onClick={() => handleApprovePayout(p)}
                              >
                                Duyệt chuyển
                              </Button>
                              <Button
                                size="sm"
                                variant="danger"
                                icon={X}
                                onClick={() => setRejectingPayout(p)}
                              >
                                Từ chối
                              </Button>
                            </div>
                          ) : (
                            <small style={{ color: '#64748B' }}>{p.adminNote || 'Đã đối soát'}</small>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: ESCROW TRANSACTIONS */}
        {activeTab === 'Két Ký quỹ Escrow' && (
          <div>
            <div style={{ marginBottom: '0.75rem', fontSize: '0.875rem', color: '#64748B', fontWeight: 600 }}>
              {formatRecordCount(visibleEscrow.length, escrowTransactions.length)}
            </div>
            <div className="admin-table-container" style={{ background: '#fff', borderRadius: '12px', border: '1px solid #E2E8F0', overflowX: 'auto' }}>
              <table className="admin-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', color: '#475569', fontWeight: 700 }}>
                    <th style={{ padding: '0.875rem 1rem' }}>Mã Escrow</th>
                    <th style={{ padding: '0.875rem 1rem' }}>Môn học & Nội dung</th>
                    <th style={{ padding: '0.875rem 1rem' }}>Học viên đặt cọc</th>
                    <th style={{ padding: '0.875rem 1rem' }}>Gia sư thụ hưởng</th>
                    <th style={{ padding: '0.875rem 1rem' }}>Số tiền cọc</th>
                    <th style={{ padding: '0.875rem 1rem' }}>Trạng thái két</th>
                    <th style={{ padding: '0.875rem 1rem' }}>Thời gian giữ cọc</th>
                  </tr>
                </thead>
                <tbody>
                  {!visibleEscrow.length && <tr><td colSpan={7} className="admin-table__empty">Không có giao dịch ký quỹ phù hợp.</td></tr>}
                  {visibleEscrow.map((e) => (
                    <tr key={e.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                      <td style={{ padding: '0.875rem 1rem', fontFamily: 'monospace', fontWeight: 600, color: '#2563EB' }}>
                        {e.id}
                      </td>
                      <td style={{ padding: '0.875rem 1rem', fontWeight: 600, color: '#0F172A' }}>
                        {e.subject || 'Lớp học kèm'}
                      </td>
                      <td style={{ padding: '0.875rem 1rem', color: '#334155' }}>
                        {e.learnerId}
                      </td>
                      <td style={{ padding: '0.875rem 1rem', color: '#334155' }}>
                        {e.tutorId}
                      </td>
                      <td style={{ padding: '0.875rem 1rem', fontWeight: 800, color: '#0F172A' }}>
                          {e.amount?.toLocaleString('vi-VN')} đ
                          {e.status === 'held' && e.settlements?.length > 0 && <small style={{ display: 'block' }}>Còn giữ: {Math.max(0, e.amount - e.settlements.reduce((sum, s) => sum + s.amount, 0)).toLocaleString('vi-VN')} đ</small>}
                      </td>
                      <td style={{ padding: '0.875rem 1rem' }}>
                        <Badge tone={e.status === 'held' ? 'warning' : e.status === 'disbursed' ? 'success' : 'neutral'}>
                          {e.status === 'held' ? 'Đang tạm giữ' : e.status === 'disbursed' ? 'Đã giải ngân' : e.status === 'partially_refunded' ? 'Đã hoàn cọc một phần' : 'Đã hoàn cọc'}
                        </Badge>
                      </td>
                      <td style={{ padding: '0.875rem 1rem', color: '#64748B' }}>
                        {new Date(e.heldAt).toLocaleString('vi-VN')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: LEDGER */}
        {activeTab === 'Sổ cái Dòng tiền' && (
          <div>
            <div style={{ marginBottom: '0.75rem', fontSize: '0.875rem', color: '#64748B', fontWeight: 600 }}>
              {formatRecordCount(visibleLedger.length, allLedgerEntries.length)}
            </div>
            <div className="admin-table-container" style={{ background: '#fff', borderRadius: '12px', border: '1px solid #E2E8F0', overflowX: 'auto' }}>
              <table className="admin-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', color: '#475569', fontWeight: 700 }}>
                    <th style={{ padding: '0.875rem 1rem' }}>Thời gian</th>
                    <th style={{ padding: '0.875rem 1rem' }}>Tài khoản Ví</th>
                    <th style={{ padding: '0.875rem 1rem' }}>Loại giao dịch</th>
                    <th style={{ padding: '0.875rem 1rem' }}>Biến động số dư</th>
                    <th style={{ padding: '0.875rem 1rem' }}>Mô tả giao dịch</th>
                  </tr>
                </thead>
                <tbody>
                  {!visibleLedger.length && <tr><td colSpan={6} className="admin-table__empty">Không có dòng tiền phù hợp.</td></tr>}
                  {visibleLedger.map((l) => (
                    <tr key={l.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                      <td style={{ padding: '0.875rem 1rem', color: '#64748B', whiteSpace: 'nowrap' }}>
                        {new Date(l.createdAt).toLocaleString('vi-VN')}
                      </td>
                      <td style={{ padding: '0.875rem 1rem', fontWeight: 600, color: '#0F172A' }}>
                        {l.accountId}
                      </td>
                      <td style={{ padding: '0.875rem 1rem' }}>
                        <span style={{ fontFamily: 'monospace', fontSize: '0.8rem', background: '#F1F5F9', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                          {l.type}
                        </span>
                      </td>
                      <td style={{ padding: '0.875rem 1rem', fontWeight: 800, color: l.amount > 0 ? '#10B981' : '#EF4444' }}>
                        {l.amount > 0 ? `+${l.amount.toLocaleString('vi-VN')} đ` : `${l.amount.toLocaleString('vi-VN')} đ`}
                      </td>
                      <td style={{ padding: '0.875rem 1rem', color: '#334155' }}>
                        {l.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Modal/SlideOver for Rejecting Payout */}
        <AdminSlideOver
          open={Boolean(rejectingPayout)}
          onClose={() => setRejectingPayout(null)}
          title="Từ chối Lệnh Rút tiền"
        >
          {rejectingPayout && (
            <form onSubmit={handleRejectPayoutSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ padding: '1rem', background: '#FEF2F2', borderRadius: '8px', border: '1px solid #FEE2E2', color: '#991B1B' }}>
                <p style={{ margin: 0, fontWeight: 600 }}>
                  Bạn đang từ chối lệnh rút {rejectingPayout.amount.toLocaleString('vi-VN')} đ của gia sư {rejectingPayout.tutorName}.
                </p>
                <small style={{ display: 'block', marginTop: '0.35rem' }}>
                  Hệ thống sẽ tự động hoàn trả số tiền này về Số dư khả dụng trong ví của gia sư.
                </small>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.35rem' }}>
                  Lý do từ chối (Gia sư sẽ nhận được thông báo) *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Ví dụ: Tên chủ tài khoản không trùng khớp với họ tên hồ sơ gia sư..."
                  value={rejectReason}
                  onChange={(e) => setRejectReason(e.target.value)}
                  style={{ width: '100%', padding: '0.6rem 0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
                <Button type="button" variant="secondary" onClick={() => setRejectingPayout(null)}>
                  Hủy bỏ
                </Button>
                <Button type="submit" variant="danger">
                  Xác nhận Từ chối & Hoàn tiền
                </Button>
              </div>
            </form>
          )}
        </AdminSlideOver>
      </div>
    </AdminShell>
  );
}
