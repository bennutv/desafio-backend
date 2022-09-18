import { AppError } from "../../../../shared/errors/AppError";
import { NewsErrors } from "../../../../shared/errors/ErrosEnum";
import { NewsRepository } from "../../repositories/NewsRepository";

class GetNewsByIdUseCase {
  constructor(private newsRepository: NewsRepository) {}
  async execute(id: string) {
    const news = await this.newsRepository.findById(id);
    if (!news) throw new AppError(NewsErrors.NEWS_NOT_FOUND, 404);

    return news;
  }
}

export { GetNewsByIdUseCase };
