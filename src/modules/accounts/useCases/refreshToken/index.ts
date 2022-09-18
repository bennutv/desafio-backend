import { AccountsRepository } from "../../repositories/AccountsRepository";
import { RefreshTokenController } from "./RefreshTokenController";
import { RefreshTokenUseCase } from "./RefreshTokenUseCase";

const accountsRepository = AccountsRepository.getInstance();
const refreshTokenUseCase = new RefreshTokenUseCase(accountsRepository);
const refreshTokenController = new RefreshTokenController(refreshTokenUseCase);

export { refreshTokenController };
