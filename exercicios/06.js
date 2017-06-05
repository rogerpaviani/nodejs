/*
	Modulos
*/
var contato = require('./contato');
contato.ola();

var calcula = require('./calcula')();
calcula.somar(15, 3);
calcula.subtrair(15, 3);
calcula.multiplicar(15, 3);
calcula.dividir(15, 3);

/*
module.exports = function() {
  // ...
}
*/