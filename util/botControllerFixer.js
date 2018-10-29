#!/usr/bin/env node
var fs = require('fs');
var program = require('commander');
var _ = require('underscore');
var path = require('path');
 
program
  .version('0.0.12')
  .option('-d, --dir [dir]', 'Bot Controller Directory')
  .parse(process.argv);
 
console.log("Reading Dir: " + program.dir);
if(!_.isString(program.dir)){
	throw new Error("Dir is not a string");
}
fs.readdir(program.dir, function(err, items) {
    
    for (var i=0; i<items.length; i++) {
        console.log("Reading File: " + items[i]);
		var filePath = path.join(program.dir, items[i]);
        var jsonData = fs.readFileSync(filePath);
		var botData = null;
        try{


	        var botData = JSON.parse(jsonData);

        }catch(e){
    		
    		console.log(items[i] + " is not a botController file");
    	}
    	if(botData != null){
	        var fixed = false;
	        botData.nNetData.neurons.forEach(function(neuron){
				neuron.dependencies.forEach(function(neuronDep){
					if(neuronDep.weight){
						fixed = true;
						neuronDep._weight = (Math.round(neuronDep.weight  * 100 ) /100).toString();
					}
				});
	        });
	        if(fixed){
	        	fs.writeFileSync(filePath + '-fixed.json', JSON.stringify(botData));
	        	console.log("Fixed: " + botData.id);
	        }else{
	        	console.log("Was good: " + botData.id);
	        }
	    }
	        


    }
});
