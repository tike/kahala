import { Injectable } from '@angular/core';

import { Field } from '../models/field';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private board: Field[][];

  constructor() {
    this.board = [
      this.createFields(),
      this.createFields(),
    ];
  }

  /**
   *  createFields is called from the constructor as a helpermethod to initialize
   *  a half board for a player.
   *  @returns Field[16] with all fields linked into a circular linked list.
   */
  private createFields() : Field[] {
    let halfboard: Field[] = new Array(16);

    // create the Fields
    let i:number;
    for (i=0; i<16; i++) {
      halfboard[i] = new Field(i, 2);
    }

    // link first and last expelicitly
    halfboard[0].linkNeighbours(halfboard[15], halfboard[1]);
    halfboard[15].linkNeighbours(halfboard[14], halfboard[0]);

    // link second to second last
    let j:number;
    for (j=1; j<15; j++) {
      halfboard[j].linkNeighbours(halfboard[j-1], halfboard[j+1]);
    }
    return halfboard;
  }

  startMove(playerid: number, start: number, direction: boolean) {
    let f: Field = this.board[playerid][start];
    do {
      f = this.doStep(f, f.takeStones(), direction);
      if (f.canPlay() && f.getID() < 8) {
        let opID = this.op(playerid);
        let opponent: Field = this.board[opID][f.getID()];
        if (opponent.getStones() > 0) {
          console.debug(`${playerid} robbing ${opID} ${opponent.getStones()} @ ${f.getID()}`);
          f.putStones(opponent.takeStones());
        }
      }
    } while(f.canPlay());
  }

  private op(playerid: number) :number {
    if (playerid == 1) {
      return 0;
    }
    if (playerid == 0) {
      return 1;
    }
    throw new RangeError(`${playerid} out of range (0,1)`);
  }

  doStep(f: Field, stones: number, direction: boolean):Field {
      do {
        f = f.next(direction);
        f.putStone();
        --stones;
      } while(stones > 0)
      return f;
  }

  getInnerRow(playerid: number) :Field[] {
    return this.board[playerid].slice(0, 8);
  }
  getOuterRow(playerid: number) :Field[] {
    return this.board[playerid].slice(8, 16).reverse();
  }

  getBoard() :Field[][] {
    return this.board;
  }

  getScore(playerid: number) :number {
    return this.board[playerid].reduce((a, b) => {return a + b.getStones()}, 0);
  }
}
