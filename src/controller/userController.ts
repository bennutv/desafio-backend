
import { Request, response, Response } from "express";
import { userRepository } from "../repositories/userRepository";
import { userService } from "../services/userService";
import bcrypt from 'bcryptjs';
import jwtConfig from '../config/jwt';
import jwt from 'jsonwebtoken';

export class userController {

    async handle(request: Request, response: Response){
        const {email, senha} = request.body;

        const service = new userService();
        
        const findEMail = await userRepository.findBy({email});
        if (findEMail.length) {
            return response.status(400).send({"error":"email já cadastrado"});
        }
        const result = await service.createUser({email, senha});

        if(result instanceof Error) {
            return response.status(404).json(result.message);
        }

        return response.json(result);
    }

    async auth(Request: Request, Response:Response){
        const {email, senha} = Request.body;

        const auth = await userRepository.findBy({email});
        const findAuth = await auth.find(a => a);
        if(!auth) return Response.status(400).send({ error: 'User Not Found'})
        
        if(!await bcrypt.compare(senha, findAuth.senha)) return Response.status(400).send({error: 'Invalid senha'})
        
        findAuth.senha = undefined

        const jwtToken = jwt.sign({ id: findAuth.id}, jwtConfig.secret,{
            expiresIn: 86400
        })
        const token = jwtToken;

         Response.send({
            auth,
            token
        })
    }

    async logout(Request: Request, Response:Response){
        response.cookie('token', '', {maxAge:1})
    }

    }

