import { Router, Request, Response } from "express";

import { getNewsByIdController } from "../../../../modules/news/useCase/getNewsById";
import { listNewsController } from "../../../../modules/news/useCase/listNews";

const newsRoutes = Router();

newsRoutes.get("/list", (req: Request, res: Response) =>
  listNewsController.handle(req, res)
);
newsRoutes.get("/:id", (req: Request, res: Response) =>
  getNewsByIdController.handle(req, res)
);

export { newsRoutes };
