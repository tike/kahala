import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Player } from '../models/player';

@Injectable({
  providedIn: 'root',
})
export class InMemoryApiMock implements InMemoryDbService {
  createDb() {
    const players = [
      { id: 1, name: 'Mock Player 1', gamesPlayed: 2, Wins: 2 },
      { id: 2, name: 'Mock Player 2', gamesPlayed: 2, Wins: 1 },
      { id: 3, name: 'Mock Player 3', gamesPlayed: 2, Wins: 1 },
    ];
    return {players};
  }

  genId(players: Player[]): number {
    return players.length > 0 ? Math.max(...players.map(player => player.id)) + 1 : 1;
  }
}
