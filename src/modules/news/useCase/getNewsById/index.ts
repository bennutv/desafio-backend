import { NewsRepository } from "../../repositories/NewsRepository";
import { GetNewsByIdController } from "./GetNewsByIdController";
import { GetNewsByIdUseCase } from "./GetNewsByIdUseCase";

const newsRepository = NewsRepository.getInstance();
const getNewsByIdUseCase = new GetNewsByIdUseCase(newsRepository);
const getNewsByIdController = new GetNewsByIdController(getNewsByIdUseCase);

export { getNewsByIdController };
