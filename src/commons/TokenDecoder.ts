import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import {hashjwt} from '../configs'

export class TokenDecoderCommon{
  private hash= hashjwt
  async verify(token:string, req:Request, res:Response |any){
    jwt.verify(token, this.hash, (err,decoded)=>{
      if(err){
        res.status(401)
        res.send({error:'Token Invalido'})
      }
      console.log(decoded)
      res.setHeader("userId", decoded)

    })
  }
}
