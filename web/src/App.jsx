import { Navigate, Route, Routes } from 'react-router-dom';
import LearnerSearch from './features/learner/LearnerSearch.jsx';
import LearnerMapPage from './features/learner/LearnerMapPage.jsx';
import LearnerDashboard from './features/learner/LearnerDashboard.jsx';
import LearnerPostClass from './features/learner/LearnerPostClass.jsx';
import LearnerMyClasses from './features/learner/LearnerMyClasses.jsx';
import TutorDashboard from './features/tutor/TutorDashboard.jsx';
import TutorClassMap from './features/tutor/TutorClassMap.jsx';
import TutorClassSearch from './features/tutor/TutorClassSearch.jsx';
import AdminDashboard from './features/admin/AdminDashboard.jsx';
import AdminTutorsPage from './features/admin/AdminTutorsPage.jsx';
import AdminUsersPage from './features/admin/AdminUsersPage.jsx';
import AdminReviewsPage from './features/admin/AdminReviewsPage.jsx';
import AdminIssuesPage from './features/admin/AdminIssuesPage.jsx';
import AdminAppealsPage from './features/admin/AdminAppealsPage.jsx';
import AdminClassesPage from './features/admin/AdminClassesPage.jsx';
import AdminFinancePage from './features/admin/AdminFinancePage.jsx';
import AdminSubjectsPage from './features/admin/AdminSubjectsPage.jsx';
import AdminLocationsPage from './features/admin/AdminLocationsPage.jsx';
import AdminSettingsPage from './features/admin/AdminSettingsPage.jsx';
import AdminLogsPage from './features/admin/AdminLogsPage.jsx';
import UserAppealsPage from './features/appeals/UserAppealsPage.jsx';
import HomePage from './features/public/HomePage.jsx';
import LearnerLanding from './features/public/LearnerLanding.jsx';
import TutorLanding from './features/public/TutorLanding.jsx';
import HelpCenterPage from './features/public/HelpCenterPage.jsx';
import { MyRequests, NewRequest, RequestDetail } from './features/learner/LearnerPages.jsx';
import TutorProfilePage from './features/learner/TutorProfilePage.jsx';
import { TutorProfile, TutorRequestDetail, TutorRequests } from './features/tutor/TutorPages.jsx';
import TutorTimetable from './features/tutor/TutorTimetable.jsx';
import TutorIncome from './features/tutor/TutorIncome.jsx';
import { TutorWorkspaceProvider } from './features/tutor/TutorWorkspaceState.jsx';
import LoginPage from './features/auth/LoginPage.jsx';
import RegistrationPage from './features/auth/RegistrationPage.jsx';
import { ProtectedRoute } from './features/auth/AuthNavigation.jsx';
import LearnerWallet from './features/learner/LearnerWallet.jsx';
import LearnerSchedule from './features/learner/LearnerSchedule.jsx';
import TutorWallet from './features/tutor/TutorWallet.jsx';
import TutorTripPage from './features/tutor/TutorTripPage.jsx';

import MessagesPage from './features/chat/MessagesPage.jsx';
import FloatingChatWidget from './features/chat/FloatingChatWidget.jsx';

function Protected({ role, children }) { return <ProtectedRoute role={role}>{children}</ProtectedRoute>; }

export default function App() {
  return (
    <TutorWorkspaceProvider>
      <Routes>
        <Route path="/" element={<HomePage />} /><Route path="/learner" element={<LearnerLanding />} /><Route path="/tutor" element={<TutorLanding />} />
        <Route path="/help" element={<HelpCenterPage />} />
        <Route path="/safety/trip" element={<TutorTripPage />} />
        <Route path="/login" element={<LoginPage />} /><Route path="/register" element={<RegistrationPage role="learner" />} /><Route path="/tutor/register" element={<RegistrationPage role="tutor" />} />
        <Route path="/learner/search" element={<Protected role="learner"><LearnerSearch /></Protected>} />
        <Route path="/learner/map" element={<Protected role="learner"><LearnerMapPage /></Protected>} />
        <Route path="/learner/dashboard" element={<Protected role="learner"><LearnerDashboard /></Protected>} />
        <Route path="/learner/post-class" element={<Protected role="learner"><LearnerPostClass /></Protected>} />
        <Route path="/learner/my-classes" element={<Protected role="learner"><LearnerMyClasses /></Protected>} />
        <Route path="/learner/wallet" element={<Protected role="learner"><LearnerWallet /></Protected>} />
        <Route path="/learner/schedule" element={<Protected role="learner"><LearnerSchedule /></Protected>} />
        <Route path="/tutor/timetable" element={<Protected role="tutor"><TutorTimetable /></Protected>} />
        <Route path="/tutor/wallet" element={<Protected role="tutor"><TutorWallet /></Protected>} />
        <Route path="/tutor/income" element={<Protected role="tutor"><TutorIncome /></Protected>} />
        <Route path="/tutor/map" element={<Protected role="tutor"><TutorClassMap /></Protected>} />
        <Route path="/tutor/find-students" element={<Protected role="tutor"><TutorClassSearch /></Protected>} />
        <Route path="/tutors/:id" element={<Protected role="learner"><TutorProfilePage /></Protected>} />
        <Route path="/requests/new" element={<Protected role="learner"><NewRequest /></Protected>} /><Route path="/requests" element={<Protected role="learner"><MyRequests /></Protected>} /><Route path="/requests/:id" element={<Protected role="learner"><RequestDetail /></Protected>} />
        <Route path="/messages" element={<Protected><MessagesPage /></Protected>} />
        <Route path="/tutor/dashboard" element={<Protected role="tutor"><TutorDashboard /></Protected>} /><Route path="/tutor/profile" element={<Protected role="tutor"><TutorProfile /></Protected>} /><Route path="/tutor/availability" element={<Protected role="tutor"><Navigate to="/tutor/timetable" replace /></Protected>} /><Route path="/tutor/requests" element={<Protected role="tutor"><TutorRequests /></Protected>} /><Route path="/tutor/requests/:id" element={<Protected role="tutor"><TutorRequestDetail /></Protected>} /><Route path="/tutor/lessons" element={<Protected role="tutor"><Navigate to="/tutor/timetable" replace /></Protected>} />
        <Route path="/admin/dashboard" element={<Protected role="admin"><AdminDashboard /></Protected>} />
        <Route path="/admin/tutors" element={<Protected role="admin"><AdminTutorsPage /></Protected>} />
        <Route path="/admin/users" element={<Protected role="admin"><AdminUsersPage /></Protected>} />
        <Route path="/admin/reviews" element={<Protected role="admin"><AdminReviewsPage /></Protected>} />
        <Route path="/admin/issues" element={<Protected role="admin"><AdminIssuesPage /></Protected>} />
        <Route path="/admin/appeals" element={<Protected role="admin"><AdminAppealsPage /></Protected>} />
        <Route path="/admin/classes" element={<Protected role="admin"><AdminClassesPage /></Protected>} />
        <Route path="/admin/finance" element={<Protected role="admin"><AdminFinancePage /></Protected>} />
        <Route path="/admin/subjects" element={<Protected role="admin"><AdminSubjectsPage /></Protected>} />
        <Route path="/admin/locations" element={<Protected role="admin"><AdminLocationsPage /></Protected>} />
        <Route path="/admin/settings" element={<Protected role="admin"><AdminSettingsPage /></Protected>} />
        <Route path="/admin/logs" element={<Protected role="admin"><AdminLogsPage /></Protected>} />
        <Route path="/appeals" element={<UserAppealsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <FloatingChatWidget />
    </TutorWorkspaceProvider>
  );
}
