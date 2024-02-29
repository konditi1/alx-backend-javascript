// Define test cases for calculateNumber
// in 0-calcul.js
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('0-calcul', function () {
  it('calculateNumber(1, 1) returns 2', function () {
    assert.equal(calculateNumber(1, 1), 2);
  });
  it('calculateNumber(1, 1.2) returns 2', function () {
    assert.equal(calculateNumber(1, 1.2), 2);
  });
  it('calculateNumber(1, 1.5) returns 3', function () {
    assert.equal(calculateNumber(1, 1.5), 3);
  });
  it('calculateNumber(1.2, 1) returns 2', function () {
    assert.equal(calculateNumber(1.2, 1), 2);
  });
  it('calculateNumber(1.5, 1) returns 3', function () {
    assert.equal(calculateNumber(1.5, 1), 3);
  });
  it('calculateNumber(1.5, 1.5) returns 4', function () {
    assert.equal(calculateNumber(1.5, 1.5), 4);
  });
});
