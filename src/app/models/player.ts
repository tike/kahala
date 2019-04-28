export class Player {
  id: number;
  name: string;
  gamesPlayed: number;
  Wins: number;

  constructor(name: string, id?: number) {
    this.id = id !== undefined ? id: 0;
    this.name = name;
    this.gamesPlayed = 0;
    this.Wins = 0;
  }
}
