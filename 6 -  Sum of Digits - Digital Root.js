//https://www.codewars.com/kata/541c8630095125aba6000c00
function digital_root(n) {
    let result = n.toString().split('').map(x => Number(x)).reduce((a,b)=>a+b);
    return result<=9 ? result : digital_root(result);
  }