import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'

import Users from '../models/UsersModel.js'

export default async (request, response, next) => {
  const { authorization } = request.headers

  if (!authorization) return response.status(401).json({ error: 'Token not provided, login is required' })

  const token =authorization.split(' ')[1]

  try{
    const userVerified = jwt.verify(token, process.env.TOKEN_SECRET)

    const user = await Users.findOne({ email: userVerified.email })
    if(!user) return response.status(404).json({ message: 'User not found!' })
    
    if(!user.session) return response.status(401).json({ error: 'Login is required' })
    
    request.user = userVerified.id
    return next()
  } catch (err) {
    console.log(err)
    return response.status(401).json({ error: err })
  }
}