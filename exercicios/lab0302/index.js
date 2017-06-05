var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.home;
handle["/home"] = requestHandlers.home;
handle["/contato"] = requestHandlers.contato;
handle["/cidade"] = requestHandlers.cidade;
handle["/estado"] = requestHandlers.estado;

server.start(router.route, handle);
