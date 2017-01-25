module.exports = function(convert)  
{  
	if(!convert){
		throw Error("Not a number")
	}
   if(typeof convert != "number")
   {
   	 throw Error("Not a number");
   }
var read=require('fs');              
var lineReader = require('readline').createInterface({
		input: read.createReadStream('./inputdata/Indicators.csv'),
	});
	var jsonArray=[];           
	var heading= [];
	var row=0;
	var count=0;
	lineReader.on('line', function (line)  {
		if(row === 0){
			heading = line.split(',');
			row++;
		}
		else {
			var jsonObj = {};
			var currentLineData = line.split(',');
	       //console.log(currentLineData);
	       for (var j=0; j<heading.length; j++) {
	       	
	       	if(heading[j] == "Year"){
	       		if(currentLineData[j-3] == "IND" && (currentLineData[j-1] == "SP.URB.TOTL.IN.ZS" || currentLineData[j-1] == "SP.RUR.TOTL.ZS")) {
	       			jsonObj[heading[j]] = currentLineData[j]; 
	       			count=1;
	       		}
	       		else
	       			count=0;
	       	} 
	       	if(heading[j] == "Value"){
	       		if(currentLineData[j-4] == "IND" && (currentLineData[j-2] == "SP.URB.TOTL.IN.ZS" || currentLineData[j-2] == "SP.RUR.TOTL.ZS")) {
	       			jsonObj[heading[j]] = currentLineData[j]; 
	       			count=1;
	       		}
	       		else
	       			count=0;
	       	} 
	       	
	       }
	       if(count == 1)
	       	jsonArray.push(jsonObj);

	       
	   }
	});
	lineReader.on('close',function() {
		var jso=JSON.stringify(jsonArray);
		read.writeFile('linechart.json',jso,function(err) {});
	});
return "JSON written successfully";
};