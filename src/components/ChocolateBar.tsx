import React from 'react';
import { ChocolateBarType } from '../types/ChocolateBar';
import '../styles/ChocolateBar.css';

interface ChocolateBarProps {
  chocolateBar: ChocolateBarType;
}

const ChocolateBar: React.FC<ChocolateBarProps> = ({ chocolateBar }) => {
  return (
    <div
      className="chocolate-bar"
      style={{
        left: `${chocolateBar.position.x}%`,
        top: `${chocolateBar.position.y}%`,
      }}
    />
  );
};

export default ChocolateBar;