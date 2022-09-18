const mongoDB = {
  url: process.env.MONGOURL,
  password: process.env.MONGO_PASS,
  user: process.env.MONGO_USER,
  name: process.env.MONGO_DB_NAME,
  apiName: process.env.MONGO_DB_API_NAME,
};
const config = {
  port: process.env.PORT,
  environment: process.env.NODE_ENV,
};

const token = {
  jwtSecretAuth: process.env.JWT_SECRET,
  jwtSecretRefresh: process.env.JWT_SECRET_REFRESH,
  jwtTimeToExpireAuth: process.env.JWT_AUTH_EXPIRE,
  jwtTimeToExpireRefresh: process.env.JWT_REFRESH_EXPIRE,
};
const env = { mongoDB, config, token };

export default Object.freeze(env);
