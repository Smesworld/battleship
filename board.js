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

  value(row, col) {
    return this.board[row][col];
  }

  place(row, col, icon) {
    this.board[row][col] = icon;
  }


  get gameBoard() {
    return this.board;
  }
}

module.exports = Board;
