var http=require('http');
var upper=require('upper-case');
http.createServer(function(req,res){
		res.write(upper("Hello World"));
		res.end();
}).listen(80);