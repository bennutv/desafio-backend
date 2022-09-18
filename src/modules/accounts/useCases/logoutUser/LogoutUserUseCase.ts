import { AccountsRepository } from "../../repositories/AccountsRepository";

class LogoutUserUseCase {
  constructor(private accountRepository: AccountsRepository) {}
  execute() {
    const token = null;
    return token;
  }
}

export { LogoutUserUseCase };
