var querystring = require("querystring");
var url = require("url");
var fs = require("fs");

function home(response, postData, request) {
	console.log("Request handler 'home' was called.");

	var body = '<html>'+
	'<head>'+
	'<meta http-equiv="Content-Type" content="text/html; '+
	'charset=UTF-8" />'+
	'</head>'+
	'<body>'+
	'<form action="/contato" method="post">'+
	'<h1>Texto</h1>'+
	'<br />'+
	'<textarea name="text" rows="20" cols="60"></textarea>'+
	'<br />'+
	'<h1>Nome do arquivo</h1>'+
	'<br />'+
	'<input type="text" name="nome_arquivo" />'+
	'<br />'+
	'<h1>Autor</h1>'+
	'<br />'+
	'<input type="text" name="autor" />'+
	'<br />'+
	'<br />'+
	'<br />'+
	'<input type="submit" value="Submit text" />'+
	'</form>'+
	'</body>'+
	'</html>';

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

function contato(response, postData, request) {
	var $POST = querystring.parse(postData);
	console.log("Request handler 'contato' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	//response.write("You've sent: " + postData);
	//response.write("You've sent the text: " + $POST.text);
	fs.writeFileSync(__dirname + "/" + $POST.nome_arquivo, "Autor: " + $POST.autor + "\n\n\n" + $POST.text);
	//response.write("You've sent the ParamsWithValue: " + querystring.parse(url.parse(request.url).query).text);
	response.write("Arquivo salvo: " + $POST.nome_arquivo);
	response.end();
}

exports.home = home;
exports.contato = contato;