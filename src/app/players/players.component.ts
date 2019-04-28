import { Component, OnInit } from '@angular/core';

import { Player } from '../models/player';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  private players: Player[];

  constructor(private playerSvc: PlayerService) {}

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers(): void {
    this.playerSvc.getPlayers()
      .subscribe(players => {
        this.players = players
      });
  }

  getHighscores(): Player[] {
    if (this.players === undefined) {
      this.getPlayers();
    }
    return this.players.sort((p1, p2) => {
      return p1.Wins < p2.Wins ? 1 : -1;
    });
  }


  addPlayer(name: string) {
    name = name.trim();
    if (!name) { return; }
    this.playerSvc.addPlayer(new Player(name))
      .subscribe(player => {
        this.players.push(player);
      });
  }

}
