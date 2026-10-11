import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  BookOpen,
  MapPin,
  Calendar,
  Clock,
  DollarSign,
  Users,
  CheckCircle2,
  XCircle,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Plus,
  Scale,
  Award,
  Star,
  Check,
  X,
  ShieldCheck,
} from 'lucide-react';
import useDemoDomain from '../domain/DemoDomainContext.jsx';
import useDemoAuth from '../auth/DemoAuthContext.jsx';
import LearnerHeader from './LearnerHeader.jsx';
import { PublicFooter } from '../public/PublicChrome.jsx';
import Avatar from '../../components/Avatar.jsx';
import Badge from '../../components/Badge.jsx';
import Button from '../../components/Button.jsx';
import useDialogFocus from '../../hooks/useDialogFocus.js';
import './learner.css';
import './marketplace.css';

function formatFee(amount) {
  return Number(amount || 0).toLocaleString('vi-VN');
}

export default function LearnerMyClasses() {
  const { user } = useDemoAuth();
  const { classPosts = [], proposals = [], selectProposal, openConversation } = useDemoDomain();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('open'); // 'open' | 'matched' | 'closed'
  const [selectedComparisonPost, setSelectedComparisonPost] = useState(null);
  const [actionNotice, setActionNotice] = useState('');
  const [depositThreadId, setDepositThreadId] = useState(null);

  const closeComparisonDrawer = () => setSelectedComparisonPost(null);
  const panelRef = useDialogFocus(closeComparisonDrawer, Boolean(selectedComparisonPost));

  // Private posts belong to one authenticated account, never a demo fallback.
  const learnerPosts = classPosts.filter(
    (cp) => user?.id && cp.learnerId === user.id
  );

  const visiblePosts = learnerPosts.filter((cp) => {
    if (activeTab === 'open') return cp.status === 'open' || cp.status === 'awaiting_deposit';
    if (activeTab === 'matched') return cp.status === 'matched';
    return cp.status === 'closed' || cp.status === 'expired' || cp.status === 'cancelled';
  });

  const handleSelectCandidate = (propId) => {
    const res = selectProposal(propId);
    if (res?.error) {
      alert(res.error);
    } else {
      setActionNotice('Đã chọn ứng viên. Hãy thống nhất lịch học và đặt cọc trong hội thoại để chốt lớp.');
      setDepositThreadId(res.threadId);
      closeComparisonDrawer();
      setActiveTab('open');
    }
  };

  const interview = (candidate, classPostId) => {
    const result = openConversation(candidate.tutorId, classPostId);
    if (result.error) { setActionNotice(result.error); return; }
    navigate(`/messages?thread=${encodeURIComponent(result.threadId)}`);
  };

  const getBudgetLabel = (post) => {
    if (post.budgetMode === 'fixed') {
      return `${formatFee(post.budgetAmount)} đ / buổi (Cố định)`;
    }
    if (post.budgetMode === 'range') {
      return `${formatFee(post.minBudget)} – ${formatFee(post.maxBudget)} đ / buổi (Khoảng giá)`;
    }
    if (post.budgetMode === 'max') {
      return `Tối đa ${formatFee(post.maxBudget)} đ / buổi (Giá trần)`;
    }
    if (post.budgetMode === 'negotiable') {
      return 'Thương lượng với gia sư';
    }
    return `${formatFee(post.budgetAmount)} đ / buổi`;
  };

  return (
    <div className="public-page public-page--learner learner-flow density-comfortable">
      <LearnerHeader />

      <main className="marketplace-container">
        {/* Top Header */}
        <div className="myclasses-header">
          <div className="myclasses-title-group">
            <h1>Lớp học của tôi</h1>
            <p>Theo dõi các tin tìm gia sư đã đăng, xem hồ sơ ứng tuyển và chọn gia sư phù hợp nhất.</p>
          </div>
          <Link to="/learner/post-class" className="button button--primary button--md" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Plus size={18} /> Đăng tin tìm gia sư
          </Link>
        </div>

        {/* Action Notice Banner */}
        {actionNotice && (
          <div style={{
            background: '#ecfdf5',
            border: '1px solid #a7f3d0',
            color: '#065f46',
            padding: '12px 16px',
            borderRadius: '8px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontWeight: 600,
          }}>
            <CheckCircle2 size={18} color="#059669" />
            <span>{actionNotice}</span>
            {depositThreadId && <Link className="button button--primary button--sm" to={`/messages?thread=${encodeURIComponent(depositThreadId)}`}>Đặt cọc trong hội thoại</Link>}
          </div>
        )}

        {/* Tabs Filter */}
        <div className="myclasses-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'open'}
            className={`myclasses-tab ${activeTab === 'open' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('open')}
          >
            Đang tìm gia sư (Mở) ({learnerPosts.filter((p) => p.status === 'open').length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'matched'}
            className={`myclasses-tab ${activeTab === 'matched' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('matched')}
          >
            Đã chốt gia sư ({learnerPosts.filter((p) => p.status === 'matched').length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'closed'}
            className={`myclasses-tab ${activeTab === 'closed' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('closed')}
          >
            Đã đóng / Hết hạn ({learnerPosts.filter((p) => p.status === 'closed' || p.status === 'expired').length})
          </button>
        </div>

        {/* Classes List */}
        {visiblePosts.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: '#fff',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
          }}>
            <BookOpen size={40} color="#94a3b8" style={{ margin: '0 auto 12px' }} />
            <h3 style={{ margin: '0 0 6px', color: '#1e293b' }}>
              {activeTab === 'open' ? 'Chưa có lớp nào đang tìm gia sư' : activeTab === 'matched' ? 'Chưa có lớp học nào đã chốt' : 'Không có lớp học đã đóng'}
            </h3>
            <p style={{ margin: '0 0 20px', color: '#64748b', fontSize: '0.9rem' }}>
              Đăng tin ngay để nhận đề xuất học phí từ các gia sư chất lượng trong khu vực.
            </p>
            <Link to="/learner/post-class" className="button button--primary button--md">
              Đăng tin tìm gia sư ngay
            </Link>
          </div>
        ) : (
          <div className="myclasses-grid">
            {visiblePosts.map((post) => {
              const postProposals = proposals.filter((p) => p.classPostId === post.id);
              const selectedProp = postProposals.find((p) => p.status === 'selected');

              return (
                <article key={post.id} className="myclass-card">
                  {/* Card Top */}
                  <div className="myclass-card__top">
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#2563eb', textTransform: 'uppercase' }}>
                          MÃ LỚP: #{post.id}
                        </span>
                        <Badge tone={post.status === 'open' ? 'success' : post.status === 'matched' ? 'brand' : 'neutral'}>
                          {post.status === 'open' ? (post.moderationStatus === 'pending' ? 'Chờ kiểm duyệt' : 'Đang mở nhận hồ sơ') : post.status === 'awaiting_deposit' ? 'Đã chọn · Chờ đặt cọc' : post.status === 'matched' ? 'Đã chốt gia sư' : 'Đã đóng'}
                        </Badge>
                      </div>
                      <h2 className="myclass-card__title">
                        {post.subject} – {post.grade}
                      </h2>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748b' }}>Ngân sách dự kiến</span>
                      <strong style={{ fontSize: '1.15rem', color: '#2563eb' }}>
                        {getBudgetLabel(post)}
                      </strong>
                    </div>
                  </div>

                  {/* Card Meta */}
                  <div className="myclass-card__meta">
                    <span className="myclass-card__meta-item">
                      <MapPin size={15} color="#64748b" />
                      {post.location} ({post.format === 'offline' ? 'Tại nhà' : 'Online'})
                    </span>
                    <span className="myclass-card__meta-item">
                      <Calendar size={15} color="#64748b" />
                      {post.scheduleDesc}
                    </span>
                    <span className="myclass-card__meta-item">
                      <Users size={15} color="#64748b" />
                      <strong>{postProposals.length}</strong> gia sư đã ứng tuyển
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="myclass-card__tags">
                    {post.trialLessonRequested && (
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '4px 10px',
                        background: '#ecfdf5',
                        border: '1px solid #a7f3d0',
                        color: '#065f46',
                        borderRadius: '9999px',
                        fontSize: '0.8rem',
                        fontWeight: 600
                      }}>
                        <BookOpen size={15} /> Yêu cầu học thử 45 phút
                      </span>
                    )}
                    {post.learningGoal && (
                      <p style={{ margin: 0, fontSize: '0.88rem', color: '#475569', width: '100%' }}>
                        <strong>Mục tiêu:</strong> {post.learningGoal}
                      </p>
                    )}
                  </div>

                  {/* Proposals Section */}
                  <div className="myclass-proposals-section">
                    <div className="myclass-proposals-header">
                      <span className="myclass-proposals-title">
                        Danh sách ứng viên ({postProposals.length})
                      </span>

                      {/* Prominent Compare Button when proposals >= 2 */}
                      {postProposals.length >= 2 && (
                        <button
                          type="button"
                          className="myclass-compare-btn"
                          onClick={() => setSelectedComparisonPost(post)}
                        >
                          <Scale size={16} /> So sánh các ứng viên ({postProposals.length})
                        </button>
                      )}
                    </div>

                    {postProposals.length === 0 ? (
                      <p style={{ margin: 0, fontSize: '0.88rem', color: '#94a3b8', fontStyle: 'italic' }}>
                        Chưa có gia sư nào ứng tuyển. Thông báo của bạn đang được ưu tiên hiển thị tới gia sư gần khu vực.
                      </p>
                    ) : (
                      <div className="myclass-proposals-list">
                        {postProposals.map((prop) => (
                          <div
                            key={prop.id}
                            className={`myclass-proposal-card ${prop.status === 'selected' ? 'is-selected' : ''}`}
                          >
                            <div className="myclass-proposal-tutor">
                              <Avatar
                                initials={prop.tutorName?.split(' ').slice(-2).map((s) => s[0]).join('') || 'GS'}
                                name={prop.tutorName}
                                size="md"
                              />
                              <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                  <strong>{prop.tutorName}</strong>
                                  {prop.hasStudentBadge && (
                                    <span title="Tích xanh xác minh thẻ sinh viên" style={{ color: '#059669', fontSize: '0.8rem' }}>
                                      ✓ Tích xanh
                                    </span>
                                  )}
                                  {prop.tier === 'top_rated' && (
                                    <span style={{ fontSize: '0.75rem', padding: '2px 6px', background: '#fef3c7', color: '#92400e', borderRadius: '4px', fontWeight: 700 }}>
                                      Top-Rated
                                    </span>
                                  )}
                                </div>
                                <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748b' }}>
                                  {prop.tutorUniversity}
                                </span>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#475569', marginTop: '2px' }}>
                                  <span><Star size={13} /> {Number.isFinite(prop.tutorRating) ? prop.tutorRating : 'Chưa có đánh giá'}</span>
                                  <span>·</span>
                                  <span><Clock size={13} /> Đúng giờ: {Number.isFinite(prop.tutorPunctualityRate) ? `${prop.tutorPunctualityRate}%` : 'Chưa có dữ liệu'}</span>
                                </div>
                              </div>
                            </div>

                            <div style={{ textAlign: 'center' }}>
                              <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b' }}>Đề xuất học phí</span>
                              <strong className="myclass-proposal-fee">
                                {formatFee(prop.proposedFee)} đ <small style={{ fontSize: '0.75rem', fontWeight: 400 }}>/ buổi</small>
                              </strong>
                              <span style={{ display: 'block', fontSize: '0.75rem', color: '#10b981' }}>
                                Thực nhận: {formatFee(prop.netPayout)} đ
                              </span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              {prop.status === 'selected' ? (
                                <span style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '4px',
                                  color: '#059669',
                                  fontWeight: 700,
                                  fontSize: '0.9rem',
                                  background: '#d1fae5',
                                  padding: '6px 12px',
                                  borderRadius: '6px'
                                }}>
                                  <CheckCircle2 size={16} /> Đã chọn gia sư này
                                </span>
                              ) : post.status === 'open' ? (
                                <button
                                  type="button"
                                  className="button button--primary button--sm"
                                  onClick={() => handleSelectCandidate(prop.id)}
                                >
                                  Chọn gia sư này
                                </button>
                              ) : (
                                <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                                  {prop.status === 'rejected' ? 'Không chọn' : 'Đã kết thúc'}
                                </span>
                              )}

                              <button type="button" onClick={() => interview(prop, post.id)} className="button button--secondary button--sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                <MessageSquare size={14} /> Nhắn tin
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </main>

      {/* Tutor Comparison Tool (Slide-over Drawer) */}
      {selectedComparisonPost && (
        <div className="comparison-drawer-scrim" onClick={closeComparisonDrawer}>
          <div
            className="comparison-drawer-panel"
            ref={panelRef}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="comparison-title"
          >
            {/* Header */}
            <div className="comparison-drawer-header">
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#2563eb', textTransform: 'uppercase' }}>
                  BẢNG SO SÁNH ỨNG VIÊN GIA SƯ
                </span>
                <h2 id="comparison-title">
                  {selectedComparisonPost.subject} – {selectedComparisonPost.grade}
                </h2>
                <p>
                  So sánh chi tiết các chỉ số học phí đề xuất, học vấn, đánh giá sao và độ đúng giờ để chọn gia sư tối ưu.
                </p>
              </div>
              <button
                type="button"
                className="icon-button"
                onClick={closeComparisonDrawer}
                aria-label="Đóng bảng so sánh"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body: Side-by-side Columns */}
            <div className="comparison-drawer-body">
              <div className="comparison-grid">
                {proposals
                  .filter((p) => p.classPostId === selectedComparisonPost.id)
                  .map((candidate) => {
                    const isSelected = candidate.status === 'selected';
                    const initials = candidate.tutorName?.split(' ').slice(-2).map((s) => s[0]).join('') || 'GS';

                    return (
                      <div
                        key={candidate.id}
                        className={`candidate-column ${isSelected ? 'is-selected' : ''}`}
                      >
                        {/* Tutor Header */}
                        <div className="candidate-head">
                          <Avatar initials={initials} name={candidate.tutorName} size="md" />
                          <div className="candidate-head-info">
                            <h3>{candidate.tutorName}</h3>
                            <p>{candidate.tutorUniversity}</p>
                          </div>
                        </div>

                        {/* Row: Học phí đề xuất */}
                        <div className="candidate-row">
                          <span className="candidate-row-label">Học phí đề xuất</span>
                          <span className="candidate-row-value" style={{ color: '#2563eb', fontSize: '1.1rem' }}>
                            {formatFee(candidate.proposedFee)} đ <small style={{ fontSize: '0.8rem', color: '#64748b' }}>/ buổi</small>
                          </span>
                        </div>

                        {/* Row: Thực nhận sau phí sàn */}
                        <div className="candidate-row">
                          <span className="candidate-row-label">Thực nhận về ví gia sư</span>
                          <span className="candidate-row-value" style={{ color: '#059669' }}>
                            {formatFee(candidate.netPayout)} đ <small style={{ fontSize: '0.75rem', color: '#64748b' }}>(Phí sàn: -{formatFee(candidate.platformFee)} đ)</small>
                          </span>
                        </div>

                        {/* Row: Đánh giá & Tỷ lệ đúng giờ */}
                        <div className="candidate-row">
                          <span className="candidate-row-label">Độ uy tín & Đúng giờ</span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontWeight: 700, color: '#b45309' }}>
                              <Star size={14} /> {Number.isFinite(candidate.tutorRating) ? `${candidate.tutorRating} / 5` : 'Chưa có đánh giá'}
                            </span>
                            <span style={{ fontWeight: 700, color: '#059669' }}>
                              <Clock size={14} /> {Number.isFinite(candidate.tutorPunctualityRate) ? `${candidate.tutorPunctualityRate}% đúng giờ` : 'Chưa có dữ liệu đúng giờ'}
                            </span>
                          </div>
                        </div>

                        {/* Row: Huy hiệu */}
                        <div className="candidate-row">
                          <span className="candidate-row-label">Huy hiệu chứng nhận</span>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {candidate.hasStudentBadge && (
                              <Badge tone="success">
                                <Check size={12} /> Tích xanh thẻ SV
                              </Badge>
                            )}
                            {candidate.tier === 'top_rated' && (
                              <Badge tone="brand">
                                <Award size={12} /> Top-Rated Tutor
                              </Badge>
                            )}
                            {candidate.tier === 'pro' && (
                              <Badge tone="info">
                                Gia sư Pro
                              </Badge>
                            )}
                          </div>
                        </div>

                        {/* Row: Khoảng cách & Hình thức */}
                        <div className="candidate-row">
                          <span className="candidate-row-label">Khoảng cách & Hình thức</span>
                          <span className="candidate-row-value">
                            <MapPin size={14} /> {candidate.tutorLocation || 'Chưa có khu vực'} · {selectedComparisonPost.format === 'offline' ? 'Tại nhà' : 'Online'}
                          </span>
                        </div>

                        {/* Row: Lời nhắn ứng tuyển */}
                        <div className="candidate-row" style={{ flex: 1 }}>
                          <span className="candidate-row-label">Thư giới thiệu của gia sư</span>
                          <p style={{
                            margin: 0,
                            fontSize: '0.84rem',
                            color: '#475569',
                            fontStyle: 'italic',
                            lineHeight: 1.45,
                            background: '#f8fafc',
                            padding: '10px',
                            borderRadius: '6px',
                            border: '1px solid #f1f5f9'
                          }}>
                            {candidate.coverNote || 'Gia sư chưa gửi thư giới thiệu.'}
                          </p>
                        </div>

                        {/* Actions */}
                        <div className="candidate-actions">
                          {isSelected ? (
                            <button
                              type="button"
                              className="button button--primary button--md"
                              disabled
                              style={{ width: '100%', background: '#059669', borderColor: '#059669' }}
                            >
                              <CheckCircle2 size={16} /> Đã chọn gia sư này
                            </button>
                          ) : selectedComparisonPost.status === 'open' ? (
                            <button
                              type="button"
                              className="button button--primary button--md"
                              onClick={() => handleSelectCandidate(candidate.id)}
                              style={{ width: '100%' }}
                            >
                              Chọn gia sư này
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="button button--secondary button--md"
                              disabled
                              style={{ width: '100%' }}
                            >
                              Đã chọn ứng viên khác
                            </button>
                          )}

                          <button
                            type="button"
                            onClick={() => interview(candidate, selectedComparisonPost.id)}
                            className="button button--secondary button--md"
                            style={{ width: '100%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                          >
                            <MessageSquare size={16} /> Nhắn tin phỏng vấn
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}

      <PublicFooter />
    </div>
  );
}
