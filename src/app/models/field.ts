/**
 *  Field class models a field for the kahala board game
 */
export class Field {
  private id: number;
  private stones: number;
  private left: Field;
  private right: Field;

  constructor(id: number, stones: number) {
    this.id = id;
    this.stones = stones;
    this.left = null;
    this.right = null;
  }

  /**
   *  linkNeighbours is used to create a doubly linked list for easier circular
   *  iteration over an array. Neighbours can be set only once, repeated calls
   *  have no effect.
   *  @param left The field on the "left".
   *  @param right The field on the "right".
   *  @returns true if fields where set (this is the first call), false otherwise.
   */
  linkNeighbours(left: Field, right: Field) :boolean {
    if (this.left !== null || this.right !== null) {
      return false;
    }

    this.left = left;
    this.right = right;
    return true;
  }

  /**
   * getID is the getter method for the field's
   * @returns field.id initialized in the constructor call
   */
  getID() :number{
    return this.id;
  }

  /**
   *  next is the doubly linked list iterator method.
   *  @returns this.left (direction == false) or this.right(direction == true).
   */
  next(direction: boolean) :Field {
    return direction ? this.right : this.left;
  }

  getStones() :number {
    return this.stones;
  }

  /**
   *  canPlay is used to check whether a move can be started at the respective field.
   *  @returns true if move can be started at this field, false otherwise.
   */
  canPlay() :boolean {
    return this.stones > 1;
  }

  /**
   *  putStone puts a stone in the field.
   *  @returns the current number of stones in the field (after increment).
   */
  putStone() :number {
    this.stones++
    return this.stones;
  }

  putStones(stones: number) :number {
    this.stones += stones;
    return this.stones;
  }

  /**
   * takeStones removes all the stones from the field.
   * @returns the number of stones taken.
   */
   takeStones() :number {
     let stones = this.stones;
     this.stones = 0;
     return stones;
   }

}
