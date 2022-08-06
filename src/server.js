import dotenv from 'dotenv'
import app from './app.js'
import './config/mongodb.js'

dotenv.config()

app.listen(process.env.API_PORT || 3000, () => {
  console.log(`Server's running on port ${process.env.API_PORT}! ⚡️⚡️⚡️⚡️`)
  console.log(`http://localhost:${process.env.API_PORT || 3000}`)
})