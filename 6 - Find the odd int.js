//https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
    let obj = {};
    let o = 0;
    A.map(x => x in obj ? obj[x]+=1 : obj[x] = 1);
    //console.log(obj);
    Object.keys(obj).map(x => obj[x]%2!==0 ? o=x : 0)
    return Number(o);
  }