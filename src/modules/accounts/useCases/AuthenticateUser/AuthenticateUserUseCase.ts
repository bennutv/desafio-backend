/* eslint-disable no-underscore-dangle */
import { compare } from "bcryptjs";

import env from "../../../../config/env";
import { AppError } from "../../../../shared/errors/AppError";
import { TokenUtils } from "../../../../shared/utils/token";
import { IAuthenticateUserDTO } from "../../dto/IAuthenticateUserDTO";
import { AccountsRepository } from "../../repositories/AccountsRepository";

class AuthenticateUserUseCase {
  private expireAuthToken = env.token.jwtTimeToExpireAuth;
  private expireRefreshToken = env.token.jwtTimeToExpireRefresh;
  private secretAuthToken = env.token.jwtSecretAuth;
  private secretRefreshToken = env.token.jwtSecretRefresh;
  constructor(private accountRepository: AccountsRepository) {}

  async execute({ email, password }: IAuthenticateUserDTO) {
    const user = await this.accountRepository.findByEmail(email);
    if (!user) {
      throw new AppError("Incorrect email or password", 403);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError("Incorrect email or password", 403);
    }
    const token = TokenUtils.createJWT(
      user._id.toString(),
      this.expireAuthToken,
      this.secretAuthToken
    );

    const refreshToken = TokenUtils.createJWT(
      user._id.toString(),
      this.expireRefreshToken,
      this.secretRefreshToken
    );

    await this.accountRepository.updateLogin(user._id, true);

    const response = {
      refreshToken,
      token,
    };
    return response;
  }
}

export { AuthenticateUserUseCase };
