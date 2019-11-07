require("dotenv-safe").config();
const express = require('express');
const router = express.Router();
const authentication = require('../utils/authentication');

//Mock news
const news = require("../static/data/news");

router.get('/list', authentication.verifyJWT, function(req, res) {
    res.send(news);
});

router.get('/:id', authentication.verifyJWT, function(req, res) {
    let id = req.params.id;
    let searchedNews = news.find(obj => obj.id == id);
    res.send(searchedNews);
});

module.exports = router;