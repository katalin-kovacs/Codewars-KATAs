// https://www.codewars.com/kata/55c45be3b2079eccff00010f

function order(words){
    return words.split(' ').map(word => word.charAt(word.search(/[1-9]/))+word).sort().map(word => word.substring(1)).join(' ');  
  }