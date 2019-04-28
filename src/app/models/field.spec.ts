import { Field } from './field';

describe('Field', () => {
  let field: Field;
  beforeEach(() => { field = new Field(2, 2); });

  it('should construct as exepected', () => {
    expect(field).toBeTruthy();
  });

  it('should link with it\'s neighbours just once', () => {
    let left = new Field(1, 2);
    let right = new Field(3, 2);

    let firstLinkResult = field.linkNeighbours(left, right);
    expect(firstLinkResult).toBeTruthy();

    let secondLinkResult = field.linkNeighbours(left, right);
    expect(secondLinkResult).toBeFalsy();
  });

  it('should return it\'s id properly', () => {
    expect(field.getID()).toEqual(2);

    let other: Field = new Field(99, 5);
    expect(other.getID()).toEqual(99);
  });

  it('should return the right neighbour', () => {
    let left = new Field(1, 2);
    let right = new Field(3, 2);

    let firstLinkResult = Field.linkNeighbours(left, right);
    expect(field.next(false).getID()).toEqual(1);
    expect(field.next(true).getID()).toEqual(3);
  });

  it('should be playable if it has more than one stone', () => {
    expect(field.canPlay()).toBeTruthy();
  });

  it('should increment and return the number of stones', () => {
    expect(field.putStone()).toEqual(3);
    expect(field.putStone()).toEqual(4);
  });

  it('should remove all stones from the Field', () => {
    expect(field.takeStones()).toEqual(2);
    expect(field.putStone()).toEqual(1);
  });

});
