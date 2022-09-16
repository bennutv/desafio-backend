import { AccountsRepository } from "../../repositories/AccountsRepository";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

const accountsRepository = AccountsRepository.getInstance();
const authenticateUserUseCase = new AuthenticateUserUseCase(accountsRepository);
const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase
);

export { authenticateUserController };
