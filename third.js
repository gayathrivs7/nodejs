var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();

}).listen(8080);
console.log("Server is running on http://127.0.0.8000");