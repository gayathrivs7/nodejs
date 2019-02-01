var http=require('http');
var mod=require('./mymodule');
http.createServer(function(req,res){
	res.write("Time Date module" + mod.myDateTime());
	res.end();
}).listen(8080);
