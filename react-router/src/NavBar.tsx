import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

export const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/blog');
  };

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link className="site-brand" to="/blog">
          Router Notes
        </Link>

        <div className="site-nav__links">
          <NavLink
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? 'site-nav__link active' : 'site-nav__link'
            }
            to="/blog"
          >
            Blog
          </NavLink>

          {isAuthenticated ? (
            <>
              <NavLink
                className={({ isActive }: { isActive: boolean }) =>
                  isActive ? 'site-nav__link active' : 'site-nav__link'
                }
                to="/admin"
              >
                Admin
              </NavLink>
              <button
                className="button button--ghost"
                type="button"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </>
          ) : (
            <NavLink className="button button--dark" to="/login">
              Log In
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};