import { useState, useMemo } from 'react';
import { Search, Check, X, ShieldAlert, Eye, BookOpen, MapPin, Calendar, DollarSign, UserCheck } from 'lucide-react';
import Badge from '../../components/Badge.jsx';
import Button from '../../components/Button.jsx';
import AdminShell from './AdminShell.jsx';
import AdminSlideOver from './AdminSlideOver.jsx';
import useDemoDomain from '../domain/DemoDomainContext.jsx';
import { formatRecordCount } from './AdminTutorsPage.jsx';

const TABS = ['Tất cả', 'Chờ kiểm duyệt', 'Đang hiển thị', 'Đã từ chối'];

export default function AdminClassesPage() {
  const { classPosts = [], moderateClass, setClassPostStatus, logAudit } = useDemoDomain();

  const [activeTab, setActiveTab] = useState('Tất cả');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const selectedPost = useMemo(
    () => classPosts.find((p) => p.id === selectedPostId) || null,
    [classPosts, selectedPostId]
  );

  const filteredPosts = useMemo(() => {
    return classPosts.filter((post) => {
      if (activeTab === 'Chờ kiểm duyệt' && post.moderationStatus !== 'pending') return false;
      if (activeTab === 'Đang hiển thị' && post.moderationStatus !== 'approved') return false;
      if (activeTab === 'Đã từ chối' && post.moderationStatus !== 'rejected') return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.trim().toLowerCase();
      return (
        post.subject.toLowerCase().includes(q) ||
        post.learnerName.toLowerCase().includes(q) ||
        (post.location && post.location.toLowerCase().includes(q)) ||
        (post.learningGoal && post.learningGoal.toLowerCase().includes(q))
      );
    });
  }, [classPosts, activeTab, searchQuery]);

  const handleApprove = (post) => {
    moderateClass(post.id, 'approved');
    logAudit({
      actorId: 'demo-admin',
      actorName: 'Quản trị viên',
      role: 'admin',
      action: 'APPROVE_CLASS_POST',
      targetType: 'class_post',
      targetId: post.id,
      details: `Phê duyệt tin đăng tìm gia sư môn ${post.subject} của phụ huynh ${post.learnerName}`,
    });
    setFeedback({ type: 'success', message: `Đã duyệt hiển thị bài đăng môn "${post.subject}"!` });
    setTimeout(() => setFeedback(null), 3500);
  };

  const handleReject = (post) => {
    moderateClass(post.id, 'rejected');
    logAudit({
      actorId: 'demo-admin',
      actorName: 'Quản trị viên',
      role: 'admin',
      action: 'REJECT_CLASS_POST',
      targetType: 'class_post',
      targetId: post.id,
      details: `Từ chối tin đăng môn ${post.subject} do nghi vấn spam/đa cấp hoặc nội dung không phù hợp`,
    });
    setFeedback({ type: 'danger', message: `Đã từ chối / ẩn tin đăng môn "${post.subject}".` });
    setTimeout(() => setFeedback(null), 3500);
  };

  const formatBudget = (post) => {
    if (post.budgetMode === 'negotiable') return 'Thương lượng với gia sư';
    if (post.budgetMode === 'range') return `${post.minBudget?.toLocaleString('vi-VN')} - ${post.maxBudget?.toLocaleString('vi-VN')} đ/buổi`;
    if (post.budgetMode === 'max') return `Tối đa ${post.maxBudget?.toLocaleString('vi-VN')} đ/buổi`;
    return `${post.budgetAmount?.toLocaleString('vi-VN')} đ/buổi`;
  };

  return (
    <AdminShell title="Kiểm duyệt Tin đăng Lớp học">
      <div className="admin-page-container">
        <div className="admin-page-header">
          <div>
            <h1 className="admin-page-title">Kiểm duyệt Tin đăng Tìm Gia sư</h1>
            <p className="admin-page-subtitle">
              Thẩm định nhu cầu tìm gia sư từ học viên/phụ huynh. Ngăn chặn triệt để tin đăng rác, lừa đảo thu phí, hoặc đa cấp.
            </p>
          </div>
        </div>

        {feedback && (
          <div className={`admin-feedback-banner ${feedback.type === 'success' ? 'is-success' : 'is-danger'}`} style={{ marginBottom: '1rem', padding: '0.75rem 1rem', borderRadius: '8px', background: feedback.type === 'success' ? '#ECFDF5' : '#FEF2F2', color: feedback.type === 'success' ? '#065F46' : '#991B1B', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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
              placeholder="Tìm kiếm môn học, học viên, địa chỉ..."
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
          {formatRecordCount(filteredPosts.length, classPosts.length)}
        </div>

        <div className="admin-table-container" style={{ background: '#fff', borderRadius: '12px', border: '1px solid #E2E8F0', overflowX: 'auto' }}>
          <table className="admin-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', color: '#475569', fontWeight: 700 }}>
                <th style={{ padding: '0.875rem 1rem' }}>Môn & Khối lớp</th>
                <th style={{ padding: '0.875rem 1rem' }}>Học viên / Phụ huynh</th>
                <th style={{ padding: '0.875rem 1rem' }}>Hình thức & Địa chỉ</th>
                <th style={{ padding: '0.875rem 1rem' }}>Ngân sách mong muốn</th>
                <th style={{ padding: '0.875rem 1rem' }}>Kiểm duyệt</th>
                <th style={{ padding: '0.875rem 1rem', textAlign: 'right' }}>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ padding: '3rem 1rem', textAlign: 'center', color: '#94A3B8' }}>
                    <BookOpen size={36} style={{ margin: '0 auto 0.5rem auto', opacity: 0.5 }} />
                    <p>Không có bài đăng lớp học nào.</p>
                  </td>
                </tr>
              ) : (
                filteredPosts.map((post) => (
                  <tr key={post.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <td style={{ padding: '0.875rem 1rem', fontWeight: 600, color: '#0F172A' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB' }}>
                          <BookOpen size={16} />
                        </div>
                        <div>
                          <div>{post.subject}</div>
                          <small style={{ color: '#64748B', fontWeight: 400 }}>{post.grade}</small>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '0.875rem 1rem', color: '#334155' }}>
                      <div>{post.learnerName}</div>
                      <small style={{ color: '#94A3B8' }}>ID: {post.learnerId}</small>
                    </td>
                    <td style={{ padding: '0.875rem 1rem', color: '#475569' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Badge tone={post.format === 'online' ? 'info' : 'neutral'}>
                          {post.format === 'online' ? 'Online' : 'Tại nhà'}
                        </Badge>
                      </div>
                      <small style={{ color: '#64748B', display: 'block', marginTop: '0.2rem' }}>
                        {post.location}
                      </small>
                    </td>
                    <td style={{ padding: '0.875rem 1rem', fontWeight: 600, color: '#0F172A' }}>
                      {formatBudget(post)}
                      {post.trialLessonRequested && (
                        <div style={{ marginTop: '0.2rem' }}>
                          <span style={{ fontSize: '0.75rem', background: '#FEF3C7', color: '#92400E', padding: '0.15rem 0.4rem', borderRadius: '4px', fontWeight: 600 }}>
                            Học thử 1 buổi
                          </span>
                        </div>
                      )}
                    </td>
                    <td style={{ padding: '0.875rem 1rem' }}>
                      <Badge tone={post.moderationStatus === 'approved' ? 'success' : post.moderationStatus === 'rejected' ? 'danger' : 'warning'}>
                        {post.moderationStatus === 'approved' ? 'Đã duyệt' : post.moderationStatus === 'rejected' ? 'Đã từ chối' : 'Chờ duyệt'}
                      </Badge>
                    </td>
                    <td style={{ padding: '0.875rem 1rem', textAlign: 'right' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                        <button
                          type="button"
                          onClick={() => setSelectedPostId(post.id)}
                          className="icon-button"
                          style={{ padding: '0.35rem', borderRadius: '6px', border: '1px solid #CBD5E1', background: '#FFF', cursor: 'pointer' }}
                          title="Xem chi tiết tin đăng"
                        >
                          <Eye size={15} color="#475569" />
                        </button>
                        {post.moderationStatus !== 'approved' && (
                          <button
                            type="button"
                            onClick={() => handleApprove(post)}
                            className="icon-button"
                            style={{ padding: '0.35rem', borderRadius: '6px', border: '1px solid #CBD5E1', background: '#F0FDF4', cursor: 'pointer' }}
                            title="Duyệt hiển thị"
                          >
                            <Check size={15} color="#16A34A" />
                          </button>
                        )}
                        {post.moderationStatus !== 'rejected' && (
                          <button
                            type="button"
                            onClick={() => handleReject(post)}
                            className="icon-button"
                            style={{ padding: '0.35rem', borderRadius: '6px', border: '1px solid #CBD5E1', background: '#FEF2F2', cursor: 'pointer' }}
                            title="Từ chối tin đăng"
                          >
                            <X size={15} color="#DC2626" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* SlideOver for inspecting post details */}
        <AdminSlideOver
          open={Boolean(selectedPost)}
          onClose={() => setSelectedPostId(null)}
          title="Chi tiết Tin đăng Lớp học"
        >
          {selectedPost && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ padding: '1rem', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>{selectedPost.subject} ({selectedPost.grade})</h3>
                  <Badge tone={selectedPost.moderationStatus === 'approved' ? 'success' : selectedPost.moderationStatus === 'rejected' ? 'danger' : 'warning'}>
                    {selectedPost.moderationStatus === 'approved' ? 'Đã duyệt' : selectedPost.moderationStatus === 'rejected' ? 'Đã từ chối' : 'Chờ duyệt'}
                  </Badge>
                </div>
                <div style={{ fontSize: '0.875rem', color: '#64748B' }}>
                  Đăng bởi: <strong>{selectedPost.learnerName}</strong> · Ngày tạo: {new Date(selectedPost.createdAt).toLocaleString('vi-VN')}
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.35rem' }}>Mục tiêu học tập</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#334155', background: '#FFF', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                  {selectedPost.learningGoal || 'Chưa cung cấp mục tiêu cụ thể'}
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.875rem' }}>
                <div style={{ padding: '0.75rem', background: '#F8FAFC', borderRadius: '8px' }}>
                  <span style={{ color: '#64748B', display: 'block', marginBottom: '0.2rem' }}>Lịch học:</span>
                  <strong>{selectedPost.scheduleDesc}</strong>
                </div>
                <div style={{ padding: '0.75rem', background: '#F8FAFC', borderRadius: '8px' }}>
                  <span style={{ color: '#64748B', display: 'block', marginBottom: '0.2rem' }}>Ngân sách:</span>
                  <strong>{formatBudget(selectedPost)}</strong>
                </div>
                <div style={{ padding: '0.75rem', background: '#F8FAFC', borderRadius: '8px' }}>
                  <span style={{ color: '#64748B', display: 'block', marginBottom: '0.2rem' }}>Địa chỉ:</span>
                  <strong>{selectedPost.address || selectedPost.location}</strong>
                </div>
                <div style={{ padding: '0.75rem', background: '#F8FAFC', borderRadius: '8px' }}>
                  <span style={{ color: '#64748B', display: 'block', marginBottom: '0.2rem' }}>Đơn ứng tuyển:</span>
                  <strong>{selectedPost.proposalCount || 0} gia sư</strong>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                <Button variant="secondary" onClick={() => setSelectedPostId(null)}>
                  Đóng
                </Button>
                {selectedPost.moderationStatus !== 'approved' && (
                  <Button variant="primary" icon={Check} onClick={() => { handleApprove(selectedPost); setSelectedPostId(null); }}>
                    Duyệt hiển thị tin này
                  </Button>
                )}
                {selectedPost.moderationStatus !== 'rejected' && (
                  <Button variant="danger" icon={X} onClick={() => { handleReject(selectedPost); setSelectedPostId(null); }}>
                    Từ chối / Ẩn tin
                  </Button>
                )}
              </div>
            </div>
          )}
        </AdminSlideOver>
      </div>
    </AdminShell>
  );
}
