import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Aula from './pages/Aula';

import './styles.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('access'));
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('username');
    setIsAuthenticated(false); 
    window.location.href = '/login'; 
  };

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem('access')); 
  }, []);

  return (
    <>
      {/* Header centralizado */}
      <header className="header">
          {!isAuthenticated ? (
            <div>
              <Link to="/login" className="header-link">Login</Link>
              <Link to="/register" className="header-link">Register</Link>
            </div>
          ) : (
            <div>
              <span>Olá, {username}</span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleLogout();
                }}
                className="logout-button"
              >
                Logout
              </button>
            </div>
          )}
        </header>

      <Routes>
        <Route path="/" element={<Navigate to={isAuthenticated ? '/dashboard' : '/login'} />} />
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <Login setIsAuthenticated={setIsAuthenticated} />
          }
        />
        <Route
          path="/register"
          element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <Register setIsAuthenticated={setIsAuthenticated} />
          }
        />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/aula/:language"
          element={
            isAuthenticated ? <Aula /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </>
  );
};

export default App;
