import { Component, Input, OnInit } from '@angular/core';

import { GameService } from '../services/game.service';

@Component({
  selector: 'app-playerboard',
  templateUrl: './playerboard.component.html',
  styleUrls: ['./playerboard.component.scss']
})
export class PlayerboardComponent implements OnInit {
  @Input() player: number;

  constructor(private gameSvc: GameService) { }

  ngOnInit() {
  }

  getScore(): number {
    return this.gameSvc.getScore(this.player);
  }

}
