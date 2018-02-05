var mkdirp = require('mkdirp');
var exec = require('child_process').exec; 

var command = 'yo form:empty';
exec(command, function(err,stdout,stderr){
	console.log(stdout);
});