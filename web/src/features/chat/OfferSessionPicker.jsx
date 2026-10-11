import { bookableSessions } from '../learner/profileSelection.js';
import { getBookableRanges, isFutureSession, normalizeSessionMinutes, proposalLabel } from '../../data/tutorSchedule.js';

export default function OfferSessionPicker({ tutorId, availability = [], lessons = [], duration = 45, selected, onChange, limit }) {
  const sessions = bookableSessions(getBookableRanges(availability, lessons, tutorId), normalizeSessionMinutes(duration)).filter(session => isFutureSession(session));
  const key = session => `${session.date}-${session.start}-${session.end}`;
  return <fieldset className="offer-session-picker">
    <legend>Chọn buổi học cụ thể ({selected.length}/{limit})</legend>
    <p>Chỉ chọn lịch rảnh đã lưu của gia sư. Buổi đã có lớp sẽ không hiển thị.</p>
    {!sessions.length && <p role="status">Gia sư chưa có lịch rảnh phù hợp. Hãy thống nhất và cập nhật lịch trước khi đặt cọc.</p>}
    <div className="offer-session-picker__list">{sessions.map(session => {
      const checked = selected.some(item => key(item) === key(session));
      return <label key={key(session)}><input type="checkbox" checked={checked} disabled={!checked && selected.length >= limit} onChange={() => onChange(checked ? selected.filter(item => key(item) !== key(session)) : [...selected, session])} />{proposalLabel(session)}</label>;
    })}</div>
  </fieldset>;
}
