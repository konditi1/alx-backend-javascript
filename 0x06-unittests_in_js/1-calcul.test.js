// Define test cases for calculateNUmber in
// 1-calcul.js
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('1-calcul: type = SUM', function () {
  it('calculateNumber("SUM", 1, 1) returns 2', function () {
    assert.equal(calculateNumber('SUM', 1, 1), 2);
  });
  it('calculateNumber("SUM", 1, 1.2) returns 2', function () {
    assert.equal(calculateNumber('SUM', 1, 1.2), 2);
  });
  it('calculateNumber("SUM", 1, 1.5) returns 3', function () {
    assert.equal(calculateNumber('SUM', 1, 1.5), 3);
  });
  it('calculateNumber("SUM", 1.2, 1) returns 2', function () {
    assert.equal(calculateNumber('SUM', 1.2, 1), 2);
  });
  it('calculateNumber("SUM", 1.5, 1) returns 3', function () {
    assert.equal(calculateNumber('SUM', 1.5, 1), 3);
  });
  it('calculateNumber("SUM", 1.5, 1.5) returns 4', function () {
    assert.equal(calculateNumber('SUM', 1.5, 1.5), 4);
  });
});

describe('1-calcul: type = SUBTRACT"', function () {
  it('calculateNumber("SUBTRACT", 1, 1) returns 0', function () {
    assert.equal(calculateNumber('SUBTRACT', 1, 1), 0);
  });
  it('calculateNumber("SUBTRACT", 1, 1.2) returns 0', function () {
    assert.equal(calculateNumber('SUBTRACT', 2, 1.2), 1);
  });
  it('calculateNumber("SUBTRACT", 1, 1.5) returns -1', function () {
    assert.equal(calculateNumber('SUBTRACT', 1, 1.5), -1);
  });
  it('calculateNumber("SUBTRACT", 1.2, 2) returns 0', function () {
    assert.equal(calculateNumber('SUBTRACT', 1.2, 2), -1);
  });
  it('calculateNumber("SUBTRACT", 1.5, 1) returns 1', function () {
    assert.equal(calculateNumber('SUBTRACT', 1.5, 1), 1);
  });
  it('calculateNumber("SUBTRACT", 2.5, 1.5) returns 1', function () {
    assert.equal(calculateNumber('SUBTRACT', 2.5, 1.5), 1);
  });
});

describe('1-calcul: type = DIVIDE', function () {
  it('calculateNumber("DIVIDE", 1, 1) returns 1', function () {
    assert.equal(calculateNumber('DIVIDE', 1, 1), 1);
  });
  it('calculateNumber("DIVIDE", 1, 1.2) returns 1', function () {
    assert.equal(calculateNumber('DIVIDE', 1, 1.2), 1);
  });
  it('calculateNumber("DIVIDE", 1, 1.5) returns 0', function () {
    assert.equal(calculateNumber('DIVIDE', 1, 1.5), 0.5);
  });
  it('calculateNumber("DIVIDE", 1.2, 1) returns 1', function () {
    assert.equal(calculateNumber('DIVIDE', 1.2, 1), 1);
  });
  it('calculateNumber("DIVIDE", 1.5, 1) returns 2', function () {
    assert.equal(calculateNumber('DIVIDE', 1.5, 1), 2);
  });
  it('calculateNumber("DIVIDE", 1.5, 1.5) returns 1', function () {
    assert.equal(calculateNumber('DIVIDE', 1.5, 1.5), 1);
  });
  it('calculateNumber("DIVIDE", 99, 0) returns "Error"', function () {
    assert.equal(calculateNumber('DIVIDE', 99, 0), 'Error');
  });
  it('calculateNumber("DIVIDE", 99, 0.2) returns "Error"', function () {
    assert.equal(calculateNumber('DIVIDE', 99, 0.2), 'Error');
  });
  it('calculateNumber("DIVIDE", 2, 5) return 0.4', function () {
    assert.equal(calculateNumber('DIVIDE', 2, 5), 0.4);
  });
});
