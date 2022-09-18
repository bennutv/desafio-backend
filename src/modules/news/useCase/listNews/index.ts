import { NewsRepository } from "../../repositories/NewsRepository";
import { ListNewsController } from "./ListNewsController";
import { ListNewsUseCase } from "./ListNewsUseCase";

const newsRepository = NewsRepository.getInstance();
const listNewsUseCase = new ListNewsUseCase(newsRepository);
const listNewsController = new ListNewsController(listNewsUseCase);

export { listNewsController };
