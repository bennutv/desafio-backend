import { AppError } from "../../../../shared/errors/AppError";
import { INewsListDTO } from "../../entities/dto/INewsLitsDTO";
import { INewsRepository } from "../../repositories/INewsRepository";

class ListNewsUseCase {
  constructor(private newsRepository: INewsRepository) {}
  async execute(): Promise<INewsListDTO[]> {
    const news = await this.newsRepository.list();
    if (!news.length) throw new AppError("No news to find", 404);
    return news;
  }
}

export { ListNewsUseCase };
