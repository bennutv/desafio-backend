import Users from '../models/UsersModel.js'
import Utils from '../utils/index.js'

const utils = Utils

class NewsController {
  async store (request, response) {
    try {
      const user = request.body

      const userAlreadyExists = await Users.findOne({ email: user.email })
      if(userAlreadyExists) return response.status(404).json({ message: 'User already exists!' })

      const newUser = {
        email: user.email,
        password: await utils.hashPassword(user.password)
      }

      await Users.create(newUser)

      return response.status(201).json(newUser)
    } catch(err) {
      console.log(err)
      return response.status(500).json({ error: err.message })
    }
  }
}

export default new NewsController()
