import express from "express";

import { Authorization } from "../middleware/Authorization";
import ErrorHandler from "../middleware/ErrorHandler";
import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(Authorization.checkAuth);
app.use(router);

app.use(ErrorHandler);

export { app };
