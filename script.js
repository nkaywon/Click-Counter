var express = require('express')
var app = express()
var addressList = new Set();

app.get('/', function (request, response) {
	addressList.add(request.connection.remoteAddress);
	var string = Array.from(addressList).join('\n');
  	response.send('nu karo4e ' + addressList.size + '\n' + string);
})

app.listen(process.env.PORT, function () {
  console.log('listening')
})