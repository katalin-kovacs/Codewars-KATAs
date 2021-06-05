// https://www.codewars.com/kata/54dc6f5a224c26032800005c

function stockList(listOfArt, listOfCat){
    let result = {};
    for(let i = 0; i<listOfCat.length; i++){
      result[listOfCat[i]] = 0;
    }
        
    if(listOfArt.length === 0 || listOfCat === 0){
      return '';
    } else {
      let catalog = listOfArt.reduce(function(acc, curr, i){
        i = curr.substring(0, curr.indexOf(' '));
        curr = curr.substring(curr.indexOf(' ')+1);
        acc[i] = curr;
        return acc;
      }, {});
      console.log('Categories: ', listOfCat);
      
      let catalogKeys = Object.keys(catalog).map(x => x[0]);
      let catalogValues = Object.values(catalog);
      
      for(let i = 0; i < listOfCat.length; i++){
        for(let j = 0; j<catalogKeys.length; j++){
          if(catalogKeys[j] === listOfCat[i]){
            result[listOfCat[i]] = Number(result[listOfCat[i]]) + Number(catalogValues[j]);
          }
        }      
      } 
      
      let renderResult = res =>{
        return Object.keys(res).map(k => `(${k} : ${res[k]})`).join(' - ');
      }
      
      return renderResult(result);    
    }
  }