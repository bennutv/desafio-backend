import { Request, Response } from "express";

import { Utils } from "../../../../shared/utils/Utils";
import { LogoutUserUseCase } from "./LogoutUserUseCase";

class LogoutUserController {
  constructor(private logoutUserUseCase: LogoutUserUseCase) {}
  async handle(req: Request, res: Response) {
    const tokens = this.logoutUserUseCase.execute();
    return res.status(201).send(Utils.responseBuilder({ tokens }, 201));
  }
}

export { LogoutUserController };
