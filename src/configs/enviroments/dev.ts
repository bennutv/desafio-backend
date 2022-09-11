
import { ConnectOptions } from 'mongoose'
require('dotenv').config()

export const hashjwt = process.env.TOKEN
export const server = {
  port: 3000
};
export const mongoConnectionOptions : ConnectOptions = {
};

