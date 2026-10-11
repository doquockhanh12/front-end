import { useState, useMemo } from 'react';
import { Plus, Search, Check, X, Edit2, MapPin } from 'lucide-react';
import Badge from '../../components/Badge.jsx';
import Button from '../../components/Button.jsx';
import AdminShell from './AdminShell.jsx';
import AdminSlideOver from './AdminSlideOver.jsx';
import useDemoDomain from '../domain/DemoDomainContext.jsx';
import { formatRecordCount } from './AdminTutorsPage.jsx';

const TABS = ['Tất cả', 'Đang mở', 'Tạm dừng'];

export default function AdminLocationsPage() {
  const { locations = [], addLocation, updateLocation, toggleLocationStatus } = useDemoDomain();

  const [activeTab, setActiveTab] = useState('Tất cả');
  const [searchQuery, setSearchQuery] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingLoc, setEditingLoc] = useState(null);
  const [formData, setFormData] = useState({ name: '', city: 'TP. Hồ Chí Minh', district: '', isActive: true });
  const [feedback, setFeedback] = useState(null);
  const [formError, setFormError] = useState('');

  const filteredLocations = useMemo(() => {
    return locations.filter((loc) => {
      if (activeTab === 'Đang mở' && !loc.isActive) return false;
      if (activeTab === 'Tạm dừng' && loc.isActive) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.trim().toLowerCase();
      return (
        loc.name.toLowerCase().includes(q) ||
        (loc.city && loc.city.toLowerCase().includes(q)) ||
        (loc.district && loc.district.toLowerCase().includes(q))
      );
    });
  }, [locations, activeTab, searchQuery]);

  const handleOpenCreate = () => {
    setEditingLoc(null);
    setFormData({ name: '', city: 'TP. Hồ Chí Minh', district: '', isActive: true });
    setFormError('');
    setDrawerOpen(true);
  };

  const handleOpenEdit = (loc) => {
    setEditingLoc(loc);
    setFormData({ name: loc.name, city: loc.city || 'TP. Hồ Chí Minh', district: loc.district || loc.name, isActive: loc.isActive });
    setFormError('');
    setDrawerOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setFormError('Vui lòng nhập tên khu vực.');
      return;
    }

    if (editingLoc) {
      updateLocation(editingLoc.id, {
        name: formData.name.trim(),
        city: formData.city.trim(),
        district: formData.district?.trim() || formData.name.trim(),
        isActive: formData.isActive,
      });
      setFeedback({ type: 'success', message: `Đã cập nhật khu vực "${formData.name.trim()}" thành công!` });
    } else {
      addLocation({
        name: formData.name.trim(),
        city: formData.city.trim(),
        district: formData.district?.trim() || formData.name.trim(),
        isActive: formData.isActive,
      });
      setFeedback({ type: 'success', message: `Đã thêm khu vực "${formData.name.trim()}" vào hệ thống!` });
    }

    setDrawerOpen(false);
    setTimeout(() => setFeedback(null), 4000);
  };

  const handleToggle = (loc) => {
    toggleLocationStatus(loc.id);
    const nextStatus = !loc.isActive ? 'mở hoạt động' : 'tạm dừng';
    setFeedback({
      type: 'info',
      message: `Đã chuyển địa bàn "${loc.name}" sang trạng thái ${nextStatus}.`,
    });
    setTimeout(() => setFeedback(null), 3500);
  };

  return (
    <AdminShell title="Khu vực & Địa bàn (A11)">
      <div className="admin-page-container">
        <div className="admin-page-header">
          <div>
            <h1 className="admin-page-title">Quản lý Khu vực & Địa bàn Hoạt động</h1>
            <p className="admin-page-subtitle">
              Cấu hình các quận/huyện, thành phố phục vụ việc gia sư di chuyển dạy tại nhà và tính toán bán kính gần bạn.
            </p>
          </div>
          <Button variant="primary" icon={Plus} onClick={handleOpenCreate}>
            Thêm khu vực mới
          </Button>
        </div>

        {feedback && (
          <div className={`admin-feedback-banner ${feedback.type === 'success' ? 'is-success' : 'is-info'}`} style={{ marginBottom: '1rem', padding: '0.75rem 1rem', borderRadius: '8px', background: feedback.type === 'success' ? '#ECFDF5' : '#EFF6FF', color: feedback.type === 'success' ? '#065F46' : '#1E40AF', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Check size={18} />
            <span>{feedback.message}</span>
          </div>
        )}

        <div className="admin-controls-card" style={{ background: '#fff', borderRadius: '12px', padding: '1rem', marginBottom: '1.25rem', border: '1px solid #E2E8F0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <div className="admin-tabs" style={{ display: 'flex', gap: '0.5rem' }}>
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`admin-tab-btn ${activeTab === tab ? 'is-active' : ''}`}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  border: activeTab === tab ? '1px solid #2563EB' : '1px solid #E2E8F0',
                  background: activeTab === tab ? '#2563EB' : '#F8FAFC',
                  color: activeTab === tab ? '#FFF' : '#475569',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="admin-search-wrap" style={{ position: 'relative', minWidth: '280px' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
            <input
              type="text"
              placeholder="Tìm kiếm quận huyện, thành phố..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem 0.5rem 2.25rem',
                borderRadius: '8px',
                border: '1px solid #CBD5E1',
                fontSize: '0.875rem',
              }}
            />
          </div>
        </div>

        <div style={{ marginBottom: '0.75rem', fontSize: '0.875rem', color: '#64748B', fontWeight: 600 }}>
          {formatRecordCount(filteredLocations.length, locations.length)}
        </div>

        <div className="admin-table-container" style={{ background: '#fff', borderRadius: '12px', border: '1px solid #E2E8F0', overflowX: 'auto' }}>
          <table className="admin-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', color: '#475569', fontWeight: 700 }}>
                <th style={{ padding: '0.875rem 1rem' }}>Khu vực / Quận</th>
                <th style={{ padding: '0.875rem 1rem' }}>Tỉnh / Thành phố</th>
                <th style={{ padding: '0.875rem 1rem' }}>Trạng thái</th>
                <th style={{ padding: '0.875rem 1rem' }}>Ngày thêm</th>
                <th style={{ padding: '0.875rem 1rem', textAlign: 'right' }}>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {filteredLocations.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{ padding: '3rem 1rem', textAlign: 'center', color: '#94A3B8' }}>
                    <MapPin size={36} style={{ margin: '0 auto 0.5rem auto', opacity: 0.5 }} />
                    <p>Không tìm thấy khu vực nào phù hợp.</p>
                  </td>
                </tr>
              ) : (
                filteredLocations.map((loc) => (
                  <tr key={loc.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <td style={{ padding: '0.875rem 1rem', fontWeight: 600, color: '#0F172A' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D97706' }}>
                          <MapPin size={16} />
                        </div>
                        {loc.name}
                      </div>
                    </td>
                    <td style={{ padding: '0.875rem 1rem', color: '#475569' }}>
                      <span style={{ background: '#F1F5F9', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>
                        {loc.city}
                      </span>
                    </td>
                    <td style={{ padding: '0.875rem 1rem' }}>
                      <Badge tone={loc.isActive ? 'success' : 'neutral'}>
                        {loc.isActive ? 'Đang mở' : 'Tạm dừng'}
                      </Badge>
                    </td>
                    <td style={{ padding: '0.875rem 1rem', color: '#64748B' }}>
                      {loc.createdAt ? new Date(loc.createdAt).toLocaleDateString('vi-VN') : 'Mặc định'}
                    </td>
                    <td style={{ padding: '0.875rem 1rem', textAlign: 'right' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                        <button
                          type="button"
                          onClick={() => handleOpenEdit(loc)}
                          className="icon-button"
                          style={{ padding: '0.35rem', borderRadius: '6px', border: '1px solid #CBD5E1', background: '#FFF', cursor: 'pointer' }}
                          title="Chỉnh sửa khu vực"
                        >
                          <Edit2 size={15} color="#475569" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleToggle(loc)}
                          className="icon-button"
                          style={{
                            padding: '0.35rem',
                            borderRadius: '6px',
                            border: '1px solid #CBD5E1',
                            background: loc.isActive ? '#FEF2F2' : '#F0FDF4',
                            cursor: 'pointer',
                          }}
                          title={loc.isActive ? 'Tạm dừng khu vực' : 'Kích hoạt mở khu vực'}
                        >
                          {loc.isActive ? <X size={15} color="#DC2626" /> : <Check size={15} color="#16A34A" />}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Drawer for Add/Edit */}
        <AdminSlideOver
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          title={editingLoc ? 'Chỉnh sửa Khu vực' : 'Thêm Khu vực Mới'}
        >
          <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {formError && (
              <div style={{ padding: '0.75rem', background: '#FEE2E2', color: '#991B1B', borderRadius: '8px', fontSize: '0.875rem' }}>
                {formError}
              </div>
            )}

            <div>
              <label htmlFor="admin-location-name" style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.35rem' }}>
                Tên quận / huyện *
              </label>
              <input
                id="admin-location-name"
                type="text"
                placeholder="Ví dụ: Quận 1, Quận Bình Thạnh, Cầu Giấy..."
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{ width: '100%', padding: '0.6rem 0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1' }}
              />
            </div>

            <div>
              <label htmlFor="admin-location-city" style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.35rem' }}>
                Tỉnh / Thành phố
              </label>
              <select
                id="admin-location-city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                style={{ width: '100%', padding: '0.6rem 0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', background: '#FFF' }}
              >
                <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Đà Nẵng">Đà Nẵng</option>
                <option value="Cần Thơ">Cần Thơ</option>
                <option value="Hải Phòng">Hải Phòng</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                />
                <span>Mở hoạt động kết nối gia sư ngay</span>
              </label>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
              <Button type="button" variant="secondary" onClick={() => setDrawerOpen(false)}>
                Hủy bỏ
              </Button>
              <Button type="submit" variant="primary">
                {editingLoc ? 'Lưu cập nhật' : 'Tạo khu vực'}
              </Button>
            </div>
          </form>
        </AdminSlideOver>
      </div>
    </AdminShell>
  );
}
