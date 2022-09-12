import "reflect-metadata";
import { mongoConnectionOptions } from '../configs'
import { connect } from "mongoose"
export class ConnectionMongoDb {

  async connectUserDB():Promise<void> {
    try{
      await connect(process.env.URIUSERDB, mongoConnectionOptions)
      console.log("User DB Conected")
    }catch(err) { console.log(err) }
   }

}
