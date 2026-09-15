import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { PageTransition } from '../components/PageTransition';

export const LoginPage: React.FC = () => {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const destination =
    (location.state as { from?: { pathname: string } })?.from?.pathname || '/admin';

  useEffect(() => {
    if (isAuthenticated) {
      navigate(destination, { replace: true });
    }
  }, [isAuthenticated, navigate, destination]);

  const handleLoginClick = () => {
    login();
    navigate(destination, { replace: true });
  };

  return (
    <PageTransition>
      <section className="auth-shell">
        <p className="eyebrow">Authorization</p>
        <h1>Log In</h1>
        <p className="muted-copy">
          Click the button below to simulate signing into your account.
        </p>

        <button
          type="button"
          onClick={handleLoginClick}
          className="button button--dark"
        >
          Log In
        </button>
      </section>
    </PageTransition>
  );
};