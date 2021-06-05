// https://www.codewars.com/kata/5626b561280a42ecc50000d1

function sumDigPow(a, b) {
    let eureka = [];
    for(let i = a; i <= b; i++)
      {
        let digits = String(i).split('');
        if(i === digits.reduce((acc, currV, currI) => acc + currV ** (currI + 1), 0)) {
          eureka.push(i);
        }
      }
    return eureka;
  }