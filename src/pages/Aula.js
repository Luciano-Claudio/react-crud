import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles.css';

const Aula = () => {
  const { language } = useParams();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  return (
    <div className="aula-container">
      <h1 className="aula-title">Aula de {language.charAt(0).toUpperCase() + language.slice(1)}</h1>
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${
                message.sender === 'user' ? 'chat-user' : 'chat-response'
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="chat-input-container">
          <input
            type="text"
            className="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua mensagem..."
          />
          <button className="chat-send-button" onClick={handleSendMessage}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aula;
