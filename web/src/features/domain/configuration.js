import { demoReferenceData } from '../../data/demoReferenceData.js';
import { normalizeRanges, isValidAvailability, overlaps } from '../../data/tutorSchedule.js';

// Fill previously absent approved choices once; an Admin's disabled/renamed row wins.
export function reconcileSubjectCatalog(subjects = [], defaults = []) {
  const added = demoReferenceData.subjects.flatMap((name, index) => {
    const id = `sub-registration-${index}`;
    return subjects.some(subject => subject.name === name || subject.id === id || subject.id === defaults.find(row => row.name === name)?.id) ? [] : [{ id, name, category: 'Môn / kỹ năng', isActive: true, createdAt: '2026-10-06T00:00:00Z' }];
  });
  return [...subjects, ...added];
}
export const activeRegistrationSubjects = state => (state.subjects || []).filter(subject => subject.isActive).map(subject => subject.name);
export const allowedSessionDurations = state => state.systemSettings?.sessionDurations || [45, 90];
export function sessionDurationAllowed(state, tutorId, duration) {
  const minutes = Number(duration);
  return allowedSessionDurations(state).includes(minutes) || state.settings?.[tutorId]?.sessionMinutes === minutes;
}
export function saveConfiguredAvailability(state, tutorId, ranges, duration) {
  const next = normalizeRanges(ranges);
  const [hours, minutes] = (state.systemSettings?.maxStartHour || '22:00').split(':').map(Number);
  if (!tutorId || (duration !== undefined && !sessionDurationAllowed(state, tutorId, duration))) return { error: 'Thời lượng buổi học không còn được cho phép. Chọn thời lượng trong cấu hình hiện hành.' };
  if (next.length !== ranges.length || next.some(range => {
    const unchanged = state.availability.some(old => old.tutorId === tutorId && old.id === range.id && old.date === range.date && old.start === range.start && old.end === range.end);
    return range.tutorId !== tutorId || (!unchanged && (range.start > hours * 60 + minutes || !isValidAvailability(range, next, state.lessons, range.id))) || next.some(other => other !== range && overlaps(other, range)) || state.lessons.some(lesson => lesson.status !== 'cancelled' && overlaps(lesson, range));
  })) return { error: 'Không thể lưu: khoảng thời gian không hợp lệ, quá giờ bắt đầu tối đa hoặc trùng lịch. Lịch nháp được giữ để bạn chỉnh sửa.' };
  return { state: { ...state, availability: [...state.availability.filter(range => range.tutorId !== tutorId), ...next], settings: duration === undefined ? state.settings : { ...state.settings, [tutorId]: { sessionMinutes: Number(duration) } } } };
}
export function hasUploadedStudentCard(profile) {
  const documents = profile.verificationDocuments;
  return Array.isArray(documents) && documents.length === 2 && ['front', 'back'].every(side => documents.some(file => {
    const data = file.dataUrl || file.data;
    return file.side === side && file.name && ['image/png', 'image/jpeg', 'image/webp', 'application/pdf'].includes(file.type) && typeof data === 'string' && data.startsWith(`data:${file.type};base64,`) && /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(data.split(',')[1] || '') && data.split(',')[1]?.length > 0 && data.length * .75 <= 500 * 1024;
  }));
}
