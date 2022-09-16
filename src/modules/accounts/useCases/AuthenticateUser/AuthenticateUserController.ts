import { Request, Response } from "express";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;
    const response = await this.authenticateUserUseCase.execute({
      email,
      password,
    });
    return res.status(200).json(response).send();
  }
}

export { AuthenticateUserController };
