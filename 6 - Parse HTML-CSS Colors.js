// https://www.codewars.com/kata/58b57ae2724e3c63df000006

function parseHTMLColor(color) {
    //transform color to lowercase
    let tempColor = color.toLowerCase();
    
    //named color to 6digit hex
    if(Object.keys(PRESET_COLORS).includes(tempColor)){
      tempColor = PRESET_COLORS[tempColor];
    }
    
    //remove #
    tempColor = tempColor.substring(1).split('');
    
    //3digit hex to 5digit hex
    if(tempColor.length === 3){
      tempColor = tempColor.reduce((c,i)=>c.concat(i,i),[]);
    }
    
    //from array format to string
    tempColor = tempColor.join('');
    
    //calculate rgb
    let result = {
      r: parseInt(tempColor.slice(0,2),16),
      g: parseInt(tempColor.slice(2,4),16),
      b: parseInt(tempColor.slice(4,6),16)
    }
    
    return result;  
  }