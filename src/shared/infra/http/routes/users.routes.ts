import { Router, Request, Response } from "express";

import { createUserController } from "../../../../modules/accounts/useCases/createUser";

const usersRoutes = Router();

usersRoutes.post("/", (req: Request, res: Response) =>
  createUserController.handle(req, res)
);

export { usersRoutes };
