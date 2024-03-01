const Utils = {
    'calculateNumber': (type, a, b) => {
      switch (type) {
        case 'SUM':
          return (Math.round(a) + Math.round(b));
        case 'SUBTRACT':
          return (Math.round(a) - Math.round(b));
        default:
          const bRounded = Math.round(b);
          return (bRounded === 0 ? 'Error' : (Math.round(a) / bRounded));
      }
    }
  };
  
  module.exports = Utils;
