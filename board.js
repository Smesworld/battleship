class Board {
  constructor() {
    this.board = [];
  }

  init(size) {
    for (let columns = 0; columns < size; columns++) {
      const row = [];
      for (let rows = 0; rows < size; rows++) {
        row.push('W');
      }

      this.board.push(row);
    }
  }

  place(loc) {
    this.board[loc[0]][loc[1]] = "X";
  }

  get gameBoard() {
    return this.board;
  }
}

module.exports = Board;
