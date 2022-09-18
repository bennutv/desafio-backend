import { Request, Response } from "express";

import { Utils } from "../../../../shared/utils/Utils";
import { RefreshTokenUseCase } from "./RefreshTokenUseCase";

class RefreshTokenController {
  constructor(private refreshTokenUseCase: RefreshTokenUseCase) {}
  async handle(req: Request, res: Response) {
    const { refreshToken } = req.body;
    let token;
    try {
      token = await this.refreshTokenUseCase.execute(refreshToken);
      return res.status(200).send(Utils.responseBuilder({ token }));
    } catch {
      return res.status(401).end();
    }
  }
}

export { RefreshTokenController };
