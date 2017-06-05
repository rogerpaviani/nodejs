var fs = require("fs");

function home(req, res) {
    fs.readFile(__dirname + "/home.html", function (err, htmlData)
    {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(htmlData);
        response.end();
    });
}

function contato(req, res) {
	console.log("Metodo 'contato' foi chamado.");
}

function cidade(req, res) {
    fs.readFile(__dirname + "/cidade.html", function (err, htmlData)
    {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(htmlData);
        response.end();
    });
}

function estado(req, res) {
    fs.readFile(__dirname + "/estado.html", function (err, htmlData)
    {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(htmlData);
        response.end();
    });
}

exports.home = home;
exports.contato = contato;
exports.cidade = cidade;
exports.estado = estado;