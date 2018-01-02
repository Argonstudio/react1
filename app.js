var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {

//touch tmp/restart.txt
//npm run build

//git add .
//git commit -m "..."
//git push /pull  1

if( req.url == "/" ){
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    fs.readFile("index.html", function(error, data){

        if(error){

            res.end("404");
            
        }else{
            res.end(data);
        }
        
        
    })
}else{
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    
    fs.readFile(req.url.substr(1), function(error, data){

        if(error){

                res.end("404");
            
        }else{
            res.end(data);
        }
        
        
    })
}

});
server.listen(3000);
