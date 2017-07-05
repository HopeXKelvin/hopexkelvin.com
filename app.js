var express = require('express');

var app = express();

var port = 80;
app.listen(port, function(){
	console.log('server listening on port: ' + port);
});


app.get('/', function(req, res){
	res.send('Hello, I am kelvin.My website is being building now!See u soom!');
});
