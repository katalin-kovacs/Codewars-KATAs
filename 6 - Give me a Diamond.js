//https://www.codewars.com/kata/5503013e34137eeeaa001648

function diamond(n){
    if(n < 0 || !(n%2)){
      return null;
    }
    
    const middleIdx = Math.floor(n/2);
    //Array.apply: The apply() method calls a function with a given this value, 
    //and arguments provided as an array (or an array-like object).
    return Array.apply(null, {length: n})
      .map((element, index) => {
        const indent = Math.abs(index-middleIdx);
        const numOfStars = n - indent*2;
        return Array(indent + 1).join(' ') + Array(numOfStars + 1).join('*');
    }).join('\n')+'\n';  
  }