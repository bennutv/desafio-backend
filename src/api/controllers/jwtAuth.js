const md5 = require('md5');
const jwt = require('jsonwebtoken');
const logger = require("../../infra/logger");
const settings = require("../../settings/settings");
const userRepository = require("../repository/users");

const login = async (req, res) => {
  const hrstart = process.hrtime();
  if(!req.body.user){
    res.status(403).send("Send user and password on body");
    return;
  }
  const user = await userRepository.getByNameWithCache(req.body.user);
  let hrend = process.hrtime(hrstart);

  if (!user) {
    logger.info("User not exists", {
      user: req.body.user,
      elapsedTime: hrend[1] / 1000000,
    });
    res.status(404).send("User not exists");
    return;
  }

  if (md5(req.body.pwd) == user.password) {
    const id = user.id;
    const token = jwt.sign({ id }, settings.secret, {
      expiresIn: 30000000000000000000000000,
    });
    hrend = process.hrtime(hrstart);
    logger.info("New login", {
      user: user.name,
      role: user.role,
      elapsedTime: hrend[1] / 1000000,
    });
    res.status(200).send({ auth: true, token: token });
    return;
  }

  hrend = process.hrtime(hrstart);
  logger.info("Invalid login", { 
    elapsedTime: hrend[1] / 1000000,
  });
  res.status(401).send("Invalid login!");

};


const logout = (req, res) => {
  logger.info("Logout succesfully.");
  res.status(200).send({ auth: false, token: null });
};



module.exports = {
  login,
  logout,
};
