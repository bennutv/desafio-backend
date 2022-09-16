import { IAccountDTO } from "../dto/IAccountDTO";
import { ICreateUserDTO } from "../dto/ICreateUserDTO";

interface IAccountsRepository {
  create(data: ICreateUserDTO): Promise<IAccountDTO>;
  findByEmail(email: string): Promise<IAccountDTO>;
}

export { IAccountsRepository };
