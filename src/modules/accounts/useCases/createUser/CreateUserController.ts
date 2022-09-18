import { Request, Response } from "express";

import { AppError } from "../../../../shared/errors/AppError";
import { RequestErrors } from "../../../../shared/errors/ErrosEnum";
import { Utils } from "../../../../shared/utils/Utils";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;
    if (!email || !password || !email) {
      throw new AppError(RequestErrors.MISSING_PARAMS, 400);
    }
    await this.createUserUseCase.execute({
      name,
      email,
      password,
    });
    return res.status(201).send(Utils.responseBuilder([], 201));
  }
}

export { CreateUserController };
