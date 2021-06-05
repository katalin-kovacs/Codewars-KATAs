// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
    //ASCII a --> 97
    //ASCII z --> 122
    const compensateAscii = 96;
    let result = '';
    
    for (let i = 0; i<text.length; i++){
      let code = text.toLowerCase().charCodeAt(i);
      if (code > 96 && code < 123){
        result += (code-compensateAscii) + ' ';
      }
    }
    
    return result.slice(0, result.length-1);
  }