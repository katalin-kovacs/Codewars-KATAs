//https://www.codewars.com/kata/57f548337763f20e02000114

function string_evaluation(string,condition){
    const math = {
      '<': function(x,y) {return x < y},
      '>': function(x,y) {return x > y},
     '==': function(x,y) {return x == y},
     '!=': function(x,y) {return x != y},
     '<=': function(x,y) {return x <= y},
     '>=': function(x,y) {return x >= y}
    }
    
    return condition.map(currCond => {
      const length = currCond.length;
      const value1 = currCond.charAt(0);
      const value2 = currCond.charAt(length-1)
      const operator = length ===3 ? currCond.charAt(1):currCond.substring(1,3);
      const c1 = Number(value1) == value1 ? Number(value1) : string.split('').filter(char=>char ==value1).length;
      const c2 = Number(value2) == value2 ? Number(value2) : string.split('').filter(char=>char ==value2).length;
      return math[operator](c1,c2);
    });
  };