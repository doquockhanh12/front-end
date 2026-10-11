import { useState, useId } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertCircle,
  AlertTriangle,
  BookOpen,
  CalendarDays,
  Check,
  CheckCircle2,
  MapPin,
  Search,
  SlidersHorizontal,
  DollarSign,
  ShieldAlert,
  Send,
  X,
  Clock,
  Sparkles,
  MessageSquare,
  Users,
} from 'lucide-react';
import Button from '../../components/Button.jsx';
import Badge from '../../components/Badge.jsx';
import { TutorShell } from './TutorPages.jsx';
import useTutorWorkspace from './TutorWorkspaceState.jsx';
import useDemoAuth from '../auth/DemoAuthContext.jsx';
import { requestMetadata, feeBounds, formatFee, savedFreeRanges } from '../../data/tutorClassSearch.js';
import { timeLabel, weekDates } from '../../data/tutorSchedule.js';
import useDialogFocus from '../../hooks/useDialogFocus.js';
import './class-search.css';
import { selectTutorTier } from '../domain/commerce.js';

const shortDate = (date) =>
  new Date(date.includes('T') ? date : `${date}T00:00:00`).toLocaleDateString('vi-VN', {
    weekday: 'short',
    day: '2-digit',
    month: '2-digit',
  });

const toggleChoice = (values, value) =>
  values.includes(value) ? values.filter((item) => item !== value) : [...values, value];

function Choices({ title, options, selected, onChange }) {
  return (
    <fieldset className="tutor-find__choices">
      <legend>
        {title}
        <small>Có thể chọn nhiều</small>
      </legend>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => onChange(toggleChoice(selected, option))}
          />
          <span>{option}</span>
        </label>
      ))}
    </fieldset>
  );
}

function FeeRange({ min, max, onMinChange, onMaxChange }) {
  const percent = (value) => ((value - feeBounds.min) / (feeBounds.max - feeBounds.min)) * 100;
  return (
    <fieldset className="tutor-find__fee">
      <legend>
        Khoảng học phí <small>VNĐ / buổi</small>
      </legend>
      <div className="tutor-find__fee-values">
        <output aria-label="Học phí từ">{formatFee(min)}</output>
        <span>–</span>
        <output aria-label="Học phí đến">{formatFee(max)}</output>
      </div>
      <div
        className="tutor-find__range"
        style={{ '--range-start': `${percent(min)}%`, '--range-end': `${percent(max)}%` }}
      >
        <div className="tutor-find__range-track" />
        <input
          type="range"
          aria-label="Học phí tối thiểu"
          aria-valuetext={`${formatFee(min)} mỗi buổi`}
          min={feeBounds.min}
          max={feeBounds.max}
          step={feeBounds.step}
          value={min}
          onChange={(event) => onMinChange(Math.min(Number(event.target.value), max))}
          style={{ zIndex: min > feeBounds.max / 2 ? 3 : 2 }}
        />
        <input
          type="range"
          aria-label="Học phí tối đa"
          aria-valuetext={`${formatFee(max)} mỗi buổi`}
          min={feeBounds.min}
          max={feeBounds.max}
          step={feeBounds.step}
          value={max}
          onChange={(event) => onMaxChange(Math.max(Number(event.target.value), min))}
        />
      </div>
      <div className="tutor-find__range-bounds">
        <span>{formatFee(feeBounds.min)}</span>
        <span>{formatFee(feeBounds.max)}</span>
      </div>
    </fieldset>
  );
}

