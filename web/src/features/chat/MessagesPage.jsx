import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import {
  Send,
  Sparkles,
  ArrowLeft,
  Search,
  ShieldAlert,
  User,
  GraduationCap,
  X,
  PlusCircle,
  Clock,
} from 'lucide-react';
import useDemoAuth from '../auth/DemoAuthContext.jsx';
import useDemoDomain from '../domain/DemoDomainContext.jsx';
import Avatar from '../../components/Avatar.jsx';
import CustomOfferCard from './CustomOfferCard.jsx';
import OfferSessionPicker from './OfferSessionPicker.jsx';
import useDialogFocus from '../../hooks/useDialogFocus.js';
import { proposalLabel } from '../../data/tutorSchedule.js';
import './chat.css';

export default function MessagesPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user } = useDemoAuth();
  const { chatThreads = [], messages = [], profiles, availability, lessons, settings, tutorId, systemSettings, sendMessage, sendOffer, respondOffer } = useDemoDomain();

  const isTutor = user ? user.role === 'tutor' : true;
  const isLearner = user ? user.role === 'learner' : false;

  // Find relevant threads
  const relevantThreads = chatThreads.filter((th) => {
    if (!user) return false;
    return th.participants?.includes(user.id) || th.learnerId === user.id || th.tutorId === user.id;
  });
  const displayThreads = relevantThreads;

  const [activeThreadId, setActiveThreadId] = useState(() => searchParams.get('thread') || displayThreads[0]?.id);
  const [inputText, setInputText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);
  const [mobileConversation, setMobileConversation] = useState(() => Boolean(searchParams.get('thread')));

  // Custom offer form state
  const profile = profiles.find(item => item.id === tutorId);
  const [offerSubject, setOfferSubject] = useState(profile?.subjects?.[0] || '');
  const [offerGrade, setOfferGrade] = useState('');
  const [offerSessionsCount, setOfferSessionsCount] = useState(2);
  const [offerSessionFee, setOfferSessionFee] = useState(profile?.price || '');
  const [offerSchedule, setOfferSchedule] = useState('');
  const [offerProposals, setOfferProposals] = useState([]);
  const [offerError, setOfferError] = useState('');
  const offerDialogRef = useDialogFocus(() => setIsOfferModalOpen(false), isOfferModalOpen);
  const feePercent = Number(systemSettings?.platformFeePercent ?? 10);

  const messagesEndRef = useRef(null);

  const activeThread = displayThreads.find((th) => th.id === activeThreadId) || displayThreads[0];

  const getOtherParticipant = (thread) => {
    if (!thread) return { name: 'Người dùng', role: '' };
    if (thread.kind === 'support') return { name: 'Hỗ trợ TutorNearMe', role: 'Kênh hỗ trợ demo' };
    if (isLearner) {
      return { name: thread.tutorName || 'Gia sư', role: 'Gia sư' };
    }
    if (isTutor) {
      return { name: thread.learnerName || 'Học viên', role: 'Học viên' };
    }
    return { name: thread.tutorName || thread.learnerName || 'Đối tác', role: 'Thành viên' };
  };

  const activeParticipant = getOtherParticipant(activeThread);

  const threadMessages = activeThread ? messages.filter((m) => m.threadId === activeThread.id) : [];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [threadMessages.length]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim() || !activeThread?.id) return;
    sendMessage(activeThread.id, inputText.trim());
    setInputText('');
  };

  const handleSendOfferSubmit = (e) => {
    e.preventDefault();
    if (!activeThread?.id) return;
    if (offerProposals.length !== Number(offerSessionsCount)) { setOfferError('Chọn đủ số buổi học cụ thể trước khi gửi đề xuất.'); return; }
    const result = sendOffer(activeThread.id, {
      subject: offerSubject,
      grade: offerGrade,
      sessionsCount: Number(offerSessionsCount),
      sessionFee: Number(offerSessionFee),
      scheduleSummary: offerProposals.map(proposalLabel).join(' · '),
      proposals: offerProposals,
    });
    if (result?.error) { setOfferError(result.error); return; }
    setIsOfferModalOpen(false);
  };

  const filteredThreads = displayThreads.filter((th) => {
    const other = getOtherParticipant(th);
    return (
      other.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (th.lastMessageText || '').toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const backLink = isTutor ? '/tutor/dashboard' : isLearner ? '/learner/dashboard' : '/';

  return (
    <div className="messages-page-wrapper">
      {/* Top Header Bar */}
      <header className="messages-topbar">
        <Link to="/" className="messages-topbar__brand">
          <GraduationCap size={26} color="var(--brand-primary)" />
          <span>TutorNearMe <small style={{ fontSize: '0.75rem', color: '#52617c', fontWeight: 600 }}>· Trò chuyện</small></span>
        </Link>
        <div className="messages-topbar__actions">
          <Link to={backLink} className="messages-topbar__back-btn">
            <ArrowLeft size={16} /> Quay lại bảng điều khiển
          </Link>
          {user && (
            <Avatar
              initials={(user.fullName || user.username).split(' ').slice(-2).map((w) => w[0]).join('')}
              name={user.fullName || user.username}
              size="sm"
            />
          )}
        </div>
      </header>

      {/* 2-Column Chat Layout */}
      <div className="messages-container">
        {/* Left Column: Threads List */}
        <aside className={`chat-threads-sidebar ${mobileConversation ? 'mobile-hidden' : ''}`}>
          <div className="chat-threads-header">
            <div className="chat-threads-header__top">
              <h2 className="chat-threads-header__title">Tin nhắn</h2>
            </div>
            <div className="chat-threads-search">
              <Search size={16} color="#69768d" />
              <input
                type="text"
                placeholder="Tìm đoạn chat..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Tìm kiếm cuộc trò chuyện"
              />
            </div>
          </div>

          <ul className="chat-threads-list" role="list">
            {filteredThreads.map((th) => {
              const other = getOtherParticipant(th);
              const initials = other.name.split(' ').slice(-2).map((w) => w[0]).join('') || 'TN';
              const unread = isLearner ? th.unreadCountLearner : th.unreadCountTutor;
              const isActive = th.id === activeThread?.id;

              return (
                <li key={th.id}>
                  <button
                    type="button"
                    className={`chat-thread-item ${isActive ? 'active' : ''} ${unread > 0 ? 'has-unread' : ''}`}
                    onClick={() => { setActiveThreadId(th.id); setMobileConversation(true); }}
                  >
                    <div className="chat-thread-item__avatar">
                      <Avatar initials={initials} name={other.name} size="md" tone={isLearner ? 'blue' : 'green'} />
                    </div>
                    <div className="chat-thread-item__content">
                      <div className="chat-thread-item__top">
                        <span className="chat-thread-item__name">{other.name}</span>
                        <span className="chat-thread-item__time">
                          {th.lastMessageAt ? new Date(th.lastMessageAt).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }) : ''}
                        </span>
                      </div>
                      <div className="chat-thread-item__preview">
                        <p className="chat-thread-item__snippet">{th.lastMessageText || 'Chưa có tin nhắn'}</p>
                        {unread > 0 && <span className="chat-unread-badge">{unread}</span>}
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Right Column: Conversation Window */}
        <main className={`chat-conversation-area ${mobileConversation ? 'mobile-active' : ''}`}>
          {!activeThread && <p className="chat-empty-state" role="status">Chưa có cuộc trò chuyện. Chọn một gia sư hoặc ứng viên để bắt đầu.</p>}
          {/* Conversation Top Header */}
          <div className="chat-conversation-header">
            <button type="button" className="chat-mobile-back icon-button" aria-label="Trở lại danh sách hội thoại" onClick={() => setMobileConversation(false)}><ArrowLeft size={20} /></button>
            <div className="chat-conversation-header__user">
              <Avatar
                initials={activeParticipant.name.split(' ').slice(-2).map((w) => w[0]).join('') || 'TN'}
                name={activeParticipant.name}
                size="md"
              />
              <div className="chat-conversation-header__info">
                <h3>{activeParticipant.name}</h3>
                <p>
                  <span className="online-dot" aria-hidden="true" />
                  <span>{activeParticipant.role} · Trực tuyến</span>
                </p>
              </div>
            </div>

            <div className="chat-conversation-header__actions">
              {isTutor && (
                <button
                  type="button"
                  className="btn-send-offer-action"
                  onClick={() => setIsOfferModalOpen(true)}
                  aria-label="Gửi Đề xuất Học phí"
                  title="Tạo và gửi báo giá / kế hoạch học kèm"
                >
                  <Sparkles size={16} aria-hidden="true" />
                  <span>Gửi đề xuất học phí</span>
                </button>
              )}
            </div>
          </div>

          {/* Yellow Safety Warning Box */}
          <div className="chat-safety-warning-banner" role="alert">
            <ShieldAlert className="safety-warning-icon" size={22} aria-hidden="true" />
            <div className="safety-warning-content">
              <strong>CẢNH BÁO AN TOÀN:</strong> Không chuyển khoản ngoài nền tảng. Ký quỹ ở đây chỉ là mô phỏng frontend; <strong>không chuyển tiền thật</strong> trong bản demo.
            </div>
          </div>

          {/* Quick Action Bar for Tutor */}
          {isTutor && (
            <div className="chat-quick-actions-bar">
              <button
                type="button"
                className="btn-send-offer-action"
                onClick={() => setIsOfferModalOpen(true)}
                aria-label="Gửi Đề xuất Học phí"
              >
                <PlusCircle size={16} aria-hidden="true" /> Gửi Đề xuất Học phí
              </button>
            </div>
          )}

          {/* Messages Stream */}
          <div className="chat-messages-stream">
            <div className="chat-date-separator">
              <span>Hôm nay</span>
            </div>

            {threadMessages.map((msg) => {
              const isMine = user ? msg.senderId === user.id : msg.senderRole === (isTutor ? 'tutor' : 'learner');

              if (msg.type === 'custom_offer') {
                return (
                  <div key={msg.id} className={`chat-bubble-row ${isMine ? 'mine' : 'theirs'}`}>
                    <CustomOfferCard
                      message={msg}
                      onRespond={respondOffer}
                      isLearner={isLearner}
                    />
                  </div>
                );
              }

              return (
                <div key={msg.id} className={`chat-bubble-row ${isMine ? 'mine' : 'theirs'}`}>
                  <div className="chat-bubble">
                    <div className="chat-bubble__text">{msg.text}</div>
                    <span className="chat-bubble__time">
                      {msg.createdAt ? new Date(msg.createdAt).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }) : ''}
                    </span>
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input Area */}
          <div className="chat-input-area">
            <form className="chat-input-form" onSubmit={handleSendMessage}>
              <input
                type="text"
                placeholder="Nhập tin nhắn..."
                value={inputText}
                disabled={!activeThread}
                onChange={(e) => setInputText(e.target.value)}
                aria-label="Nội dung tin nhắn"
              />
              <button type="submit" className="chat-send-btn" disabled={!inputText.trim()}>
                <Send size={16} aria-hidden="true" /> Gửi
              </button>
            </form>
          </div>
        </main>
      </div>

      {/* Modal: Create Custom Offer */}
      {isOfferModalOpen && (
        <div className="custom-offer-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="offer-modal-title">
          <div className="custom-offer-modal" ref={offerDialogRef} tabIndex={-1}>
            <div className="custom-offer-modal__header">
              <h3 id="offer-modal-title">Gửi Đề xuất Học phí (Custom Offer)</h3>
              <button
                type="button"
                className="custom-offer-modal__close"
                onClick={() => setIsOfferModalOpen(false)}
                aria-label="Đóng modal"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSendOfferSubmit}>
              <div className="custom-offer-modal__form">
                <div className="offer-form-row">
                  <div className="offer-form-group">
                    <label htmlFor="offer-subject">Môn học</label>
                    <input
                      id="offer-subject"
                      type="text"
                      value={offerSubject}
                      onChange={(e) => setOfferSubject(e.target.value)}
                      placeholder="Ví dụ: Toán, Tiếng Anh..."
                      required
                    />
                  </div>
                  <div className="offer-form-group">
                    <label htmlFor="offer-grade">Khối lớp / Trình độ</label>
                    <input
                      id="offer-grade"
                      type="text"
                      value={offerGrade}
                      onChange={(e) => setOfferGrade(e.target.value)}
                      placeholder="Ví dụ: Lớp 8, IELTS 6.5..."
                      required
                    />
                  </div>
                </div>

                <div className="offer-form-row">
                  <div className="offer-form-group">
                    <label htmlFor="offer-sessions">Số buổi học</label>
                    <input
                      id="offer-sessions"
                      type="number"
                      min="1"
                      max="100"
                      value={offerSessionsCount}
                      onChange={(e) => setOfferSessionsCount(Math.max(1, Number(e.target.value)))}
                      required
                    />
                  </div>
                  <div className="offer-form-group">
                    <label htmlFor="offer-fee">Học phí / buổi (VNĐ)</label>
                    <input
                      id="offer-fee"
                      type="number"
                      min="50000"
                      step="10000"
                      value={offerSessionFee}
                      onChange={(e) => setOfferSessionFee(Number(e.target.value))}
                      required
                    />
                  </div>
                </div>

                <OfferSessionPicker tutorId={tutorId} availability={availability} lessons={lessons} duration={settings?.[tutorId]?.sessionMinutes} selected={offerProposals} onChange={setOfferProposals} limit={Number(offerSessionsCount)} />
                {offerError && <p role="alert" className="offer-error">{offerError}</p>}
                <div className="offer-form-group">
                  <label htmlFor="offer-schedule">Lịch học dự kiến</label>
                  <input
                    id="offer-schedule"
                    type="text"
                    value={offerSchedule}
                    onChange={(e) => setOfferSchedule(e.target.value)}
                    placeholder="Ví dụ: Thứ 3 & Thứ 5 (18:30 - 20:00)"
                    required
                  />
                </div>

                {/* Calculation preview */}
                <div className="offer-calc-box">
                  <div className="offer-calc-row">
                    <span>Đơn giá buổi học:</span>
                    <span>{Number(offerSessionFee).toLocaleString('vi-VN')} đ × {offerSessionsCount} buổi</span>
                  </div>
                  <div className="offer-calc-row">
                    <span>Phí sàn TutorNearMe ({feePercent}%):</span>
                    <span>-{(Math.round(offerSessionsCount * offerSessionFee * feePercent / 100)).toLocaleString('vi-VN')} đ</span>
                  </div>
                  <div className="offer-calc-row">
                    <span>Gia sư thực nhận:</span>
                    <span style={{ fontWeight: 700 }}>
                      {(offerSessionsCount * offerSessionFee - Math.round(offerSessionsCount * offerSessionFee * feePercent / 100)).toLocaleString('vi-VN')} đ
                    </span>
                  </div>
                  <div className="offer-calc-row total">
                    <span>Tổng tiền cọc ký quỹ (Escrow Hold):</span>
                    <span>{(offerSessionsCount * offerSessionFee).toLocaleString('vi-VN')} đ</span>
                  </div>
                </div>
              </div>

              <div className="custom-offer-modal__footer">
                <button
                  type="button"
                  className="btn-modal-cancel"
                  onClick={() => setIsOfferModalOpen(false)}
                >
                  Hủy
                </button>
                <button type="submit" className="btn-modal-submit">
                  Xác nhận gửi đề xuất
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
