var http=require('http');
var dt=require('./date.js');
http.createServer(function(req,res){
	res.write('hello'+dt.date());
	res.end();
}).listen(80);
