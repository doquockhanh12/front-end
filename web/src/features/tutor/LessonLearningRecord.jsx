import { useState } from 'react';
import { Video, FileText } from 'lucide-react';
import Button from '../../components/Button.jsx';
import useDemoDomain from '../domain/DemoDomainContext.jsx';
import { canCompleteLesson } from '../domain/demoDomain.js';
import { linkedEscrow } from '../domain/commerce.js';

export default function LessonLearningRecord({lesson}) {
  const domain=useDemoDomain();
  const {saveLessonLearningRecord,submitTutorReview,markLearnerNoShow,cancelLessonWithPenalty,twoWayReviews=[]}=domain;
  const [progress,setProgress]=useState(lesson.progress || '');
  const [materials,setMaterials]=useState(lesson.materials || []);
  const [rating,setRating]=useState('5'); const [comment,setComment]=useState('');
  const [message,setMessage]=useState('');const [error,setError]=useState('');
  const reviewed=twoWayReviews.some(r=>r.lessonId===lesson.id && r.reviewerRole==='tutor');
  const [meeting,setMeeting]=useState(false);
  const [lessonAction,setLessonAction]=useState('');
  const [actionReason,setActionReason]=useState('');
  const [actionConfirmed,setActionConfirmed]=useState(false);
  const start=new Date(lesson.date+'T00:00:00');start.setMinutes(lesson.start);
  const hours=(start.getTime()-Date.now())/3600000;
  const active=canCompleteLesson(lesson);
  const funded=Boolean(linkedEscrow(domain,lesson.id));
  function resolveLesson() {
    setError('');setMessage('');
    if(!actionConfirmed)return;
    const result=lessonAction==='no_show'
      ? markLearnerNoShow(lesson.id,{confirmed:true,reason:actionReason})
      : cancelLessonWithPenalty(lesson.id,'tutor',undefined,actionReason);
    if(result?.error){setError(result.error);return;}
    setLessonAction('');setActionConfirmed(false);
    setMessage(lessonAction==='no_show'
      ? result.settled?'Đã ghi nhận người học vắng mặt và chuyển 100% ký quỹ của buổi học vào ví demo.':'Đã ghi nhận người học vắng mặt. Chưa có ký quỹ hợp lệ để tính đền bù.'
      : 'Đã hủy buổi dạy theo giờ bắt đầu thực tế và chính sách demo.');
  }
  async function upload(files) {
    setError('');
    if([...files].some(f=>f.size>500*1024) || files.length+materials.length>3){setError('Tối đa 3 tài liệu demo, mỗi tệp nhỏ hơn 500 KB.');return;}
    const additions=await Promise.all([...files].map(file=>new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve({name:file.name,type:file.type,size:file.size,dataUrl:reader.result});reader.onerror=reject;reader.readAsDataURL(file);} )));
    setMaterials(current=>[...current,...additions]);
  }
  function save(){const result=saveLessonLearningRecord(lesson.id,{progress,materials});if(result?.error)setError(result.error);else setMessage('Đã lưu tiến độ và tài liệu buổi học.');}
  function review(){const result=submitTutorReview({lessonId:lesson.id,tutorId:lesson.tutorId,learnerId:lesson.learnerId,studentAttitudeRating:Number(rating),punctualityRating:Number(rating),comment});if(result?.error)setError(result.error);else setMessage('Đã lưu đánh giá người học.');}
  return <section className="lesson-learning-record" aria-label="Thực hiện buổi dạy">
    <h3>Nội dung và tiến độ buổi học</h3>
    {['Online','online'].includes(lesson.format) || /online/i.test(lesson.place || '') ? <>
      <Button variant="secondary" onClick={()=>setMeeting(true)}><Video size={17}/>Vào phòng học Online demo</Button>
      {meeting&&<p role="status">Phòng học demo đã mở. Không kết nối Google Meet/Zoom thật.</p>}
    </>:null}
    <label>Nhận xét tiến độ buổi học<textarea value={progress} onChange={e=>setProgress(e.target.value)} rows={3}/></label>
    <label>Tài liệu và bài tập buổi học<input type="file" multiple accept=".pdf,.txt,.png,.jpg,.jpeg,.webp" onChange={e=>upload(e.target.files)}/></label>
    <ul>{materials.map((file,index)=><li key={`${file.name}-${index}`}><FileText size={16}/><a href={file.dataUrl} download={file.name}>{file.name}</a><button type="button" aria-label={`Bỏ tài liệu ${file.name}`} onClick={()=>setMaterials(current=>current.filter((_,i)=>i!==index))}>Bỏ</button></li>)}</ul>
    <Button variant="secondary" onClick={save}>Lưu tiến độ và tài liệu</Button>
    {active&&Number.isFinite(hours)&&<section aria-label="Hủy buổi dạy và chuyên cần">
      <h3>Hủy buổi dạy và chuyên cần</h3>
      {hours>=0&&<Button variant="secondary" onClick={()=>{setLessonAction('cancel');setActionConfirmed(false);}}>Hủy buổi dạy</Button>}
      {hours<=0&&<Button variant="secondary" onClick={()=>{setLessonAction('no_show');setActionConfirmed(false);}}>Ghi nhận người học vắng mặt</Button>}
      {lessonAction&&<>
        <p>{lessonAction==='no_show'?'Xác nhận người học vắng mặt sau giờ bắt đầu. Demo chuyển 100% ký quỹ của riêng buổi học cho gia sư; không tính buổi hoàn tất vào Thu nhập.':hours>=24?'Hủy trước ít nhất 24 giờ: hoàn 100% ký quỹ cho người học, không cảnh cáo.':hours>=2?'Hủy từ 2 đến dưới 24 giờ: hoàn 100% ký quỹ cho người học và thêm 1 cảnh cáo theo ngưỡng khóa hiện hành.':'Hủy dưới 2 giờ: hoàn 100% ký quỹ cho người học và tạm khóa tài khoản gia sư để đối soát.'}</p>
        {!funded&&<p>Chưa có ký quỹ liên kết hợp lệ. Không tạo tiền hoàn hoặc đền bù.</p>}
        <label>Lý do xử lý buổi dạy<textarea rows={2} value={actionReason} onChange={e=>setActionReason(e.target.value)}/></label>
        <label style={{display:'flex',alignItems:'flex-start',gap:8}}><input type="checkbox" style={{width:'auto',marginTop:5}} checked={actionConfirmed} onChange={e=>setActionConfirmed(e.target.checked)}/>Tôi xác nhận xử lý buổi học trong bản demo</label>
        <Button variant="secondary" disabled={!actionConfirmed} onClick={resolveLesson}>Xác nhận {lessonAction==='no_show'?'vắng mặt':'hủy buổi dạy'} demo</Button>
        <Button variant="quiet" onClick={()=>{setLessonAction('');setActionConfirmed(false);}}>Quay lại buổi dạy</Button>
      </>}
    </section>}
    {lesson.status==='completed'&&lesson.learnerId&&<section aria-label="Đánh giá hai chiều"><h3>Đánh giá hai chiều</h3>{reviewed?<p>Đã lưu đánh giá người học.</p>:<>
      <label htmlFor="lesson-learner-rating">Đánh giá người học</label><select id="lesson-learner-rating" value={rating} onChange={e=>setRating(e.target.value)}>{[5,4,3,2,1].map(v=><option key={v} value={v}>{v} sao</option>)}</select>
      <label>Nhận xét về người học<textarea rows={3} value={comment} onChange={e=>setComment(e.target.value)}/></label>
      <Button variant="secondary" onClick={review} disabled={!comment.trim()}>Gửi đánh giá người học</Button>
    </>}</section>}
    {message&&<p role="status" className="flow-success">{message}</p>}{error&&<p role="alert" className="flow-error">{error}</p>}
  </section>;
}
