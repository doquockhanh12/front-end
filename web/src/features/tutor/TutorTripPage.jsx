import { Link, useSearchParams } from 'react-router-dom';
import { ShieldCheck, MapPin, Clock } from 'lucide-react';
import useDemoDomain from '../domain/DemoDomainContext.jsx';
import { shortDate,timeLabel } from '../../data/tutorSchedule.js';
import Brand from '../../components/Brand.jsx';

export default function TutorTripPage(){
  const [query]=useSearchParams();const {lessons,profiles,safetyLogs}=useDemoDomain();
  const lesson=lessons.find(l=>l.id===query.get('lesson'));
  const tutor=profiles.find(p=>p.id===lesson?.tutorId);
  const labels={moving:'Bắt đầu di chuyển',checkin:'Đã đến nơi an toàn',checkout:'Đã ra về an toàn',sos:'Cảnh báo SOS demo'};
  return <div className="tutor-trip-page"><header><Brand/><Link to="/help">Trợ giúp</Link></header><main>
    <ShieldCheck size={32}/><h1>Hành trình buổi dạy demo</h1>
    <p>Chỉ hiển thị dữ liệu được lưu trong trình duyệt này; không theo dõi GPS hoặc gửi thông báo tới người thân thật.</p>
    {!lesson?<p role="status">Không tìm thấy buổi dạy trong dữ liệu demo của trình duyệt này.</p>:<>
      <h2>{lesson.subject} · {tutor?.name || 'Gia sư chưa có thông tin'}</h2>
      <p><Clock size={18}/>{shortDate(lesson.date)} · {timeLabel(lesson.start)}–{timeLabel(lesson.end)}</p>
      <p><MapPin size={18}/>{lesson.place || 'Chưa có địa điểm'}</p>
      <h2>Nhật ký an toàn</h2><ol>{safetyLogs.filter(log=>log.lessonId===lesson.id).map(log=><li key={log.id}>{labels[log.action] || log.action} · {new Date(log.timestamp || log.createdAt).toLocaleString('vi-VN')}</li>)}</ol>
      {!safetyLogs.some(log=>log.lessonId===lesson.id)&&<p>Chưa có hoạt động an toàn được ghi nhận.</p>}
    </>}
  </main></div>;
}
