const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./router/index")(app);
require("./router/auth")(app);
require("./router/noticiais")(app);

let port = 3000;
app.listen(port, () => {
  console.log(`API Rodando na porta ${port}`);
});
