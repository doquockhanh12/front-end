import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  HelpCircle,
  Shield,
  ShieldAlert,
  DollarSign,
  AlertTriangle,
  PhoneCall,
  Search,
  ChevronDown,
  ChevronUp,
  FileCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
} from 'lucide-react';
import Brand from '../../components/Brand.jsx';
import Button from '../../components/Button.jsx';
import useDemoDomain from '../domain/DemoDomainContext.jsx';
import useDemoAuth from '../auth/DemoAuthContext.jsx';
import './help.css';

const FAQ_SECTIONS = [
  {
    id: 'escrow',
    title: '🛡️ Chính sách Bảo hiểm Hoàn tiền 100% & Ký quỹ Escrow',
    description: 'Bảo vệ toàn diện học phí của phụ huynh và học viên khỏi rủi ro.',
    items: [
      {
        q: 'Cơ chế Két Ký quỹ Escrow bảo vệ tiền của tôi như thế nào?',
        a: 'Khi bạn thanh toán học phí cho buổi học, số tiền sẽ được chuyển vào Két Ký quỹ Escrow độc lập của TutorNearMe thay vì chuyển trực tiếp cho gia sư. Tiền được tạm giữ an toàn trong suốt thời gian buổi học diễn ra. Chỉ khi buổi học kết thúc tốt đẹp và không có khiếu nại, hệ thống mới giải ngân thù lao cho gia sư.'
      },
      {
        q: 'Tôi có được hoàn tiền 100% nếu gia sư vắng mặt hoặc đi trễ không?',
        a: 'CÓ! TutorNearMe cam kết bảo vệ quyền lợi người học 100%. Nếu gia sư vắng mặt (No-show), trễ hẹn từ 15 phút trở lên không báo trước, hoặc buổi đầu dạy không đúng năng lực cam kết, bạn chỉ cần bấm nút "Yêu cầu Hoàn tiền 100%" trong lịch học. Tiền cọc từ két Escrow sẽ lập tức được hoàn trả về số dư khả dụng trong ví của bạn.'
      },
      {
        q: 'Nếu tôi (học viên) muốn hủy hoặc dời lịch học thì quy định như thế nào?',
        a: '• Hủy trước giờ học trên 24 tiếng: Hoàn 100% tiền cọc, gia sư mở lại lịch rảnh miễn phí.\n• Hủy từ 2 đến 24 tiếng: Hoàn 50% tiền cọc cho bạn, 50% còn lại được bồi thường vào ví gia sư vì đã giữ lịch cho bạn.\n• Hủy dưới 2 tiếng hoặc vắng mặt: Tiền cọc được giải ngân toàn bộ cho gia sư để bù đắp chi phí thời gian và di chuyển.'
      }
    ]
  },
  {
    id: 'anti-scam',
    title: '⚠️ Cảnh báo An toàn & Phòng chống Bẫy Lừa đảo Đa cấp',
    description: 'Tuyệt đối không giao dịch ngoài sàn để được bảo hiểm quyền lợi tối đa.',
    items: [
      {
        q: 'Gia sư có phải đóng phí nhận lớp hay cọc tiền cho trung tâm không?',
        a: 'TUYỆT ĐỐI KHÔNG! TutorNearMe nghiêm cấm mọi hình thức thu phí nhận lớp từ gia sư. Các trung tâm gia sư truyền thống thường bắt sinh viên đóng 30-50% tiền cọc nhận lớp rồi lừa đảo bùng tiền. Tại TutorNearMe, gia sư sinh viên nộp đơn ứng tuyển hoàn toàn MIỄN PHÍ.'
      },
      {
        q: 'Tại sao không nên chuyển khoản hay giao dịch trực tiếp ngoài hệ thống?',
        a: 'Giữ thỏa thuận và bằng chứng trong ứng dụng demo để đối chiếu khi có sự cố. Tiền ví, ký quỹ và quyết định hoàn tiền ở đây là mô phỏng; không có bảo hiểm hoặc bảo đảm pháp lý thật.'
      },
      {
        q: 'Tôi nên làm gì nếu phát hiện địa chỉ nhà hoặc yêu cầu có dấu hiệu lừa đảo/đa cấp?',
        a: 'Bấm Báo cáo dấu hiệu bất thường và mô tả nội dung kèm bằng chứng để Admin xem xét trong bản demo. Không có cam kết thời gian xử lý tự động hoặc khóa tài khoản thật.'
      }
    ]
  },
  {
    id: 'safety',
    title: '🚨 Lá chắn An toàn Gia sư Sinh viên khi Dạy tại Nhà',
    description: 'Bảo vệ an toàn thân thể và phòng tránh rủi ro bắt cóc, quấy rối, tống tiền.',
    items: [
      {
        q: 'Tính năng Check-in an toàn và Chia sẻ buổi dạy hoạt động ra sao?',
        a: 'Bắt đầu di chuyển, Check-in và Check-out ghi nhật ký vào dữ liệu demo. Liên kết chia sẻ mở trang buổi dạy trong cùng trình duyệt; không có GPS trực tiếp, bảo mật token hoặc đồng bộ sang thiết bị khác.'
      },
      {
        q: 'Nút Báo động Khẩn cấp SOS đỏ hoạt động như thế nào?',
        a: 'Giữ nút SOS 3 giây để ghi cảnh báo demo vào Admin. Không gửi SMS/GPS hoặc gọi tự động. Nếu gặp nguy hiểm thật, chủ động gọi 113 bằng nút gọi điện; không dựa vào prototype để được ứng cứu.'
      }
    ]
  },
  {
    id: 'wallet',
    title: '💳 Ví điện tử, Quét VietQR Napas & Rút tiền Thù lao',
    description: 'Quy trình nạp cọc nhanh chóng và rút tiền về tài khoản ngân hàng chính chủ.',
    items: [
      {
        q: 'Làm thế nào để nạp tiền vào ví qua VietQR?',
        a: 'Vào Ví của tôi, chọn Nạp tiền VietQR và số tiền. QR và đồng hồ đếm ngược mô phỏng nạp tiền vào dữ liệu demo. Không chuyển tiền thật, không quét bằng app ngân hàng thật.'
      },
      {
        q: 'Gia sư rút tiền về ngân hàng mất bao lâu?',
        a: 'Hoàn tất buổi học có ký quỹ liên kết sẽ giải ngân demo một lần, trừ phí sàn theo danh hiệu/cấu hình. Lệnh rút cần Admin xét duyệt và chỉ thay đổi số dư demo; không chuyển khoản ngân hàng thật.'
      }
    ]
  }
];

