"use strict";

const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");

module.exports = (req, res, nex) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).send({ error: "No token provided" });

  const parts = authHeader.split(" ");

  if (!parts.lenght === 2)
    return res.status(401).send({ error: "Token error" });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ error: "Token malformatted" });

  jwt.verify(token, authConfig.secret, (error, decode) => {
    if (error) return res.status(401).send({ error: "Token invalid" });

    req.userId = decode.id;

    return nex();
  });
};
