import React, { useState, useEffect } from 'react';
import Doggie from './Doggie';
import Pizza from './Pizza';
import PartyHat from './PartyHat';
import Points from './Points';
import ChocolateBar from './ChocolateBar';
import { DoggieType, PizzaType, PartyHatType, PointsType, ChocolateBarType } from '../types';
import './GameBoard.css';

interface GameBoardProps {
  doggie: DoggieType;
  pizza: PizzaType;
  partyHat: PartyHatType;
  points: PointsType;
  chocolateBar: ChocolateBarType;
}

const GameBoard: React.FC<GameBoardProps> = ({ doggie, pizza, partyHat, points, chocolateBar }) => {
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (doggie.position === chocolateBar.position) {
      setGameOver(true);
    }
  }, [doggie, chocolateBar]);

  return (
    <div id="game-board" className="game-board">
      {gameOver ? (
        <div className="game-over">Game Over</div>
      ) : (
        <>
          <Doggie doggie={doggie} />
          <Pizza pizza={pizza} />
          <PartyHat partyHat={partyHat} />
          <Points points={points} />
          <ChocolateBar chocolateBar={chocolateBar} />
        </>
      )}
    </div>
  );
};

export default GameBoard;