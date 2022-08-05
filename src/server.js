import dotenv from 'dotenv'
import app from './app.js'
import { MongoClient } from 'mongodb';

dotenv.config()

const url = process.env.DATABASE_MONGO_URL || "mongodb://database:27017"

MongoClient.connect(url, (err, client) => {
  if(err){
    throw new Error('Could not connect to the database 🥶');
  }

  console.log('Successfully connected to the database 🤓');
})

app.listen(process.env.API_PORT || 3000, () => {
  console.log(`Server's running on port ${process.env.API_PORT}! ⚡️⚡️⚡️⚡️`)
})