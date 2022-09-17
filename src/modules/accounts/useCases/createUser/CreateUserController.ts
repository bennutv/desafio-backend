import { Request, Response } from "express";

import env from "../../../../config/env";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const jwt = await this.createUserUseCase.execute({
      name,
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

export { CreateUserController };
