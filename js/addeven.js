module.exports=function(even)
{
	var number=even;
var words = [
    'ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE'
];

if(number<17732289){
var w="";
var res = number.split("");

var sum=0;
for(i=1;i<res.length;i+=2){
 
    sum = sum + parseInt(res[i]);
  }
  
  var s=sum.toString();
  var res1 = s.split("");
 
 
for(var j in res1)
{
var r = parseInt(res1[j]);
 w=w +" "+ words[r];


}

 
  if(res[0] === '-'){
  	var result="MINUS"+" "+w;
 return result;
  }
    else
    var result=w;
return result;
  }
   

 else
 	var result="NUMBER EXCEEDED"
return result;


}