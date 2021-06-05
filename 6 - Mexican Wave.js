// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

function wave(str){
    const result = [];
    for (let i = 0; i < str.length; i++){
      if(str[i] !== ' ') {
        result.push(Array.from(str, (c, j) => i === j ? c.toUpperCase() : c).join(''));
      }
    }
    return result;
  }