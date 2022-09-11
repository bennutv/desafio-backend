import "reflect-metadata";
import { mongoConnectionOptions } from '../configs'
import { connect } from "mongoose"
export class ConnectionMongoDb {

  async connectUserDB():Promise<void> {
    try{
      await connect(process.env.URI, mongoConnectionOptions)
      console.log("DB Conected")
    }catch(err) { console.log(err) }
   }
  async connectNewsDB():Promise<void> {
    try{
      await connect(process.env.URI, mongoConnectionOptions)
      console.log("DB Conected")
    }catch(err) { console.log(err) }
   }
}
