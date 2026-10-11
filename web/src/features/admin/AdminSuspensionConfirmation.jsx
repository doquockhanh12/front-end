import { useState, useEffect } from 'react';
import Button from '../../components/Button.jsx';
import AdminSlideOver from './AdminSlideOver.jsx';

export default function AdminSuspensionConfirmation({ target, onClose, onConfirm }) {
  const [reason, setReason] = useState(''); const [error, setError] = useState('');
  useEffect(() => { setReason(''); setError(''); }, [target?.id]);
  if (!target) return null;
  const suspended = target.status === 'suspended' || target.moderationStatus === 'suspended';
  const confirm = () => {
    if (!reason.trim()) { setError('Cần ghi rõ lý do quyết định.'); return; }
    const result = onConfirm(target.id, !suspended, reason.trim());
    if (result?.error) setError(result.error); else onClose();
  };
  return <AdminSlideOver open onClose={onClose} title={suspended ? 'Mở khóa tài khoản' : 'Khóa tài khoản'} subtitle={target.fullName || target.name || target.username}
    footer={<Button onClick={confirm}>{suspended ? 'Xác nhận mở khóa tài khoản' : 'Xác nhận khóa tài khoản'}</Button>}>
    <p>Đây là quyết định quản trị trong bản demo, được ghi vào nhật ký của tài khoản liên quan.</p>
    <label className="admin-form-field">Lý do quyết định<textarea className="admin-textarea" rows={4} required value={reason} onChange={e => setReason(e.target.value)} /></label>
    {error && <p role="alert" className="admin-form-error">{error}</p>}
  </AdminSlideOver>;
}
