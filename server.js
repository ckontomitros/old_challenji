var http = require('http'),
    fs=require('fs'),
    path=require('path'),
    host='127.0.0.1',
    port='9000';
var mongo = require('mongodb');
const express = require('express');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
var router = express.Router();
var mimes={
    ".html" : "text/html",
    ".css"  : "text/css",
    ".js"   : "text/javascript",
    ".gif"  : "text/gif",
    ".jpg"  : "image/jpg"}
/*
var server =http.createServer(function(req,res){
    var filepath=(req.url==='/')?('./fronpage.html'):('.'+req.url);
    var contentType = mimes[path.extname(filepath)];
    fs.exists(filepath,function(file_exists){
	if(file_exists){
	    fs.readFile(filepath,function(error,content){
		if(error){
		    res.writeHead(500);
		    res.end
		}
		else{
		    console.log("ante");
		    res.writeHead(200,{'Content-Type':contentType});
		    res.end(content,'utf-8');
		}
	    })
	}
	else{
	    res.writeHead(404);
	    res.end("sorry file not found")
	}
    })
    
}).listen(port,host,function(){
console.log('Server Running on localhost');
})
*/
app.listen(3000, function() {
    console.log('listening on 3000')
})
app.get('/', (req, res) => {
    var filepath=(req.url==='/')?('./fronpage.html'):('.'+req.url);
    var contentType = mimes[path.extname(filepath)];
    fs.exists(filepath,function(file_exists){
	if(file_exists){
	    fs.readFile(filepath,function(error,content){
		if(error){
		    res.writeHead(500);
		    res.end
		}
		else{
		    console.log("ante");
		    res.writeHead(200,{'Content-Type':contentType});
		    res.end(content,'utf-8');
		}
	    })
	}
	else{
	    res.writeHead(404);
	    res.end("sorry file not found")
	}
    })
})
app.post('/login', function(req, res){
    var obj = {};
    console.log('body: ' + req.body.name);
    res.send(req.body);
});
