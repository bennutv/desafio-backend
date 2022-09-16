import { IAccountDTO } from "../dto/IAccountDTO";
import { ICreateUserDTO } from "../dto/ICreateUserDTO";
import { AccountsModel } from "../entities/Accounts";
import { IAccountsRepository } from "./IAccountsRepository";

class AccountsRepository implements IAccountsRepository {
  private static INSTANCE: AccountsRepository;
  constructor(private model: typeof AccountsModel) {}

  public static getInstance(): AccountsRepository {
    if (!AccountsRepository.INSTANCE) {
      AccountsRepository.INSTANCE = new AccountsRepository(AccountsModel);
    }

    return AccountsRepository.INSTANCE;
  }

  async create({ name, email, password }: ICreateUserDTO) {
    this.model.create({ name, email, password });
  }

  async findByEmail(email: string): Promise<IAccountDTO> {
    const account = (await this.model.findOne({ email }).lean()) as IAccountDTO;
    return account;
  }
}

export { AccountsRepository };
