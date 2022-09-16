import { IAccountDTO } from "../dto/IAccountDTO";
import { ICreateUserDTO } from "../dto/ICreateUserDTO";

interface IAccountsRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<IAccountDTO>;
}

export { IAccountsRepository };
