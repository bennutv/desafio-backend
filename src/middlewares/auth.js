import jwt from 'jsonwebtoken'

export default (request, response, next) => {
  const { authorization } = request.headers

  if (!authorization) return response.status(401).json({ error: 'Token not provided, login is required' })

  const token =authorization.split(' ')[1]

  try{
    const { id } = jwt.verify(token, process.env.TOKEN_SECRET)
    console.log(id)

    request.user = { id }
    return next()
  } catch (err) {
    console.log(err)
    return response.status(401).json({ error: err })
  }
}