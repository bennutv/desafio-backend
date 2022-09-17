import { Router, Request, Response } from "express";

import { authenticateUserController } from "../../../../modules/accounts/useCases/authenticateUser";
import { createUserController } from "../../../../modules/accounts/useCases/createUser";

const accountsRoutes = Router();

accountsRoutes.post("/", (req: Request, res: Response) =>
  createUserController.handle(req, res)
);

accountsRoutes.post("/auth", (req: Request, res: Response) =>
  authenticateUserController.handle(req, res)
);

export { accountsRoutes };
