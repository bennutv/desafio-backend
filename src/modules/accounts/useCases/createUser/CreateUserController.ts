import { Request, Response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const response = await this.createUserUseCase.execute({
      name,
      email,
      password,
    });
    return res.status(201).json(response).send();
  }
}

export { CreateUserController };
