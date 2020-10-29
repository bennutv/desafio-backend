const routes = require('express').Router();
const AuthenticationController = require('../../controllers/authenticationController');

routes.post('/auth/login', AuthenticationController.onLogin);
routes.get('/auth/logout', AuthenticationController.onLogout);


module.exports = routes;