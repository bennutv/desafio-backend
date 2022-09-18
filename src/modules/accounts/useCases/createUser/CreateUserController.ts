import { Request, Response } from "express";

import { Utils } from "../../../../shared/utils/Utils";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;
    await this.createUserUseCase.execute({
      name,
      email,
      password,
    });
    return res.status(201).send(Utils.responseBuilder([], 201));
  }
}

export { CreateUserController };
