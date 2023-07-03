export interface GameBoardProps {
  doggies: DoggieProps[];
  pizzas: PizzaProps[];
  partyHats: PartyHatProps[];
  points: PointsProps;
  chocolateBars: ChocolateBarProps[];
}

export interface DoggieProps {
  id: string;
  position: {
    x: number;
    y: number;
  };
  hasPartyHat: boolean;
}

export interface PizzaProps {
  id: string;
  position: {
    x: number;
    y: number;
  };
  isEaten: boolean;
}

export interface PartyHatProps {
  id: string;
  position: {
    x: number;
    y: number;
  };
  isWorn: boolean;
}

export interface PointsProps {
  total: number;
}

export interface ChocolateBarProps {
  id: string;
  position: {
    x: number;
    y: number;
  };
  isAvoided: boolean;
}