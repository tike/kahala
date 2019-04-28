import { Component, Input, OnInit } from '@angular/core';

import { Field } from '../models/field';

import { GameService } from '../services/game.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  @Input() player: number;
  @Input() field: Field;

  showLeft: boolean;
  showRight: boolean;

  constructor(private gameSvc: GameService) {}

  ngOnInit() {}

  toggleArrows() {
    this.showLeft = !this.showLeft;
    this.showRight = !this.showRight;
  }

  canStart() {
    if (this.field.canPlay()) {
      this.toggleArrows();
    }
  }

  startMove(direction: boolean) {
    this.gameSvc.startMove(this.player, this.field.getID(), direction);
    this.toggleArrows();
  }
}
