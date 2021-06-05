//https://www.codewars.com/kata/56dbe7f113c2f63570000b86

function rot(strng) {
    return strng.split('\n').map(x => x.split('').reverse().join('')).reverse().join('\n');
}
function selfieAndRot(strng) {
    return strng.split('\n').map(x=> x + '.'.repeat(x.length)).join('\n')+'\n'+
      strng.split('\n').map(x=> x + '.'.repeat(x.length)).reverse().map(x=>x.split('').reverse().join('')).join('\n');
}
function oper(fct, s) {
    return fct(s);
}