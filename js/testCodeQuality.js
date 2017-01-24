let log4js = require('log4js');
let logger = log4js.getLogger();
let number = prompt('enter numbers');  
let string = number.toString();  
let output = [string[0]];  
for(let x=1; x < string.length;  x++)  
  {  
    if((string[x-1] % 2 == 0) && (string[x] % 2 == 0))
     {  
      output.push('-', string[x]);  
     }  
    else  
     {  
      output.push(string[x]);  
     }  
  }  
logger.debug(output.join(' '));  