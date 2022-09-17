import { hash } from "bcryptjs";

import { AppError } from "../../../../shared/errors/AppError";
import { TokenUtils } from "../../../../shared/utils/token";
import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { IAccountsRepository } from "../../repositories/IAccountsRepository";

class CreateUserUseCase {
  constructor(private accountsRepository: IAccountsRepository) {}
  async execute({ name, email, password }: ICreateUserDTO) {
    const userFound = await this.accountsRepository.findByEmail(email);
    if (userFound) {
      throw new AppError("Email already in use", 400);
    }
    const passwordHash = await hash(password, 8);

    const userCreated = await this.accountsRepository.create({
      name,
      email,
      password: passwordHash,
    });

    // eslint-disable-next-line no-underscore-dangle
    const token = TokenUtils.createJWT(userCreated._id.toString());

    return token;
  }
}

export { CreateUserUseCase };
