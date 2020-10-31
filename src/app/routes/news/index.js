const routes = require('express').Router();
const NewsController = require('../../controllers/News/newsController');
const authMiddleware = require('../../middlewares/auth');

routes.get('/news/get-all', authMiddleware, NewsController.getAllNews);
routes.get('/news/get-news', authMiddleware, NewsController.getNewByID);

module.exports = routes;