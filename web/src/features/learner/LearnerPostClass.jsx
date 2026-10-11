import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  MapPin,
  Calendar,
  DollarSign,
  CheckCircle2,
  Sparkles,
  Clock,
  AlertCircle,
  HelpCircle,
  ShieldCheck,
} from 'lucide-react';
import useDemoDomain from '../domain/DemoDomainContext.jsx';
import useDemoAuth from '../auth/DemoAuthContext.jsx';
import LearnerHeader from './LearnerHeader.jsx';
import { PublicFooter } from '../public/PublicChrome.jsx';
import Button from '../../components/Button.jsx';
import { isFutureSession, localDateKey, proposalLabel } from '../../data/tutorSchedule.js';
import './learner.css';
import './marketplace.css';

const GRADE_OPTIONS = [
  'Mầm non',
  'Lớp 1', 'Lớp 2', 'Lớp 3', 'Lớp 4', 'Lớp 5',
  'Lớp 6', 'Lớp 7', 'Lớp 8', 'Lớp 9',
  'Lớp 10', 'Lớp 11', 'Lớp 12',
  'Đại học', 'Người đi làm'
];

const SCHEDULE_SUGGESTIONS = [
  'Thứ 3 và Thứ 5 (18:30 - 20:00)',
  'Thứ 2, Thứ 4, Thứ 6 (19:00 - 20:30)',
  'Thứ 7 & Chủ nhật (09:00 - 10:30)',
  '2 buổi/tuần, các buổi tối',
  'Lịch linh hoạt theo thỏa thuận'
];

