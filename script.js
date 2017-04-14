var path = require('path');
var childProcess = require('child_process');
var phantomjs = require('phantomjs');
var binPath = phantomjs.path;
var fs = require('fs');
var express = require('express');
var app = express();

var childArgs = [
  path.join(__dirname, 'phantom.js')
];

app.get('/', function (request, response) {
  	childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
		response.sendFile(__dirname + '/screenshot.png');
	});
})

app.listen(3000, function(){});