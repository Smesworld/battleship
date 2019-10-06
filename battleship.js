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

  get allPlaced() {
    for (const ship in this.ships) {
      if (this.ships[ship].placed !== true) {
        return false;
      }
    }

    return true;
  }

  placeShip(ship, rowStart, colStart, rowEnd, colEnd) {
    if (colStart === colEnd) {
      if (Math.abs(rowStart - rowEnd) === this.ships[ship].length - 1) {
        
        for (let i = 0; i < this.ships[ship].length; i++) {
          // console.log(colStart, rowStart + i)
          // console.log(this.player.value(colStart, rowStart + i));
          if (this.player.value(rowStart + i, colStart) !== "W") {
            return false;
          }
        }

        for (let i = 0; i < this.ships[ship].length; i++) {
          // console.log(colStart, rowStart + i)
          // console.log(this.player.value(colStart, rowStart + i));
          this.player.place(rowStart + i, colStart, ship);
        }
        this.ships[ship].placed = true;

        return true;
      }
    } else if (rowStart === rowEnd) {
      if (Math.abs(colStart - colEnd) === this.ships[ship].length - 1) {
        
        for (let i = 0; i < this.ships[ship].length; i++) {
          // console.log(colStart, rowStart + i)
          // console.log(this.player.value(colStart, rowStart + i));
          if (this.player.value(rowStart, colStart + i) !== "W") {
            return false;
          }
        }

        for (let i = 0; i < this.ships[ship].length; i++) {
          // console.log(colStart, rowStart + i)
          // console.log(this.player.value(colStart, rowStart + i));
          this.player.place(rowStart, colStart + i, ship);
        }

        this.ships[ship].placed = true;

        return true;
      }  
    } else {
  
    }
  }
}

module.exports = Battleship;