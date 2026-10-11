import { useState } from 'react';
import useDemoDomain from '../domain/DemoDomainContext.jsx';

export default function TutorVerification() {
  const {profiles,tutorId,saveTutorVerificationDocuments}=useDemoDomain();
  const profile=profiles.find(p=>p.id===tutorId);
  const [documents,setDocuments]=useState(profile?.verificationDocuments || []);
  const [message,setMessage]=useState('');
  const [error,setError]=useState('');
  async function select(side,file) {
    setMessage('');setError('');
    if(!file)return;
    if(!file.type.startsWith('image/') || file.size>500*1024){setError('Chọn ảnh JPG/PNG/WebP tối đa 500 KB mỗi mặt.');return;}
    const dataUrl=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;reader.readAsDataURL(file);});
    setDocuments(current=>[...current.filter(d=>d.side!==side),{side,name:file.name,type:file.type,dataUrl}]);
  }
  function submit(){const result=saveTutorVerificationDocuments(documents);if(result?.error)setError(result.error);else setMessage('Đã gửi hồ sơ demo, chờ Admin xét duyệt.');}
  return <section className="flow-form tutor-verification" aria-label="Xác minh thẻ sinh viên">
    <h2>Thẻ sinh viên & tích xanh</h2><p>Hai mặt thẻ được lưu trong trình duyệt này để Admin xét duyệt demo. Không phải dịch vụ xác minh danh tính thật.</p>
    <div className="tutor-verification__images">{[['front','trước'],['back','sau']].map(([side,label])=>{
      const document=documents.find(d=>d.side===side);
      return <label key={side}>Ảnh mặt {label} thẻ sinh viên<input type="file" accept="image/png,image/jpeg,image/webp" onChange={event=>select(side,event.target.files[0])}/>{document&&<><img src={document.dataUrl} alt={`Mặt ${label} thẻ sinh viên`}/><small>{document.name}</small></>}</label>;
    })}</div>
    {error&&<p role="alert" className="flow-error">{error}</p>}{message&&<p role="status" className="flow-success">{message}</p>}
    <button className="button button--primary" onClick={submit} disabled={documents.length!==2}>Gửi hồ sơ xác minh demo</button>
  </section>;
}
