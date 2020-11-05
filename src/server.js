const express = require("express");
const app = express();
const settings = require("./settings/settings");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const logger = require("./infra/logger");
const redoc = require('redoc-express');
const cors = require("cors");

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

switch (settings.auth) {
  case 'basic':
    require("./config/basicAuth.config")(app);
    break;
  case 'jwt':
    require("./config/jwtAuth.config")(app);
    break;
  default:
    break;
}

// define all routes
require("./api/routes/users")(app);

app.get('/docs/swagger.yaml', (req, res) => {
  res.sendFile('./docs/swagger.yaml', { root: '.' });
});

app.get(
  "/docs",
  redoc({
    title: "API Docs",
    specUrl: "/docs/swagger.yaml",
  })
);

app.get("/", (req, res, next) => {
  res.json({"message":"Welcome to bennu-challenge API --- Try /docs to explore documentation."})
});

app.listen(settings.server.port || 3030, () => {
  logger.info("Server is running with success", { port: settings.server.port });
});
