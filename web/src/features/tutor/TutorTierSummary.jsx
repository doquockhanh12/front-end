import { Award, ShieldCheck } from 'lucide-react';
import useDemoDomain from '../domain/DemoDomainContext.jsx';
import { selectTutorTier } from '../domain/commerce.js';

export default function TutorTierSummary(){
  const state=useDemoDomain();const tier=selectTutorTier(state,state.tutorId);
  const labels={active:'Gia sư Mới',pro:'Gia sư Tiêu biểu',top_rated:'Gia sư Xuất sắc'};
  const profile=state.profiles.find(p=>p.id===state.tutorId);
  return <section className="flow-summary tutor-tier" aria-label="Danh hiệu gia sư">
    <h2><Award size={21}/>{labels[tier.tier]}</h2>
    <p>Phí nền tảng áp dụng: <strong>{tier.feePercent}%</strong></p>
    <dl><div><dt>Buổi đã hoàn tất</dt><dd>{tier.completedCount}</dd></div><div><dt>Điểm đánh giá</dt><dd>{Number.isFinite(tier.rating)?`${tier.rating}/5`:'Chưa có dữ liệu'}</dd></div><div><dt>Tỷ lệ đúng giờ</dt><dd>{Number.isFinite(tier.punctuality)?`${tier.punctuality}%`:'Chưa đủ dữ liệu xác nhận'}</dd></div></dl>
    <p>Tiêu biểu: từ 10 buổi, 4,8 sao và đúng giờ từ 95%. Xuất sắc: từ 30 buổi, 4,9 sao và đúng giờ từ 99%.</p>
    <p><ShieldCheck size={17}/>{profile?.verified?'Hồ sơ đã được xác minh':'Tích xanh cần Admin xét duyệt; tải ảnh thẻ không tự xác minh.'}</p>
  </section>;
}
