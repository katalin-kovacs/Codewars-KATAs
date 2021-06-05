//https://www.codewars.com/kata/52180ce6f626d55cf8000071

function strToHash(str){
    let result = {};
    if(str.length !==0){  
      let codes = str.split(', ');
      codes.forEach(
        element => result[element.substring(0, element.indexOf('='))] = Number(element.substring(element.indexOf('=')+1, element.length))
      );
      }
    return result;
  }