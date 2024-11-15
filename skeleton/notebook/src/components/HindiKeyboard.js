import React, { useState } from 'react';

export default function HindiKeyboard({ onKeyPress }) {
  const hindiKeys = [
    ['़', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', 'ऋ', 'Backspace'],
    ['Tab', 'क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ट', 'ठ', 'ड', 'ढ'],
    ['Caps', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'Enter'],
    ['Shift', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह', 'ऽ', 'ॐ', 'Space', 'Shift'],
  ];

  const handleKeyClick = (key) => {
    if (key === 'Backspace') {
      onKeyPress('Backspace');
    } else if (key === 'Space') {
      onKeyPress(' ');
    } else if (key !== 'Tab' && key !== 'Caps' && key !== 'Shift' && key !== 'Enter') {
      onKeyPress(key);
    }
  };

  return (
    <div className="keyboard">
      {hindiKeys.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key, keyIndex) => (
            <button
              key={keyIndex}
              className={`keyboard-key ${key === 'Space' ? 'space-key' : ''}`}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
      <style>{`
        .keyboard {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px;
          background: #f1f1f1;
          padding: 15px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 600px;
        }
        .keyboard-row {
          display: flex;
          justify-content: center;
          margin-bottom: 10px;
        }
        .keyboard-key {
          margin: 5px;
          padding: 10px 15px;
          background: #2980b9;
          color: #fff;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .keyboard-key:hover {
          background: #3498db;
        }
        .space-key {
          flex: 1;
          text-align: center;
        }
      `}</style>
    </div>
  );
}