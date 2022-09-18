import { Request, Response } from "express";

import { Utils } from "../../../../shared/utils/Utils";
import { ListNewsUseCase } from "./ListNewsUseCase";

class ListNewsController {
  constructor(private listNewsUseCase: ListNewsUseCase) {}
  async handle(req: Request, res: Response) {
    const news = await this.listNewsUseCase.execute();

    return res.status(200).send(Utils.responseBuilder({ news }));
  }
}

export { ListNewsController };
