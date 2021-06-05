// https://www.codewars.com/kata/550498447451fbbd7600041c

function comp(array1, array2){
    let result = false;
    
    if(array1 === null || array2 === null){
      return result;
    } else if(array1.length !== array2.length){
      return result;
    } else if(array1.length === 0 && array2.length === 0){
      result = true;
      return result;
    } else if (Array.isArray(array1) && Array.isArray(array2)){
      let array1Sorted = array1.map(x => Math.abs(x)).sort((a,b) => a-b);
      let array2Sorted = array2.sort((a,b) => a-b);
      for (let i =0; i<array1Sorted.length; i++){
        if(array1Sorted[i]*array1Sorted[i] === array2Sorted[i]){
          result = true;
        } else {
          result = false;
          break;
        }
      }
    }
    return result;
  }