import { useState, useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  Wallet,
  ShieldCheck,
  Lock,
  QrCode,
  ArrowDownLeft,
  ArrowUpRight,
  RefreshCw,
  CheckCircle2,
  Copy,
  X,
  Clock,
  Sparkles,
  Info,
  Check,
} from 'lucide-react';
import useDemoAuth from '../auth/DemoAuthContext.jsx';
import useDemoDomain from '../domain/DemoDomainContext.jsx';
import LearnerHeader from './LearnerHeader.jsx';
import useDialogFocus from '../../hooks/useDialogFocus.js';
import './wallet.css';

const PRESET_AMOUNTS = [200000, 500000, 1000000, 2000000, 5000000];

export default function LearnerWallet() {
  const { user } = useDemoAuth();
  const { wallets, depositFunds } = useDemoDomain();

  const accountId = user?.id || 'demo-learner';
  const wallet = wallets?.[accountId] || {
    accountId,
    availableBalance: 0,
    escrowBalance: 0,
    ledger: [],
  };

  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [depositAmount, setDepositAmount] = useState(500000);
  const [activeTab, setActiveTab] = useState('all');
  const [toastMessage, setToastMessage] = useState('');
  const [copiedField, setCopiedField] = useState('');

  // Transfer code
  const transferCode = `TNM NAP ${user?.username ? user.username.toUpperCase() : 'LEARNER'} 8899`;

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 4000);
  };

  const copyToClipboard = (text, fieldName) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(''), 2000);
  };

  // Filter ledger records
  const ledger = wallet.ledger || [];
  const filteredLedger = ledger.filter((item) => {
    if (activeTab === 'deposits') return item.type.includes('deposit');
    if (activeTab === 'escrows') return item.type.includes('escrow_hold') || item.type.includes('disbursed');
    if (activeTab === 'refunds') return item.type.includes('refund');
    return true;
  });

  const handleSimulateDeposit = () => {
    if (!Number.isFinite(Number(depositAmount)) || Number(depositAmount) < 50000) return;
    depositFunds(accountId, Number(depositAmount), 'vietqr');
    showToast(`Nạp tiền thành công! Đã cộng ${Number(depositAmount).toLocaleString('vi-VN')} đ vào Số dư khả dụng.`);
    setIsQrModalOpen(false);
  };

  return (
    <div className="public-page public-page--learner learner-search-page wallet-page density-comfortable">
      <LearnerHeader />
      <main className="learner-container learner-dashboard-main">
        {/* Top Header */}
        <header className="wallet-header">
          <span className="wallet-kicker">HỆ THỐNG VÍ ĐIỆN TỬ & KÝ QUỸ</span>
          <h1 className="wallet-title">Ví học viên & Bảo vệ Ký quỹ Escrow</h1>
          <p className="wallet-subtitle">
            Theo dõi số dư và khoản ký quỹ trong bản demo. Không có giao dịch ngân hàng hoặc tiền thật.
          </p>
        </header>

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
                Dùng để thanh toán giữ chỗ lịch học và kích hoạt ký quỹ bảo vệ cho gia sư ngay lập tức.
              </p>
            </div>
            <div className="wallet-card-actions">
              <button
                type="button"
                className="wallet-btn-deposit"
                onClick={() => setIsQrModalOpen(true)}
              >
                <QrCode size={18} /> Nạp tiền VietQR Napas 247
              </button>
            </div>
          </div>

          {/* 2. Tiền đang tạm giữ Ký quỹ */}
          <div className="wallet-card wallet-card--escrow">
            <div>
              <div className="wallet-card-head">
                <span className="wallet-card-label">
                  <ShieldCheck size={18} /> Tiền đang tạm giữ Ký quỹ (Escrow)
                </span>
                <div className="wallet-card-icon-wrap">
                  <Lock size={24} />
                </div>
              </div>
              <div className="wallet-card-amount">
                {(wallet.escrowBalance || 0).toLocaleString('vi-VN')} đ
              </div>
              <div className="escrow-shield-badge">
                <Lock size={14} /> Ổ khóa bảo vệ đa tầng TutorNearMe Escrow
              </div>
              <p className="wallet-card-desc" style={{ marginTop: '10px' }}>
                Khoản ký quỹ demo được xử lý theo trạng thái buổi học và chính sách hủy. Bạn có thể xem từng giao dịch ở bảng bên dưới.
              </p>
            </div>
          </div>
        </div>

        {/* Transaction History Ledger */}
        <section className="wallet-ledger-section">
          <div className="wallet-ledger-head">
            <h2 className="wallet-ledger-title">
              <RefreshCw size={20} /> Lịch sử biến động số dư
            </h2>
            <div className="wallet-tabs" role="tablist">
              <button
                type="button"
                className={`wallet-tab-btn ${activeTab === 'all' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                Tất cả
              </button>
              <button
                type="button"
                className={`wallet-tab-btn ${activeTab === 'deposits' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('deposits')}
              >
                Nạp tiền
              </button>
              <button
                type="button"
                className={`wallet-tab-btn ${activeTab === 'escrows' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('escrows')}
              >
                Tạm giữ Ký quỹ
              </button>
              <button
                type="button"
                className={`wallet-tab-btn ${activeTab === 'refunds' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('refunds')}
              >
                Hoàn tiền
              </button>
            </div>
          </div>

          <div className="wallet-table-wrap">
            {filteredLedger.length === 0 ? (
              <div className="wallet-empty-state">
                <Info size={32} />
                <p>Chưa có giao dịch nào trong danh mục này.</p>
              </div>
            ) : (
              <table className="wallet-table">
                <thead>
                  <tr>
                    <th>Thời gian</th>
                    <th>Mã GD</th>
                    <th>Loại giao dịch</th>
                    <th>Diễn giải</th>
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
                          {tx.type.includes('deposit') && (
                            <span style={{ color: 'var(--status-success)', fontWeight: 700 }}>
                              <ArrowDownLeft size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> Nạp tiền
                            </span>
                          )}
                          {tx.type.includes('escrow_hold') && (
                            <span style={{ color: 'var(--brand-violet)', fontWeight: 700 }}>
                              <Lock size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> Ký quỹ
                            </span>
                          )}
                          {tx.type.includes('refund') && (
                            <span style={{ color: 'var(--status-info)', fontWeight: 700 }}>
                              <ArrowDownLeft size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> Hoàn tiền
                            </span>
                          )}
                          {!tx.type.includes('deposit') && !tx.type.includes('escrow_hold') && !tx.type.includes('refund') && (
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
                            {tx.status === 'held' && <Lock size={12} />}
                            {tx.status === 'completed' ? 'Hoàn tất' : tx.status === 'held' ? 'Đang tạm giữ' : tx.status}
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

        {/* VietQR Modal */}
        {isQrModalOpen && (
          <VietQrDepositModal
            amount={depositAmount}
            onAmountChange={setDepositAmount}
            transferCode={transferCode}
            onClose={() => setIsQrModalOpen(false)}
            onSimulateDeposit={handleSimulateDeposit}
            onCopy={copyToClipboard}
            copiedField={copiedField}
          />
        )}

        {/* Success Toast Notification */}
        {toastMessage && (
          <div className="wallet-toast" role="status">
            <CheckCircle2 size={20} />
            <span>{toastMessage}</span>
          </div>
        )}
      </main>
    </div>
  );
}

// VietQR Deposit Modal with Dynamic Countdown Timer
function VietQrDepositModal({
  amount,
  onAmountChange,
  transferCode,
  onClose,
  onSimulateDeposit,
  onCopy,
  copiedField,
}) {
  // Timer countdown: 04:59 (299 seconds)
  const [timeLeft, setTimeLeft] = useState(299);
  const dialogRef = useDialogFocus(onClose);
  const amountId = useId();
  const deposited = useRef(false);
  const depositRef = useRef(onSimulateDeposit);
  depositRef.current = onSimulateDeposit;
  const validAmount = Number.isFinite(Number(amount)) && Number(amount) >= 50000;

  useEffect(() => {
    if (!validAmount || deposited.current) return undefined;
    const timer = setTimeout(() => {
      if (deposited.current) return;
      deposited.current = true;
      depositRef.current();
    }, 3000);
    return () => clearTimeout(timer);
  }, [amount, validAmount]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  // Progressive color: Green (> 120s) -> Amber (60 - 120s) -> Red (< 60s)
  const timerColor =
    timeLeft >= 120
      ? 'var(--status-success)'
      : timeLeft >= 60
      ? 'var(--brand-accent-yellow)'
      : 'var(--brand-accent-red)';

  const timerBg =
    timeLeft >= 120
      ? 'var(--status-success-bg)'
      : timeLeft >= 60
      ? 'var(--status-warning-bg)'
      : 'var(--status-danger-bg)';

  return createPortal(
    <div className="wallet-modal-overlay" onClick={onClose}>
      <div
        className="wallet-modal"
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="vietqr-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="wallet-modal-close"
          onClick={onClose}
          aria-label="Đóng cửa sổ"
        >
          <X size={20} />
        </button>

        <header className="vietqr-modal-header">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
            <h2 id="vietqr-modal-title" className="vietqr-modal-title">
              <QrCode size={24} style={{ color: 'var(--brand-primary)' }} /> Nạp tiền qua VietQR Napas 247
            </h2>
            {/* Countdown timer */}
            <div
              className="vietqr-timer-pill"
              style={{ color: timerColor, background: timerBg, borderColor: timerColor }}
              title="Thời gian hiệu lực mã QR"
            >
              <Clock size={16} />
              <span>
                {minutes}:{seconds}
              </span>
            </div>
          </div>
          <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Không chuyển tiền thật. Mã minh họa chạy cục bộ; số dư demo cập nhật sau 3 giây. Đóng cửa sổ để hủy mô phỏng.
          </p>
        </header>

        {/* Amount Selector */}
        <div className="amount-picker">
          <label htmlFor={amountId} className="amount-picker-label">Số tiền nạp</label>
          <div className="amount-chips">
            {PRESET_AMOUNTS.map((val) => (
              <button
                key={val}
                type="button"
                className={`amount-chip ${amount === val ? 'is-selected' : ''}`}
                onClick={() => onAmountChange(val)}
              >
                {val.toLocaleString('vi-VN')} đ
              </button>
            ))}
          </div>
          <div className="amount-input-group">
            <input
              type="number"
              id={amountId}
              min="50000"
              step="50000"
              value={amount}
              onChange={(e) => onAmountChange(Number(e.target.value))}
            />
            <span style={{ fontWeight: 700, color: 'var(--text-muted)' }}>VNĐ</span>
          </div>
          {!validAmount && <p role="alert" className="wallet-amount-error">Số tiền nạp phải là số hợp lệ, tối thiểu 50.000 VNĐ.</p>}
        </div>

        {/* Grid Preview */}
        <div className="vietqr-grid">
          {/* QR Preview box */}
          <div className="vietqr-preview-box">
            <svg viewBox="0 0 29 29" className="vietqr-img vietqr-demo-code" role="img" aria-label="Mã QR minh họa không dùng để chuyển tiền">
              <rect width="29" height="29" fill="white" />
              {Array.from({ length: 21 * 21 }, (_, index) => {
                const x = index % 21; const y = Math.floor(index / 21);
                const finder = (x < 7 && y < 7) || (x >= 14 && y < 7) || (x < 7 && y >= 14);
                const fx = x >= 14 ? x - 14 : x; const fy = y >= 14 ? y - 14 : y;
                const dark = finder ? fx === 0 || fx === 6 || fy === 0 || fy === 6 || (fx >= 2 && fx <= 4 && fy >= 2 && fy <= 4) : (x * 3 + y * 5 + x * y) % 7 < 3;
                return dark ? <rect key={index} x={x + 4} y={y + 4} width="1" height="1" fill="currentColor" /> : null;
              })}
            </svg>
            <div className="vietqr-brand-badge">
              <span>QR demo</span> · <span>Không chuyển tiền thật</span>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: '8px 0 0' }}>
              Minh họa giao diện VietQR; không chứa thông tin tài khoản ngân hàng.
            </p>
          </div>

          {/* Bank transfer info & guide */}
          <div>
            <div className="bank-info-table">
              <div className="bank-info-row">
                <span className="bank-info-label">Hình thức:</span>
                <span className="bank-info-val">Mô phỏng nạp vào ví demo</span>
              </div>
              <div className="bank-info-row">
                <span className="bank-info-label">Số tiền:</span>
                <span className="bank-info-val" style={{ color: 'var(--brand-primary)', fontSize: '1rem' }}>
                  {amount.toLocaleString('vi-VN')} đ
                </span>
              </div>
              <div className="bank-info-row">
                <span className="bank-info-label">Nội dung chuyển:</span>
                <span className="bank-info-val">
                  <span style={{ fontFamily: 'monospace', color: '#b91c1c' }}>{transferCode}</span>
                  <button
                    type="button"
                    className="btn-copy"
                    onClick={() => onCopy(transferCode, 'content')}
                    title="Sao chép nội dung chuyển khoản"
                  >
                    {copiedField === 'content' ? <Check size={16} color="green" /> : <Copy size={16} />}
                  </button>
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 16px' }}>
              * Không liên kết ngân hàng, Napas hoặc dịch vụ thanh toán. Chỉ cập nhật trạng thái frontend của tài khoản đang đăng nhập.
            </p>

            {/* Simulation Button */}
            <button
              type="button"
              className="vietqr-simulate-btn"
              disabled={!validAmount || timeLeft === 0}
              onClick={() => { if (!deposited.current && validAmount) { deposited.current = true; depositRef.current(); } }}
            >
              <Sparkles size={18} /> Mô phỏng Chuyển khoản Thành công
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
