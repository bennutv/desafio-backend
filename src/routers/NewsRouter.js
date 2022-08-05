import { Router } from 'express'
import NewsController from '../controllers/NewsController.js'
import auth from '../middlewares/auth.js'

const NewsRouter = new Router()
const newsController = NewsController

NewsRouter.post('/', auth, newsController.store)
NewsRouter.get('/', auth, newsController.list)
NewsRouter.get('/:id', auth, newsController.get)

export { NewsRouter }