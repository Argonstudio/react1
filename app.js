var http = require("http");
var fs = require("fs");

//Подключаем модуль с данными по операционной системе
var os = require("os");


var server = http.createServer(function(req, res) {

//touch tmp/restart.txt
//npm run build

if( req.url == "/" ){
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    fs.readFile("index.html", function(error, data){
        
        //var dataPage = data;
        
        if(error){
            
            fs.readFile("404.html", function(error, data){
                res.end(data);
            })
            
        }else{
            res.end(data);
        }
        
        
    })
}else{
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    //res.end(req.url.substr(1));
    
    fs.readFile(req.url.substr(1), function(error, data){
        
        //var dataPage = data;
        
        if(error){
            
            fs.readFile("404.html", function(error, data){
                res.end(data);
            })
            
        }else{
            res.end(data);
        }
        
        
    })
}

//res.end(req.url);
});
server.listen(3000);
