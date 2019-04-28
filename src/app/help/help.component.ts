import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  rules :string[] = [
    'Players take turns making moves.',
    'To move a player chooses one of their fields that has 2 or more stones and a direction to move in.',
    'The player then takes the stones from the choosen field and drops one onto every field while moving in the chosen direction.',
    'When the player drops the last stone onto a field that is empty the move ends.',
    'Otherwise the player picks up all stones from the last field and continues moving.',
    'At theis point, the player can also steal the stones from the opponent\'s adjacent field, if the position is located in the inner row of the board.',
    'The game ends when a player manages to empty their opponent\'s inner row entirely or any player can no longer move.'
  ];

  constructor() { }

  ngOnInit() {
  }

}
