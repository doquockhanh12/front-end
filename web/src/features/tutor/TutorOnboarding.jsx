import { Link } from 'react-router-dom';
import { CheckCircle2, Circle } from 'lucide-react';
import useDemoDomain from '../domain/DemoDomainContext.jsx';

export function onboardingSteps(profile, availability = []) {
  const documents=profile?.verificationDocuments || [];
  return [
    {label:'Thông tin cá nhân', done:Boolean(profile?.name && profile?.location),to:'/tutor/profile'},
    {label:'Môn có thể dạy',done:Boolean(profile?.subjects?.length),to:'/tutor/profile'},
    {label:'Cấp độ giảng dạy',done:Boolean(profile?.levels?.length),to:'/tutor/profile'},
    {label:'Học phí mỗi buổi',done:Number.isFinite(profile?.price) && profile.price>0,to:'/tutor/profile'},
    {label:'Đăng ký lịch rảnh',done:availability.some(r=>r.tutorId===profile?.id),to:'/tutor/timetable'},
    {label:'Hai mặt thẻ sinh viên',done:['front','back'].every(side=>documents.some(d=>d.side===side)),to:'/tutor/profile'},
  ];
}

export default function TutorOnboarding() {
  const {profiles,tutorId,availability}=useDemoDomain();
  const steps=onboardingSteps(profiles.find(p=>p.id===tutorId),availability);
  const done=steps.filter(s=>s.done).length;
  return <section className="reference-panel tutor-onboarding" aria-label="Checklist hồ sơ gia sư">
    <div className="reference-panel__heading"><h2>Hoàn thiện hồ sơ giảng dạy</h2><strong>{done}/6 bước · {Math.round(done/6*100)}%</strong></div>
    <progress value={done} max={6} aria-label="Tiến độ hoàn thiện hồ sơ"/>
    <ul>{steps.map(step=><li key={step.label}><Link to={step.to}>{step.done?<CheckCircle2 size={17}/>:<Circle size={17}/>}<span>{step.label}</span><small>{step.done?'Đã có':'Cần bổ sung'}</small></Link></li>)}</ul>
    <p>Bạn có thể bổ sung từng mục. Tải thẻ không tự cấp tích xanh; Admin cần xét duyệt hồ sơ demo.</p>
  </section>;
}
