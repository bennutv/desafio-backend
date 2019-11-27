var express = require("express");
var bodyParser = require("body-parser");
var auth = require("./config/auth.js")();

var app = express();

app.use('/api', require('./routes'));
app.use(bodyParser.json());
app.use(auth.initialize());

//Rota inicial
app.get("/", function(req, res) {
    res.json({ status: "Seja Bem Vindo a Página Inicial!" });
});


app.listen(3000, function() {
    console.log("API Rodando!");
});

module.exports = app;