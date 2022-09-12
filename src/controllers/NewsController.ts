import {
  BodyParam,
  Get,
  JsonController,
  UseBefore,
  Req,
} from 'routing-controllers';
import { Request } from 'express';
import { NewsService } from '../service/Index';
import {TokenDecoder} from "../middlewares"

@JsonController()
export class NewsController {
  constructor() {}
  private newsService:NewsService = new NewsService()
  @Get("/news")
  @UseBefore(TokenDecoder)
  async ListAllNews(
    @Req() req: Request | any
  ){
    const allNews = this.newsService.listAllNews()
    return allNews
  }

}
