"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./router/index")(app);
require("./router/auth")(app);
require("./router/noticiais")(app);

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
