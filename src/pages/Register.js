import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const Register = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/accounts/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('username', username);
        setMessage('User created successfully');
        navigate('/login'); // Redireciona para o login
      } else {
        setMessage(data.error || 'Registration failed');
      }
    } catch (error) {
      setMessage('Error connecting to server');
    }
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
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
          <button type="submit">Register</button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Register;