export default function LearnerPostClass() {
  const navigate = useNavigate();
  const { user } = useDemoAuth();
  const { subjects = [], locations = [], postClass } = useDemoDomain();

  const [currentStep, setCurrentStep] = useState(1);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Step 1: Môn học & Khối lớp
  const [subject, setSubject] = useState('Toán');
  const [grade, setGrade] = useState('Lớp 8');

  // Step 2: Hình thức, Địa điểm & Lịch học
  const [format, setFormat] = useState('offline'); // 'offline' | 'online'
  const [location, setLocation] = useState(locations[0]?.name ? `${locations[0].name}, ${locations[0].city}` : 'Bình Thạnh, TP. Hồ Chí Minh');
  const [address, setAddress] = useState('123 Điện Biên Phủ, P.15, Bình Thạnh');
  const [scheduleDesc, setScheduleDesc] = useState('Thứ 3 và Thứ 5 (18:30 - 20:00)');
  const [proposals, setProposals] = useState([]);
  const [sessionDate, setSessionDate] = useState('');
  const [sessionTime, setSessionTime] = useState('');
  const [sessionDuration, setSessionDuration] = useState(45);
  const addSession = () => {
    const [hours, minutes] = sessionTime.split(':').map(Number);
    const session = { date: sessionDate, start: hours * 60 + minutes, end: hours * 60 + minutes + Number(sessionDuration) };
    if (!isFutureSession(session) || session.start > 1320 || session.end > 1440) { setErrorMsg('Chọn ngày giờ tương lai hợp lệ, bắt đầu trước hoặc lúc 22:00.'); return; }
    if (proposals.some(item => item.date === session.date && item.start < session.end && item.end > session.start)) { setErrorMsg('Buổi này trùng với lịch đã chọn.'); return; }
    const next = [...proposals, session].sort((a,b) => a.date.localeCompare(b.date) || a.start-b.start);
    setProposals(next); setScheduleDesc(next.map(proposalLabel).join(' · ')); setErrorMsg('');
  };

  // Step 3: Bộ điều khiển Ngân sách 4 Chế độ & Mục tiêu
  // Modes: 'fixed', 'range', 'max', 'negotiable'
  const [budgetMode, setBudgetMode] = useState('fixed');
  const [budgetAmount, setBudgetAmount] = useState(250000);
  const [minBudget, setMinBudget] = useState(200000);
  const [maxBudget, setMaxBudget] = useState(300000);
  const [allowNegotiation, setAllowNegotiation] = useState(false);
  const [learningGoal, setLearningGoal] = useState('Lấy lại căn bản hình học không gian, nâng cao tư duy giải bài tập và chuẩn bị kiểm tra giữa kỳ.');
  const [trialLessonRequested, setTrialLessonRequested] = useState(true);

  // Quick subject filter
  const activeSubjects = subjects.filter((s) => s.isActive !== false);

  const handleNextStep = () => {
    setErrorMsg('');
    if (currentStep === 1) {
      if (!subject.trim()) {
        setErrorMsg('Vui lòng chọn hoặc nhập môn học.');
        return;
      }
      if (!grade.trim()) {
        setErrorMsg('Vui lòng chọn khối lớp học.');
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!location.trim()) {
        setErrorMsg('Vui lòng chọn khu vực học tập.');
        return;
      }
      if (format === 'offline' && !address.trim()) {
        setErrorMsg('Vui lòng nhập địa chỉ cụ thể để gia sư nắm rõ.');
        return;
      }
      if (!scheduleDesc.trim()) {
        setErrorMsg('Vui lòng nhập lịch học mong muốn.');
        return;
      }
      setCurrentStep(3);
    }
  };

  const handlePrevStep = () => {
    setErrorMsg('');
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!learningGoal.trim()) {
      setErrorMsg('Vui lòng nhập mục tiêu học tập cụ thể.');
      return;
    }

    if (budgetMode === 'fixed' && (!budgetAmount || budgetAmount <= 0)) {
      setErrorMsg('Vui lòng nhập mức học phí cố định hợp lệ.');
      return;
    }

    if (budgetMode === 'range') {
      if (!minBudget || !maxBudget || Number(minBudget) > Number(maxBudget)) {
        setErrorMsg('Khoảng học phí không hợp lệ (tối thiểu phải nhỏ hơn hoặc bằng tối đa).');
        return;
      }
    }

    if (budgetMode === 'max' && (!maxBudget || maxBudget <= 0)) {
      setErrorMsg('Vui lòng nhập mức ngân sách tối đa hợp lệ.');
      return;
    }

    setIsSubmitting(true);

    const postPayload = {
      subject,
      grade,
      format,
      location: format === 'online' ? 'Toàn quốc (Online)' : location,
      address: format === 'online' ? (address || 'Học trực tuyến qua Google Meet') : address,
      scheduleDesc,
      proposals,
      budgetMode,
      budgetAmount: budgetMode === 'fixed' ? Number(budgetAmount) : null,
      minBudget: budgetMode === 'range' ? Number(minBudget) : null,
      maxBudget: budgetMode === 'range' || budgetMode === 'max' ? Number(maxBudget) : null,
      trialLessonRequested: Boolean(trialLessonRequested),
      learningGoal,
      allowNegotiation: Boolean(allowNegotiation || budgetMode === 'negotiable'),
    };

    const res = postClass(postPayload);

    if (res?.error) {
      setErrorMsg(res.error);
      setIsSubmitting(false);
      return;
    }

    // Success: Redirect to my classes
    navigate('/learner/my-classes');
  };

  return (
    <div className="public-page public-page--learner learner-flow density-comfortable">
      <LearnerHeader />

      <main className="marketplace-container">
        {/* Step Indicator Header */}
        <div className="marketplace-step-header">
          <div className="marketplace-stepper">
            <div className={`marketplace-step-item ${currentStep === 1 ? 'is-active' : ''} ${currentStep > 1 ? 'is-completed' : ''}`}>
              <div className="marketplace-step-circle">
                {currentStep > 1 ? '✓' : '1'}
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', color: '#94a3b8' }}>Bước 1</span>
                <span>Môn & Khối lớp</span>
              </div>
            </div>

            <div className={`marketplace-step-divider ${currentStep > 1 ? 'is-completed' : ''}`} />

            <div className={`marketplace-step-item ${currentStep === 2 ? 'is-active' : ''} ${currentStep > 2 ? 'is-completed' : ''}`}>
              <div className="marketplace-step-circle">
                {currentStep > 2 ? '✓' : '2'}
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', color: '#94a3b8' }}>Bước 2</span>
                <span>Địa điểm & Lịch học</span>
              </div>
            </div>

            <div className={`marketplace-step-divider ${currentStep > 2 ? 'is-completed' : ''}`} />

            <div className={`marketplace-step-item ${currentStep === 3 ? 'is-active' : ''}`}>
              <div className="marketplace-step-circle">3</div>
              <div>
                <span style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', color: '#94a3b8' }}>Bước 3</span>
                <span>Ngân sách & Mục tiêu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: '#fef2f2',
            border: '1px solid #fecaca',
            color: '#b91c1c',
            padding: '12px 16px',
            borderRadius: '8px',
            marginBottom: '20px',
            fontSize: '0.92rem'
          }}>
            <AlertCircle size={18} />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Multi-step Form Card */}
        <div className="marketplace-form-card">
          {/* STEP 1: MÔN HỌC & KHỐI LỚP */}
          {currentStep === 1 && (
            <div>
              <h2 className="marketplace-form-section-title">Bước 1: Môn học và Khối lớp</h2>
              <p className="marketplace-form-section-desc">
                Chọn môn học và cấp độ học viên để kết nối nhanh chóng với các gia sư có chuyên môn phù hợp.
              </p>

              <div className="marketplace-form-grid">
                {/* Chọn Môn học */}
                <div className="marketplace-form-group">
                  <label className="marketplace-label" htmlFor="class-subject">
                    <BookOpen size={16} color="#2563eb" />
                    Môn học cần tìm gia sư *
                  </label>
                  <input
                    id="class-subject"
                    className="marketplace-input"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="VD: Toán, Tiếng Anh, Ngữ văn..."
                    required
                  />

                  {/* Quick Select Pills */}
                  <div className="marketplace-pills">
                    {activeSubjects.slice(0, 8).map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        className={`marketplace-pill ${subject === s.name ? 'is-selected' : ''}`}
                        onClick={() => setSubject(s.name)}
                      >
                        {s.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Chọn Khối lớp */}
                <div className="marketplace-form-group">
                  <label className="marketplace-label" htmlFor="class-grade">
                    Khối lớp học viên *
                  </label>
                  <select
                    id="class-grade"
                    className="marketplace-select"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                  >
                    {GRADE_OPTIONS.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Stepper Actions */}
              <div className="marketplace-step-actions">
                <Link to="/learner/my-classes" className="button button--secondary button--md">
                  Hủy bỏ
                </Link>
                <button
                  type="button"
                  className="button button--primary button--md"
                  onClick={handleNextStep}
                >
                  Tiếp tục: Địa điểm & Lịch học <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: ĐỊA ĐIỂM & LỊCH HỌC */}
          {currentStep === 2 && (
            <div>
              <h2 className="marketplace-form-section-title">Bước 2: Hình thức, Địa điểm & Lịch học</h2>
              <p className="marketplace-form-section-desc">
                Cung cấp hình thức học, địa chỉ và khung giờ rảnh để các gia sư gần bạn dễ dàng ứng tuyển.
              </p>

              <div className="marketplace-form-grid">
                {/* Hình thức học */}
                <div className="marketplace-form-group">
                  <label className="marketplace-label">
                    Hình thức học tập *
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <button
                      type="button"
                      className={`marketplace-budget-mode-btn ${format === 'offline' ? 'is-active' : ''}`}
                      onClick={() => setFormat('offline')}
                    >
                      <span className="marketplace-budget-mode-title">🏠 Tại nhà (Trực tiếp)</span>
                      <span className="marketplace-budget-mode-sub">Gia sư đến tận nhà bạn giảng dạy</span>
                    </button>
                    <button
                      type="button"
                      className={`marketplace-budget-mode-btn ${format === 'online' ? 'is-active' : ''}`}
                      onClick={() => {
                        setFormat('online');
                        if (!address || address.includes('Điện Biên Phủ')) {
                          setAddress('Học qua Google Meet / Zoom');
                        }
                      }}
                    >
                      <span className="marketplace-budget-mode-title">💻 Trực tuyến (Online)</span>
                      <span className="marketplace-budget-mode-sub">Học qua Google Meet hoặc Zoom</span>
                    </button>
                  </div>
                </div>

                {/* Khu vực / Quận huyện */}
                {format === 'offline' ? (
                  <div className="marketplace-form-group">
                    <label className="marketplace-label" htmlFor="class-location">
                      <MapPin size={16} color="#2563eb" />
                      Khu vực quận / huyện *
                    </label>
                    <select
                      id="class-location"
                      className="marketplace-select"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      {locations.map((loc) => (
                        <option key={loc.id} value={`${loc.name}, ${loc.city}`}>
                          {loc.name} ({loc.city})
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div className="marketplace-form-group">
                    <label className="marketplace-label">Khu vực</label>
                    <input
                      className="marketplace-input"
                      type="text"
                      value="Toàn quốc (Online)"
                      disabled
                    />
                  </div>
                )}

                {/* Địa chỉ cụ thể */}
                <div className="marketplace-form-group">
                  <label className="marketplace-label" htmlFor="class-address">
                    Địa chỉ chi tiết {format === 'offline' ? '*' : '(Tùy chọn)'}
                  </label>
                  <input
                    id="class-address"
                    className="marketplace-input"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder={format === 'offline' ? 'Số nhà, tên đường, phường...' : 'Link Google Meet hoặc thỏa thuận sau'}
                    required={format === 'offline'}
                  />
                </div>

                {/* Lịch học mong muốn */}
                <div className="marketplace-form-group">
                  <label className="marketplace-label" htmlFor="class-schedule">
                    <Calendar size={16} color="#2563eb" />
                    Lịch học mong muốn *
                  </label>
                  <input
                    id="class-schedule"
                    className="marketplace-input"
                    type="text"
                    value={scheduleDesc}
                    onChange={(e) => setScheduleDesc(e.target.value)}
                    placeholder="VD: Thứ 3 và Thứ 5 (18:30 - 20:00)"
                    required
                  />

                  <fieldset className="marketplace-concrete-sessions">
                    <legend>Buổi học cụ thể</legend>
                    <label htmlFor="post-session-date">Ngày học mong muốn</label>
                    <input id="post-session-date" type="date" min={localDateKey(new Date())} value={sessionDate} onChange={event => setSessionDate(event.target.value)} />
                    <label htmlFor="post-session-time">Giờ bắt đầu</label>
                    <input id="post-session-time" type="time" value={sessionTime} onChange={event => setSessionTime(event.target.value)} />
                    <label htmlFor="post-session-duration">Thời lượng buổi học</label>
                    <select id="post-session-duration" value={sessionDuration} onChange={event => setSessionDuration(Number(event.target.value))}><option value="45">45 phút</option><option value="90">90 phút</option></select>
                    <button type="button" className="button button--secondary button--sm" onClick={addSession}>Thêm buổi học</button>
                    {proposals.map((session,index) => <div key={`${session.date}-${session.start}`}>{proposalLabel(session)} <button type="button" aria-label={`Bỏ ${proposalLabel(session)}`} onClick={() => { const next = proposals.filter((_, i) => i !== index); setProposals(next); setScheduleDesc(next.map(proposalLabel).join(' · ')); }}>Bỏ</button></div>)}
                  </fieldset>
                  {/* Schedule quick suggestions */}
                  <div className="marketplace-pills">
                    {SCHEDULE_SUGGESTIONS.map((item) => (
                      <button
                        key={item}
                        type="button"
                        className={`marketplace-pill ${scheduleDesc === item ? 'is-selected' : ''}`}
                        onClick={() => setScheduleDesc(item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stepper Actions */}
              <div className="marketplace-step-actions">
                <button
                  type="button"
                  className="button button--secondary button--md"
                  onClick={handlePrevStep}
                >
                  <ArrowLeft size={16} /> Quay lại Bước 1
                </button>
                <button
                  type="button"
                  className="button button--primary button--md"
                  onClick={handleNextStep}
                >
                  Tiếp tục: Ngân sách & Mục tiêu <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: BỘ ĐIỀU KHIỂN NGÂN SÁCH 4 CHẾ ĐỘ & MỤC TIÊU */}
          {currentStep === 3 && (
            <form onSubmit={handleSubmit}>
              <h2 className="marketplace-form-section-title">Bước 3: Ngân sách & Mục tiêu học tập</h2>
              <p className="marketplace-form-section-desc">
                Linh hoạt thiết lập mức học phí phù hợp với ngân sách của gia đình và nêu rõ mục tiêu đào tạo.
              </p>

              <div className="marketplace-form-grid">
                {/* Bộ điều khiển Ngân sách 4 Chế độ */}
                <div className="marketplace-form-group">
                  <label className="marketplace-label">
                    <DollarSign size={16} color="#2563eb" />
                    Chế độ định giá học phí *
                  </label>

                  <div className="marketplace-budget-modes">
                    <button
                      type="button"
                      className={`marketplace-budget-mode-btn ${budgetMode === 'fixed' ? 'is-active' : ''}`}
                      onClick={() => setBudgetMode('fixed')}
                    >
                      <span className="marketplace-budget-mode-title">1. Giá cố định</span>
                      <span className="marketplace-budget-mode-sub">Mức phí chính xác/buổi</span>
                    </button>

                    <button
                      type="button"
                      className={`marketplace-budget-mode-btn ${budgetMode === 'range' ? 'is-active' : ''}`}
                      onClick={() => setBudgetMode('range')}
                    >
                      <span className="marketplace-budget-mode-title">2. Khoảng giá</span>
                      <span className="marketplace-budget-mode-sub">Từ min đến max</span>
                    </button>

                    <button
                      type="button"
                      className={`marketplace-budget-mode-btn ${budgetMode === 'max' ? 'is-active' : ''}`}
                      onClick={() => setBudgetMode('max')}
                    >
                      <span className="marketplace-budget-mode-title">3. Giá tối đa</span>
                      <span className="marketplace-budget-mode-sub">Ngân sách trần</span>
                    </button>

                    <button
                      type="button"
                      className={`marketplace-budget-mode-btn ${budgetMode === 'negotiable' ? 'is-active' : ''}`}
                      onClick={() => {
                        setBudgetMode('negotiable');
                        setAllowNegotiation(true);
                      }}
                    >
                      <span className="marketplace-budget-mode-title">4. Thương lượng</span>
                      <span className="marketplace-budget-mode-sub">Thỏa thuận trực tiếp</span>
                    </button>
                  </div>

                  {/* Mode 1: Giá cố định */}
                  {budgetMode === 'fixed' && (
                    <div className="marketplace-budget-input-box">
                      <label htmlFor="budget-fixed" style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}>
                        Nhập số tiền học phí mong muốn (VNĐ / buổi học):
                      </label>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <input
                          id="budget-fixed"
                          className="marketplace-input"
                          type="number"
                          step="10000"
                          min="50000"
                          value={budgetAmount}
                          onChange={(e) => setBudgetAmount(Number(e.target.value))}
                          placeholder="VD: 250000"
                          required
                        />
                        <span style={{ fontWeight: 700, color: '#2563eb', whiteSpace: 'nowrap' }}>đ / buổi</span>
                      </div>
                      <div className="marketplace-pills">
                        {[150000, 200000, 250000, 300000, 350000].map((amt) => (
                          <button
                            key={amt}
                            type="button"
                            className={`marketplace-pill ${budgetAmount === amt ? 'is-selected' : ''}`}
                            onClick={() => setBudgetAmount(amt)}
                          >
                            {amt.toLocaleString('vi-VN')} đ
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Mode 2: Khoảng giá */}
                  {budgetMode === 'range' && (
                    <div className="marketplace-budget-input-box">
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}>
                        Khoảng học phí dao động mong muốn (VNĐ / buổi):
                      </span>
                      <div className="marketplace-budget-range-row">
                        <input
                          className="marketplace-input"
                          type="number"
                          step="10000"
                          value={minBudget}
                          onChange={(e) => setMinBudget(Number(e.target.value))}
                          placeholder="Min: 200.000"
                          required
                        />
                        <span style={{ fontWeight: 700, color: '#64748b' }}>đến</span>
                        <input
                          className="marketplace-input"
                          type="number"
                          step="10000"
                          value={maxBudget}
                          onChange={(e) => setMaxBudget(Number(e.target.value))}
                          placeholder="Max: 300.000"
                          required
                        />
                      </div>
                      <small style={{ color: '#64748b' }}>
                        Gia sư sẽ nộp hồ sơ ứng tuyển với mức học phí nằm trong khoảng dao động này.
                      </small>
                    </div>
                  )}

                  {/* Mode 3: Mức giá tối đa */}
                  {budgetMode === 'max' && (
                    <div className="marketplace-budget-input-box">
                      <label htmlFor="budget-max" style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}>
                        Ngân sách học phí tối đa trần (VNĐ / buổi):
                      </label>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <input
                          id="budget-max"
                          className="marketplace-input"
                          type="number"
                          step="10000"
                          min="50000"
                          value={maxBudget}
                          onChange={(e) => setMaxBudget(Number(e.target.value))}
                          placeholder="VD: 300000"
                          required
                        />
                        <span style={{ fontWeight: 700, color: '#2563eb', whiteSpace: 'nowrap' }}>đ / buổi</span>
                      </div>
                      <small style={{ color: '#64748b' }}>
                        Gia sư chỉ được phép đề xuất học phí thấp hơn hoặc bằng mức giá trần bạn đặt.
                      </small>
                    </div>
                  )}

                  {/* Mode 4: Thương lượng với gia sư */}
                  {budgetMode === 'negotiable' && (
                    <div className="marketplace-budget-input-box" style={{ background: '#eff6ff', borderColor: '#bfdbfe' }}>
                      <span style={{ fontWeight: 700, color: '#1e40af', fontSize: '0.92rem' }}>
                        💬 Chế độ thỏa thuận linh hoạt
                      </span>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: '#1e3a8a' }}>
                        Gia sư sẽ xem xét yêu cầu và chủ động gửi mức học phí đề xuất kèm phương pháp giảng dạy. Bạn có thể trao đổi thêm trước khi quyết định.
                      </p>
                    </div>
                  )}

                  {/* Checkbox cho phép thỏa thuận (khi dùng các mode khác) */}
                  {budgetMode !== 'negotiable' && (
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginTop: '6px', fontSize: '0.88rem', color: '#475569' }}>
                      <input
                        type="checkbox"
                        checked={allowNegotiation}
                        onChange={(e) => setAllowNegotiation(e.target.checked)}
                        style={{ width: '16px', height: '16px', accentColor: '#2563eb' }}
                      />
                      <span>Cho phép gia sư thương lượng/thỏa thuận học phí nếu có năng lực vượt trội</span>
                    </label>
                  )}
                </div>

                {/* Mục tiêu học tập */}
                <div className="marketplace-form-group">
                  <label className="marketplace-label" htmlFor="class-goal">
                    <Sparkles size={16} color="#2563eb" />
                    Mục tiêu học tập & Ghi chú cho gia sư *
                  </label>
                  <textarea
                    id="class-goal"
                    className="marketplace-textarea"
                    rows={4}
                    value={learningGoal}
                    onChange={(e) => setLearningGoal(e.target.value)}
                    placeholder="VD: Học viên bị mất gốc phần đại số, cần gia sư kiên nhẫn giảng chậm, ôn thi giữa kỳ và rèn phản xạ làm đề..."
                    required
                  />
                </div>

                {/* Checkbox Học thử 30-45 phút */}
                <div
                  className={`marketplace-checkbox-card ${trialLessonRequested ? 'is-checked' : ''}`}
                  onClick={() => setTrialLessonRequested(!trialLessonRequested)}
                >
                  <input
                    type="checkbox"
                    checked={trialLessonRequested}
                    onChange={(e) => setTrialLessonRequested(e.target.checked)}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <div className="marketplace-checkbox-label">
                    <span className="marketplace-checkbox-title">
                      🎯 Yêu cầu 1 buổi học thử (30-45 phút)
                    </span>
                    <span className="marketplace-checkbox-desc">
                      Gia sư nhận lớp sẽ thực hiện 1 buổi học thử ngắn để đánh giá độ tương thích về phương pháp trước khi hai bên ký hợp đồng học chính thức.
                    </span>
                  </div>
                </div>
              </div>

              {/* Stepper Actions */}
              <div className="marketplace-step-actions">
                <button
                  type="button"
                  className="button button--secondary button--md"
                  onClick={handlePrevStep}
                >
                  <ArrowLeft size={16} /> Quay lại Bước 2
                </button>
                <button
                  type="submit"
                  className="button button--primary button--md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Đang đăng tin...' : 'Đăng tin tìm gia sư ngay'}
                </button>
              </div>
            </form>
          )}
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
