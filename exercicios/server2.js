var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
    console.log("Acessando : ",request.url);
    console.log("Acessando Pasta : ",__dirname);
        fs.readFile(__dirname + '/home.html', function(err, html) {
            response.writeHeader(200, {
                'Content-Type': 'text/html'
            });
            response.write(html);
            response.end();
        });
});

server.listen(8000, function() {
    console.log('Executando Servidor HTTP');
});
