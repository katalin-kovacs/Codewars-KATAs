// https://www.codewars.com/kata/56af1a20509ce5b9b000001e

function travel(r, zipcode) {
    //console.log('r: ', r);
    //console.log('Zip: ', zipcode);
    
    let addresses = r.split(',');  
    let addsByZip = [];
    
    for (const adds of addresses){
      let zip = adds.substring(adds.length-8, adds.length);
      if(zip === zipcode){
        addsByZip.push(adds.substring(0, adds.length-9));
      }
    }
    //console.log('Adds: ', addsByZip);
    
    let result =zipcode+':';
    let streetTown = [];
    let houseNum = [];
    for(const adds of addsByZip){
      streetTown.push(adds.substring(adds.indexOf(' ')+1, adds.length));
      houseNum.push(adds.substring(0, adds.indexOf(' ')));                          
    }
    result = result+streetTown.join(',')+'/'+ houseNum.join(',');
    return result;
  }