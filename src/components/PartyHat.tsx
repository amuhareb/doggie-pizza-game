import React from 'react';
import { PartyHat as PartyHatType } from '../types/PartyHat';
import './PartyHat.css';

interface PartyHatProps {
  partyHat: PartyHatType;
}

const PartyHat: React.FC<PartyHatProps> = ({ partyHat }) => {
  return (
    <div
      className="party-hat"
      style={{ top: partyHat.position.y, left: partyHat.position.x }}
    >
      <img src={partyHat.image} alt="Party Hat" />
    </div>
  );
};

export default PartyHat;