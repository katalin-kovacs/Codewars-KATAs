//https://www.codewars.com/kata/5a7f58c00025e917f30000f1

function longest(str) {
    let longest = '',
        length = 0,
        start = 0,
        prev = str[0];
    
    for(let i = 1; i <= str.length; ++i){
      if(i === str.length || str[i] < prev){
        if(length < i-start){
          longest = str.substring(start, i);
          length = i-start;
        }
        start = i;
      }
      prev = str[i];
    };
    
    return longest;
  }