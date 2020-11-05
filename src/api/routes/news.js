/**
 * Define the endpoint`s news
 * @module news-routes
 * @param app
 */
module.exports = (app) => {
  const controller = require("../controllers/news");
  const userController = require("../controllers/users");

  app.route(`/api/news`).get(userController.allowIfLoggedin, controller.getAll);
  app.route(`/api/news/:id`).get(userController.allowIfLoggedin, controller.getById);

};
