import { Router } from "express";

import { accountsRoutes } from "./accounts.routes";
import { newsRoutes } from "./news.routes";

const router = Router();
router.use("/accounts", accountsRoutes);
router.use("/news", newsRoutes);

export { router };
