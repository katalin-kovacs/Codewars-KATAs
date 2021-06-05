// https://www.codewars.com/kata/523a86aa4230ebb5420001e1
function anagrams(word, words) {
    return words.filter(element => element.split('').sort().join('') === word.split('').sort().join(''));
  }