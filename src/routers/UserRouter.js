import { Router } from 'express'
import UserController from '../controllers/UserController.js'

const UserRouter = new Router()
const userController = UserController

UserRouter.post('/', userController.store)

export { UserRouter }