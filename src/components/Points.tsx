import React from 'react';
import './Points.css';
import { Points as PointsType } from '../types/Points';

interface PointsProps {
  points: PointsType;
}

const Points: React.FC<PointsProps> = ({ points }) => {
  return (
    <div className="points">
      <h2>Points: {points}</h2>
    </div>
  );
};

export default Points;