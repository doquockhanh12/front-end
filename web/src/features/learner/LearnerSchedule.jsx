import { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import {
  CalendarDays,
  List,
  Video,
  FileText,
  Clock,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Upload,
  ShieldCheck,
  ShieldAlert,
  ArrowRight,
  ExternalLink,
  Info,
} from 'lucide-react';
import useDemoAuth from '../auth/DemoAuthContext.jsx';
import useDemoDomain from '../domain/DemoDomainContext.jsx';
import LearnerHeader from './LearnerHeader.jsx';
import Avatar from '../../components/Avatar.jsx';
import Badge from '../../components/Badge.jsx';
import useDialogFocus from '../../hooks/useDialogFocus.js';
import OfferSessionPicker from '../chat/OfferSessionPicker.jsx';
import { weekDates, localDateKey, timeLabel, shortDate } from '../../data/tutorSchedule.js';
import './schedule.css';
import './wallet.css';

export default function LearnerSchedule() {
  const { user } = useDemoAuth();
  const { lessons, profiles, escrowTransactions, cancelLessonWithPenalty, refundEscrow } = useDemoDomain();

  const [viewMode, setViewMode] = useState('list'); // 'list' | 'week'
  const [weekOffset, setWeekOffset] = useState(0);
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'upcoming' | 'completed' | 'cancelled'
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  // Filter lessons for current learner
  const learnerLessons = useMemo(() => {
    return (lessons || []).filter(
      (l) =>
        user?.id && l.learnerId === user.id
    );
  }, [lessons, user]);

  const filteredLessons = useMemo(() => {
    return learnerLessons.filter((lesson) => {
      if (statusFilter === 'upcoming') return lesson.status !== 'completed' && lesson.status !== 'cancelled';
      if (statusFilter === 'completed') return lesson.status === 'completed';
      if (statusFilter === 'cancelled') return lesson.status === 'cancelled';
      return true;
    });
  }, [learnerLessons, statusFilter]);

  // Week dates for weekly timetable
  const dates = weekDates(weekOffset);
  const datesKeys = dates.map(localDateKey);

  return (
    <div className="public-page public-page--learner learner-search-page learner-schedule-page density-comfortable">
      <LearnerHeader />
      <main className="learner-container learner-dashboard-main">
        {/* Page Header */}
        <header className="schedule-header">
          <div>
            <span className="wallet-kicker">LỊCH HỌC & LỚP TRỰC TUYẾN</span>
            <h1 className="wallet-title">Lịch học gia sư của bạn</h1>
            <p className="wallet-subtitle">
              Xem lịch học, tham gia phòng học Google Meet và quản lý bảo lưu buổi dạy.
            </p>
          </div>

          <div className="schedule-view-toggles">
            <button
              type="button"
              className={`schedule-toggle-btn ${viewMode === 'list' ? 'is-active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <List size={18} /> Danh sách
            </button>
            <button
              type="button"
              className={`schedule-toggle-btn ${viewMode === 'week' ? 'is-active' : ''}`}
              onClick={() => setViewMode('week')}
            >
              <CalendarDays size={18} /> Lịch tuần
            </button>
          </div>
        </header>

        {/* View Mode: Weekly Timetable */}
        {viewMode === 'week' && (
          <section>
            <div className="week-nav-bar">
              <div className="week-nav-arrows">
                <button
                  type="button"
                  className="schedule-toggle-btn"
                  onClick={() => setWeekOffset((o) => o - 1)}
                  aria-label="Tuần trước"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="week-nav-label">
                  Tuần: {dates[0].toLocaleDateString('vi-VN')} – {dates[6].toLocaleDateString('vi-VN')}
                </span>
                <button
                  type="button"
                  className="schedule-toggle-btn"
                  onClick={() => setWeekOffset((o) => o + 1)}
                  aria-label="Tuần sau"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              {weekOffset !== 0 && (
                <button
                  type="button"
                  className="schedule-toggle-btn"
                  onClick={() => setWeekOffset(0)}
                >
                  Trở về tuần này
                </button>
              )}
            </div>

            <div className="week-grid">
              {dates.map((dateObj, idx) => {
                const dateKey = datesKeys[idx];
                const dayLessons = learnerLessons.filter((l) => l.date === dateKey);
                const dayName = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'][
                  dateObj.getDay()
                ];

                return (
                  <div key={dateKey} className="week-day-col">
                    <div className="week-day-head">
                      <div className="week-day-name">{dayName}</div>
                      <div className="week-day-date">{dateObj.getDate()}</div>
                    </div>
                    <div className="week-day-lessons">
                      {dayLessons.length === 0 ? (
                        <div style={{ padding: '16px 4px', textAlign: 'center', color: '#94a3b8', fontSize: '0.8rem' }}>
                          Trống lịch
                        </div>
                      ) : (
                        dayLessons.map((l) => {
                          const tutor = (profiles || []).find((p) => p.id === l.tutorId);
                          return (
                            <div
                              key={l.id}
                              className={`week-lesson-card ${
                                l.status === 'completed'
                                  ? 'week-lesson-card--completed'
                                  : l.status === 'cancelled'
                                  ? 'week-lesson-card--cancelled'
                                  : ''
                              }`}
                              onClick={() => setSelectedLesson(l)}
                            >
                              <div className="week-lesson-subject">{l.subject}</div>
                              <div className="week-lesson-time">
                                <Clock size={12} /> {timeLabel(l.start)} – {timeLabel(l.end)}
                              </div>
                              <div style={{ fontSize: '0.78rem', color: '#475569', marginTop: '4px' }}>
                                {tutor?.name || 'Gia sư'}
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* View Mode: List View */}
        {viewMode === 'list' && (
          <section>
            {/* Filter Tabs */}
            <div className="wallet-tabs" style={{ marginBottom: '18px' }}>
              <button
                type="button"
                className={`wallet-tab-btn ${statusFilter === 'all' ? 'is-active' : ''}`}
                onClick={() => setStatusFilter('all')}
              >
                Tất cả ({learnerLessons.length})
              </button>
              <button
                type="button"
                className={`wallet-tab-btn ${statusFilter === 'upcoming' ? 'is-active' : ''}`}
                onClick={() => setStatusFilter('upcoming')}
              >
                Sắp diễn ra
              </button>
              <button
                type="button"
                className={`wallet-tab-btn ${statusFilter === 'completed' ? 'is-active' : ''}`}
                onClick={() => setStatusFilter('completed')}
              >
                Đã hoàn thành
              </button>
              <button
                type="button"
                className={`wallet-tab-btn ${statusFilter === 'cancelled' ? 'is-active' : ''}`}
                onClick={() => setStatusFilter('cancelled')}
              >
                Đã hủy
              </button>
            </div>

            {/* List */}
            {filteredLessons.length === 0 ? (
              <div className="wallet-ledger-section" style={{ textAlign: 'center', padding: '40px' }}>
                <CalendarDays size={36} color="var(--brand-primary)" style={{ margin: '0 auto 12px' }} />
                <h3>Không có buổi học nào</h3>
                <p style={{ color: 'var(--text-muted)' }}>Các buổi học mới sẽ xuất hiện ở đây khi bạn đặt lịch gia sư.</p>
              </div>
            ) : (
              <div className="lesson-list">
                {filteredLessons.map((lesson) => {
                  const tutor = (profiles || []).find((p) => p.id === lesson.tutorId);
                  const isOnline = lesson.format === 'online' || !lesson.place || lesson.place.includes('Meet');

                  return (
                    <article key={lesson.id} className="lesson-card">
                      <div className="lesson-card-main">
                        <div className="lesson-date-box">
                          <strong>{shortDate(lesson.date)}</strong>
                          <span>{lesson.date ? lesson.date.slice(0, 4) : '2026'}</span>
                        </div>
                        <div>
                          <h3 className="lesson-info-title">{lesson.subject}</h3>
                          <div className="lesson-info-meta">
                            <span>
                              <Clock size={15} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                              {timeLabel(lesson.start)} – {timeLabel(lesson.end)}
                            </span>
                            <span>•</span>
                            <span>
                              Gia sư: <strong>{tutor?.name || 'Chưa có thông tin gia sư'}</strong>
                            </span>
                            <span>•</span>
                            <span>
                              <MapPin size={15} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                              {isOnline ? 'Online (Google Meet)' : lesson.place || 'Tại nhà'}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="lesson-card-actions">
                        {lesson.status !== 'cancelled' && (
                          <button
                            type="button"
                            className="btn-online-room"
                            onClick={() => setSelectedLesson(lesson)}
                            title="Vào phòng học Online Google Meet"
                          >
                            <Video size={18} /> Vào phòng học Online
                          </button>
                        )}
                        <button
                          type="button"
                          className="wallet-tab-btn is-active"
                          onClick={() => setSelectedLesson(lesson)}
                        >
                          Chi tiết & Hủy lịch
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </section>
        )}

        {/* Lesson Detail Modal */}
        {selectedLesson && (
          <LearnerLessonDetailModal
            lesson={selectedLesson}
            tutor={(profiles || []).find((p) => p.id === selectedLesson.tutorId)}
            escrowTransactions={escrowTransactions || []}
            onClose={() => setSelectedLesson(null)}
            onCancelLesson={(lessonId, hours, reason) => {
              const result = cancelLessonWithPenalty(lessonId, 'learner', hours, reason);
              if (result?.error) { showToast(result.error); return; }
              showToast('Đã hủy buổi học và xử lý hoàn trả / bồi thường theo đúng chính sách.');
              setSelectedLesson(null);
            }}
            onOneClickRefund={(escrowId, amount, reason) => {
              if (!escrowId) { showToast('Buổi học này không có khoản ký quỹ liên kết để hoàn tiền.'); return; }
              const result = refundEscrow(escrowId, amount, reason, selectedLesson.id);
              if (result?.error) { showToast(result.error); return; }
              showToast('Yêu cầu Hoàn tiền 100% vì Sự cố đã được xử lý thành công về Ví học viên!');
              setSelectedLesson(null);
            }}
          />
        )}

        {/* Toast */}
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

// Lesson Detail Modal with Google Meet, Homework & Materials, Dynamic Penalty Cancellation, and One-Click Refund
function LearnerLessonDetailModal({
  lesson: selectedLesson,
  tutor,
  escrowTransactions,
  onClose,
  onCancelLesson,
  onOneClickRefund,
}) {
  const selectedLessonId = selectedLesson.id;
  const { lessons, availability, settings, renewLesson, submitLearnerReview, submitLessonHomework, rescheduleLesson } = useDemoDomain();
  const [uploadSuccess, setUploadSuccess] = useState('');
  const [cancelReason, setCancelReason] = useState('Bận việc gia đình đột xuất');
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const dialogRef = useDialogFocus(onClose);
  const [renewCount, setRenewCount] = useState(4);
  const [renewSessions, setRenewSessions] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [lessonFeedback, setLessonFeedback] = useState('');
  const [roomOpen, setRoomOpen] = useState(false);
  const [rescheduleOpen, setRescheduleOpen] = useState(false);
  const [rescheduleSelection, setRescheduleSelection] = useState([]);
  const [refundReason, setRefundReason] = useState('');
  const currentLesson = lessons.find(item => item.id === selectedLessonId) || selectedLesson;
  const lesson = currentLesson;
  const lessonStart = new Date(`${lesson.date}T00:00:00`);
  lessonStart.setMinutes(lesson.start);
  const hoursBeforeLesson = (lessonStart.getTime() - Date.now()) / 3600000;
  const uploadHomework = event => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > 500 * 1024) { setUploadSuccess('Tệp tối đa 500 KB trong prototype.'); return; }
    const reader = new FileReader();
    reader.onload = () => {
      const result = submitLessonHomework(lesson.id, { name: file.name, type: file.type, dataUrl: reader.result });
      setUploadSuccess(result.error || 'Đã lưu bài tập vào buổi học demo.');
    };
    reader.readAsDataURL(file);
  };

  // Find relevant escrow transaction
  const escrow = escrowTransactions.find(
    (e) => e.status === 'held' && (e.lessonId === lesson.id || (lesson.escrowId && e.id === lesson.escrowId))
  );

  const sessionFee = Number.isFinite(lesson.sessionFee) ? lesson.sessionFee : 0;
  const canCancel = ['confirmed', 'upcoming', 'pending'].includes(lesson.status);

  // Determine dynamic cancellation penalty
  let penaltyRuleLabel = '';
  let learnerRefundPercent = 100;
  let tutorCompensationPercent = 0;
  let penaltyDesc = '';

  if (hoursBeforeLesson >= 24) {
    penaltyRuleLabel = 'Hủy trước >= 24h: Hoàn tiền 100%';
    learnerRefundPercent = 100;
    tutorCompensationPercent = 0;
    penaltyDesc = 'Bạn được hoàn lại 100% học phí vào ví khả dụng. Lịch rảnh của gia sư được tự động mở lại.';
  } else if (hoursBeforeLesson >= 2 && hoursBeforeLesson < 24) {
    penaltyRuleLabel = 'Hủy trong 2h – 24h: Hoàn tiền 50%';
    learnerRefundPercent = 50;
    tutorCompensationPercent = 50;
    penaltyDesc = 'Bạn nhận lại 50% học phí. 50% còn lại được bồi thường cho gia sư do sắp xếp lịch sát giờ.';
  } else {
    penaltyRuleLabel = 'Hủy sát giờ < 2h: Không hoàn tiền (0%)';
    learnerRefundPercent = 0;
    tutorCompensationPercent = 100;
    penaltyDesc = 'Không hoàn phí. 100% học phí được chuyển bồi thường cho gia sư bù đắp chi phí chuẩn bị.';
  }

  const refundAmount = Math.round((sessionFee * learnerRefundPercent) / 100);
  const compensationAmount = Math.round((sessionFee * tutorCompensationPercent) / 100);

  return createPortal(
    <div className="wallet-modal-overlay" onClick={onClose}>
      <div
        className="wallet-modal lesson-modal-dialog"
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lesson-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="wallet-modal-close" onClick={onClose} aria-label="Đóng cửa sổ">
          <X size={20} />
        </button>

        <header className="lesson-modal-header">
          <span className="wallet-kicker">CHI TIẾT BUỔI HỌC</span>
          <h2 id="lesson-modal-title" className="wallet-title" style={{ fontSize: '1.4rem' }}>
            {lesson.subject}
          </h2>
          <div className="lesson-info-meta">
            <span>
              <Clock size={15} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
              {shortDate(lesson.date)} · {timeLabel(lesson.start)} – {timeLabel(lesson.end)}
            </span>
            <span>•</span>
            <span>Gia sư: <strong>{tutor?.name || 'Chưa có thông tin gia sư'}</strong></span>
            <span>•</span>
            <span>Học phí: <strong>{sessionFee.toLocaleString('vi-VN')} đ</strong></span>
          </div>
        </header>

        {/* 1. Button Vào phòng học Online */}
        <div style={{ marginBottom: '18px' }}>
          <button
            type="button"
            className="btn-online-room"
            style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '1rem' }}
            onClick={() => setRoomOpen(open => !open)}
          >
            <Video size={20} /> Vào phòng học Online (Google Meet)
          </button>
          <small style={{ color: 'var(--text-muted)', display: 'block', textAlign: 'center', marginTop: '6px' }}>Prototype: không kết nối phòng học hay Google Meet thật.</small>
          {roomOpen && <div role="status" className="lesson-section-box"><strong>Phòng học demo · {lesson.subject}</strong><p>Ngày {shortDate(lesson.date)}, {timeLabel(lesson.start)}–{timeLabel(lesson.end)}. Không bật camera, gửi dữ liệu hay kết nối dịch vụ video.</p>{/^https:\/\//.test(currentLesson.meeting || '') && <a href={currentLesson.meeting} target="_blank" rel="noreferrer">Mở đường dẫn phòng học do gia sư cung cấp</a>}</div>}
        </div>

        {/* 2. Homework & Study Materials Section */}
        <section className="lesson-section-box">
          <h3 className="lesson-section-title">
            <FileText size={18} style={{ color: 'var(--brand-primary)' }} /> Tài liệu & Bài tập về nhà
          </h3>
          <div className="lesson-materials" style={{ display: 'grid', gap: '8px', fontSize: '0.88rem' }}>
            {(currentLesson.materials || []).map((file,index) => <div className="lesson-material-row" key={`${file.name}-${index}`}><strong>{file.name}</strong><a className="button button--secondary button--sm" download={file.name} href={file.dataUrl} aria-label={`Tải ${file.name}`}><Download size={15} /> Tải về</a></div>)}
            {!currentLesson.materials?.length && <p>Gia sư chưa đính kèm tài liệu cho buổi học này.</p>}
            <label className="lesson-homework-label">Nộp bài tập<input type="file" onChange={uploadHomework} /></label>
            {(currentLesson.submissions || []).map((file,index) => <div key={`${file.name}-${index}`}><strong>{file.name}</strong><span> · Bài đã nộp</span></div>)}
            {uploadSuccess && <p role="status">{uploadSuccess}</p>}
            <p><strong>Nhận xét / Tiến độ:</strong> {currentLesson.progress || currentLesson.notes || 'Chưa có nhận xét từ gia sư.'}</p>
          </div>
        </section>

        {lesson.status === 'completed' && <section className="lesson-section-box">
          <h3 className="lesson-section-title">Đánh giá & Gia hạn khóa học</h3>
          <label htmlFor="lesson-rating">Đánh giá gia sư</label><select id="lesson-rating" value={rating} onChange={event => setRating(Number(event.target.value))}>{[5,4,3,2,1].map(value => <option key={value} value={value}>{value} sao</option>)}</select>
          <label htmlFor="lesson-review">Nhận xét</label><textarea id="lesson-review" value={comment} onChange={event => setComment(event.target.value)} />
          <button className="button button--secondary" type="button" onClick={() => { const result = submitLearnerReview(lesson.id, { rating, comment }); setLessonFeedback(result.error || 'Đã gửi đánh giá.'); }}>Gửi đánh giá buổi học</button>
          <label htmlFor="renew-count">Gia hạn với gia sư {tutor?.name}</label><select id="renew-count" value={renewCount} onChange={event => { setRenewCount(Number(event.target.value)); setRenewSessions([]); }}>{[4,8,12].map(value => <option key={value} value={value}>{value} buổi</option>)}</select>
          <OfferSessionPicker tutorId={lesson.tutorId} availability={availability} lessons={lessons} duration={settings?.[lesson.tutorId]?.sessionMinutes} selected={renewSessions} onChange={setRenewSessions} limit={renewCount} />
          <button type="button" className="button button--primary" onClick={() => { const result = renewLesson(lesson.id, { sessionsCount: renewCount, proposals: renewSessions }); setLessonFeedback(result.error || 'Đã đặt cọc và gia hạn các buổi học đã chọn.'); }}>Đặt cọc gia hạn</button>
          {lessonFeedback && <p role="status">{lessonFeedback}</p>}
        </section>}

        {/* 3. Button Hủy buổi học with Dynamic Cancellation Penalty */}
        {canCancel && (
          <section className="lesson-section-box" style={{ borderColor: '#fed7aa', background: '#fffaf0' }}>
            <button type="button" className="button button--secondary" onClick={() => setRescheduleOpen(open => !open)}>Yêu cầu đổi lịch</button>
            {rescheduleOpen && <div className="lesson-reschedule"><p>Đổi lịch trước giờ học ít nhất 24 giờ. Chọn một buổi rảnh cùng thời lượng.</p><OfferSessionPicker tutorId={lesson.tutorId} availability={availability} lessons={lessons} duration={lesson.end - lesson.start} selected={rescheduleSelection} onChange={setRescheduleSelection} limit={1} /><button type="button" className="button button--primary" onClick={() => { const result = rescheduleLesson(lesson.id, rescheduleSelection[0]); setLessonFeedback(result.error || 'Đã đổi lịch buổi học.'); }}>Xác nhận đổi lịch</button>{lessonFeedback && <p role="status">{lessonFeedback}</p>}</div>}
            <h3 className="lesson-section-title" style={{ color: '#c2410c' }}>
              <AlertTriangle size={18} /> Chính sách & Hủy buổi học
            </h3>

            {/* The preview and domain decision use the actual scheduled date. */}
            <div style={{ marginBottom: '10px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                Thời gian trước giờ học: {Number.isFinite(hoursBeforeLesson) ? `${Math.max(0, hoursBeforeLesson).toFixed(1)} giờ` : 'Chưa xác định'}
              </span>
            </div>

            {/* Dynamic penalty display */}
            <div className="penalty-calculator-box">
              <div className="penalty-rule-item is-current">
                <span>Quy chế áp dụng:</span>
                <span>{penaltyRuleLabel}</span>
              </div>
              <div className="penalty-rule-item">
                <span>Số tiền bạn được hoàn:</span>
                <span style={{ color: '#16a34a', fontWeight: 800 }}>+{refundAmount.toLocaleString('vi-VN')} đ ({learnerRefundPercent}%)</span>
              </div>
              <div className="penalty-rule-item">
                <span>Bồi thường cho gia sư:</span>
                <span style={{ color: '#b91c1c', fontWeight: 800 }}>{compensationAmount.toLocaleString('vi-VN')} đ ({tutorCompensationPercent}%)</span>
              </div>
              <p style={{ margin: '8px 0 0', fontSize: '0.82rem', color: '#92400e' }}>
                {penaltyDesc}
              </p>
            </div>

            {!showCancelConfirm ? (
              <button
                type="button"
                className="wallet-tab-btn"
                style={{ marginTop: '12px', background: '#fed7aa', color: '#9a3412', border: 'none', fontWeight: 700 }}
                onClick={() => setShowCancelConfirm(true)}
              >
                Hủy buổi học này
              </button>
            ) : (
              <div style={{ marginTop: '12px', padding: '12px', background: 'white', borderRadius: '8px', border: '1px solid #f97316' }}>
                <label htmlFor="learner-cancel-reason" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px' }}>
                  Lý do hủy buổi học:
                </label>
                <select
                  id="learner-cancel-reason"
                  value={cancelReason}
                  onChange={(e) => setCancelReason(e.target.value)}
                  style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1', marginBottom: '10px' }}
                >
                  <option value="Bận việc gia đình đột xuất">Bận việc gia đình đột xuất</option>
                  <option value="Kẹt lịch học ở trường">Kẹt lịch học ở trường</option>
                  <option value="Lý do sức khỏe">Lý do sức khỏe</option>
                  <option value="Lý do khác">Lý do khác</option>
                </select>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    type="button"
                    style={{ flex: 1, padding: '8px', border: '1px solid #cbd5e1', borderRadius: '6px', background: '#f8fafc', fontWeight: 700 }}
                    onClick={() => setShowCancelConfirm(false)}
                  >
                    Quay lại
                  </button>
                  <button
                    type="button"
                    style={{ flex: 2, padding: '8px', background: '#dc2626', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 700, cursor: 'pointer' }}
                    onClick={() => onCancelLesson(lesson.id, hoursBeforeLesson, cancelReason)}
                  >
                    Xác nhận hủy buổi học
                  </button>
                </div>
              </div>
            )}
          </section>
        )}

        {/* 4. Button Yêu cầu Hoàn tiền 100% vì Sự cố (One-Click Refund) */}
        <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <span style={{ fontWeight: 700, fontSize: '0.88rem', display: 'block' }}>Gặp sự cố hoặc gia sư vắng mặt?</span>
            <small style={{ color: 'var(--text-muted)' }}>Chỉ hoàn khoản ký quỹ demo còn giữ và liên kết với buổi học này.</small>
            <label className="lesson-refund-label" htmlFor="lesson-refund-reason">Lý do yêu cầu hoàn tiền</label>
            <select id="lesson-refund-reason" value={refundReason} onChange={event => setRefundReason(event.target.value)}>
              <option value="">Chọn sự cố đã xảy ra</option>
              <option>Gia sư vắng mặt</option>
              <option>Gia sư trễ từ 15 phút</option>
              <option>Buổi đầu không hài lòng</option>
            </select>
          </div>
          <button
            type="button"
            className="one-click-refund-btn"
            disabled={!refundReason}
            onClick={() => {
              if (escrow?.id) {
                onOneClickRefund(escrow.id, sessionFee, refundReason);
              } else onOneClickRefund(null, 0, 'Không có khoản ký quỹ liên kết');
            }}
          >
            <ShieldCheck size={18} /> Yêu cầu Hoàn tiền 100% vì Sự cố
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
