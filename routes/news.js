require("dotenv-safe").config();
var express = require('express');
var router = express.Router();
var authentication = require('../utils/authentication');

//Mock news
const news = require("../static/data/news");

router.get('/list', authentication.verifyJWT, function(req, res) {
    res.status(200).send(news);
});

router.get('/:id', authentication.verifyJWT, function(req, res) {
    var id = req.params.id;
    var searchedNews = news.find(obj => obj.id == id);
    res.status(200).send(searchedNews);
});

module.exports = router;