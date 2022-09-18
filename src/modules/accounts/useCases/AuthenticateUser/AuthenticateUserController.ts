import { Request, Response } from "express";

import { Utils } from "../../../../shared/utils/Utils";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;
    const tokens = await this.authenticateUserUseCase.execute({
      email,
      password,
    });
    return res.status(200).send(Utils.responseBuilder({ tokens }));
  }
}

export { AuthenticateUserController };
