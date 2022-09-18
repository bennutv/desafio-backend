import { hash } from "bcryptjs";

import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { IAccountsRepository } from "../../repositories/IAccountsRepository";

class CreateUserUseCase {
  constructor(private accountsRepository: IAccountsRepository) {}
  async execute({ name, email, password }: ICreateUserDTO): Promise<void> {
    const userFound = await this.accountsRepository.findByEmail(email);
    if (userFound) {
      throw new AppError("Email already in use", 400);
    }
    const passwordHash = await hash(password, 8);

    await this.accountsRepository.create({
      name,
      email,
      password: passwordHash,
    });
  }
}

export { CreateUserUseCase };
