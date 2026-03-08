import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import StudentDashboard from './pages/Student/Dashboard';
import FacultyDashboard from './pages/Faculty/Dashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';
import UserManagement from './pages/Admin/UserManagement';
import './index.css';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();

  // Point 4: Strict Role Check using localStorage (synced with AuthContext)
  const storedRole = localStorage.getItem('role');
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  if (loading) return null;

  if (!isLoggedIn || isLoggedIn !== 'true' || !user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(storedRole)) {
    // Role-based smart redirection
    const redirectPath = {
      student: '/student',
      faculty: '/faculty',
      admin: '/admin',
      super_admin: '/admin'
    }[storedRole] || '/login';

    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Point 4: Role-specific route protection */}
          <Route
            path="/student/*"
            element={
              <ProtectedRoute allowedRoles={['student']}>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/faculty/*"
            element={
              <ProtectedRoute allowedRoles={['faculty']}>
                <FacultyDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/*"
            element={
              <ProtectedRoute allowedRoles={['admin', 'super_admin']}>
                <Routes>
                  <Route index element={<AdminDashboard />} />
                  <Route path="users" element={<UserManagement />} />
                  <Route path="roles" element={
                    <ProtectedRoute allowedRoles={['super_admin']}>
                      <UserManagement />
                    </ProtectedRoute>
                  } />
                  <Route path="analytics" element={<AdminDashboard />} />
                </Routes>
              </ProtectedRoute>
            }
          />

          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
