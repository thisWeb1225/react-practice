import React from 'react';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ToggleThemeBtn.css';

export default function ToggleThemeBtn({ onClick, theme }) {
  let className = `toggleThemeBtn ${theme}`;
  return (
    <div className={className} onClick={onClick}>
      {theme === 'light' ? (
        <FontAwesomeIcon icon="fa-solid fa-sun" />
      ) : (
        <FontAwesomeIcon icon="fa-solid fa-moon" />
      )}
    </div>
  );
}
