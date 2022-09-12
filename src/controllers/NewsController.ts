import {
  BodyParam,
  Get,
  JsonController,
  UseBefore,
  Req,
  Param,
} from 'routing-controllers';
import { Request } from 'express';
import { NewsService } from '../service/Index';
import {TokenDecoder} from "../middlewares"
import { NewsInterface } from 'interfaces';

@JsonController()
export class NewsController {
  constructor() {}
  private newsService:NewsService = new NewsService()
  @Get("/news")
  @UseBefore(TokenDecoder)
  async listAllNews(): Promise<NewsInterface[]>{
    const allNews: NewsInterface[] | any = await this.newsService.listAllNews()
    return allNews
  }
  @Get("/news/:id")
  @UseBefore(TokenDecoder)
  async newsById(
    @Param('id') id: number
  ):Promise<NewsInterface | any>{
    const allNews:NewsInterface[] | any = await this.newsService.newsById(id)
    return allNews[0]
  }

}
