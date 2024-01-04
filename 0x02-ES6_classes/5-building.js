export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.evacuationWarningMessage === undefined && this.constructor !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw TypeError('sqft must be a number');
    }
    this._sqft = sqft;
  }
}
