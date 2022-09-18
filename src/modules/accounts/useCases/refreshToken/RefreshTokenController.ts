import { Request, Response } from "express";

import { AppError } from "../../../../shared/errors/AppError";
import { RequestErrors } from "../../../../shared/errors/ErrosEnum";
import { Utils } from "../../../../shared/utils/Utils";
import { RefreshTokenUseCase } from "./RefreshTokenUseCase";

class RefreshTokenController {
  constructor(private refreshTokenUseCase: RefreshTokenUseCase) {}
  async handle(req: Request, res: Response) {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      throw new AppError(RequestErrors.MISSING_PARAMS, 400);
    }
    let token: string;
    try {
      token = await this.refreshTokenUseCase.execute(refreshToken);
      return res.status(200).send(Utils.responseBuilder({ token }));
    } catch {
      return res.status(401).end();
    }
  }
}

export { RefreshTokenController };
