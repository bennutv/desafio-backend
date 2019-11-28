const express = require("express");
const path = require("path");
const fs = require("fs");
const _ = require("lodash");
const authMiddleware = require("../middlewares/auth");
const router = express.Router();

router.use(authMiddleware);

router.get("/noticias", async (req, res) => {
  let file = path.join(__dirname, "../database/news.json");
  try {
    fs.readFile(file, "utf8", (error, data) => {
      console.log(req.headers);
      return res.send(data);
    });
  } catch (error) {
    return res
      .status(400)
      .send({ error: "O correu um erro ao consultar as noticias" });
  }
});

router.get("/noticias/:id", async (req, res) => {
  let file = path.join(__dirname, "../database/news.json");
  let id = parseInt(req.params.id);
  try {
    fs.readFile(file, "utf8", (error, data) => {
      let noticias = JSON.parse(data);
      let detalhes = _.find(noticias, { id: id });
      return res.send(detalhes);
    });
  } catch (error) {
    return res
      .status(400)
      .send({ error: "O correu um erro ao consultar a noticia" });
  }
});

module.exports = app => app.use("/api", router);
