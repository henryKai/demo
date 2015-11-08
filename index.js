var Parse = require('parse').Parse;

Parse.initialize("OoUYVD2pj7X9rCQmogLnp64Zykz02ZzdyJ4fXCH3", "rQ4ez5BZUQp1pUIilkAewT33UarQFNjPTbEXiUwd");

function hello(){

	var fs = require('fs');
	readline = require('readline');
	var GPA = Parse.Object.extend("GPA");
	/*fs.readFile('./20150702t.txt','utf-8',function(err,data) {
	if(err){
		console.err(err);
	}else{
		console.log(data);
	}
	});*/

	var rd = readline.createInterface({
		input: fs.createReadStream('./20150702t.txt'),
		output: process.stdout,
		terminal: false
	});

	var gg;
	rd.on('line',function(line){
		var string = line.split(",",5);
		//console.log(string[0]);
		gg = string;
		/*var gpa = new GPA();
		gpa.save({time: string[0], temp1: string[1], temp2: string[2], temp3: string[3], temp4: string[4]}, {
			success: function(object) {
				console.log(string[0]);
			},
			error: function(model, error) {
			}
		});*/
	});
	
	rd.on('close',function(close){
		
		var gpa = new GPA();
		gpa.save({time: gg[0], temp1: gg[1], temp2: gg[2], temp3: gg[3], temp4: gg[4]}, {
			success: function(object) {
				console.log(gg[0]);
			},
			error: function(model, error) {
			}
		});
	});
	
}
setInterval(hello , 10000);




