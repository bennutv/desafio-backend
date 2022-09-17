import { Request, Response } from "express";

import env from "../../../../config/env";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}
  async handle(req: Request, res: Response) {
    console.log(req.cookies.jwt);
    const { email, password } = req.body;
    const jwt = await this.authenticateUserUseCase.execute({
      email,
      password,
    });
    return res
      .status(200)
      .cookie("auth", jwt, {
        httpOnly: true,
        secure: env.config.environment === "PROD",
      })
      .send();
  }
}

export { AuthenticateUserController };
