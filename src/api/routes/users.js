/**
 * Define the endpoint`s users
 * @module users-routes
 * @param app
 */
module.exports = (app) => {
  const controller = require("../controllers/users");

  app.route(`/api/users`).get(controller.allowIfLoggedin, controller.grantAccess('readAny', 'profile'), controller.getAll);
  app.route(`/api/users/:id`).get(controller.allowIfLoggedin, controller.getById);
  app.route(`/api/users/`).post(controller.allowIfLoggedin, controller.grantAccess('createAny', 'profile'), controller.create);
  app.route(`/api/users/:id`).put(controller.allowIfLoggedin, controller.grantAccess('updateAny', 'profile'), controller.update);
  app.route(`/api/users/:id`).delete(controller.allowIfLoggedin, controller.grantAccess('deleteAny', 'profile'), controller.remove);

};
