// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text){
    let counter = {};
    text = text.toLowerCase();
    
    for(let i = 0; i< text.length; i++){
      counter[text[i]] ? counter[text[i]] += counter[text[i]] : counter[text[i]] = 1;
    }
    
    let result = 0;
    counter = Object.values(counter);
    for(let i = 0; i < counter.length; i++){
      if (counter[i] > 1) {
        result++;
      }
    }
    
    return result;
  }