var express = require("express");
var app = express();
var porta = 8000;

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(porta, function() {
    console.log("Server express iniciado na porta " + porta);
});