import { NewsModel } from '../Models';
import { NewsInterface } from '../interfaces/index';

export class NewsRepository {
  constructor() {}

  async listAllNews() {
    const pipeline:[{}] = [
    {
        '$match': {}
    }, {
        '$sort': {
            'date': -1
        }
    }
]
    const allNews: NewsInterface[] = await NewsModel.aggregate(pipeline)
    return allNews;
  }
}
