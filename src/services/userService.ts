import { userRepository } from '../repositories/userRepository';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import jwtConfig from '../config/jwt';

type UserRequest = {
    email: string;
    senha: string;

}

function generateToken(params = {}){
    return jwt.sign(params, jwtConfig.secret, {
        expiresIn: 86400
    })
}
export class userService {
    
    async createUser({ email, senha }: UserRequest):Promise< any | Error>{

   
        const passwordHash = await bcrypt.hash(senha, 10);
        const createUser = userRepository.create({
            email,
            senha:passwordHash
        });

        await userRepository.save(createUser);
        createUser.senha = undefined;

        return {
            createUser,
            token: generateToken({ id: createUser.id }) 
        };
      
    }

}
