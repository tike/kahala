import { Component, OnInit } from '@angular/core';

import { Field } from '../models/field';

import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private gameSvc: GameService) { }

  ngOnInit() {}

  getOuterRow(playerid: number): Field[] {
    return this.gameSvc.getOuterRow(playerid);
  }

  getInnerRow(playerid: number): Field[] {
    return this.gameSvc.getInnerRow(playerid);
  }

}
