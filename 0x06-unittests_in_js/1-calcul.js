/**
 * Compute the sum of two rounded up
 * numbers.
 *
 * @param {string} - The operation code.
 * @param {number} - The first number.
 * @param {number} - The second number.
 *
 * @return The result after the operation.
 *
 */
const calculateNumber = (type, a, b) => {
    switch (type) {
      case 'SUM':
        return (Math.round(a) + Math.round(b));
      case 'SUBTRACT':
        return (Math.round(a) - Math.round(b));
      default:
        const bRounded = Math.round(b);
        return (bRounded === 0 ? 'Error' : (Math.round(a) / bRounded));
    }
  };
  
  module.exports = calculateNumber;
