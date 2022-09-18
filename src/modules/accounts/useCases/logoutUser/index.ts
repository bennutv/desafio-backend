import { AccountsRepository } from "../../repositories/AccountsRepository";
import { LogoutUserController } from "./LogoutUserController";
import { LogoutUserUseCase } from "./LogoutUserUseCase";

const accountsRepository = AccountsRepository.getInstance();
const logoutUserUseCase = new LogoutUserUseCase(accountsRepository);
const logoutUserController = new LogoutUserController(logoutUserUseCase);

export { logoutUserController };
