import { IAccountDTO } from "../dto/IAccountDTO";

interface IAccountsRepository {
  create(data: IAccountDTO): Promise<IAccountDTO>;
  findByEmail(email: string): Promise<IAccountDTO>;
  updateLogin(id: string, loggedIn: boolean): Promise<void>;
  findById(id: string): Promise<IAccountDTO>;
}
export { IAccountsRepository };
