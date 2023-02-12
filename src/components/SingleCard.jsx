import React from 'react';
import './SingleCard.css';

export default function singleCard({ card, handleChoice, showed }) {
  let className = showed ? 'memory__card--front-show' : 'memory__card--front';

  const handleClick = (card) => {
    handleChoice(card);
  };
  return (
    <div
      className="memory__card"
      key={card.id}
      onClick={() => {
        handleClick(card);
      }}
    >
      <div className={className}>{card.num}</div>
    </div>
  );
}
