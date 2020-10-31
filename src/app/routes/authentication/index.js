const routes = require('express').Router();
const AuthenticationController = require('../../controllers/Authentication/authenticationController');
const authMiddleware = require('../../middlewares/auth');

routes.post('/auth/login', AuthenticationController.onLogin);
routes.get('/auth/logout', authMiddleware, AuthenticationController.onLogout);


module.exports = routes;