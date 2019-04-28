import { Component, Input, OnInit } from '@angular/core';

import { Field } from '../models/field';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  @Input() player: number;
  @Input() field: Field;

  constructor() { }

  ngOnInit() {
  }

}