export default function TutorClassSearch() {
  const { user } = useDemoAuth();
  const workspace = useTutorWorkspace();
  const {
    tutorId,
    classPosts = [],
    proposals = [],
    systemSettings = {},
    submitProposal,
    withdrawProposal,
    reportSuspiciousClass,
    issues = [],
    availability,
    lessons,
  } = workspace;

  const [activeTab, setActiveTab] = useState('marketplace'); // 'marketplace' | 'my-proposals'
  const [selectedPostForBid, setSelectedPostForBid] = useState(null);
  const [selectedPostForReport, setSelectedPostForReport] = useState(null);
  const [reportReason, setReportReason] = useState('');
  const [reportError, setReportError] = useState('');
  const [reportSuccess, setReportSuccess] = useState('');

  // Filters for marketplace classes
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [minFee, setMinFee] = useState(feeBounds.min);
  const [maxFee, setMaxFee] = useState(feeBounds.max);

  // Modal State
  const [proposedFee, setProposedFee] = useState(220000);
  const [coverNote, setCoverNote] = useState('');
  const [bidError, setBidError] = useState('');
  const [bidSuccess, setBidSuccess] = useState('');

  const closeModal = () => {
    setSelectedPostForBid(null);
    setBidError('');
  };
  const modalPanelRef = useDialogFocus(closeModal, Boolean(selectedPostForBid));
  const closeReport = () => {
    setSelectedPostForReport(null);
    setReportError('');
  };
  const reportPanelRef = useDialogFocus(closeReport, Boolean(selectedPostForReport));

  // Determine top-rated status and fee rate
  const tier = selectTutorTier(workspace, tutorId);
  const isTopRated = tier.tier === 'top_rated';
  const platformFeeRate = tier.feePercent;
  const platformFeeAmount = Math.round((proposedFee * platformFeeRate) / 100);
  const netPayoutAmount = proposedFee - platformFeeAmount;

  // Open classes list
  const openClassPosts = classPosts.filter((post) => post.status === 'open' && post.moderationStatus === 'approved');

  // Filter options derived from open posts
  const subjectOptions = [...new Set(openClassPosts.map((p) => p.subject).filter(Boolean))];
  const areaOptions = [...new Set(openClassPosts.map((p) => p.location).filter(Boolean))];

  // Filtered open posts
  const filteredPosts = openClassPosts.filter((post) => {
    if (selectedSubjects.length && !selectedSubjects.includes(post.subject)) return false;
    if (selectedAreas.length && !selectedAreas.includes(post.location)) return false;
    const postFee = post.budgetAmount || post.minBudget || 200000;
    if (postFee < minFee || postFee > maxFee) return false;
    return true;
  });

  // Tutor's submitted proposals
  const currentTutorId = user?.id || tutorId || 'demo-tutor';
  const myProposals = proposals.filter(
    (p) => p.tutorId === currentTutorId
  );

  const handleOpenBidding = (post) => {
    setSelectedPostForBid(post);
    setProposedFee(post.budgetAmount || post.maxBudget || 220000);
    setCoverNote(
      `Chào phụ huynh, em là ${user?.fullName || 'Gia sư'}, chuyên dạy ${post.subject} khối ${post.grade}. Em có lộ trình giảng dạy rõ ràng và sẵn sàng dạy kèm thử 1 buổi để đánh giá năng lực học viên.`
    );
    setBidError('');
  };

  const handleSubmitBidding = (e) => {
    e.preventDefault();
    if (!proposedFee || proposedFee <= 0) {
      setBidError('Vui lòng nhập mức học phí đề xuất hợp lệ.');
      return;
    }

    const res = submitProposal({
      classPostId: selectedPostForBid.id,
      proposedFee: Number(proposedFee),
      coverNote,
    });

    if (res?.error) {
      setBidError(res.error);
    } else {
      setBidSuccess(`Ứng tuyển thành công cho lớp ${selectedPostForBid.subject} - ${selectedPostForBid.grade}!`);
      setTimeout(() => setBidSuccess(''), 4000);
      closeModal();
      setActiveTab('my-proposals');
    }
  };

  const handleSubmitReport = (event) => {
    event.preventDefault();
    if (!reportReason.trim()) {
      setReportError('Vui lòng mô tả lý do báo cáo tin lớp.');
      return;
    }
    const result = reportSuspiciousClass({ classPostId: selectedPostForReport.id, reason: reportReason.trim() });
    if (result?.error) {
      setReportError(result.error);
      return;
    }
    setReportSuccess(`Đã gửi báo cáo ${result.issueId} đến khu vực xử lý sự cố của Admin trong bản demo.`);
    closeReport();
  };

  const resetFilters = () => {
    setSelectedSubjects([]);
    setSelectedAreas([]);
    setMinFee(feeBounds.min);
    setMaxFee(feeBounds.max);
  };

  return (
    <TutorShell
      title="Tìm học viên & Nhận lớp mới"
      subtitle="Bảng tin tìm gia sư trực tiếp từ học viên và phụ huynh. Ứng tuyển minh bạch, nhận lớp an toàn."
    >
      {/* 1. ANTI-SCAM BANNER ON TOP */}
      <div className="tutor-antiscam-banner" role="alert">
        <ShieldAlert size={26} color="#d97706" style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <strong>
            CẢNH BÁO AN TOÀN: Không chuyển tiền nhận lớp hoặc giữ chỗ ngoài ứng dụng. Kiểm tra và báo cáo yêu cầu đáng ngờ.
          </strong>
          <p>
            Tất cả giao dịch học phí và phí sàn (10% hoặc 7% cho Top-Rated) được giải ngân minh bạch qua ví số sau khi buổi học hoàn thành. Không thanh toán bất kỳ khoản tiền nào trước khi dạy.
          </p>
          <p>Dùng nút “Báo cáo tin đáng ngờ” trên tin lớp để gửi lý do cho Admin kiểm tra trong bản demo.</p>
        </div>
      </div>

      {reportSuccess && <p className="tutor-find__report-success" role="status"><CheckCircle2 size={18} aria-hidden="true" />{reportSuccess}</p>}

      {/* Action Notification */}
      {bidSuccess && (
        <div style={{
          background: '#ecfdf5',
          border: '1px solid #a7f3d0',
          color: '#065f46',
          padding: '12px 18px',
          borderRadius: '8px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: 600,
        }}>
          <CheckCircle2 size={18} color="#059669" />
          <span>{bidSuccess}</span>
        </div>
      )}

      {/* 2. TABS BAR */}
      <div className="tutor-find__tabs" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'marketplace'}
          className={`tutor-find__tab ${activeTab === 'marketplace' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('marketplace')}
        >
          Bảng tin Lớp học Mới ({openClassPosts.length})
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'my-proposals'}
          className={`tutor-find__tab ${activeTab === 'my-proposals' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('my-proposals')}
        >
          Đơn ứng tuyển của tôi ({myProposals.length})
        </button>
      </div>

      {/* TAB 1: BẢNG TIN LỚP HỌC MỚI */}
      {activeTab === 'marketplace' && (
        <div className="tutor-find__layout">
          {/* Aside Filters */}
          <aside className="tutor-find__filters" aria-label="Bộ lọc tìm lớp">
            <div className="tutor-find__filter-heading">
              <h2>
                <SlidersHorizontal size={18} />
                Bộ lọc tìm lớp
              </h2>
              <Button variant="quiet" size="sm" onClick={resetFilters}>
                Đặt lại
              </Button>
            </div>

            <fieldset className="tutor-find__filter-controls">
              <legend className="sr-only">Điều kiện tìm lớp</legend>
              <Choices
                title="Môn học"
                options={subjectOptions}
                selected={selectedSubjects}
                onChange={setSelectedSubjects}
              />
              <Choices
                title="Khu vực"
                options={areaOptions}
                selected={selectedAreas}
                onChange={setSelectedAreas}
              />
              <p className="tutor-find__distance-note">Chưa có dữ liệu khoảng cách cho tin lớp trong bản demo.</p>
              <FeeRange
                min={minFee}
                max={maxFee}
                onMinChange={setMinFee}
                onMaxChange={setMaxFee}
              />
            </fieldset>

            <div style={{ marginTop: '20px', padding: '14px', background: '#f8fafc', borderRadius: '8px', fontSize: '0.82rem', color: '#64748b' }}>
              <strong>Mẹo nhận lớp:</strong> Giới thiệu phương pháp dạy rõ ràng và mức học phí phù hợp để phụ huynh so sánh.
            </div>
          </aside>

          {/* Results List */}
          <section className="tutor-find__results" aria-label="Danh sách lớp học mở">
            <div className="tutor-find__result-heading">
              <div>
                <span className="eyebrow">BẢNG TIN THỊ TRƯỜNG</span>
                <h2>{filteredPosts.length} lớp đang tìm gia sư</h2>
              </div>
            </div>

            <p className="tutor-find__result-help">
              Các lớp học được đăng tải trực tiếp bởi phụ huynh và học viên. Bạn có thể tự do đề xuất mức học phí phù hợp.
            </p>

            {filteredPosts.length ? (
              <div className="tutor-find__list">
                {filteredPosts.map((item) => {
                  const hasApplied = proposals.some(
                    (p) => p.classPostId === item.id && p.tutorId === currentTutorId && p.status !== 'withdrawn'
                  );
                  const hasReported = issues.some(issue => issue.relatedClassPostId === item.id && issue.reporterId === currentTutorId && ['new', 'in_progress'].includes(issue.status));

                  return (
                    <article key={item.id} className="tutor-find__class">
                      <div className="tutor-find__class-heading">
                        <div>
                          <span className="tutor-find__subject">
                            <BookOpen size={16} />
                            {item.subject} – {item.grade}
                          </span>
                          <h3>
                            Học viên: {item.learnerName || 'Phụ huynh'} · Mã #{item.id}
                          </h3>
                        </div>

                        {/* Budget display */}
                        <div style={{ textAlign: 'right' }}>
                          <span className="tutor-find__budget-badge">
                            {item.budgetMode === 'fixed' && `Cố định: ${formatFee(item.budgetAmount)} / buổi`}
                            {item.budgetMode === 'range' && `Khoảng giá: ${formatFee(item.minBudget)} – ${formatFee(item.maxBudget)} / buổi`}
                            {item.budgetMode === 'max' && `Tối đa: ${formatFee(item.maxBudget)} / buổi`}
                            {item.budgetMode === 'negotiable' && 'Thương lượng với gia sư'}
                          </span>
                        </div>
                      </div>

                      {/* Goal & description */}
                      <p>{item.learningGoal || 'Học viên cần gia sư đồng hành và cải thiện thành tích học tập.'}</p>

                      {/* Meta badges & tags */}
                      <div className="tutor-find__class-meta">
                        <span>
                          <MapPin size={16} />
                          {item.location} ({item.format === 'offline' ? 'Tại nhà' : 'Online'})
                        </span>
                        <span>
                          <CalendarDays size={16} />
                          {item.scheduleDesc}
                        </span>
                        {item.format === 'offline' && (
                          <span className="tutor-find__tag-pill">
                            Chưa có khoảng cách được xác nhận
                          </span>
                        )}
                        {item.trialLessonRequested && (
                          <span className="tutor-find__tag-pill" style={{ background: '#ecfdf5', color: '#065f46' }}>
                            Yêu cầu học thử 45 phút
                          </span>
                        )}
                        <span className="tutor-find__tag-pill">
                          <Users size={13} /> {item.proposalCount || 0} đã ứng tuyển
                        </span>
                      </div>

                      {/* Action buttons */}
                      <div className="tutor-find__class-actions">
                        <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                          Đăng lúc: {shortDate(item.createdAt || '2026-10-04')}
                        </span>

                        <div className="tutor-find__class-action-buttons">
                          <Button variant="secondary" size="sm" disabled={hasReported} onClick={() => {
                            setSelectedPostForReport(item);
                            setReportReason('');
                            setReportError('');
                            setReportSuccess('');
                          }}>
                            <ShieldAlert size={16} aria-hidden="true" /> {hasReported ? 'Đã gửi báo cáo' : 'Báo cáo tin đáng ngờ'}
                          </Button>
                        {hasApplied ? (
                          <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            color: '#059669',
                            fontWeight: 700,
                            fontSize: '0.88rem',
                            background: '#ecfdf5',
                            padding: '6px 14px',
                            borderRadius: '6px'
                          }}>
                            <Check size={16} /> Đã nộp đơn ứng tuyển
                          </span>
                        ) : (
                          <button
                            type="button"
                            className="button button--primary button--md"
                            onClick={() => handleOpenBidding(item)}
                          >
                            Ứng tuyển nhận lớp
                          </button>
                        )}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="tutor-find__empty">
                <Search size={30} />
                <h3>Chưa có lớp phù hợp với bộ lọc</h3>
                <p>Thử điều chỉnh môn học, khu vực hoặc mở rộng khoảng học phí để tìm thêm lớp.</p>
                <Button variant="secondary" onClick={resetFilters}>
                  Đặt lại bộ lọc
                </Button>
              </div>
            )}
          </section>
        </div>
      )}

      {/* TAB 2: ĐƠN ỨNG TUYỂN CỦA TÔI */}
      {activeTab === 'my-proposals' && (
        <section aria-label="Đơn ứng tuyển của tôi">
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ margin: '0 0 4px', fontSize: '1.35rem', fontWeight: 700 }}>
              Quản lý hồ sơ ứng tuyển ({myProposals.length})
            </h2>
            <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>
              Theo dõi trạng thái duyệt của phụ huynh, phản hồi phỏng vấn và các lớp đã trúng tuyển.
            </p>
          </div>

          {myProposals.length === 0 ? (
            <div className="tutor-find__empty">
              <BookOpen size={32} />
              <h3>Bạn chưa nộp đơn ứng tuyển nào</h3>
              <p>Khám phá Bảng tin Lớp học Mới và gửi đề xuất học phí để bắt đầu nhận lớp dạy kèm.</p>
              <Button variant="primary" onClick={() => setActiveTab('marketplace')}>
                Xem bảng tin lớp học mới
              </Button>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '16px' }}>
              {myProposals.map((prop) => {
                const linkedPost = classPosts.find((cp) => cp.id === prop.classPostId);

                return (
                  <article key={prop.id} className="my-proposal-card">
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginBottom: '12px' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#2563eb' }}>
                            MÃ ĐƠN: #{prop.id}
                          </span>
                          <Badge tone={prop.status === 'selected' ? 'success' : prop.status === 'pending' ? 'warning' : 'neutral'}>
                            {prop.status === 'selected' ? 'Được chọn & Chờ cọc' : prop.status === 'matched' ? 'Đã ghép lớp thành công' : prop.status === 'pending' ? 'Đang chờ phụ huynh phản hồi' : prop.status === 'withdrawn' ? 'Đã rút đơn' : 'Chưa phù hợp'}
                          </Badge>
                        </div>
                        <h3 style={{ margin: '0 0 4px', fontSize: '1.2rem', fontWeight: 700 }}>
                          {linkedPost?.subject || 'Lớp học'} – {linkedPost?.grade || 'Cấp 2'}
                        </h3>
                        <p style={{ margin: 0, color: '#64748b', fontSize: '0.85rem' }}>
                          Phụ huynh: {linkedPost?.learnerName || 'Phụ huynh'} · Khu vực: {linkedPost?.location || 'TP.HCM'}
                        </p>
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748b' }}>Học phí bạn đề xuất</span>
                        <strong style={{ fontSize: '1.2rem', color: '#2563eb' }}>
                          {formatFee(prop.proposedFee)} <small style={{ fontSize: '0.8rem', fontWeight: 400 }}>/ buổi</small>
                        </strong>
                        <span style={{ display: 'block', fontSize: '0.8rem', color: '#059669', fontWeight: 600 }}>
                          Thực nhận ví: {formatFee(prop.netPayout)} (Phí sàn: -{formatFee(prop.platformFee)})
                        </span>
                      </div>
                    </div>

                    {/* Proposal Cover Note */}
                    <div style={{ background: '#f8fafc', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBlock: '12px', fontSize: '0.88rem', color: '#334155' }}>
                      <span style={{ display: 'block', fontWeight: 700, fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>
                        Lời nhắn của bạn gửi phụ huynh:
                      </span>
                      "{prop.coverNote}"
                    </div>

                    {/* Card Footer Actions */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                      <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                        Ngày nộp: {shortDate(prop.createdAt || '2026-10-04')}
                      </span>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {prop.status === 'pending' && <Button variant="secondary" size="sm" onClick={() => { const result=withdrawProposal(prop.id); if(result?.error)setBidSuccess(result.error); }}>Rút đơn ứng tuyển</Button>}
                        {prop.status === 'selected' && (
                          <Link to="/messages" className="button button--primary button--sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                            <MessageSquare size={15} /> Nhắn tin xếp lịch học
                          </Link>
                        )}
                        <Link to="/messages" className="button button--secondary button--sm">
                          Trao đổi với phụ huynh
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      )}

      {selectedPostForReport && (
        <div className="bidding-modal-scrim" onClick={closeReport}>
          <div className="bidding-modal-panel tutor-find__report-dialog" ref={reportPanelRef}
            onClick={event => event.stopPropagation()} role="dialog" aria-modal="true"
            aria-labelledby="class-report-title" aria-describedby="class-report-help">
            <div className="tutor-find__report-heading">
              <h2 id="class-report-title">Báo cáo tin lớp đáng ngờ</h2>
              <button type="button" className="icon-button" aria-label="Đóng báo cáo" onClick={closeReport}><X size={20} /></button>
            </div>
            <p className="tutor-find__report-context">{selectedPostForReport.subject} – {selectedPostForReport.grade} · Mã #{selectedPostForReport.id}</p>
            <p id="class-report-help">Mô tả ít nhất 20 ký tự về dấu hiệu như yêu cầu chuyển tiền giữ chỗ, tuyển cộng tác viên hoặc thông tin gây hiểu nhầm. Admin sẽ xem xét báo cáo trong bản demo; tin đăng chưa tự động bị ẩn.</p>
            <form onSubmit={handleSubmitReport} noValidate>
              <label htmlFor="class-report-reason">Lý do báo cáo *</label>
              <textarea id="class-report-reason" className="marketplace-textarea" rows={5} required maxLength={2000}
                value={reportReason} aria-invalid={Boolean(reportError)} aria-describedby={reportError ? 'class-report-error' : undefined}
                onChange={event => { setReportReason(event.target.value); setReportError(''); }} />
              {reportError && <p id="class-report-error" className="tutor-find__report-error" role="alert">{reportError}</p>}
              <div className="tutor-find__report-actions">
                <Button variant="secondary" onClick={closeReport}>Hủy</Button>
                <Button type="submit"><Send size={16} aria-hidden="true" /> Gửi báo cáo demo</Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 3. BIDDING MODAL WITH LIVE FEE CALCULATOR */}
      {selectedPostForBid && (
        <div className="bidding-modal-scrim" onClick={closeModal}>
          <div
            className="bidding-modal-panel"
            ref={modalPanelRef}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="bid-modal-title"
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '14px' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#2563eb', textTransform: 'uppercase' }}>
                  ỨNG TUYỂN NHẬN LỚP
                </span>
                <h2 id="bid-modal-title" style={{ margin: '2px 0 0', fontSize: '1.25rem', fontWeight: 800 }}>
                  {selectedPostForBid.subject} – {selectedPostForBid.grade}
                </h2>
                <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: '#64748b' }}>
                  Phụ huynh: {selectedPostForBid.learnerName} · {selectedPostForBid.location}
                </p>
              </div>

              <button
                type="button"
                className="icon-button"
                onClick={closeModal}
                aria-label="Đóng bảng ứng tuyển"
              >
                <X size={20} />
              </button>
            </div>

            {/* Error Message */}
            {bidError && (
              <div style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', padding: '10px 14px', borderRadius: '8px', fontSize: '0.88rem' }}>
                {bidError}
              </div>
            )}

            <form onSubmit={handleSubmitBidding} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Learner's Budget Info */}
              <div style={{ background: '#eff6ff', padding: '12px 16px', borderRadius: '8px', border: '1px solid #bfdbfe', fontSize: '0.88rem', color: '#1e3a8a' }}>
                <strong>Ngân sách của phụ huynh: </strong>
                {selectedPostForBid.budgetMode === 'fixed' && `${formatFee(selectedPostForBid.budgetAmount)} đ / buổi (Cố định)`}
                {selectedPostForBid.budgetMode === 'range' && `${formatFee(selectedPostForBid.minBudget)} – ${formatFee(selectedPostForBid.maxBudget)} đ / buổi`}
                {selectedPostForBid.budgetMode === 'max' && `Tối đa ${formatFee(selectedPostForBid.maxBudget)} đ / buổi`}
                {selectedPostForBid.budgetMode === 'negotiable' && 'Thương lượng thỏa thuận'}
              </div>

              {/* Proposed Fee Input */}
              <div>
                <label htmlFor="bidding-fee" style={{ display: 'block', fontWeight: 700, fontSize: '0.92rem', marginBottom: '6px' }}>
                  Học phí đề xuất của bạn (VNĐ / buổi học) *
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input
                    id="bidding-fee"
                    type="number"
                    step="10000"
                    min="50000"
                    className="marketplace-input"
                    value={proposedFee}
                    onChange={(e) => setProposedFee(Number(e.target.value))}
                    required
                  />
                  <span style={{ fontWeight: 700, color: '#2563eb', whiteSpace: 'nowrap' }}>đ / buổi</span>
                </div>
              </div>

              {/* LIVE FEE BREAKDOWN CALCULATOR */}
              <div className="bidding-fee-breakdown">
                <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#475569', textTransform: 'uppercase' }}>
                  Bảng tính học phí minh bạch & phí sàn
                </span>

                <div className="bidding-fee-row">
                  <span>Học phí đề xuất:</span>
                  <strong>{formatFee(proposedFee)} đ</strong>
                </div>

                <div className="bidding-fee-row" style={{ color: '#dc2626' }}>
                  <span>
                    Phí nền tảng ({platformFeeRate}%{isTopRated ? ' - Ưu đãi Top-Rated' : ''}):
                  </span>
                  <span>-{formatFee(platformFeeAmount)} đ</span>
                </div>

                <div className="bidding-fee-row is-total">
                  <span>Thực nhận về ví gia sư:</span>
                  <span>{formatFee(netPayoutAmount)} đ / buổi</span>
                </div>

                <small style={{ color: '#64748b', fontSize: '0.78rem', marginTop: '4px', lineHeight: 1.4 }}>
                  <strong>Chính sách 0đ trả trước:</strong> Không có phí nhận lớp. Phí sàn chỉ được trích từ ký quỹ demo khi buổi học hoàn tất.
                </small>
              </div>

              {/* Cover Note Textarea */}
              <div>
                <label htmlFor="bidding-note" style={{ display: 'block', fontWeight: 700, fontSize: '0.92rem', marginBottom: '6px' }}>
                  Lời nhắn gửi phụ huynh & Giới thiệu phương pháp dạy *
                </label>
                <textarea
                  id="bidding-note"
                  rows={4}
                  className="marketplace-textarea"
                  value={coverNote}
                  onChange={(e) => setCoverNote(e.target.value)}
                  placeholder="Giới thiệu kinh nghiệm giảng dạy, thành tích học tập và cách thức bạn hỗ trợ học sinh..."
                  required
                />
              </div>

              {/* Modal Actions */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px', paddingTop: '10px', borderTop: '1px solid #e2e8f0' }}>
                <Button variant="secondary" onClick={closeModal}>
                  Hủy
                </Button>
                <button type="submit" className="button button--primary button--md" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Send size={16} /> Gửi hồ sơ ứng tuyển
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </TutorShell>
  );
}
