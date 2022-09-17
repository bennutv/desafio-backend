const mongoDB = {
  url: process.env.MONGOURL,
  password: process.env.MONGO_PASS,
  user: process.env.MONGO_USER,
  name: process.env.MONGO_DB_NAME,
  apiName: process.env.MONGO_DB_API_NAME,
};
const config = {
  port: process.env.PORT,
  secret: process.env.JWT_SECRET,
  environment: process.env.NODE_ENV,
};
const env = { mongoDB, config };

export default Object.freeze(env);
