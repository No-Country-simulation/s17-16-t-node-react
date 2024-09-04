import 'dotenv/config';

export const PORT = +(process.env.PORT ?? 3002);
export const DATABASE_URL = process.env.URL_MONGO;
export const DATABASE_TEST = process.env.URL_TEST_MONGO;
export const DATABASE_PROD = process.env.URL_PROD_MONGO;
export const DATABASE_RATE_LIMIT = process.env.URL_RATE_LIMIT_MONGO;
export const MONGO_USER = process.env.USER_MONGO;
export const MONGO_PASS = process.env.PASS_MONGO;
export const Secret = process.env.TOKEN_SECRET;
export const Expire = process.env.TOKEN_EXPIRATION;
export const Key = process.env.API_KEY;
export const HostDev = process.env.HOST_DEV;
export const HostProdFront = process.env.HOST_PROD_FRONT;
export const HostProdBack = process.env.HOST_PROD_BACK;
