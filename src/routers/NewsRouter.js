import { Router } from 'express'
import NewsController from '../controllers/NewsController.js'

const NewsRouter = new Router()
const newsController = NewsController

NewsRouter.post('/', newsController.store)
NewsRouter.get('/', newsController.list)
NewsRouter.get('/:id', newsController.get)

export { NewsRouter }