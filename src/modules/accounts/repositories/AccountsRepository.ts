import { IAccountDTO } from "../dto/IAccountDTO";
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

  async create(data: IAccountDTO) {
    const account = await this.model.create(data);
    return account;
  }

  async findByEmail(email: string): Promise<IAccountDTO> {
    const account = (await this.model.findOne({ email }).lean()) as IAccountDTO;
    return account;
  }

  async updateLogin(id: string, loggedIn: boolean) {
    await this.model.findByIdAndUpdate(id, { loggedIn });
  }

  async findById(id: string): Promise<IAccountDTO> {
    const account = (await this.model.findById(id).lean()) as IAccountDTO;
    return account;
  }
}

export { AccountsRepository };
