const jwt = require('jsonwebtoken');
const settings = require("../settings/settings");
const userRepository = require("../api/repository/users");

module.exports = (app) => {
  require("../api/routes/jwtAuth")(app);

  app.use(async (req, res, next) => {

    const authHeader = req.headers.authorization;
    if (!authHeader) {
      next();
      return;
    }

    const parts = authHeader.split(" ");
    if (!parts.lenght === 2) {
      return res.status(401).send({ error: "Token error" });
    }

    const [scheme, token] = parts;
    if(scheme !== 'Bearer'){
      return res.status(401).send({ error: "Token malformatted" });
    }
    
    jwt.verify(token, settings.secret, async (err, decoded) => {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      req.userId = decoded.id;
      res.locals.loggedInUser = await userRepository.getByIdWithCache(decoded.id);
      next();
    });


  });
}