//https://www.codewars.com/kata/52efefcbcdf57161d4000091

function count (string) {  
    let result = {};
    string.split('').forEach(function(c){
      result[c] ? result[c]++ : result[c] = 1;
    });
    return result;
  }