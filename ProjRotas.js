const http = require('http');
var url = require("url");
var callback = function (request, response){
     
    response.writeHead(400, {"Content-type": "text/plain; charset=utf-8"});
    var parts = url.parse(request.url); 

    if (parts.path == "/"){
        response.end("Site Principal");
    } else if (parts.path == "/rota1"){
        response.end("ROTA 1");
    } else if (parts.path == "/rota2"){
        response.end("ROTA 2");
    } else if (parts.path == "/rota3"){
        response.end("ROTA 3");
    }
    else {
        response.end("ROTA NÃO EXISTENTE: " + parts.path);
    }  
};
var servidor = http.createServer(callback);
 
servidor.listen(8000);

console.log("http://localhost:8000");