import React, { useEffect, useState } from 'react';
import './MemoryBlock.css';
import SingleCard from '../components/SingleCard';

const cardNumbers = [
  { num: 1, matched: false },
  { num: 2, matched: false },
  { num: 3, matched: false },
  { num: 4, matched: false },
  { num: 5, matched: false },
  { num: 6, matched: false },
];

export default function rfc() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const hasShuffledCards = [...cardNumbers, ...cardNumbers]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(hasShuffledCards);
    setTurns(0);
  };

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare 2 selectd cards
  useEffect(() => {
    if (choiceTwo) {
      if (choiceOne.num === choiceTwo.num) {
        // if matched, update the card's match value
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.num === choiceOne.num) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        rresetTurn();
      } else {
        console.log('do not match');
        rresetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);

  const rresetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <div className="memory">
      <h1 className="memory__title">Memory Card</h1>
      <button className="memory__btn" onClick={shuffleCards}>
        New Game
      </button>

      <div className="memory__grid">
        {cards.map((card) => (
          <SingleCard card={card} key={card.id}></SingleCard>
        ))}
      </div>
    </div>
  );
}
