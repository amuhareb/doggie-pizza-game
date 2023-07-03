import React from 'react';
import { PizzaProps } from '../types/Pizza';
import './Pizza.css';

const Pizza: React.FC<PizzaProps> = ({ position }) => {
  const style = {
    left: `${position[0]}%`,
    top: `${position[1]}%`
  };

  return (
    <div className="pizza" style={style}>
      <img src="pizza.png" alt="Tasty pizza" />
    </div>
  );
};

export default Pizza;