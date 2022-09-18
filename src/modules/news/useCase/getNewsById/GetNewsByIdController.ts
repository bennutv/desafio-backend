import { Request, Response } from "express";

import { AppError } from "../../../../shared/errors/AppError";
import { RequestErrors } from "../../../../shared/errors/ErrosEnum";
import { Utils } from "../../../../shared/utils/Utils";
import { GetNewsByIdUseCase } from "./GetNewsByIdUseCase";

class GetNewsByIdController {
  constructor(private getNewsByIdUseCase: GetNewsByIdUseCase) {}
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) {
      throw new AppError(RequestErrors.MISSING_PARAMS, 400);
    }
    const news = await this.getNewsByIdUseCase.execute(id);
    return res.status(200).send(Utils.responseBuilder({ news }));
  }
}

export { GetNewsByIdController };
