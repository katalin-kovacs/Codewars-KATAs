// https://www.codewars.com/kata/556e0fccc392c527f20000c5

function Xbonacci(signature,n){
    const result = signature.slice(0,n);
    while(result.length < n){
      result[result.length] = result.slice(-signature.length).reduce((p,c)=>p+c,0);
    }
    return result;
  }