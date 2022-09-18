import { AccountsRepository } from "../../repositories/AccountsRepository";

class LogoutUserUseCase {
  constructor(private accountRepository: AccountsRepository) {}
  execute() {
    const response = {
      refreshToken: null,
      token: null,
    };
    return response;
  }
}

export { LogoutUserUseCase };
