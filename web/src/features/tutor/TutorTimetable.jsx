import { useEffect, useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Save,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Navigation,
  MapPin,
  Clock,
  Share2,
  PhoneCall,
  Siren,
  X,
  Copy,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
} from 'lucide-react';
import Button from '../../components/Button.jsx';
import { TutorShell } from './TutorPages.jsx';
import useTutorWorkspace from './TutorWorkspaceState.jsx';
import {
  firstFreeStart,
  isValidAvailability,
  localDateKey,
  shortDate,
  timeLabel,
  overlaps,
  weekDates,
} from '../../data/tutorSchedule.js';
import WeeklyTimeline from '../scheduling/WeeklyTimeline.jsx';
import TimeConfirmation from '../scheduling/TimeConfirmation.jsx';
import LessonDetailModal from './LessonDetailModal.jsx';
import SosHoldButton from './SosHoldButton.jsx';
import useDialogFocus from '../../hooks/useDialogFocus.js';
import './timetable.css';

const rangeSignature = (range) =>
  `${range.id}:${range.tutorId}:${range.date}:${range.start}:${range.end}`;

export function TimetableBoard() {
  const {
    tutorId,
    availability,
    lessons,
    sessionMinutes,
    saveAvailability,
    completeLesson,
    saveLessonNotes,
    logSafety,
    triggerSOS,
    safetyLogs,
  } = useTutorWorkspace();

  const [offset, setOffset] = useState(0);
  const [draftRanges, setDraftRanges] = useState(availability);
  const [draftDuration, setDraftDuration] = useState(sessionMinutes);
  const [candidate, setCandidate] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [feedback, setFeedback] = useState({ kind: '', text: '' });

  // Safety Shield Modal States
  const [sosModalLesson, setSosModalLesson] = useState(null);
  const [shareTripLesson, setShareTripLesson] = useState(null);
  const [safetyFeedback, setSafetyFeedback] = useState('');

  const dates = weekDates(offset);
  const visibleDates = new Set(dates.map(localDateKey));
  const tutorRanges = availability.filter((range) => range.tutorId === tutorId);
  const draftTutorRanges = draftRanges.filter((range) => range.tutorId === tutorId);
  const tutorLessons = lessons.filter(
    (lesson) => lesson.tutorId === tutorId && lesson.status !== 'cancelled'
  );
  const visibleRanges = draftTutorRanges.filter((range) => visibleDates.has(range.date));
  const visibleLessons = tutorLessons.filter((lesson) => visibleDates.has(lesson.date));
  const conflicts = visibleLessons.flatMap((lesson, index) =>
    visibleLessons
      .slice(index + 1)
      .filter((other) => overlaps(lesson, other))
      .map((other) => [lesson, other])
  );
  const selected = lessons.find((lesson) => lesson.tutorId === tutorId && lesson.id === selectedId);
  const unchanged = (range) =>
    tutorRanges.some((saved) => rangeSignature(saved) === rangeSignature(range));
  const blocks = [
    ...visibleRanges.map((range) => ({
      ...range,
      kind: 'availability',
      title: 'Lịch rảnh',
      draft: !unchanged(range),
    })),
    ...visibleLessons.map((lesson) => ({
      ...lesson,
      kind: 'lesson',
      title: lesson.subject,
      subtitle: lesson.learner + (lesson.status === 'completed' ? ' · Hoàn tất' : ''),
      draft: false,
    })),
  ];
  const dirty =
    draftDuration !== sessionMinutes ||
    draftTutorRanges.length !== tutorRanges.length ||
    draftTutorRanges.some((range) => !unchanged(range));

  // Upcoming lessons for Tutor Safety Shield
  const upcomingSafetyLessons = useMemo(() => {
    return tutorLessons.filter((l) => ['confirmed','upcoming'].includes(l.status));
  }, [tutorLessons]);

  useEffect(() => {
    if (dirty) return;
    setDraftRanges(availability);
    setDraftDuration(sessionMinutes);
  }, [availability, sessionMinutes, dirty]);

  useEffect(() => {
    if (!dirty) return undefined;
    const warn = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirty]);

  const validate = (range, excludeId) =>
    isValidAvailability({ ...range, tutorId: tutorId }, draftTutorRanges, tutorLessons, excludeId);

  const openDayAdd = (date, preferred) => {
    const start = firstFreeStart(date, draftDuration, draftTutorRanges, tutorLessons, preferred, tutorId);
    if (start === null) {
      setFeedback({ kind: 'error', text: `Không còn khoảng trống ${draftDuration} phút vào ${shortDate(date)}.` });
      return;
    }
    setCandidate({ tutorId, date, start, end: start + draftDuration });
    setFeedback({ kind: '', text: '' });
  };

  const openTimeAdd = ({ date, start }) => {
    setCandidate({ tutorId, date, start, end: start + draftDuration });
    setFeedback({ kind: '', text: '' });
  };

  const confirmAdd = (range) => {
    const next = { ...range, tutorId, id: `availability-${Date.now()}-${Math.random().toString(16).slice(2)}` };
    if (!validate(next)) return 'Khung giờ này trùng lịch hoặc nằm ngoài giới hạn cho phép.';
    setDraftRanges((current) => [...current, next]);
    setFeedback({ kind: 'draft', text: 'Đã thêm vào lịch nháp. Bấm Lưu lịch để áp dụng.' });
    return '';
  };

  const moveRange = (id, candidateRange) => {
    const next = { id, tutorId, date: candidateRange.date, start: candidateRange.start, end: candidateRange.end };
    if (!validate(next, id)) {
      setFeedback({ kind: 'error', text: 'Không thể di chuyển vì khung giờ mới trùng lịch hoặc không hợp lệ.' });
      return;
    }
    setDraftRanges((current) => current.map((range) => (range.id === id ? next : range)));
    setFeedback({ kind: 'draft', text: 'Đã di chuyển khung giờ trong lịch nháp. Bấm Lưu lịch để áp dụng.' });
  };

  const save = () => {
    const error = saveAvailability(draftRanges, draftDuration);
    if (error) {
      setFeedback({ kind: 'error', text: error });
      return;
    }
    setFeedback({ kind: 'saved', text: 'Đã lưu lịch rảnh và thời lượng buổi học trong trình duyệt.' });
  };

  const cancelChanges = () => {
    setDraftRanges(availability);
    setDraftDuration(sessionMinutes);
    setCandidate(null);
    setFeedback({ kind: '', text: '' });
  };

  // Safety Shield Handlers
  const handleSafetyStep = (lesson, action) => {
    const actionLabels = {
      moving: 'Bắt đầu di chuyển',
      checkin: 'Check-in đã đến nơi an toàn',
      checkout: 'Check-out ra về an toàn',
    };
    logSafety({
      lessonId: lesson.id,
      tutorId,
      action,
      location: lesson.place || '',
      note: `Gia sư thực hiện: ${actionLabels[action] || action}`,
    });
    setSafetyFeedback(`✓ Đã ghi nhận: ${actionLabels[action] || action}`);
    setTimeout(() => setSafetyFeedback(''), 4000);
  };

  const handleTriggerSOS = (lesson) => {
    triggerSOS({
      lessonId: lesson.id,
      tutorId,
      note: `BÁO ĐỘNG SOS KHẨN CẤP: Gia sư kích hoạt cảnh báo tại buổi dạy môn ${lesson.subject}`,
      emergencyContact: '113',
    });
    setSosModalLesson(lesson);
  };

  return (
    <section className="teaching-timetable" aria-label="Thời khóa biểu lịch dạy và lịch rảnh">
      {/* 4. Tutor Safety Shield Panel for upcoming lessons */}
      <section className="safety-shield-panel" aria-label="Khiên an toàn gia sư">
        <div className="safety-shield-head">
          <div>
            <h2 className="safety-shield-title">
              <ShieldCheck size={22} color="var(--brand-primary)" /> Khiên An Toàn Gia Sư (Tutor Safety Shield)
            </h2>
            <p className="safety-shield-subtitle">
              Ghi nhận Check-in/out và cảnh báo trong bản demo. Giữ SOS 3 giây; không gửi GPS, SMS hoặc gọi tự động.
            </p>
          </div>
          {safetyFeedback && (
            <div style={{ color: 'var(--status-success)', fontWeight: 700, fontSize: '0.88rem' }}>
              {safetyFeedback}
            </div>
          )}
        </div>

        {upcomingSafetyLessons.length === 0 ? (
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: 0 }}>
            Hiện không có buổi dạy nào sắp diễn ra để kích hoạt khiên an toàn.
          </p>
        ) : (
          <div className="safety-lessons-list">
            {upcomingSafetyLessons.map((lesson) => {
              // Get latest action for this lesson
              const lessonLogs = (safetyLogs || []).filter((l) => l.lessonId === lesson.id);
              const latestLog = lessonLogs[0];
              const currentAction = latestLog?.action || 'idle';

              return (
                <article key={lesson.id} className="safety-lesson-card">
                  <div className="safety-lesson-info">
                    <div className="safety-lesson-name">
                      {lesson.subject} · {lesson.learner}
                    </div>
                    <div className="safety-lesson-meta">
                      <span>
                        <Clock size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '3px' }} />
                        {shortDate(lesson.date)} ({timeLabel(lesson.start)} – {timeLabel(lesson.end)})
                      </span>
                      <span>
                        <MapPin size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '3px' }} />
                        {lesson.place || 'Chưa có địa điểm'}
                      </span>
                      {currentAction !== 'idle' && (
                        <span style={{ color: 'var(--brand-primary)', fontWeight: 700 }}>
                          Trạng thái: {currentAction === 'moving' ? 'Đang di chuyển' : currentAction === 'checkin' ? 'Đã check-in an toàn' : currentAction === 'checkout' ? 'Đã check-out' : currentAction === 'sos' ? '🚨 ĐÃ BÁO ĐỘNG SOS' : currentAction}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="safety-actions-cluster">
                    {/* Progressive status buttons */}
                    <button
                      type="button"
                      className={`safety-step-btn ${currentAction === 'moving' ? 'is-active' : ''}`}
                      onClick={() => handleSafetyStep(lesson, 'moving')}
                      title="Bắt đầu di chuyển đến điểm dạy"
                    >
                      <Navigation size={15} /> Bắt đầu di chuyển
                    </button>

                    <button
                      type="button"
                      className={`safety-step-btn ${currentAction === 'checkin' ? 'is-active' : ''}`}
                      onClick={() => handleSafetyStep(lesson, 'checkin')}
                      title="Check-in đã đến nơi an toàn"
                    >
                      <ShieldCheck size={15} /> Check-in an toàn
                    </button>

                    <button
                      type="button"
                      className={`safety-step-btn ${currentAction === 'checkout' ? 'is-active' : ''}`}
                      onClick={() => handleSafetyStep(lesson, 'checkout')}
                      title="Check-out ra về an toàn"
                    >
                      <Check size={15} /> Check-out ra về
                    </button>

                    {/* Share trip button */}
                    <button
                      type="button"
                      className="btn-share-trip"
                      onClick={() => setShareTripLesson(lesson)}
                      title="Chia sẻ buổi dạy hôm nay cho người thân"
                    >
                      <Share2 size={15} /> Chia sẻ buổi dạy
                    </button>

                    {/* Prominent Red SOS Emergency Button */}
                    <SosHoldButton onActivate={() => handleTriggerSOS(lesson)} />
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* Timetable Toolbar */}
      <div className="teaching-timetable__toolbar">
        <div className="teaching-timetable__week">
          <Button
            variant="secondary"
            size="sm"
            aria-label="Tuần trước"
            onClick={() => setOffset((value) => value - 1)}
          >
            <ChevronLeft size={18} />
          </Button>
          <strong>
            Tuần: {dates[0].toLocaleDateString('vi-VN')} – {dates[6].toLocaleDateString('vi-VN')}
          </strong>
          <Button
            variant="secondary"
            size="sm"
            aria-label="Tuần sau"
            onClick={() => setOffset((value) => value + 1)}
          >
            <ChevronRight size={18} />
          </Button>
          {offset !== 0 && (
            <Button variant="quiet" size="sm" onClick={() => setOffset(0)}>
              Trở về hiện tại
            </Button>
          )}
        </div>
        <label className="teaching-timetable__duration">
          Thời lượng mỗi buổi
          <select
            value={draftDuration}
            onChange={(event) => {
              setDraftDuration(Number(event.target.value));
              setCandidate(null);
              setFeedback({ kind: 'draft', text: 'Thời lượng mới sẽ được lưu cùng lịch.' });
            }}
          >
            <option value={45}>45 phút</option>
            <option value={90}>90 phút</option>
          </select>
        </label>
      </div>

      <div className="teaching-timetable__legend">
        <span>
          <i className="legend-unselected" />
          Chưa chọn
        </span>
        <span>
          <i className="legend-available" />
          Lịch rảnh
        </span>
        <span>
          <i className="legend-lesson" />
          Lịch dạy
        </span>
        <p>
          Mở chi tiết một giờ bằng dấu + ở trục giờ; chọn giờ để thêm nhanh, hoặc kéo khung rảnh để đổi ngày và giờ.
        </p>
      </div>

      {dirty && (
        <div className="teaching-timetable__save">
          <p role="status">Bạn có thay đổi lịch rảnh hoặc thời lượng chưa lưu.</p>
          <div>
            <Button variant="secondary" onClick={cancelChanges}>
              Hủy thay đổi
            </Button>
            <Button onClick={save}>
              <Save size={18} />
              Lưu lịch
            </Button>
          </div>
        </div>
      )}

      {feedback.text && (
        <p
          className={`teaching-timetable__feedback teaching-timetable__feedback--${feedback.kind}`}
          role={feedback.kind === 'error' ? 'alert' : 'status'}
        >
          {feedback.kind === 'saved' && <Check size={16} />} {feedback.text}
        </p>
      )}

      {!!conflicts.length && (
        <div
          className="teaching-timetable__feedback teaching-timetable__feedback--error teaching-timetable__conflicts"
          role="alert"
        >
          <strong>Trùng lịch trong dữ liệu đã lưu</strong>
          <p>
            Các lớp dưới đây có giờ trùng nhau và được hiển thị ở cột riêng. Ngày giờ được giữ nguyên; cần xác nhận lại lịch trước khi dạy.
          </p>
          <ul>
            {conflicts.map(([first, second]) => (
              <li key={`${first.id}:${second.id}`}>
                {shortDate(first.date)}: {first.subject} · {first.learner} ({timeLabel(first.start)}–
                {timeLabel(first.end)}) / {second.subject} · {second.learner} ({timeLabel(second.start)}–
                {timeLabel(second.end)})
              </li>
            ))}
          </ul>
        </div>
      )}

      <WeeklyTimeline
        dates={dates}
        blocks={blocks}
        editable
        label="Lịch dạy và lịch rảnh của gia sư"
        onDayAdd={openDayAdd}
        onTimeClick={openTimeAdd}
        onMove={moveRange}
        onDelete={(id) => {
          setDraftRanges((current) => current.filter((range) => range.id !== id));
          setFeedback({ kind: 'draft', text: 'Đã xóa khỏi lịch nháp. Bấm Lưu lịch để áp dụng.' });
        }}
        onBlockClick={(block) => {
          if (block.kind === 'lesson') setSelectedId(block.id);
        }}
        isRangeAllowed={validate}
      />

      {selected && (
        <LessonDetailModal
          key={selected.id}
          lesson={selected}
          onClose={() => setSelectedId(null)}
          onSaveNotes={saveLessonNotes}
          onComplete={completeLesson}
        />
      )}

      <p className="teaching-timetable__note">
        Timeline hiển thị 06:00–24:00; lịch rảnh và buổi học dùng ngày cùng giờ bắt đầu và kết thúc. Dữ liệu được mô phỏng trong prototype.
      </p>

      {candidate && (
        <TimeConfirmation
          candidate={candidate}
          duration={draftDuration}
          title="Thêm lịch rảnh"
          action="Thêm vào lịch nháp"
          onClose={() => setCandidate(null)}
          onConfirm={confirmAdd}
        />
      )}

      {/* SOS Emergency Modal */}
      {sosModalLesson && (
        <TutorSosEmergencyModal
          lesson={sosModalLesson}
          onClose={() => setSosModalLesson(null)}
        />
      )}

      {/* Share Trip Token Modal */}
      {shareTripLesson && (
        <TutorShareTripModal
          lesson={shareTripLesson}
          tutorId={tutorId}
          onClose={() => setShareTripLesson(null)}
        />
      )}
    </section>
  );
}

// SOS Emergency Modal with simulated 113 hotline call & emergency SMS
function TutorSosEmergencyModal({ lesson, onClose }) {
  const dialogRef = useDialogFocus(onClose);
  return createPortal(
    <div className="wallet-modal-overlay" onClick={onClose}>
      <div
        ref={dialogRef}
        className="wallet-modal sos-emergency-modal"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="sos-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="wallet-modal-close" onClick={onClose} aria-label="Đóng cảnh báo">
          <X size={20} />
        </button>

        <div className="sos-badge-alarm">
          <Siren size={36} />
        </div>

        <h2 id="sos-title" style={{ color: '#dc2626', fontSize: '1.4rem', fontWeight: 800, margin: '0 0 10px' }}>
          CẢNH BÁO SOS DEMO ĐÃ KÍCH HOẠT
        </h2>

        <p style={{ color: '#334155', fontSize: '0.95rem', lineHeight: 1.5, margin: '0 0 16px' }}>
          Cảnh báo mô phỏng đã được ghi vào giao diện Admin trong trình duyệt này. Không liên hệ trung tâm ứng cứu thật.
        </p>

        <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '12px', textAlign: 'left', marginBottom: '16px', fontSize: '0.88rem' }}>
          <div><strong>Buổi dạy:</strong> {lesson.subject} · {lesson.learner}</div>
          <div><strong>Địa điểm:</strong> {lesson.place || 'Chưa có địa điểm'}</div>
          <div><strong>Thời gian:</strong> {shortDate(lesson.date)} ({timeLabel(lesson.start)} – {timeLabel(lesson.end)})</div>
          <div style={{ color: '#dc2626', fontWeight: 700, marginTop: '6px' }}>
            Không gửi GPS hoặc SMS. Nếu có nguy hiểm thật, hãy chủ động gọi 113.
          </div>
        </div>

        {/* 113 Hotline Button */}
        <a href="tel:113" className="sos-call-btn">
          <PhoneCall size={22} /> Gọi trực tiếp Hotline 113
        </a>

        <button
          type="button"
          onClick={onClose}
          style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '8px', background: '#f8fafc', fontWeight: 700, cursor: 'pointer' }}
        >
          Tôi đã an toàn / Đóng cảnh báo
        </button>
      </div>
    </div>,
    document.body
  );
}

