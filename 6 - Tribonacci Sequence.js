// https://www.codewars.com/kata/556deca17c58da83c00002db

function tribonacci(signature,n){
    if(n===0){
      return [];
    } else if(n<signature.length){
      return signature.slice(0, n);
    } else{
      let index = 0;
      let nextNum = 0;
      while(signature.length < n){
        nextNum = signature[index]+signature[index+1]+signature[index+2];
        signature.push(nextNum);
        index++;
      }
      return signature;
    }
  }