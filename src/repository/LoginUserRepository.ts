import bcrypt = require('bcryptjs');
import jwt = require('jsonwebtoken');
import { hashjwt } from '../configs';
import { UserModel } from '../Models/User';
import { UserInterface } from '../interfaces/index';

export class LoginRepository {
  constructor() {}

  async authenticationUser(username: string, password: string) {
    const userAuth: UserInterface = await UserModel.findOne({ username })
      .select('+password')
      .lean();

    if (!userAuth) {
      throw new Error(`Not Authorized`);
    }
    if (!(await bcrypt.compare(password, userAuth.password))) {
      throw new Error(`Not Authorized`);
    }
    userAuth._id = userAuth._id.toString();
    userAuth.password = undefined;

    const login = {
      userAuth,
      token: this.gerateToken({ id: userAuth._id }),
    };
    return login;
  }

  async registerUser(
    nome: string,
    sobrenome: string,
    usuario: string,
    senha: string,
    email: string
  ) {
    const newUser = {
      name: nome,
      lastname: sobrenome,
      username: usuario,
      password: senha,
      email: email,
    };
    try {
      const { username, email } = newUser;
      console.log(email)
      if (await UserModel.findOne({ username })) {
        return { error: `Error, ${username} já cadastrado`,statuscode:400 };
      }
      if (await UserModel.findOne({ email })) {

        return { error: `Error, ${email} já cadastrado`,statuscode:400};
      }
      const user: typeof UserModel | any = await UserModel.create(newUser);

      user.password = `*******`;



      return {
        user,
        token: this.gerateToken({ id: user._id }),
      };
    } catch (err) {
      console.log(err);
      return { Error: `usuario não cadastrado`,statuscode:400 };
    }
  }

  gerateToken(param: {}) {
    return jwt.sign(param, hashjwt, {
      expiresIn: 86400,
    });
  }
}
