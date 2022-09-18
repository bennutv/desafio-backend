import { AccountsRepository } from "../../repositories/AccountsRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const accountsRepository = AccountsRepository.getInstance();
const createUserUseCase = new CreateUserUseCase(accountsRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
