import React from 'react';
import './Doggie.css';
import { DoggieProps } from '../types/Doggie';

const Doggie: React.FC<DoggieProps> = ({ position, onMove }) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    let newDirection = '';

    switch (event.key) {
      case 'ArrowUp':
        newDirection = 'up';
        break;
      case 'ArrowDown':
        newDirection = 'down';
        break;
      case 'ArrowLeft':
        newDirection = 'left';
        break;
      case 'ArrowRight':
        newDirection = 'right';
        break;
      default:
        return;
    }

    onMove(newDirection);
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      className="Doggie"
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    />
  );
};

export default Doggie;