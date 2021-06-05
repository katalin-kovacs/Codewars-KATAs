// https://www.codewars.com/kata/526571aae218b8ee490006f4

const countBits = function(n) {
    return Number(n).toString(2).split('').reduce((x,y) => Number(x)+Number(y), 0);
  };