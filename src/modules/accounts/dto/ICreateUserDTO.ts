interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

interface ICreateUserResponseDTO {
  user: {
    name: string;
    email: string;
  };
  token: string;
}
export { ICreateUserDTO, ICreateUserResponseDTO };
