import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
const ObjectId = mongoose.Schema.Types

import Users from '../models/UsersModel.js'
import Utils from '../utils/index.js'

const utils = Utils

class AuthController {
  async session(request, response) {
    try{
      const { email, password } = request.body
      if (!email || !password) return response.status(400).json({ error: 'Email and password are required!' })

      const user = await Users.findOne({ email })
      if (!user) return response.status(400).json({ error: 'User not found' })
      if (!(await utils.hashCopareSync(password, (user.password || '')))) return response.status(400).json({ error: 'Password does not match!' })

      const token = jwt.sign({ email }, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRES })

      await Users.findByIdAndUpdate({ _id: user._id }, { token: token })

      return response.status(200).json({ token })
    }catch (err) {
      console.log(err)
      return response.status(500).json({ message: err })
    }
  }
}

export default new AuthController()
