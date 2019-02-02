var http = require('http');
var body = "this is a pliant text";
var content_length =  body.length;

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/plain',
    'Content-Length' :content_length

    });
    res.end(body);
}).listen(8080);
console.log("Server Running");