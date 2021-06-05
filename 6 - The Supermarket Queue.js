// https://www.codewars.com/kata/57b06f90e298a7b53d000a86

function queueTime(customers, n) {
    let maxTime = Math.max(...customers);
    if(customers.length === 0){
      return 0;    
    } else if(n>customers.length){
      return maxTime;
    } else if(n===1){
      return customers.reduce((a,b) => a+b);
    } else{
      let tills = new Array(n).fill(0);
      for(let chekoutTime of customers){
        let nextTill = tills.indexOf(Math.min(...tills));
        tills[nextTill] += chekoutTime;
      }
      return Math.max(...tills);
    }
  }