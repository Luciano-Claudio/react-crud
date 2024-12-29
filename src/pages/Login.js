import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/token/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('access', data.access);
        localStorage.setItem('refresh', data.refresh);
        localStorage.setItem('username', username);
        setIsAuthenticated(true); // Atualiza o estado
        navigate('/dashboard'); // Redireciona para o dashboard
      } else {
        setMessage(data.detail || 'Login failed');
      }
    } catch (error) {
      setMessage('Error connecting to server');
    }
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Login;
