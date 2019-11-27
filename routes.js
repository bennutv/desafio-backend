const express = require('express');
const routes = express.Router();
const auth = require("./config/auth.js")();
const users = require("./dados/users.js");
const bodyParser = require("body-parser");
const jwt = require("jwt-simple");
const cfg = require("./config/index.js");
var fs = require('fs');
const path = require('path')
var _ = require("underscore");


routes.use(bodyParser.json());
routes.use(auth.initialize());

//Rotas de Login e Logout
routes.post("/login", function(req, res) {
    if (req.body.email && req.body.password) {
        let email = req.body.email;
        let password = req.body.password;
        let user = users.find(function(u) {
            return u.email === email && u.password === password;
        });
        if (user) {
            let payload = { id: user.id };
            let token = jwt.encode(payload, cfg.jwtSecret);
            res.json({ token: token });
        } else {
            res.sendStatus(401);
        }
    } else {
        res.sendStatus(401);
    }
});

routes.post('/logout', function(req, res) {
    req.logout();
    req.headers.authorization = null;
    console.log(req.headers)
    res.redirect('/')
    res.status(200).send({ auth: false, token: null });
});


//Rotas de notícias
routes.get("/news", auth.authenticate(), function(req, res) {
    let reqPath = path.join(__dirname, './dados/news.json');

    fs.readFile(reqPath, 'utf8', function(err, data) {
        if (!err) {

            var jsonObj = JSON.parse(data)
            res.end(data);

        } else {
            res.end("Error: " + err)
        }
    });
});

//Busca notícia enviando um json com o ID da notícia
routes.post("/news/search", auth.authenticate(), function(req, res) {
    let reqPath = path.join(__dirname, './dados/news.json');
    let id = req.body.id;

    fs.readFile(reqPath, 'utf8', function(err, data) {
        if (!err) {
            var jsonObj = JSON.parse(data)
            var filtrarObj = _.find(jsonObj, { id: id });
            res.send(filtrarObj)
        } else {
            res.end("Error: " + err)
        }
    });
});




module.exports = routes;