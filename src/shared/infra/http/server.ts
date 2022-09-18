/* eslint-disable import/first */
// eslint-disable-next-line @typescript-eslint/no-var-requires, import-helpers/order-imports
import * as dotenv from "dotenv";

dotenv.config();

require("express-async-errors");

import env from "../../../config/env";
import { connectDatabase } from "../DB";
import { app } from "./app";

const PORT = env.config.port || 5000;

app.listen(PORT, async () => {
  try {
    await connectDatabase();
    console.log(`Server started on port ${PORT}`);
  } catch (error) {
    console.log(`Failed to start server! ${error}`);
    process.exit(500);
  }
});
