import { Request, Response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;
    await this.createUserUseCase.execute({ name, email, password });
    res.status(201).send();
  }
}

export { CreateUserController };
