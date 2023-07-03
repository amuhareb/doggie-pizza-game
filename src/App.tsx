import React, { useState, useEffect } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';

function App() {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (gameOver) {
      alert(`Game Over! Your score is ${score}`);
      setScore(0);
      setGameOver(false);
    }
  }, [gameOver]);

  const handleScoreUpdate = (points: number) => {
    setScore(score + points);
  };

  const handleGameOver = () => {
    setGameOver(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Doggie Pizza Party</h1>
        <h2>Score: {score}</h2>
      </header>
      <GameBoard 
        onScoreUpdate={handleScoreUpdate} 
        onGameOver={handleGameOver} 
      />
    </div>
  );
}

export default App;