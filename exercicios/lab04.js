var http = require('http');
var url = require('url');
var fs = require('fs');
var porta = 3000;
var server = http.createServer(function(request, response){
if(request.url == "/"){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Página principal</h1>");
    response.end();
}else if(request.url == "/home"){
    fs.readFile(__dirname + "/home.html", function (err, htmlData)
    {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(htmlData);
        response.end();
    });
}else if(request.url.indexOf("/produtos") == 0){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Produtos :)</h1>");
    var result = url.parse(request.url, true);
    for(var key in result.query){
        response.write("<h2>"+key+" : "+result.query[key]+"</h2>");
    }
    response.end();
}else if(request.url == "/servicos"){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Serviços :)</h1>");
    response.end();
}else if(request.url == "/contato"){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Contato :)</h1>");
    response.end();
}else if(request.url == "/api"){
    fs.readFile(__dirname + "/dados.json", function(err, jsonData){
        var headers = {};
        headers["Access-Control-Allow-Origin"] = "*";
        headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
        headers["Access-Control-Allow-Credentials"] = true;
        headers["Access-Control-Max-Age"] = '86400'; // 24 hours
        headers["Access-Control-Allow-Headers"] = "X-Requested-With, Access-Control-Allow-Origin, X-HTTP-Method-Override, Content-Type, Authorization, Accept";
        headers['Content-Type'] = 'application/json';
        response.writeHead(200, headers);
        response.write(jsonData);
        response.end();
    });
}else{
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Página não encontrada :(</h1>");
    response.end();
}
});
server.listen(porta, function(){
    console.log('Servidor rodando na porta: ', porta);
});