module.exports = function(celsius)  
{  
var cTemp = celsius;  
var cToFahr = cTemp * 9 / 5 + 32;  
var result=Math.round(cToFahr);
return result;
};