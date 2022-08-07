import { Router } from 'express';
import { AuthController } from '../controllers/auth';
import { NewsController } from '../controllers/news';
import { jwtAuth } from '../middleware/auth';


const routes = Router();

routes.get('/', (request, response) => response.json({ message: 'Desafio Backend' }));
routes.post('/login', new AuthController().login)
routes.post('/logout', jwtAuth, new AuthController().logout)
routes.get('/news', jwtAuth ,new NewsController().news)
routes.get('/news/:id', jwtAuth, new NewsController().newsItem)

export { routes };