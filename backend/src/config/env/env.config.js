//==================
// Imports
//==================
import "dotenv/config";

//==================
// Environments
//==================
export const NODE_ENV = process.env.NODE_ENV ?? "development";
export const PORT = +(process.env.PORT ?? 3002);
export const API_KEY = process.env.API_KEY;
export const HOST_DEV = process.env.HOST_DEV ?? "localhost";
export const HOST_PROD_FRONT =
  process.env.HOST_PROD_FRONT ?? "restify.onrender.com";
export const HOST_PROD_BACK =
  process.env.HOST_PROD_BACK ?? "restifyApi.onrender.com";

//==================
// MongoDb
//==================
export const URL_MONGO = process.env.URL_MONGO;
export const TEST_DB = process.env.DB_TEST_MONGO;
export const PROD_DB = process.env.URL_PROD_MONGO;
export const RATE_LIMIT_DB = process.env.DB_RATE_LIMIT_MONGO;
export const USER_MONGO = process.env.USER_MONGO;
export const PASS_MONGO = process.env.PASS_MONGO;

//==================
// JWT
//==================
export const JWT_SECRET = process.env.TOKEN_SECRET;
export const JWT_EXPIRATION = process.env.TOKEN_EXPIRATION;

//==================
// BCRYPT
//==================
export const BC_SALT = +(process.env.BCRYPT_SALT);

//==================
// Cloudinary
//==================`
export const CD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
export const CD_API_KEY = process.env.CLOUDINARY_API_KEY;
export const CD_API_SECRET = process.env.CLOUDINARY_API_SECRET;
export const CD_RESOURCE_EXT = process.env.CLOUDINARY_RESOURCE_TYPE_EXT;
export const CD_RESOURCE_TYPE = process.env.CLOUDINARY_RESOURCE_TYPE;
export const CD_MAX_FILE_SIZE = process.env.CLOUDINARY_MAX_FILE_SIZE;
export const CD_MAX_SIZE_IMAGE = process.env.CLOUDINARY_MAX_SIZE_IMAGE;

//==================
// Imagen default
//==================
export const DEFAULT_AVATAR =
  "https://res.cloudinary.com/restity/image/upload/v1725508323/User/default_default.png";
export const DEFAULT_ITEMS = '';
export const DEFAULT_LOGO = '';
