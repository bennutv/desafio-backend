import { compare } from "bcryptjs";

import { AppError } from "../../../../shared/errors/AppError";
import { TokenUtils } from "../../../../shared/utils/token";
import {
  IAuthenticateUserRequestDTO,
  IAuthenticateUserResponseDTO,
} from "../../dto/IAuthenticateUserDTO";
import { AccountsRepository } from "../../repositories/AccountsRepository";

class AuthenticateUserUseCase {
  constructor(private accountRepository: AccountsRepository) {}

  async execute({ email, password }: IAuthenticateUserRequestDTO) {
    const user = await this.accountRepository.findByEmail(email);
    if (!user) {
      throw new AppError("Incorrect email or password", 403);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError("Incorrect email or password", 403);
    }

    // eslint-disable-next-line no-underscore-dangle
    const token = TokenUtils.createJWT(user._id.toString());

    const response: IAuthenticateUserResponseDTO = {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };

    return response;
  }
}

export { AuthenticateUserUseCase };
