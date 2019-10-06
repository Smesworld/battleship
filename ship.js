class Ship {
  constructor(name, length, indicator) {
    this.name = name;
    this.length = length;
    this.indicator = indicator;
    this.placed = false;
  }


  get ship() {
    return this;
  }
}

module.exports = Ship;