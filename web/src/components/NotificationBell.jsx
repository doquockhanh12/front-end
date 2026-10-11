import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, CheckCheck, ShieldAlert, Sparkles, AlertTriangle, Info, BookOpen } from 'lucide-react';
import useDemoDomain from '../features/domain/DemoDomainContext.jsx';
import useDemoAuth from '../features/auth/DemoAuthContext.jsx';

export default function NotificationBell() {
  const { notifications = [], markNotificationAsRead, markAllNotificationsAsRead } = useDemoDomain();
  const { user } = useDemoAuth();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ left: 16, top: 80, width: 340 });
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const placePanel = () => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;
    const width = Math.min(340, window.innerWidth - 32);
    setPosition({ width, left: Math.max(16, Math.min(rect.right - width, window.innerWidth - width - 16)), top: rect.bottom + 8 });
  };

  // Filter notifications relevant to current user
  const userNotifications = notifications.filter((n) => {
    if (!user) return false;
    if (n.recipientId === user.id) return true;
    if (user.role === 'admin' && (n.recipientId === 'demo-admin' || n.type === 'sos_alert')) return true;
    return false;
  });

  const unreadCount = userNotifications.filter((n) => !n.isRead).length;

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  useEffect(() => {
    if (!open) return;
    const keydown = event => { if (event.key === 'Escape') { setOpen(false); buttonRef.current?.focus(); } };
    window.addEventListener('resize', placePanel);
    document.addEventListener('keydown', keydown);
    return () => { window.removeEventListener('resize', placePanel); document.removeEventListener('keydown', keydown); };
  }, [open]);

  const handleItemClick = (n) => {
    markNotificationAsRead(n.id);
    setOpen(false);
    if (n.link) {
      navigate(n.link);
    }
  };

  const getNotifIcon = (type) => {
    switch (type) {
      case 'sos_alert':
        return <ShieldAlert size={16} color="#DC2626" />;
      case 'bid_received':
      case 'new_class':
        return <Sparkles size={16} color="#2563EB" />;
      case 'verification_request':
        return <BookOpen size={16} color="#D97706" />;
      default:
        return <Info size={16} color="#64748B" />;
    }
  };

  return (
    <div style={{ position: 'relative' }} ref={dropdownRef}>
      <button
        type="button"
        ref={buttonRef}
        className="icon-button"
        onClick={() => { placePanel(); setOpen(!open); }}
        aria-label="Thông báo"
        aria-expanded={open}
        title="Thông báo hệ thống"
        style={{
          position: 'relative',
          padding: '0.45rem',
          borderRadius: '8px',
          border: '1px solid #E2E8F0',
          background: '#FFF',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#334155',
        }}
      >
        <Bell size={19} />
        {unreadCount > 0 && (
          <span
            style={{
              position: 'absolute',
              top: '-4px',
              right: '-4px',
              background: '#EF4444',
              color: '#FFF',
              fontSize: '0.7rem',
              fontWeight: 800,
              minWidth: '18px',
              height: '18px',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 4px',
              boxShadow: '0 0 0 2px #FFF',
            }}
          >
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div
          role="region"
          aria-label="Thông báo của bạn"
          style={{
            position: 'fixed',
            ...position,
            maxHeight: `calc(100dvh - ${position.top + 16}px)`,
            background: '#FFF',
            borderRadius: '12px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 12px 32px rgba(15, 23, 42, 0.15)',
            zIndex: 1000,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              padding: '0.875rem 1rem',
              borderBottom: '1px solid #F1F5F9',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: '#F8FAFC',
            }}
          >
            <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0F172A' }}>
              Thông báo {unreadCount > 0 && <span style={{ color: '#2563EB' }}>({unreadCount})</span>}
            </div>
            {unreadCount > 0 && (
              <button
                type="button"
                onClick={() => markAllNotificationsAsRead(user?.id)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#2563EB',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                }}
              >
                <CheckCheck size={14} />
                Đã đọc tất cả
              </button>
            )}
          </div>

          <div style={{ maxHeight: '380px', overflowY: 'auto' }}>
            {userNotifications.length === 0 ? (
              <div style={{ padding: '2rem 1rem', textAlign: 'center', color: '#94A3B8', fontSize: '0.875rem' }}>
                <Bell size={28} style={{ margin: '0 auto 0.5rem auto', opacity: 0.4 }} />
                <p style={{ margin: 0 }}>Bạn chưa có thông báo mới.</p>
              </div>
            ) : (
              userNotifications.map((n) => (
                <div
                  key={n.id}
                  onClick={() => handleItemClick(n)}
                  style={{
                    padding: '0.85rem 1rem',
                    borderBottom: '1px solid #F1F5F9',
                    background: n.isRead ? '#FFF' : '#F0F9FF',
                    cursor: 'pointer',
                    transition: 'background 0.15s ease',
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'flex-start',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#F8FAFC')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = n.isRead ? '#FFF' : '#F0F9FF')}
                >
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      background: n.type === 'sos_alert' ? '#FEE2E2' : '#EFF6FF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    {getNotifIcon(n.type)}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: n.isRead ? 600 : 700, fontSize: '0.875rem', color: '#0F172A', marginBottom: '2px' }}>
                      {n.title}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#475569', lineHeight: 1.4 }}>
                      {n.message}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '4px' }}>
                      {new Date(n.createdAt).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })} · {new Date(n.createdAt).toLocaleDateString('vi-VN')}
                    </div>
                  </div>
                  {!n.isRead && (
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#2563EB',
                        marginTop: '6px',
                        flexShrink: 0,
                      }}
                    />
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
