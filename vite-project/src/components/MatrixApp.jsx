
import React, { useState, useEffect } from 'react';

const MatrixGame = () => {
  const [matrix, setMatrix] = useState(Array(3).fill().map(() => Array(3).fill('white')));
  const [clickHistory, setClickHistory] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleBoxClick = (row, col) => {
    if (isAnimating) return;

    const newMatrix = matrix.map(rowArr => [...rowArr]);
    
    // Only process if the box is white (not already clicked)
    if (newMatrix[row][col] === 'white') {
      newMatrix[row][col] = 'green';
      const newHistory = [...clickHistory, { row, col }];
      
      setMatrix(newMatrix);
      setClickHistory(newHistory);

      // Check if this was the last white box
      const isLastBox = newMatrix.flat().filter(color => color === 'white').length === 0;
      
      if (isLastBox) {
        animateToOrange(newHistory);
      }
    }
  };

  const animateToOrange = (history) => {
    setIsAnimating(true);
    
    history.forEach(({ row, col }, index) => {
      setTimeout(() => {
        setMatrix(prevMatrix => {
          const newMatrix = prevMatrix.map(rowArr => [...rowArr]);
          newMatrix[row][col] = 'orange';
          return newMatrix;
        });
        
        // When the last animation is done
        if (index === history.length - 1) {
          setIsAnimating(false);
        }
      }, index * 500); 
    });
  };

  const resetGame = () => {
    setMatrix(Array(3).fill().map(() => Array(3).fill('white')));
    setClickHistory([]);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>3x3 Matrix Color Changer</h1>
      <div style={{ 
        display: 'inline-block',
        margin: '20px 0'
      }}>
        {matrix.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex' }}>
            {row.map((color, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                onClick={() => handleBoxClick(rowIndex, colIndex)}
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: color,
                  border: '1px solid black',
                  cursor: 'pointer',
                  margin: '2px',
                  transition: 'background-color 0.3s'
                }}
              />
            ))}
          </div>
        ))}
      </div>
      <button onClick={resetGame} style={{
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer'
      }}>
        Reset Game
      </button>
    </div>
  );
};

export default MatrixGame;