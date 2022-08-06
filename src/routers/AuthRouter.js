import { Router } from 'express'
import AuthController from '../controllers/AuthController.js'

const AuthRouter = new Router()
const authController = AuthController

AuthRouter.post('/login', authController.session)
AuthRouter.post('/logout', authController.logout)

export { AuthRouter }