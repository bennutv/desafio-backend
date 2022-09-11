import {
  BodyParam,
  Get,
  JsonController,
  UseBefore,
  Req,
} from 'routing-controllers';
import { Request } from 'express';
import { LoginService } from '../service/Index';
import {TokenDecoder} from "../middlewares"

@JsonController()
export class NewsController {
  constructor() {}

  @Get("/news")
  @UseBefore(TokenDecoder)
  async ListAllnews(
    @Req() req: Request | any
  ){
    console.log(req.userId)
    return {ok:true, user:req.userId}
  }

}
