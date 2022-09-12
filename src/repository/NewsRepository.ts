import { NewsModel } from '../Models';
import { NewsInterface } from '../interfaces/index';
import { NewsErrors } from '../errors';

export class NewsRepository {
  constructor() {}

  async listAllNews() {
    const pipeline: any[] = [
      {
        $match: {},
      },
      {
        $project: {
          _id: 0,
        },
      },
      {
        $sort: {
          date: -1,
        },
      },
    ];
    try {
      const allNews: NewsInterface[] = await NewsModel.aggregate(pipeline);
      if (allNews.length === 0 || !allNews) {
        throw new NewsErrors('', 204);
      }
      return allNews;
    } catch (err) {
      throw new NewsErrors(err.message, err.statusCode);
    }
  }
  async newsById(id: number) {
    const pipeline: any[] = [
      {
        $match: {
          id: id,
        },
      },
      {
        $project: {
          _id: 0,
        },
      },
    ];
    try {
      const newsById: NewsInterface[] = await NewsModel.aggregate(pipeline);
      if (newsById.length === 0 || !newsById) {
        throw new NewsErrors('', 204);
      }
      return newsById;
    } catch (err) {
      throw new NewsErrors(err.message, err.statusCode);
    }
  }
}
