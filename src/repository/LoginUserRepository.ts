import bcrypt = require('bcryptjs');
import jwt = require('jsonwebtoken');
import { hashjwt } from '../configs';
import { UserModel } from '../Models/User';
import { UserInterface } from '../interfaces/index';
import { UserLoginErro } from '../errors';

export class LoginRepository {
  constructor() {}

  async authenticationUser(username: string, password: string) {
    try {
      const userAuth: UserInterface = await UserModel.findOne({ username })
        .select('+password')
        .lean();

      if (!userAuth) {
        throw new UserLoginErro('Unregistered user', 401);
      }
      if (!(await bcrypt.compare(password, userAuth.password))) {
        throw new UserLoginErro('Wrong username or password', 403);
      }
      userAuth._id = userAuth._id.toString();
      userAuth.password = undefined;

      const login = {
        userAuth,
        token: this.gerateToken({ id: userAuth._id }),
      };
      return login;
    } catch (err) {
      throw new UserLoginErro(err.message, err.statusCode);
    }
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
      if (await UserModel.findOne({ username })) {
        throw new UserLoginErro( 'User alredy exist',409 );
      }
      if (await UserModel.findOne({ email })) {
        throw new UserLoginErro( `Error, ${email} alredy exist`,409 )
      }
      const user: typeof UserModel | any = await UserModel.create(newUser);

      user.password = `*******`;

      return {
        user,
        token: this.gerateToken({ id: user._id }),
      };
    } catch (err) {
       throw new UserLoginErro( err.message ,err.statusCode )
    }
  }

  gerateToken(param: {}) {
    return jwt.sign(param, hashjwt, {
      expiresIn: 86400,
    });
  }
}
