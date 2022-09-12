import { newsService } from '../services/newsService';
import { Request, Response } from "express";


export class noticiasController {

    async handle(request: Request, response: Response){
        const payload = request.body;
       
        const service = new newsService();

        const result = await service.createNews(payload);

        if(result instanceof Error) {
            return response.status(404).json(result.message);
        }

        return response.json(result);
    }

    async find(request: Request, response: Response){

        const service = new newsService();

        const result = await service.findNews();

        try {
            if(result.length == 0){
                response.json({"Noticias": "nenhuma noticia foi cadastrada"})
            }
        } catch (error) {
            
            if(result instanceof Error) {
                return response.status(404).json(result.message);
            }
        }

        return response.json(result);
    }

    async findById(request: Request, response: Response){
        const id = request.params.id;

        const service = new newsService();

        const result = await service.findNewsById(id);

        try {
            if(result.length == 0){
                response.json({"Noticias": "nenhuma noticia foi cadastrada com esse Id"})
            }
        } catch (error) {
            
            if(result instanceof Error) {
                return response.status(404).json(result.message);
            }
        }

        return response.json(result);
    }
}