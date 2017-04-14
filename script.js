var express = require('express')
var app = express()
var addressList = [];

app.get('/', function (request, response) {
	addressList.push(request.connection.remoteAddress);
  	response.send('nu karo4e ' + addressList.length);
})

app.listen(process.env.PORT, function () {
  console.log('listening')
})