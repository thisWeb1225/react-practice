import React from 'react';
import './singleCard.css';

export default function singleCard({ card }) {
  return (
    <div
      className="memory__card"
      key={card.id}
      onClick={() => {
        handleChoice(card);
      }}
    >
      <div className="memory__card-front">{card.num}</div>
    </div>
  );
}
