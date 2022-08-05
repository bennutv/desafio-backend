import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const MONGO_CONNECTION_URL = process.env.DATABASE_MONGO_CONNECTION_URL

mongoose.connect(MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('Successfully connected to the database 🤓');
}).catch(err => {
  console.log(err)
  throw new Error('Could not connect to the database 🥶', err);
})

mongoose.connection;