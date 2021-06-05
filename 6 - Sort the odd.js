//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(array) {
    let oddArr = array.filter(e => e % 2 !== 0).sort((a,b) => a-b);
    
    let result = [];
    let oddIndex = 0;
    for(let i = 0; i < array.length; i++){
      if (array[i]% 2 === 0){
        result.push(array[i]);
      } else {
        result.push(oddArr[oddIndex]);
        oddIndex++;
      }    
    }
    
    return result;
  }