// Share Trip Token Modal with copyable secure link
function TutorShareTripModal({ lesson, tutorId, onClose }) {
  const dialogRef = useDialogFocus(onClose);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState('');
  const localPath = `/safety/trip?lesson=${encodeURIComponent(lesson.id)}`;
  const shareLink = `${window.location.origin}${localPath}`;

  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(shareLink); setCopied(true); setCopyError(''); }
    catch { setCopyError('Không thể sao chép tự động. Hãy chọn và chép liên kết bên dưới.'); }
  };

  return createPortal(
    <div className="wallet-modal-overlay" onClick={onClose}>
      <div
        className="wallet-modal"
        ref={dialogRef}
        style={{ maxWidth: '520px' }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="share-trip-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="wallet-modal-close" onClick={onClose} aria-label="Đóng cửa sổ">
          <X size={20} />
        </button>

        <header style={{ marginBottom: '16px', paddingRight: '36px' }}>
          <h2 id="share-trip-title" style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Share2 size={20} color="var(--brand-primary)" /> Chia sẻ hành trình dạy học cho người thân
          </h2>
          <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.88rem' }}>
            Liên kết demo đọc buổi học và trạng thái trong trình duyệt này. Không có GPS trực tiếp, mã bảo mật hoặc đồng bộ sang thiết bị khác.
          </p>
        </header>

        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '14px', marginBottom: '16px', fontSize: '0.88rem', display: 'grid', gap: '6px' }}>
          <div><strong>Môn dạy:</strong> {lesson.subject}</div>
          <div><strong>Học viên:</strong> {lesson.learner}</div>
          <div><strong>Thời gian:</strong> {shortDate(lesson.date)} · {timeLabel(lesson.start)} – {timeLabel(lesson.end)}</div>
          <div><strong>Địa chỉ:</strong> {lesson.place || 'Chưa có địa điểm'}</div>
        </div>

        <div style={{ marginBottom: '18px' }}>
          <label htmlFor="trip-demo-link" style={{ display: 'block', fontWeight: 700, fontSize: '0.85rem', marginBottom: '6px' }}>
            Liên kết demo buổi dạy
          </label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input
              id="trip-demo-link"
              type="text"
              readOnly
              value={shareLink}
              style={{ flex: 1, minWidth: 0, padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#f1f5f9', fontSize: '0.85rem', fontFamily: 'monospace' }}
            />
            <button
              type="button"
              onClick={handleCopy}
              className="wallet-btn-deposit"
              style={{ padding: '8px 14px', fontSize: '0.85rem', whiteSpace: 'nowrap' }}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Đã chép!' : 'Sao chép'}
            </button>
          </div>
        </div>
        {copyError && <p role="alert">{copyError}</p>}
        <Link to={localPath} className="button button--primary" onClick={onClose}>Xem hành trình demo</Link>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            type="button"
            onClick={onClose}
            style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', background: 'white', fontWeight: 700, cursor: 'pointer' }}
          >
            Đóng
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function TutorTimetable() {
  return (
    <TutorShell
      title="Lịch dạy học & Khiên An Toàn"
      subtitle="Xem buổi dạy, giám sát an toàn hành trình và quản lý lịch rảnh từ 06:00 đến 24:00."
    >
      <TimetableBoard />
    </TutorShell>
  );
}
