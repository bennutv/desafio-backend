import express from "express";

import ErrorHandler from "../middleware/ErrorHandler";
import { router } from "./routes";

const app = express();
app.use(express.json());

app.use(router);

app.use(ErrorHandler);

export { app };
