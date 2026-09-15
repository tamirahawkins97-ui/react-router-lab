import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { PageTransition } from '../components/PageTransition';

export const AdminPage: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <PageTransition>
      <div className="admin-shell">
        <span className="status-label">Protected Session</span>
        <h1>Welcome to the Admin Dashboard.</h1>
        <p className="muted-copy">
          You have authenticated access to modify site content and review system settings.
        </p>

        <button
          type="button"
          onClick={handleLogout}
          className="button button--danger"
        >
          Log Out
        </button>
      </div>
    </PageTransition>
  );
};