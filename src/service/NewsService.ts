import { NewsRepository } from '../repository/index';
import { Request, Response } from "express"


export class NewsService {
  private newsRepository: NewsRepository = new NewsRepository();
  contructor() {}
  async listAllNews() {
    try{
      return this.newsRepository.listAllNews()
    }catch(err){
      return {msg:"Not Autorized", statuscode:401}
    }
  }
  async newsById(id:number) {
    try{
      return await this.newsRepository.newsById(id)
    }catch(err){
      return {msg:"Not Autorized", statuscode:401}
    }
  }

}
