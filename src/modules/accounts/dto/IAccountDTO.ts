interface IAccountDTO {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  loggedIn?: boolean;
}

export { IAccountDTO };
