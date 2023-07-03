export interface Doggie {
  id: string;
  name: string;
  position: {
    x: number;
    y: number;
  };
  points: number;
  hasPartyHat: boolean;
}