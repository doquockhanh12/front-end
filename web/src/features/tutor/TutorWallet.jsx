import { useState } from 'react';
import { createPortal } from 'react-dom';
import {
  Wallet,
  TrendingUp,
  CreditCard,
  ArrowDownLeft,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  X,
  Building,
  RefreshCw,
  Send,
  Info,
} from 'lucide-react';
import { TutorShell } from './TutorPages.jsx';
import useDemoAuth from '../auth/DemoAuthContext.jsx';
import useDemoDomain from '../domain/DemoDomainContext.jsx';
import useDialogFocus from '../../hooks/useDialogFocus.js';
import { selectTutorTier } from '../domain/commerce.js';
import '../learner/wallet.css';

const POPULAR_BANKS = [
  'Vietcombank',
  'MBBank (Quân Đội)',
  'Techcombank',
  'ACB (Á Châu)',
  'VPBank',
  'BIDV',
  'VietinBank',
  'TPBank',
  'HDBank',
  'Sacombank',
];

export default function TutorWallet() {
  const { user } = useDemoAuth();
  const domain = useDemoDomain();
  const { wallets, payoutRequests, tutorId, requestPayout } = domain;
  const tier = selectTutorTier(domain, tutorId);
  const feePercent = tier.feePercent;
  const payoutPercent = 100 - feePercent;

  // Wallets belong to accounts, while lessons use the public Tutor profile ID.
  const tutorWalletKey = user?.id;
  const wallet = wallets?.[tutorWalletKey] || {
    accountId: tutorWalletKey,
    availableBalance: 0,
    escrowBalance: 0,
    ledger: [],
  };

  const [isPayoutModalOpen, setIsPayoutModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [toastMessage, setToastMessage] = useState('');

  // Calculate total earnings
  const ledger = wallet.ledger || [];
  const totalEarnings = ledger
    .filter((tx) => tx.type === 'lesson_disbursed' || tx.type === 'cancellation_compensation')
    .reduce((sum, tx) => sum + (tx.amount || 0), 0);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  const handlePayoutSubmit = (formData) => {
    const res = requestPayout({
      tutorId: tutorWalletKey,
      tutorName: user?.fullName || '',
      amount: formData.amount,
      bankName: formData.bankName,
      accountNumber: formData.accountNumber,
      accountHolder: formData.accountHolder,
    });

    if (res?.error) {
      showToast(`Lỗi: ${res.error}`);
      return false;
    }

    showToast(`Đã gửi lệnh rút ${formData.amount.toLocaleString('vi-VN')} đ về STK thành công! Đang chờ admin duyệt.`);
    setIsPayoutModalOpen(false);
    return true;
  };

  // Filter ledger
  const filteredLedger = ledger.filter((item) => {
    if (activeTab === 'earnings') return item.type === 'lesson_disbursed';
    if (activeTab === 'compensations') return item.type === 'cancellation_compensation';
    if (activeTab === 'payouts') return item.type.includes('payout');
    return true;
  });

  return (
    <TutorShell
      title="Ví & Rút tiền"
      subtitle={`Quản lý thù lao giảng dạy, tiền bồi thường hủy lịch và yêu cầu rút tiền về ngân hàng. Phí sàn hiện tại của bạn: ${feePercent}%.`}
    >
      <div className="wallet-page">
        {/* Balance Cards */}
        <div className="wallet-cards-grid">
          {/* 1. Số dư khả dụng */}
          <div className="wallet-card wallet-card--available">
            <div>
              <div className="wallet-card-head">
                <span className="wallet-card-label">
                  <Wallet size={18} /> Số dư khả dụng
                </span>
                <div className="wallet-card-icon-wrap">
                  <Wallet size={24} />
                </div>
              </div>
              <div className="wallet-card-amount">
                {(wallet.availableBalance || 0).toLocaleString('vi-VN')} đ
              </div>
              <p className="wallet-card-desc">
                Số dư thực nhận sẵn sàng để rút về tài khoản ngân hàng bất kỳ lúc nào.
              </p>
            </div>
            <div className="wallet-card-actions">
              <button
                type="button"
                className="wallet-btn-payout"
                onClick={() => setIsPayoutModalOpen(true)}
                disabled={(wallet.availableBalance || 0) <= 0}
              >
                <ArrowUpRight size={18} /> Rút tiền về STK Ngân hàng
              </button>
            </div>
          </div>

          {/* 2. Tổng thu nhập đã nhận / tích lũy */}
          <div className="wallet-card wallet-card--escrow">
            <div>
              <div className="wallet-card-head">
                <span className="wallet-card-label">
                  <TrendingUp size={18} /> Tổng thu nhập tích lũy
                </span>
                <div className="wallet-card-icon-wrap" style={{ background: '#ecfdf5', color: '#059669' }}>
                  <TrendingUp size={24} />
                </div>
              </div>
              <div className="wallet-card-amount" style={{ color: '#059669' }}>
                {totalEarnings.toLocaleString('vi-VN')} đ
              </div>
              <div className="escrow-shield-badge" style={{ background: '#ecfdf5', color: '#059669' }}>
                <CheckCircle2 size={14} /> Thù lao đã ghi nhận sau phí nền tảng TutorNearMe
              </div>
              <p className="wallet-card-desc" style={{ marginTop: '10px' }}>
                Bao gồm thù lao các buổi dạy đã hoàn tất và tiền đền bù khi học viên hủy lịch. Với danh hiệu hiện tại, bạn thực nhận {payoutPercent}% sau phí sàn {feePercent}%; giao dịch cũ giữ mức phí đã ghi nhận.
              </p>
            </div>
          </div>
        </div>

        {/* Transaction Ledger Table */}
        <section className="wallet-ledger-section">
          <div className="wallet-ledger-head">
            <h2 className="wallet-ledger-title">
              <RefreshCw size={20} /> Sổ cái giao dịch thu nhập & rút tiền
            </h2>
            <div className="wallet-tabs" role="tablist">
              <button
                type="button"
                className={`wallet-tab-btn ${activeTab === 'all' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                Tất cả ({ledger.length})
              </button>
              <button
                type="button"
                className={`wallet-tab-btn ${activeTab === 'earnings' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('earnings')}
              >
                Thù lao dạy học
              </button>
              <button
                type="button"
                className={`wallet-tab-btn ${activeTab === 'compensations' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('compensations')}
              >
                Bồi thường hủy lịch
              </button>
              <button
                type="button"
                className={`wallet-tab-btn ${activeTab === 'payouts' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('payouts')}
              >
                Lệnh rút tiền
              </button>
            </div>
          </div>

          <div className="wallet-table-wrap">
            {filteredLedger.length === 0 ? (
              <div className="wallet-empty-state">
                <Info size={32} />
                <p>Chưa có bản ghi giao dịch nào trong mục này.</p>
              </div>
            ) : (
              <table className="wallet-table">
                <thead>
                  <tr>
                    <th>Thời gian</th>
                    <th>Mã GD</th>
                    <th>Loại khoản tiền</th>
                    <th>Chi tiết diễn giải</th>
                    <th style={{ textAlign: 'right' }}>Số tiền</th>
                    <th>Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLedger.map((tx) => {
                    const isPositive = tx.amount > 0;
                    return (
                      <tr key={tx.id}>
                        <td>
                          {new Date(tx.createdAt || Date.now()).toLocaleDateString('vi-VN', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </td>
                        <td>
                          <span style={{ fontFamily: 'monospace', fontWeight: 600 }}>
                            {tx.id.slice(0, 12)}
                          </span>
                        </td>
                        <td>
                          {tx.type === 'lesson_disbursed' && (
                            <span style={{ color: 'var(--status-success)', fontWeight: 700 }}>
                              <ArrowDownLeft size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> Thù lao buổi học
                            </span>
                          )}
                          {tx.type === 'cancellation_compensation' && (
                            <span style={{ color: '#d97706', fontWeight: 700 }}>
                              <CheckCircle2 size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> Bồi thường hủy lịch
                            </span>
                          )}
                          {tx.type === 'payout_hold' && (
                            <span style={{ color: '#b91c1c', fontWeight: 700 }}>
                              <ArrowUpRight size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> Lệnh rút tiền
                            </span>
                          )}
                          {tx.type === 'payout_rejected_refund' && (
                            <span style={{ color: 'var(--brand-primary)', fontWeight: 700 }}>
                              <RefreshCw size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> Hoàn lại lệnh rút
                            </span>
                          )}
                          {!['lesson_disbursed', 'cancellation_compensation', 'payout_hold', 'payout_rejected_refund'].includes(tx.type) && (
                            <span>{tx.type}</span>
                          )}
                        </td>
                        <td>{tx.description}</td>
                        <td style={{ textAlign: 'right' }}>
                          <span
                            className={`tx-amount ${isPositive ? 'tx-amount--positive' : 'tx-amount--negative'}`}
                          >
                            {isPositive ? `+${tx.amount.toLocaleString('vi-VN')} đ` : `${tx.amount.toLocaleString('vi-VN')} đ`}
                          </span>
                        </td>
                        <td>
                          <span className={`tx-badge tx-badge--${tx.status || 'completed'}`}>
                            {tx.status === 'completed' && <CheckCircle2 size={12} />}
                            {tx.status === 'pending' && <Clock size={12} />}
                            {tx.status === 'completed' ? 'Thành công' : tx.status === 'pending' ? 'Chờ đối soát' : tx.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </section>

        {/* Payout Modal */}
        {isPayoutModalOpen && (
          <TutorPayoutModal
            availableBalance={wallet.availableBalance || 0}
            defaultBankAccount={wallet.bankAccount}
            onClose={() => setIsPayoutModalOpen(false)}
            onSubmit={handlePayoutSubmit}
          />
        )}

        {/* Toast */}
        {toastMessage && (
          <div className="wallet-toast" role="status">
            <CheckCircle2 size={20} />
            <span>{toastMessage}</span>
          </div>
        )}
      </div>
    </TutorShell>
  );
}

function TutorPayoutModal({ availableBalance, defaultBankAccount, onClose, onSubmit }) {
  const dialogRef = useDialogFocus(onClose);
  const [bankName, setBankName] = useState(defaultBankAccount?.bankName || 'MBBank (Quân Đội)');
  const [accountNumber, setAccountNumber] = useState(defaultBankAccount?.accountNumber || '');
  const [accountHolder, setAccountHolder] = useState(defaultBankAccount?.accountHolder || '');
  const [amount, setAmount] = useState(availableBalance > 0 ? Math.min(availableBalance, 500000) : 0);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bankName.trim()) {
      setError('Vui lòng chọn hoặc nhập tên ngân hàng.');
      return;
    }
    if (!accountNumber.trim()) {
      setError('Vui lòng nhập số tài khoản ngân hàng.');
      return;
    }
    if (!accountHolder.trim()) {
      setError('Vui lòng nhập tên chủ tài khoản thụ hưởng.');
      return;
    }
    const numAmount = Number(amount);
    if (!numAmount || numAmount <= 0) {
      setError('Số tiền rút phải lớn hơn 0 đ.');
      return;
    }
    if (numAmount > availableBalance) {
      setError('Số tiền rút vượt quá số dư khả dụng hiện có.');
      return;
    }

    onSubmit({
      bankName: bankName.trim(),
      accountNumber: accountNumber.trim(),
      accountHolder: accountHolder.trim().toUpperCase(),
      amount: numAmount,
    });
  };

  return createPortal(
    <div className="wallet-modal-overlay" onClick={onClose}>
      <div
        ref={dialogRef}
        className="wallet-modal"
        style={{ maxWidth: '540px' }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="payout-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="wallet-modal-close" onClick={onClose} aria-label="Đóng cửa sổ">
          <X size={20} />
        </button>

        <header className="vietqr-modal-header" style={{ paddingRight: '36px' }}>
          <h2 id="payout-modal-title" className="vietqr-modal-title">
            <Building size={24} style={{ color: 'var(--brand-primary)' }} /> Rút tiền về tài khoản ngân hàng
          </h2>
          <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Lệnh rút tiền demo cần Admin phê duyệt. Không chuyển tiền thật tới ngân hàng.
          </p>
        </header>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
          {error && (
            <div style={{ color: '#b91c1c', background: '#fef2f2', padding: '10px 14px', borderRadius: '8px', fontSize: '0.9rem', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <AlertCircle size={16} /> {error}
            </div>
          )}

          <div>
            <label htmlFor="payout-bank" style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '6px' }}>
              Ngân hàng nhận tiền:
            </label>
            <select
              id="payout-bank"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', font: 'inherit' }}
            >
              {POPULAR_BANKS.map((bank) => (
                <option key={bank} value={bank}>
                  {bank}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="payout-account-number" style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '6px' }}>
              Số tài khoản ngân hàng:
            </label>
            <input
              id="payout-account-number"
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="Ví dụ: 1012345678"
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', font: 'inherit' }}
            />
          </div>

          <div>
            <label htmlFor="payout-account-holder" style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '6px' }}>
              Tên chủ tài khoản (Viết hoa không dấu):
            </label>
            <input
              id="payout-account-holder"
              type="text"
              value={accountHolder}
              onChange={(e) => setAccountHolder(e.target.value.toUpperCase())}
              placeholder="TRAN GIA BAO"
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', font: 'inherit', textTransform: 'uppercase' }}
            />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <label htmlFor="payout-amount" style={{ fontWeight: 700, fontSize: '0.88rem' }}>Số tiền muốn rút (VNĐ):</label>
              <button
                type="button"
                onClick={() => setAmount(availableBalance)}
                style={{ background: 'none', border: 'none', color: 'var(--brand-primary)', fontWeight: 700, cursor: 'pointer', fontSize: '0.82rem' }}
              >
                Rút toàn bộ ({availableBalance.toLocaleString('vi-VN')} đ)
              </button>
            </div>
            <div className="amount-input-group">
              <input
                id="payout-amount"
                type="number"
                min="50000"
                max={availableBalance}
                step="50000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
              <span style={{ fontWeight: 700, color: 'var(--text-muted)' }}>VNĐ</span>
            </div>
            <small style={{ color: 'var(--text-muted)', display: 'block', marginTop: '4px' }}>
              Khả dụng tối đa: {availableBalance.toLocaleString('vi-VN')} đ
            </small>
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
            <button
              type="button"
              onClick={onClose}
              style={{ flex: 1, padding: '11px', borderRadius: '9px', border: '1px solid #cbd5e1', background: '#f8fafc', fontWeight: 700, cursor: 'pointer' }}
            >
              Hủy bỏ
            </button>
            <button
              type="submit"
              className="wallet-btn-payout"
              style={{ flex: 2, justifyContent: 'center' }}
            >
              <Send size={18} /> Xác nhận rút tiền
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}
