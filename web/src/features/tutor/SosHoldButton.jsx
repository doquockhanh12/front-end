import { useEffect, useRef, useState } from 'react';
import { Siren } from 'lucide-react';

export default function SosHoldButton({ onActivate }) {
  const timer = useRef(null);
  const [holding, setHolding] = useState(false);
  const cancel = () => { clearTimeout(timer.current); timer.current = null; setHolding(false); };
  const start = () => {
    if (timer.current) return;
    setHolding(true);
    timer.current = setTimeout(() => { timer.current = null; setHolding(false); onActivate(); }, 3000);
  };
  useEffect(() => () => clearTimeout(timer.current), []);
  return <button type="button" className={`btn-sos ${holding ? 'is-holding' : ''}`}
    aria-label="SOS KHẨN CẤP" title="Giữ 3 giây để tạo cảnh báo SOS demo"
    onPointerDown={start} onPointerUp={cancel} onPointerCancel={cancel} onPointerLeave={cancel} onBlur={cancel}
    onKeyDown={event => { if ((event.key === ' ' || event.key === 'Enter') && !event.repeat) { event.preventDefault(); start(); } }}
    onKeyUp={event => { if (event.key === ' ' || event.key === 'Enter') { event.preventDefault(); cancel(); } }}>
    <Siren size={18}/>{holding ? 'Đang giữ… 3 giây' : 'SOS KHẨN CẤP'}
  </button>;
}
