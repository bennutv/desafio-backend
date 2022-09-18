import { AccountsRepository } from "../../repositories/AccountsRepository";

class LogoutUserUseCase {
  constructor(private accountRepository: AccountsRepository) {}
  async execute(id: string) {
    await this.accountRepository.updateLogin(id, false);
  }
}

export { LogoutUserUseCase };
