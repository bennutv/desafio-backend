import { AppDataSource } from "../database/dataSource";
import { News } from '../entities/News';

export const newsRepository = AppDataSource.getRepository(News);