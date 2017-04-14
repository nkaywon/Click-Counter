var page = require('webpage').create(),
	fs = require('fs');

page.loadImages = false;

page.open('http://2ip.ru', function(status){
	if (status !== 'success') {
		console.log('FAIL to load the address');
		phantom.exit();
	} else {
		console.log('/ Navigated /');
		setTimeout(function(){
			page.render('screenshot.png');
			phantom.exit();
		}, 3000);
	}
});

