import { Router, Request, Response } from "express";

import { authenticateUserController } from "../../../../modules/accounts/useCases/authenticateUser";
import { createUserController } from "../../../../modules/accounts/useCases/createUser";
import { logoutUserController } from "../../../../modules/accounts/useCases/logoutUser";
import { refreshTokenController } from "../../../../modules/accounts/useCases/refreshToken";

const accountsRoutes = Router();

accountsRoutes.post("/", (req: Request, res: Response) =>
  createUserController.handle(req, res)
);

accountsRoutes.post("/auth", (req: Request, res: Response) =>
  authenticateUserController.handle(req, res)
);

accountsRoutes.delete("/logout", (req: Request, res: Response) =>
  logoutUserController.handle(req, res)
);

accountsRoutes.post("/token/refresh", (req: Request, res: Response) =>
  refreshTokenController.handle(req, res)
);

export { accountsRoutes };
