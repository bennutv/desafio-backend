import { Mongoose } from "mongoose";

import env from "../../../config/env";

const uri: string = env.mongoDB.url || "ERROR";
const mongoUser: string = env.mongoDB.user || "ERROR";
const mongoPass: string = env.mongoDB.password || "ERROR";
export const connectionGeneral = new Mongoose();

export const connectDatabase = async () => {
  await connectionGeneral.connect(uri);
};
