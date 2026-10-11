import { Link } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import Avatar from '../../components/Avatar.jsx';
import NotificationBell from '../../components/NotificationBell.jsx';
import useDemoAuth from '../auth/DemoAuthContext.jsx';
import { PublicHeader } from '../public/PublicChrome.jsx';

const navigation = [
  ['Tìm gia sư', '/learner/search'],
  ['Đăng tin lớp', '/learner/post-class'],
  ['Lớp của tôi', '/learner/my-classes'],
  ['Lịch học', '/learner/schedule'],
  ['Ví của tôi', '/learner/wallet'],
  ['Trợ giúp', '/help'],
];

export default function LearnerHeader() {
  const { user, logout } = useDemoAuth();
  const initials = (user.fullName || user.username).split(' ').slice(-2).map((word) => word[0]).join('');
  const actions = <>
    <NotificationBell />
    <Link className="learner-account" to="/learner/dashboard"><Avatar initials={initials} name={user.fullName || user.username} size="sm" /><span>{user.username}</span></Link>
    <button className="learner-logout" type="button" onClick={logout}><LogOut size={17} aria-hidden="true" /> Đăng xuất</button>
  </>;
  return <PublicHeader kind="learner" navigation={navigation} actions={actions} />;
}

