//https://www.codewars.com/kata/5318f00b31b30925fd0001f8

const numberToPrice = function(number) {
    if(isNaN(number)|| number.length <=1){
      return 'NaN';
    } else{    
      let num = String(number).split('.');
      let fraction ='00';
      if(num.length===2){
        fraction = num[1].slice(0,2);
        if(fraction.length === 1){
          fraction+='0';
        }
      }
      return `${new Intl.NumberFormat('en-EN',{maximumFractionDigits:0}).format(num[0])}.${fraction}`;
    }
  }