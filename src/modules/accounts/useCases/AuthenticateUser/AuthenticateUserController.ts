import { Request, Response } from "express";

import { AppError } from "../../../../shared/errors/AppError";
import { RequestErrors } from "../../../../shared/errors/ErrosEnum";
import { Utils } from "../../../../shared/utils/Utils";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new AppError(RequestErrors.MISSING_PARAMS, 400);
    }
    const tokens = await this.authenticateUserUseCase.execute({
      email,
      password,
    });
    return res.status(200).send(Utils.responseBuilder({ tokens }));
  }
}

export { AuthenticateUserController };
