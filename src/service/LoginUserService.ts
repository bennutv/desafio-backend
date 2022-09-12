import { LoginRepository } from '../repository/index';
import { Request, Response } from "express"


export class LoginService {
  private loginRepository: LoginRepository = new LoginRepository();
  contructor() {}
  async authenticationUser(username: string, password: string) {
    try{
      return this.loginRepository.authenticationUser(username,password)
    }catch(err){
      return {msg:"Not Autorized", statuscode:401}
    }
  }
  async logout(req:Request){
    req.headers["authorization"] = null
    return {msg:'logged out user'}
  }

  async registerUser(
    nome: string,
    sobrenome: string,
    usuario: string,
    senha: string,
    email:string
  ) {
    const ret = await this.loginRepository.registerUser(
      nome,
      sobrenome,
      usuario,
      senha,
      email
    );

    return ret
  }
}
