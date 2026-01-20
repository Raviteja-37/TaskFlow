import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import ButtonLoader from '../Loader/ButtonLoader';
import './index.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggingOut, setIsLoggingOut] = useState(false); // ✅ loader state

  const token = Cookies.get('token');

  const onLogout = () => {
    setIsLoggingOut(true); // show loader
    setTimeout(() => {
      Cookies.remove('token');
      setIsLoggingOut(false);
      navigate('/login', { replace: true });
    }, 300); // small delay to show loader smoothly
  };

  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  return (
    <nav className="navbar">
      <h2 className="logo" onClick={() => navigate('/')}>
        TaskFlow
      </h2>

      <div className="nav-right">
        {/* LOGIN PAGE */}
        {!token && isLoginPage && (
          <button onClick={() => navigate('/register')}>Register</button>
        )}

        {/* REGISTER PAGE */}
        {!token && isRegisterPage && (
          <button onClick={() => navigate('/login')}>Login</button>
        )}

        {/* LOGGED IN */}
        {token && (
          <button
            className="logout-btn"
            onClick={onLogout}
            disabled={isLoggingOut}
          >
            {isLoggingOut ? <ButtonLoader /> : 'Logout'}
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
