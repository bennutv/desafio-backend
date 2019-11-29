"use strict";

const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.json({ status: "Seja bem-vindo a API bennuTv!" });
});

module.exports = app => app.use("/", router);
