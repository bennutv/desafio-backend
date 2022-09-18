import { Request, Response } from "express";

import { Utils } from "../../../../shared/utils/Utils";
import { GetNewsByIdUseCase } from "./GetNewsByIdUseCase";

class GetNewsByIdController {
  constructor(private getNewsByIdUseCase: GetNewsByIdUseCase) {}
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const news = await this.getNewsByIdUseCase.execute(id);
    return res.status(200).send(Utils.responseBuilder({ news }));
  }
}

export { GetNewsByIdController };
