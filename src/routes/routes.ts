import { userController } from '../controller/userController';
import { noticiasController } from "../controller/newsController";
import authMiddleware from '../middlewares/auth'
import { Router } from "express";

const routes = Router();

routes.post('/register', new userController().handle);
routes.post('/auth', new userController().auth);
routes.get('/logout', new userController().logout)

routes.post('/createNews', new noticiasController().handle).use(authMiddleware);
routes.get('/findNews', new noticiasController().find).use(authMiddleware);
routes.get('/findNewsById/:id', new noticiasController().findById).use(authMiddleware);

export default routes;