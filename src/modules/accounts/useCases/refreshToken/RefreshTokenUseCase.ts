import env from "../../../../config/env";
import { AppError } from "../../../../shared/errors/AppError";
import { AccountErrors } from "../../../../shared/errors/ErrosEnum";
import { TokenUtils } from "../../../../shared/utils/token";
import { IAccountsRepository } from "../../repositories/IAccountsRepository";

class RefreshTokenUseCase {
  private expireAuthToken = env.token.jwtTimeToExpireAuth;
  private secretAuthToken = env.token.jwtSecretAuth;
  private secretRefreshToken = env.token.jwtSecretRefresh;

  constructor(private accountRepository: IAccountsRepository) {}
  async execute(refreshToken: string) {
    const id = TokenUtils.getIdFromJWT(refreshToken, this.secretRefreshToken);

    const user = await this.accountRepository.findById(id);
    if (!user) {
      throw new AppError(AccountErrors.USER_NOT_FOUND, 404);
    }

    const token = TokenUtils.createJWT(
      id.toString(),
      this.expireAuthToken,
      this.secretAuthToken
    );

    return token;
  }
}

export { RefreshTokenUseCase };