export default function HelpCenterPage() {
  const navigate=useNavigate();const {user}=useDemoAuth();const {openSupportConversation}=useDemoDomain();
  const [feedback,setFeedback]=useState('');
  function support(){if(!user){navigate('/login?redirect=/help');return;}const result=openSupportConversation();if(result.error)setFeedback(result.error);else navigate(`/messages?thread=${encodeURIComponent(result.threadId)}`);}
  const [search, setSearch] = useState('');
  const [openItems, setOpenItems] = useState({ 'escrow-0': true, 'anti-scam-0': true });

  const toggleItem = (key) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredSections = FAQ_SECTIONS.map((sec) => {
    if (!search.trim()) return sec;
    const q = search.toLowerCase();
    const matchingItems = sec.items.filter(
      (item) => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
    );
    return { ...sec, items: matchingItems };
  }).filter((sec) => sec.items.length > 0);

  return (
    <div className="help-center" style={{ minHeight: '100vh', background: 'var(--color-canvas)', color: 'var(--text-primary)', fontFamily: 'var(--font-ui)' }}>
      {/* Top Navbar */}
      <header style={{ background: '#FFF', borderBottom: '1px solid #E2E8F0', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Brand />
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link to="/" style={{ color: '#475569', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
            Trang chủ
          </Link>
          <Link to="/login" style={{ color: '#2563EB', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>
            Đăng nhập
          </Link>
        </div>
      </header>

      {/* Hero Banner */}
      <section style={{ background: 'linear-gradient(135deg, #1E40AF 0%, #2563EB 100%)', color: '#FFF', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.15)', padding: '0.4rem 1rem', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1.25rem', backdropFilter: 'blur(8px)' }}>
            <Shield size={16} /> HỆ SINH THÁI NIỀM TIN & AN TOÀN HAI CHIỀU
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0 0 1rem 0', lineHeight: 1.25 }}>
            Trung tâm Trợ giúp & Cam kết Bảo vệ Khách hàng
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, lineHeight: 1.6, margin: '0 0 2rem 0' }}>
            Hướng dẫn luồng ký quỹ, hoàn tiền và an toàn trong prototype. Mọi giao dịch, SOS và hỗ trợ đều là mô phỏng trong trình duyệt.
          </p>

          <div style={{ position: 'relative', maxWidth: '580px', margin: '0 auto' }}>
            <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748B' }} />
            <input
              aria-label="Tìm kiếm trợ giúp"
              type="text"
              placeholder="Tìm kiếm câu hỏi, chính sách hoàn tiền, an toàn gia sư..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem 1rem 1rem 3.25rem',
                borderRadius: '12px',
                border: 'none',
                fontSize: '1rem',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                outline: 'none',
              }}
            />
          </div>
        </div>
      </section>

      {/* Quick Hotline & Policy Bar */}
      <section style={{ maxWidth: '1000px', margin: '-2rem auto 3rem auto', padding: '0 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          <div style={{ background: '#FFF', borderRadius: '16px', padding: '1.5rem', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981', flexShrink: 0 }}>
              <Lock size={24} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 700 }}>Hoàn tiền 100% vì Sự cố</h3>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.82rem', color: '#64748B' }}>
                Két Escrow tạm giữ tiền cho đến khi buổi học hoàn tất tốt đẹp.
              </p>
            </div>
          </div>

          <div style={{ background: '#FFF', borderRadius: '16px', padding: '1.5rem', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D97706', flexShrink: 0 }}>
              <AlertTriangle size={24} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 700 }}>Miễn phí Nhận lớp cho Gia sư</h3>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.82rem', color: '#64748B' }}>
                Không đóng tiền cọc, bài trừ triệt để bẫy lừa đảo đa cấp.
              </p>
            </div>
          </div>

          <div style={{ background: '#FFF', borderRadius: '16px', padding: '1.5rem', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FEE2E2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#DC2626', flexShrink: 0 }}>
              <PhoneCall size={24} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 700 }}>Khi có nguy hiểm thật</h3>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.82rem', color: '#DC2626', fontWeight: 700 }}>
                Chủ động gọi Cảnh sát 113. Prototype không tự gọi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <main style={{ maxWidth: '900px', margin: '0 auto 5rem auto', padding: '0 1.25rem' }}>
        {filteredSections.map((sec) => (
          <div key={sec.id} style={{ marginBottom: '2.5rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '0 0 0.35rem 0', color: '#0F172A' }}>
                {sec.title}
              </h2>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748B' }}>
                {sec.description}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {sec.items.map((item, idx) => {
                const key = `${sec.id}-${idx}`;
                const isOpen = Boolean(openItems[key]);
                return (
                  <div
                    key={key}
                    style={{
                      background: '#FFF',
                      borderRadius: '12px',
                      border: '1px solid #E2E8F0',
                      overflow: 'hidden',
                      transition: 'border-color 0.2s ease',
                    }}
                  >
                    <button
                      aria-expanded={isOpen}
                      type="button"
                      onClick={() => toggleItem(key)}
                      style={{
                        width: '100%',
                        padding: '1.1rem 1.25rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        color: '#0F172A',
                      }}
                    >
                      <span>{item.q}</span>
                      {isOpen ? <ChevronUp size={18} color="#2563EB" /> : <ChevronDown size={18} color="#94A3B8" />}
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          padding: '0 1.25rem 1.25rem 1.25rem',
                          fontSize: '0.9rem',
                          color: '#475569',
                          lineHeight: 1.6,
                          whiteSpace: 'pre-line',
                          borderTop: '1px solid #F1F5F9',
                          paddingTop: '0.85rem',
                        }}
                      >
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Contact Support Card */}
        <div style={{ background: '#EFF6FF', borderRadius: '16px', padding: '2rem', border: '1px solid #BFDBFE', textAlign: 'center', marginTop: '3rem' }}>
          <HelpCircle size={36} color="#2563EB" style={{ margin: '0 auto 0.75rem auto' }} />
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', fontWeight: 800, color: '#1E40AF' }}>
            Vẫn chưa tìm thấy câu trả lời?
          </h3>
          <p style={{ margin: '0 0 1.25rem 0', color: '#475569', fontSize: '0.95rem', maxWidth: '540px', marginLeft: 'auto', marginRight: 'auto' }}>
            Mở hội thoại hỗ trợ demo với tài khoản Admin. Không phải tổng đài hoặc dịch vụ hỗ trợ trực tiếp 24/7.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="primary" onClick={support}>
                Chat hỗ trợ demo
              </Button>
            <Link to="/appeals" className="button button--secondary">
                Gửi Đơn Khiếu nại / Kháng cáo
            </Link>
          </div>
          {feedback&&<p role="alert">{feedback}</p>}
        </div>
      </main>
    </div>
  );
}
