import React, { useState } from 'react';

import './MouseMoveAndClick.css';

export default function MouseMoveAndClick() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [circles, setCircles] = useState([]);
  const [poppedCircles, setPoppedCircles] = useState([]);

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handlePlaceCircle = () => {
    setCircles((prev) => [...prev, position]);
  };

  const handleUndo = () => {
    const newCircles = [...circles];
    const undoCircle = newCircles.pop();
    if (!undoCircle) return;
    setPoppedCircles((prev) => [...prev, undoCircle]);
    setCircles(() => [...newCircles]);
  };

  const handleRedo = () => {
    const newPoppedCircles = [...poppedCircles];
    const redoCircle = newPoppedCircles.pop();
    if (!redoCircle) return;
    setCircles((prev) => [...prev, redoCircle]);
    setPoppedCircles(() => [...newPoppedCircles]);
  };

  return (
    <>
      <button
        className="mouse__btn"
        disabled={circles.length === 0}
        onClick={handleUndo}
      >
        Undo
      </button>
      <button
        className="mouse__btn"
        disabled={poppedCircles.length === 0}
        onClick={handleRedo}
      >
        Redo
      </button>
      <div
        className="mouse"
        onPointerMove={handleMouseMove}
        onPointerDown={handlePlaceCircle}
      >
        <div
          className="mouse__point"
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        ></div>
        <div
          className="mouse__point2"
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        ></div>
        {circles.map((circle, i) => {
          return (
            <div
              className="mouse__point"
              style={{
                left: `${circle.x - 5}px`,
                top: `${circle.y - 5}px`,
              }}
              key={i}
            ></div>
          );
        })}
      </div>
    </>
  );
}
