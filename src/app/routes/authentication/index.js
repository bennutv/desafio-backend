const routes = require('express').Router();
const AuthenticationController = require('../../controllers/Authentication/authenticationController');

routes.post('/auth/login', AuthenticationController.onLogin);
routes.get('/auth/logout', AuthenticationController.onLogout);


module.exports = routes;