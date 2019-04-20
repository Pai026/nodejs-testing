var http = require('http');
var url= require('url');
var dt= require('./date.js')
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var split= url.parse(req.url,true).query;
  var text=split.hi+" "+split.pass;
  res.end(text);
}).listen(80);