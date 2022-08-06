import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const { NODE_ENV, DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env

const MONGO_CONNECTION_URL = NODE_ENV === 'DEV' 
  ? `mongodb://localhost:${DB_PORT}/${DB_NAME}?authSource=admin` 
  : `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`

const OPTIONS = {
  useNewUrlParser: true, 
  // useUnifiedTopology: true
}

mongoose.connect(MONGO_CONNECTION_URL, OPTIONS)

mongoose.connection.on('error', () => console.error('Could not connect to the database 🥶'))
mongoose.connection.once('open', () => console.log('Successfully connected to the database 🤓'))

