import { useState, useMemo } from 'react';
import { Plus, Search, Check, X, Edit2, Layers, BookOpen } from 'lucide-react';
import Badge from '../../components/Badge.jsx';
import Button from '../../components/Button.jsx';
import AdminShell from './AdminShell.jsx';
import AdminSlideOver from './AdminSlideOver.jsx';
import useDemoDomain from '../domain/DemoDomainContext.jsx';
import { formatRecordCount } from './AdminTutorsPage.jsx';

const TABS = ['Tất cả', 'Đang áp dụng', 'Tạm dừng'];

export default function AdminSubjectsPage() {
  const { subjects = [], addSubject, updateSubject, toggleSubjectStatus } = useDemoDomain();

  const [activeTab, setActiveTab] = useState('Tất cả');
  const [searchQuery, setSearchQuery] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingSubject, setEditingSubject] = useState(null);
  const [formData, setFormData] = useState({ name: '', category: 'Khoa học tự nhiên', isActive: true });
  const [feedback, setFeedback] = useState(null);
  const [formError, setFormError] = useState('');

  const filteredSubjects = useMemo(() => {
    return subjects.filter((s) => {
      if (activeTab === 'Đang áp dụng' && !s.isActive) return false;
      if (activeTab === 'Tạm dừng' && s.isActive) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.trim().toLowerCase();
      return (
        s.name.toLowerCase().includes(q) ||
        (s.category && s.category.toLowerCase().includes(q))
      );
    });
  }, [subjects, activeTab, searchQuery]);

  const handleOpenCreate = () => {
    setEditingSubject(null);
    setFormData({ name: '', category: 'Khoa học tự nhiên', isActive: true });
    setFormError('');
    setDrawerOpen(true);
  };

  const handleOpenEdit = (sub) => {
    setEditingSubject(sub);
    setFormData({ name: sub.name, category: sub.category || 'Khác', isActive: sub.isActive });
    setFormError('');
    setDrawerOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setFormError('Vui lòng nhập tên môn học.');
      return;
    }

    if (editingSubject) {
      updateSubject(editingSubject.id, {
        name: formData.name.trim(),
        category: formData.category.trim(),
        isActive: formData.isActive,
      });
      setFeedback({ type: 'success', message: `Đã cập nhật môn "${formData.name.trim()}" thành công!` });
    } else {
      addSubject({
        name: formData.name.trim(),
        category: formData.category.trim(),
        isActive: formData.isActive,
      });
      setFeedback({ type: 'success', message: `Đã thêm môn "${formData.name.trim()}" vào hệ thống!` });
    }

    setDrawerOpen(false);
    setTimeout(() => setFeedback(null), 4000);
  };

  const handleToggle = (sub) => {
    toggleSubjectStatus(sub.id);
    const nextStatus = !sub.isActive ? 'áp dụng' : 'tạm dừng';
    setFeedback({
      type: 'info',
      message: `Đã chuyển môn "${sub.name}" sang trạng thái ${nextStatus}.`,
    });
    setTimeout(() => setFeedback(null), 3500);
  };

  return (
    <AdminShell title="Danh mục Môn học (A07)">
      <div className="admin-page-container">
        <div className="admin-page-header">
          <div>
            <h1 className="admin-page-title">Quản lý Danh mục Môn học</h1>
            <p className="admin-page-subtitle">
              Chuẩn hóa danh mục môn học, phân loại học thuật và đồng bộ trực tiếp với bộ lọc tìm kiếm toàn sàn.
            </p>
          </div>
          <Button variant="primary" icon={Plus} onClick={handleOpenCreate}>
            Thêm môn học mới
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
              placeholder="Tìm kiếm môn học, phân loại..."
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
          {formatRecordCount(filteredSubjects.length, subjects.length)}
        </div>

        <div className="admin-table-container" style={{ background: '#fff', borderRadius: '12px', border: '1px solid #E2E8F0', overflowX: 'auto' }}>
          <table className="admin-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', color: '#475569', fontWeight: 700 }}>
                <th style={{ padding: '0.875rem 1rem' }}>Môn học</th>
                <th style={{ padding: '0.875rem 1rem' }}>Nhóm phân loại</th>
                <th style={{ padding: '0.875rem 1rem' }}>Trạng thái</th>
                <th style={{ padding: '0.875rem 1rem' }}>Ngày thêm</th>
                <th style={{ padding: '0.875rem 1rem', textAlign: 'right' }}>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {filteredSubjects.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{ padding: '3rem 1rem', textAlign: 'center', color: '#94A3B8' }}>
                    <BookOpen size={36} style={{ margin: '0 auto 0.5rem auto', opacity: 0.5 }} />
                    <p>Không tìm thấy môn học nào phù hợp.</p>
                  </td>
                </tr>
              ) : (
                filteredSubjects.map((sub) => (
                  <tr key={sub.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <td style={{ padding: '0.875rem 1rem', fontWeight: 600, color: '#0F172A' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB' }}>
                          <BookOpen size={16} />
                        </div>
                        {sub.name}
                      </div>
                    </td>
                    <td style={{ padding: '0.875rem 1rem', color: '#475569' }}>
                      <span style={{ background: '#F1F5F9', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>
                        {sub.category}
                      </span>
                    </td>
                    <td style={{ padding: '0.875rem 1rem' }}>
                      <Badge tone={sub.isActive ? 'success' : 'neutral'}>
                        {sub.isActive ? 'Đang áp dụng' : 'Tạm dừng'}
                      </Badge>
                    </td>
                    <td style={{ padding: '0.875rem 1rem', color: '#64748B' }}>
                      {sub.createdAt ? new Date(sub.createdAt).toLocaleDateString('vi-VN') : 'Mặc định'}
                    </td>
                    <td style={{ padding: '0.875rem 1rem', textAlign: 'right' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                        <button
                          type="button"
                          onClick={() => handleOpenEdit(sub)}
                          className="icon-button"
                          style={{ padding: '0.35rem', borderRadius: '6px', border: '1px solid #CBD5E1', background: '#FFF', cursor: 'pointer' }}
                          title="Chỉnh sửa môn học"
                        >
                          <Edit2 size={15} color="#475569" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleToggle(sub)}
                          className="icon-button"
                          style={{
                            padding: '0.35rem',
                            borderRadius: '6px',
                            border: '1px solid #CBD5E1',
                            background: sub.isActive ? '#FEF2F2' : '#F0FDF4',
                            cursor: 'pointer',
                          }}
                          title={sub.isActive ? 'Tạm dừng áp dụng' : 'Kích hoạt áp dụng'}
                        >
                          {sub.isActive ? <X size={15} color="#DC2626" /> : <Check size={15} color="#16A34A" />}
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
          title={editingSubject ? 'Chỉnh sửa Môn học' : 'Thêm Môn học Mới'}
        >
          <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {formError && (
              <div style={{ padding: '0.75rem', background: '#FEE2E2', color: '#991B1B', borderRadius: '8px', fontSize: '0.875rem' }}>
                {formError}
              </div>
            )}

            <div>
              <label htmlFor="admin-subject-name" style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.35rem' }}>
                Tên môn học *
              </label>
              <input
                id="admin-subject-name"
                type="text"
                placeholder="Ví dụ: Toán nâng cao, Lập trình Web..."
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{ width: '100%', padding: '0.6rem 0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1' }}
              />
            </div>

            <div>
              <label htmlFor="admin-subject-category" style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.35rem' }}>
                Nhóm phân loại
              </label>
              <select
                id="admin-subject-category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                style={{ width: '100%', padding: '0.6rem 0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', background: '#FFF' }}
              >
                <option value="Khoa học tự nhiên">Khoa học tự nhiên (Toán, Lý, Hóa, Sinh)</option>
                <option value="Khoa học xã hội">Khoa học xã hội (Văn, Sử, Địa)</option>
                <option value="Ngoại ngữ">Ngoại ngữ (Tiếng Anh, Tiếng Trung, Tiếng Nhật)</option>
                <option value="Chứng chỉ ngoại ngữ">Chứng chỉ ngoại ngữ (IELTS, TOEIC, SAT)</option>
                <option value="Công nghệ">Công nghệ (Lập trình, Tin học văn phòng)</option>
                <option value="Kỹ năng mềm">Kỹ năng mềm & Nghệ thuật</option>
                <option value="Khác">Khác</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                />
                <span>Kích hoạt áp dụng ngay trên sàn</span>
              </label>
              <small style={{ display: 'block', color: '#64748B', marginTop: '0.25rem' }}>
                Nếu bỏ chọn, môn học sẽ tạm ẩn khỏi form đăng ký và tìm kiếm mới của học viên.
              </small>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
              <Button type="button" variant="secondary" onClick={() => setDrawerOpen(false)}>
                Hủy bỏ
              </Button>
              <Button type="submit" variant="primary">
                {editingSubject ? 'Lưu cập nhật' : 'Tạo môn học'}
              </Button>
            </div>
          </form>
        </AdminSlideOver>
      </div>
    </AdminShell>
  );
}
