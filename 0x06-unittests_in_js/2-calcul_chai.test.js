// Define test cases for calculateNumber in
// 2-calcul.js using Chai assertion library.
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('1-calcul: type = SUM', function () {
  it('calculateNumber("SUM", 1, 1) returns 2', function () {
    expect(calculateNumber('SUM', 1, 1)).to.equal(2);
  });
  it('calculateNumber("SUM", 1, 1.2) returns 2', function () {
    expect(calculateNumber('SUM', 1, 1.2)).to.equal(2);
  });
  it('calculateNumber("SUM", 1, 1.5) returns 3', function () {
    expect(calculateNumber('SUM', 1, 1.5)).to.equal(3);
  });
  it('calculateNumber("SUM", 1.2, 1) returns 2', function () {
    expect(calculateNumber('SUM', 1.2, 1)).to.equal(2);
  });
  it('calculateNumber("SUM", 1.5, 1) returns 3', function () {
    expect(calculateNumber('SUM', 1.5, 1)).to.equal(3);
  });
  it('calculateNumber("SUM", 1.5, 1.5) returns 4', function () {
    expect(calculateNumber('SUM', 1.5, 1.5)).to.equal(4);
  });
});

describe('1-calcul: type = SUBTRACT"', function () {
  it('calculateNumber("SUBTRACT", 1, 1) returns 0', function () {
    expect(calculateNumber('SUBTRACT', 1, 1)).to.equal(0);
  });
  it('calculateNumber("SUBTRACT", 1, 1.2) returns 0', function () {
    expect(calculateNumber('SUBTRACT', 2, 1.2)).to.equal(1);
  });
  it('calculateNumber("SUBTRACT", 1, 1.5) returns -1', function () {
    expect(calculateNumber('SUBTRACT', 1, 1.5)).to.equal(-1);
  });
  it('calculateNumber("SUBTRACT", 1.2, 2) returns 0', function () {
    expect(calculateNumber('SUBTRACT', 1.2, 2)).to.equal(-1);
  });
  it('calculateNumber("SUBTRACT", 1.5, 1) returns 1', function () {
    expect(calculateNumber('SUBTRACT', 1.5, 1)).to.equal(1);
  });
  it('calculateNumber("SUBTRACT", 2.5, 1.5) returns 1', function () {
    expect(calculateNumber('SUBTRACT', 2.5, 1.5)).to.equal(1);
  });
});

describe('1-calcul: type = DIVIDE', function () {
  it('calculateNumber("DIVIDE", 1, 1) returns 1', function () {
    expect(calculateNumber('DIVIDE', 1, 1)).to.equal(1);
  });
  it('calculateNumber("DIVIDE", 1, 1.2) returns 1', function () {
    expect(calculateNumber('DIVIDE', 1, 1.2)).to.equal(1);
  });
  it('calculateNumber("DIVIDE", 1, 1.5) returns 0', function () {
    expect(calculateNumber('DIVIDE', 1, 1.5)).to.equal(0.5);
  });
  it('calculateNumber("DIVIDE", 1.2, 1) returns 1', function () {
    expect(calculateNumber('DIVIDE', 1.2, 1)).to.equal(1);
  });
  it('calculateNumber("DIVIDE", 1.5, 1) returns 2', function () {
    expect(calculateNumber('DIVIDE', 1.5, 1)).to.equal(2);
  });
  it('calculateNumber("DIVIDE", 1.5, 1.5) returns 1', function () {
    expect(calculateNumber('DIVIDE', 1.5, 1.5)).to.equal(1);
  });
  it('calculateNumber("DIVIDE", 99, 0) returns "Error"', function () {
    expect(calculateNumber('DIVIDE', 99, 0)).to.equal('Error');
  });
  it('calculateNumber("DIVIDE", 99, 0.2) returns "Error"', function () {
    expect(calculateNumber('DIVIDE', 99, 0.2)).to.equal('Error');
  });
  it('calculateNumber("DIVIDE", 2, 5) return 0.4', function () {
    expect(calculateNumber('DIVIDE', 2, 5)).to.equal(0.4);
  });
});
