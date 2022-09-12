import { NewsRepository } from '../repository/index';
import { Request, Response } from "express"


export class NewsService {
  private newsRepository: NewsRepository = new NewsRepository();
  contructor() {}
  async listAllNews() {
      return this.newsRepository.listAllNews()

  }
  async newsById(id:number) {
      return await this.newsRepository.newsById(id)
  }

}
