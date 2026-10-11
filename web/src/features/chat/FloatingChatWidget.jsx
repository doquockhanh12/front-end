import { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  MessageSquare,
  X,
  Minus,
  Maximize2,
  Send,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';
import useDemoAuth from '../auth/DemoAuthContext.jsx';
import useDemoDomain from '../domain/DemoDomainContext.jsx';
import Avatar from '../../components/Avatar.jsx';
import CustomOfferCard from './CustomOfferCard.jsx';
import './chat.css';

export default function FloatingChatWidget() {
  const location = useLocation();
  const navigate = useNavigate();

  let auth = null;
  try {
    auth = useDemoAuth();
  } catch {
    // outside auth
  }

  let domain = null;
  try {
    domain = useDemoDomain();
  } catch {
    // outside domain
  }

  const user = auth?.user;
  const isLearner = user?.role === 'learner';
  const isTutor = user?.role === 'tutor';

  const chatThreads = (domain?.chatThreads || []).filter((thread) => user?.id && (thread.participants?.includes(user.id) || thread.learnerId === user.id || thread.tutorId === user.id));
  const messages = domain?.messages || [];
  const sendMessage = domain?.sendMessage;
  const respondOffer = domain?.respondOffer;

  const [isOpen, setIsOpen] = useState(false);
  const [activeThreadId, setActiveThreadId] = useState(() => chatThreads[0]?.id || 'thread-001');
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);
  const launcherRef = useRef(null);
  const [launcherBottom, setLauncherBottom] = useState(24);

  useEffect(() => {
    if (isOpen || !user || location.pathname === '/messages') return;
    let active = true;
    const positionLauncher = () => {
      if (!active) return;
      const launcher = launcherRef.current;
      if (!launcher || window.innerWidth > 768) { setLauncherBottom(24); return; }
      const box = launcher.getBoundingClientRect();
      const controls = [...document.querySelectorAll('button, a, input, select, textarea, main p, main h1, main h2, main h3, main h4, main small, main strong, main dt, main dd, main .escrow-shield-badge')]
        .filter(control => !control.closest('.floating-chat-container'))
        .map(control => control.getBoundingClientRect())
        .filter(rect => rect.width && rect.height && rect.right > box.left - 4 && rect.left < box.right + 4
          && rect.bottom > 16 && rect.top < window.innerHeight);
      let top = window.innerHeight - 24 - box.height;
      for (let attempt = 0; attempt < controls.length; attempt++) {
        const collision = controls.find(rect => rect.top < top + box.height + 4 && rect.bottom > top - 4);
        if (!collision) break;
        top = collision.top - box.height - 4;
      }
      setLauncherBottom(Math.max(24, window.innerHeight - Math.max(16, top) - box.height));
    };
    positionLauncher();
    document.fonts.ready.then(positionLauncher);
    window.addEventListener('scroll', positionLauncher, true);
    window.addEventListener('resize', positionLauncher);
    const observer = new MutationObserver(positionLauncher);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      active = false;
      observer.disconnect();
      window.removeEventListener('scroll', positionLauncher, true);
      window.removeEventListener('resize', positionLauncher);
    };
  }, [isOpen, user?.id, location.pathname]);

  // Calculate total unread messages
  const totalUnread = chatThreads.reduce((sum, th) => {
    return sum + (isLearner ? (th.unreadCountLearner || 0) : (th.unreadCountTutor || 0));
  }, 0);

  const activeThread = chatThreads.find((th) => th.id === activeThreadId) || chatThreads[0];

  const otherName = activeThread?.kind === 'support' ? 'Hỗ trợ TutorNearMe' : isLearner
    ? activeThread?.tutorName || 'Chưa có hội thoại'
    : activeThread?.learnerName || 'Chưa có hội thoại';

  const otherInitials = otherName.split(' ').slice(-2).map((w) => w[0]).join('') || 'TN';

  const threadMessages = activeThread ? messages.filter((m) => m.threadId === activeThread.id) : [];

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, threadMessages.length]);

  // Route changes must not change the number/order of hooks.
  if (location.pathname === '/messages' || !user || (!isLearner && !isTutor)) return null;

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim() || !activeThread?.id || !sendMessage) return;
    sendMessage(activeThread.id, inputText.trim());
    setInputText('');
  };

  const handleOpenFullChat = () => {
    setIsOpen(false);
    navigate('/messages');
  };

  return (
    <aside className="floating-chat-container" style={{ bottom: launcherBottom }} aria-label="Widget nhắn tin nhanh">
      {/* Floating Popup Window */}
      {isOpen && (
        <div className="floating-chat-window" role="dialog" aria-label="Hộp thoại nhắn tin">
          {/* Header */}
          <div className="floating-chat-header">
            <div className="floating-chat-header__info">
              <Avatar initials={otherInitials} name={otherName} size="sm" tone={isLearner ? 'blue' : 'green'} />
              <div>
                <h4>{otherName}</h4>
                <p>Trực tuyến · Ký quỹ an toàn</p>
              </div>
            </div>

            <div className="floating-chat-header__actions">
              <button
                type="button"
                className="floating-header-btn"
                onClick={handleOpenFullChat}
                title="Mở toàn màn hình"
                aria-label="Mở toàn màn hình"
              >
                <Maximize2 size={15} />
              </button>
              <button
                type="button"
                className="floating-header-btn"
                onClick={() => setIsOpen(false)}
                title="Thu nhỏ"
                aria-label="Thu nhỏ"
              >
                <Minus size={15} />
              </button>
            </div>
          </div>

          {/* Safety hint */}
          <div className="floating-chat-safety-hint">
            <ShieldCheck size={14} color="#b45309" aria-hidden="true" />
            <span>Thanh toán qua Escrow để nhận bảo hiểm hoàn tiền 100%.</span>
          </div>

          {/* Messages Body */}
          <div className="floating-chat-body">
            {threadMessages.map((msg) => {
              const isMine = user ? msg.senderId === user.id : msg.senderRole === (isTutor ? 'tutor' : 'learner');

              if (msg.type === 'custom_offer') {
                return (
                  <div key={msg.id} className={`chat-bubble-row ${isMine ? 'mine' : 'theirs'}`} style={{ maxWidth: '100%' }}>
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

          {/* Footer Input */}
          <div className="floating-chat-footer">
            <form className="floating-input-form" onSubmit={handleSendMessage}>
              <input
                type="text"
                placeholder="Nhập tin nhắn..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                aria-label="Tin nhắn nhanh"
              />
              <button type="submit" disabled={!inputText.trim()} aria-label="Gửi tin nhắn">
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Action Button (FAB) */}
      <button
        ref={launcherRef}
        type="button"
        className="floating-chat-fab"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Mở cửa sổ trò chuyện"
        title="Trò chuyện & Thỏa thuận học phí"
      >
        {isOpen ? <X size={26} /> : <MessageSquare size={26} />}
        {!isOpen && totalUnread > 0 && (
          <span className="floating-fab-badge">{totalUnread}</span>
        )}
      </button>
    </aside>
  );
}
