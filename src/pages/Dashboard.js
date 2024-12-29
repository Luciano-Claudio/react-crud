import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import usaFlag from '../imagens/usa-flag.png';
import brazilFlag from '../imagens/brazil-flag.png';
import canadaFlag from '../imagens/canada-flag.png';
import japanFlag from '../imagens/japan-flag.png';
import germanyFlag from '../imagens/germany-flag.png';
import franceFlag from '../imagens/france-flag.png';
import italyFlag from '../imagens/italy-flag.png';
import ukFlag from '../imagens/uk-flag.png';
import indiaFlag from '../imagens/india-flag.png';
import chinaFlag from '../imagens/china-flag.png';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleButtonClick = (language) => {
    navigate(`/aula/${language.toLowerCase()}`);
  };

  return (
    <div className="main-container">
      <div className="dashboard-grid">
        <button
          className="grid-button image-button"
          style={{ backgroundImage: `url(${usaFlag})` }}
          title="Estados Unidos"
          onClick={() => handleButtonClick('Inglês')}
        />
        <button
          className="grid-button image-button"
          style={{ backgroundImage: `url(${brazilFlag})` }}
          title="Brasil"
          onClick={() => handleButtonClick('Português')}
        />
        <button
          className="grid-button image-button"
          style={{ backgroundImage: `url(${canadaFlag})` }}
          title="Canadá"
          onClick={() => handleButtonClick('Inglês')}
        />
        <button
          className="grid-button image-button"
          style={{ backgroundImage: `url(${japanFlag})` }}
          title="Japão"
          onClick={() => handleButtonClick('Japonês')}
        />
        <button
          className="grid-button image-button"
          style={{ backgroundImage: `url(${germanyFlag})` }}
          title="Alemanha"
          onClick={() => handleButtonClick('Alemão')}
        />
        <button
          className="grid-button image-button"
          style={{ backgroundImage: `url(${franceFlag})` }}
          title="França"
          onClick={() => handleButtonClick('Francês')}
        />
        <button
          className="grid-button image-button"
          style={{ backgroundImage: `url(${italyFlag})` }}
          title="Itália"
          onClick={() => handleButtonClick('Italiano')}
        />
        <button
          className="grid-button image-button"
          style={{ backgroundImage: `url(${ukFlag})` }}
          title="Reino Unido"
          onClick={() => handleButtonClick('Inglês')}
        />
        <button
          className="grid-button image-button"
          style={{ backgroundImage: `url(${indiaFlag})` }}
          title="Índia"
          onClick={() => handleButtonClick('Hindi')}
        />
        <button
          className="grid-button image-button"
          style={{ backgroundImage: `url(${chinaFlag})` }}
          title="China"
          onClick={() => handleButtonClick('Chinês')}
        />
      </div>
    </div>
  );
};

export default Dashboard;
