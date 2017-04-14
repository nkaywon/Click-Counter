var fs = require('fs');
var express = require('express');
var app = express();
var request = require('request');

app.get('/', function (req, response) {
  	request('https://2ip.ru', function (error, res, body) {
  		console.log('vasa');
	  response.send(body);
	});
});

app.listen(process.env.PORT, function(){});