// https://www.codewars.com/kata/530e15517bc88ac656000716

function rot13(message){
    //a: 97 z:122
    //return message.split('').map(c => String.fromCharCode(c.charCodeAt(0)+13)).join('');
    
    const inputTable = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const outputTable = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    let index = x => inputTable.indexOf(x);
    let shift = x => index(x)> -1 ? outputTable[index(x)] : x;
    return message.split('').map(shift).join('');
  }