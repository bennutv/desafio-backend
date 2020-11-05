const accessControl = require("accesscontrol");
const roles = new accessControl();

roles.grant("user")
  .readOwn("profile")
  .updateOwn("profile");

roles.grant("admin")
  .extend("user")
  .createAny("profile")
  .readAny("profile")
  .updateAny("profile")
  .deleteAny("profile");

module.exports = {
  roles,
}