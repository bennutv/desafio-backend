import { Request, Response } from "express";

import { Utils } from "../../../../shared/utils/Utils";
import { LogoutUserUseCase } from "./LogoutUserUseCase";

class LogoutUserController {
  constructor(private logoutUserUseCase: LogoutUserUseCase) {}
  async handle(req: Request, res: Response) {
    const userId = req.headers.userId as string;
    await this.logoutUserUseCase.execute(userId);
    return res.status(201).send(Utils.responseBuilder([], 201));
  }
}

export { LogoutUserController };
