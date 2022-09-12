import { NewsModel } from '../Models';
import { NewsInterface } from '../interfaces/index';

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
    const allNews: NewsInterface[] = await NewsModel.aggregate(pipeline);
    return allNews;
  }
  async newsById(id: number) {
    const pipeline :any[]= [
    {
        '$match': {
            'id': id
        }
    }, {
        '$project': {
            '_id': 0
        }
    }
]
    const newsById: NewsInterface[] = await NewsModel.aggregate(pipeline)
    return newsById
  }
}
