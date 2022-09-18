import { AppError } from "../../../../shared/errors/AppError";
import { NewsRepository } from "../../repositories/NewsRepository";

class GetNewsByIdUseCase {
  constructor(private newsRepository: NewsRepository) {}
  async execute(id: string) {
    const news = await this.newsRepository.findById(id);
    if (!news) throw new AppError("News not found", 404);

    return news;
  }
}

export { GetNewsByIdUseCase };
