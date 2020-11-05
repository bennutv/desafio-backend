/**
 * Define the endpoint`s authentication
 * @module auth-routes
 * @param app
 */
module.exports = (app) => {
  const controller = require("../controllers/jwtAuth");
  const userController = require("../controllers/users");

  app.route(`/auth/login`).post(controller.login);
  app.route(`/auth/logout`).get(userController.allowIfLoggedin, controller.logout);
};
