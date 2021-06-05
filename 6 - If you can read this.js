// https://www.codewars.com/kata/586538146b56991861000293

function to_nato(words) {
    let result = '';
    
    for(const char of words){
      let c = char.toLowerCase()
      if (Object.keys(NATO).includes(c)){
        result += NATO[c] + ' ';
      } else if(c === ',' || c === '.' || c === '!' || c === '?'){
        result += c + ' ';
      } 
    }
    
    return result.slice(0, result.length-1);
  }