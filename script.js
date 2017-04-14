var path = require('path');
var childProcess = require('child_process');
var phantomjs = require('phantomjs');
var binPath = phantomjs.path;

var childArgs = [
  path.join(__dirname, 'phantom.js')
];

go();

function go(){
	childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
		console.log(stdout);
	});
	var randomValue = (Math.floor(Math.random() * (220 - 90 + 1)) + 1) * 1000;
	setTimeout(go, randomValue);
}
