const Board = require('./board');
const Ship = require('./ship');

class Battleship {

  constructor() {
    this.player = new Board();
    this.player.init(10);

    this.ships = {
      c: new Ship("carrier", 5, "c"),
      b: new Ship("battleship", 4, "b"),
      k: new Ship("cruiser", 3, "k"),
      s: new Ship("submarine", 3, "s"),
      d: new Ship("destroyer", 2, "d")
    }
  }

  get board() {
    return this.player.board;
  }

  // get ships() {
  //   return this.ships;
  // }
}

module.exports = Battleship;