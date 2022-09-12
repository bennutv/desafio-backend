import {
  BodyParam,
  Get,
  JsonController,
  UseBefore,
  Req,
  Param,
  HttpError,
} from 'routing-controllers';
import { NewsService } from '../service/Index';
import { TokenDecoder } from '../middlewares';
import { NewsInterface } from 'interfaces';

@JsonController()
export class NewsController {
  constructor() {}
  private newsService: NewsService = new NewsService();
  @Get('/news')
  @UseBefore(TokenDecoder)
  async listAllNews(): Promise<NewsInterface[]> {
    try {
      const allNews: NewsInterface[] | any =
        await this.newsService.listAllNews();
      return allNews;
    } catch (err) {
      throw new HttpError(err.statusCode, err.message);
    }
  }

  @Get('/news/:id')
  @UseBefore(TokenDecoder)
  async newsById(@Param('id') id: number): Promise<NewsInterface | any> {
    try {
      const allNews: NewsInterface[] | any = await this.newsService.newsById(
        id
      );
      return allNews[0];
    } catch (err) {
      throw new HttpError(err.statusCode, err.message);
    }
  }
}
