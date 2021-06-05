//https://www.codewars.com/kata/550554fd08b86f84fe000a58

function inArray(array1,array2){
    let result = [];
    for (const element of array2){
      for(let i = 0; i<array1.length;i++)
      if(element.includes(array1[i])){
        result.push(array1[i]);
      }
    }
    result = result.sort();
    result = new Set(result);
    return [...result];
  }