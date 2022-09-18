import { PipelineStage } from "mongoose";

import { INewsDTO } from "../entities/dto/INewsDTO";
import { INewsListDTO } from "../entities/dto/INewsLitsDTO";
import { NewsModel } from "../entities/News";
import { INewsRepository } from "./INewsRepository";

class NewsRepository implements INewsRepository {
  private static INSTANCE: NewsRepository;
  constructor(private model: typeof NewsModel) {}

  public static getInstance(): NewsRepository {
    if (!NewsRepository.INSTANCE) {
      NewsRepository.INSTANCE = new NewsRepository(NewsModel);
    }

    return NewsRepository.INSTANCE;
  }

  async findById(id: string): Promise<INewsDTO> {
    const news = (await this.model.findOne({ id }).lean()) as INewsDTO;
    return news;
  }
  async list(): Promise<INewsListDTO[]> {
    const pipeline: PipelineStage[] = [
      {
        $match: {},
      },
      {
        $project: {
          _id: 1,
          title: 1,
        },
      },
      {
        $sort: {
          date: -1,
        },
      },
    ];

    const news = await this.model.aggregate(pipeline);
    return news;
  }
}

export { NewsRepository };
