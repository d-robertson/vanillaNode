var http = require('http');
var url = require('url');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8'});
  var purl = url.parse(req.url, true);
  if(purl.pathname == '/test'){
    res.end('Test');
  } else { 
    res.end('Hello World\n');
  }
}).listen(3000);

console.log('server running at 3000');