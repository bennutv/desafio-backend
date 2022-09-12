import { newsRepository } from '../repositories/newsRepository';

export class newsService {
    
    async createNews(payload):Promise<any | Error>{
        const insertNews = await newsRepository.create( {
            "id": payload.id,
            "publisher_name": payload.publisher_name,
            "title": payload.title,
            "subtitle": payload.subtitle,
            "image_url": payload.image_url,
            "date": payload.date,
            "publisher_media": payload.publisher_media,
            "news_category_id": payload.news_category_id,
            "publisher_media_2": payload.publisher_media_2
        });
        await newsRepository.save(insertNews);
        return insertNews;
   }

   async findNews():Promise< any| Error > {
      const find = await newsRepository.find();
      return find;
   }

   async findNewsById(id):Promise< any| Error > {
    const find = await newsRepository.findBy({"id":id});
    return find;
 }

}

