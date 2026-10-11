import { useState } from 'react';
import { Settings, Save, Check, ShieldAlert, DollarSign, Clock, AlertTriangle } from 'lucide-react';
import Button from '../../components/Button.jsx';
import AdminShell from './AdminShell.jsx';
import useDemoDomain from '../domain/DemoDomainContext.jsx';

export default function AdminSettingsPage() {
  const { systemSettings = {}, updateSystemSettings, logAudit } = useDemoDomain();

  const [form, setForm] = useState({
    platformFeePercent: systemSettings.platformFeePercent ?? 10,
    topRatedFeePercent: systemSettings.topRatedFeePercent ?? 7,
    defaultSessionDuration: systemSettings.defaultSessionDuration ?? 45,
    maxStartHour: systemSettings.maxStartHour ?? '22:00',
    autoSuspendThreshold: systemSettings.autoSuspendThreshold ?? 3,
  });

  const [feedback, setFeedback] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); setFeedback(null);
    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(form.maxStartHour)) {
      setError('Giờ bắt đầu muộn nhất phải có định dạng HH:MM hợp lệ.'); return;
    }
    const patch = {
      platformFeePercent: Number(form.platformFeePercent),
      topRatedFeePercent: Number(form.topRatedFeePercent),
      defaultSessionDuration: Number(form.defaultSessionDuration),
      maxStartHour: form.maxStartHour,
      autoSuspendThreshold: Number(form.autoSuspendThreshold),
    };
    if (!Number.isFinite(patch.platformFeePercent) || patch.platformFeePercent < 0 || patch.platformFeePercent > 50 ||
      !Number.isFinite(patch.topRatedFeePercent) || patch.topRatedFeePercent < 0 || patch.topRatedFeePercent > 50 ||
      ![45, 90].includes(patch.defaultSessionDuration) || !Number.isInteger(patch.autoSuspendThreshold) || patch.autoSuspendThreshold < 1 || patch.autoSuspendThreshold > 10) {
      setError('Kiểm tra tỷ lệ phí, thời lượng và ngưỡng cảnh cáo hợp lệ.'); return;
    }
    const result = updateSystemSettings(patch);
    if (result?.error) { setError(result.error); return; }

    logAudit({
      actorId: 'demo-admin',
      actorName: 'Quản trị viên',
      role: 'admin',
      action: 'UPDATE_SYSTEM_SETTINGS',
      targetType: 'system_settings',
      details: `Cập nhật phí sàn: ${form.platformFeePercent}%, phí Top-Rated: ${form.topRatedFeePercent}%, ngưỡng gậy: >${form.autoSuspendThreshold}`,
    });

    setFeedback('Đã lưu cấu hình tham số hệ thống và ghi nhận nhật ký Audit thành công!');
    setTimeout(() => setFeedback(null), 4000);
  };

  return (
    <AdminShell title="Cài đặt Hệ thống (A13)">
      <div className="admin-page-container" style={{ maxWidth: '900px' }}>
        <div className="admin-page-header">
          <div>
            <h1 className="admin-page-title">Cài đặt Tham số Toàn sàn</h1>
            <p className="admin-page-subtitle">
              Cấu hình tỷ lệ thu phí nền tảng, thời lượng buổi học, khung giờ vận hành tối đa và ngưỡng tự động khóa tài khoản vi phạm.
            </p>
          </div>
        </div>

        {feedback && (
          <div className="admin-feedback-banner is-success" style={{ marginBottom: '1.25rem', padding: '0.85rem 1rem', borderRadius: '8px', background: '#ECFDF5', color: '#065F46', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
            <Check size={18} />
            <span>{feedback}</span>
          </div>
        )}

        {error && <p className="admin-form-error" role="alert">{error}</p>}
        <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Card 1: Biểu phí & Ký quỹ */}
          <div className="admin-card" style={{ background: '#fff', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', borderBottom: '1px solid #F1F5F9', paddingBottom: '0.75rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB' }}>
                <DollarSign size={18} />
              </div>
              <div>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: '#0F172A' }}>Biểu phí Nền tảng & Ký quỹ Escrow</h2>
                <small style={{ color: '#64748B' }}>Tỷ lệ hoa hồng trích từ thù lao gia sư khi buổi học hoàn tất thành công.</small>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              <div>
                <label htmlFor="admin-platform-fee" style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.35rem' }}>
                  Phí nền tảng tiêu chuẩn (%)
                </label>
                <input
                  id="admin-platform-fee"
                  type="number"
                  min="0"
                  max="50"
                  value={form.platformFeePercent}
                  onChange={(e) => setForm({ ...form, platformFeePercent: e.target.value })}
                  style={{ width: '100%', padding: '0.6rem 0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.95rem' }}
                />
                <small style={{ color: '#64748B', display: 'block', marginTop: '0.3rem' }}>
                  Áp dụng cho gia sư mới (Active) và thông thường (mặc định 10%).
                </small>
              </div>

              <div>
                <label htmlFor="admin-top-rated-fee" style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.35rem' }}>
                  Ưu đãi Gia sư Xuất sắc (Top-Rated Tutor) (%)
                </label>
                <input
                  id="admin-top-rated-fee"
                  type="number"
                  min="0"
                  max="50"
                  value={form.topRatedFeePercent}
                  onChange={(e) => setForm({ ...form, topRatedFeePercent: e.target.value })}
                  style={{ width: '100%', padding: '0.6rem 0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.95rem' }}
                />
                <small style={{ color: '#64748B', display: 'block', marginTop: '0.3rem' }}>
                  Ưu đãi giảm phí sàn cho gia sư xuất sắc có điểm đánh giá ≥ 4.9/5 (mặc định 7%).
                </small>
              </div>
            </div>
          </div>

          {/* Card 2: Lịch dạy & Thời lượng */}
          <div className="admin-card" style={{ background: '#fff', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', borderBottom: '1px solid #F1F5F9', paddingBottom: '0.75rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D97706' }}>
                <Clock size={18} />
              </div>
              <div>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: '#0F172A' }}>Thời lượng Buổi học & Giờ Vận hành</h2>
                <small style={{ color: '#64748B' }}>Đảm bảo sức khỏe và an toàn sinh hoạt cho học viên và gia sư sinh viên.</small>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              <div>
                <label htmlFor="admin-session-duration" style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.35rem' }}>
                  Thời lượng buổi học mặc định
                </label>
                <select
                  id="admin-session-duration"
                  value={form.defaultSessionDuration}
                  onChange={(e) => setForm({ ...form, defaultSessionDuration: e.target.value })}
                  style={{ width: '100%', padding: '0.6rem 0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.95rem', background: '#fff' }}
                >
                  <option value={45}>45 phút (Chuẩn 1 tiết học)</option>
                  <option value={90}>90 phút (2 tiết đôi)</option>
                </select>
              </div>

              <div>
                <label htmlFor="admin-max-start" style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.35rem' }}>
                  Giờ bắt đầu buổi học muộn nhất
                </label>
                <input
                  id="admin-max-start"
                  type="text"
                  value={form.maxStartHour}
                  onChange={(e) => setForm({ ...form, maxStartHour: e.target.value })}
                  style={{ width: '100%', padding: '0.6rem 0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.95rem' }}
                />
                <small style={{ color: '#64748B', display: 'block', marginTop: '0.3rem' }}>
                  Không cho phép mở lớp học sau 22:00 tối để phòng tránh rủi ro an toàn.
                </small>
              </div>
            </div>
          </div>

          {/* Card 3: Kiểm soát rủi ro & Ngưỡng kỷ luật */}
          <div className="admin-card" style={{ background: '#fff', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', borderBottom: '1px solid #F1F5F9', paddingBottom: '0.75rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#FEE2E2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#DC2626' }}>
                <ShieldAlert size={18} />
              </div>
              <div>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: '#0F172A' }}>Ngưỡng Tự động Khóa Tài khoản (Auto-Suspend)</h2>
                <small style={{ color: '#64748B' }}>Chế tài kỷ luật nghiêm khắc bảo vệ quyền lợi người học và uy tín sàn.</small>
              </div>
            </div>

            <div>
              <label htmlFor="admin-warning-threshold" style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.35rem' }}>
                Số lần cảnh cáo tối đa cho phép trước khi khóa tài khoản
              </label>
              <input
                id="admin-warning-threshold"
                type="number"
                min="1"
                max="10"
                value={form.autoSuspendThreshold}
                onChange={(e) => setForm({ ...form, autoSuspendThreshold: e.target.value })}
                style={{ width: '100%', maxWidth: '300px', padding: '0.6rem 0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.95rem' }}
              />
              <small style={{ color: '#DC2626', display: 'block', marginTop: '0.4rem', fontWeight: 600 }}>
                ⚠️ Người dùng hoặc gia sư vượt quá {form.autoSuspendThreshold} lần bị cảnh cáo tranh chấp sẽ bị hệ thống tự động khóa tài khoản tức thì.
              </small>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '0.5rem' }}>
            <Button type="submit" variant="primary" icon={Save}>
              Lưu cấu hình hệ thống
            </Button>
          </div>
        </form>
      </div>
    </AdminShell>
  );
}
