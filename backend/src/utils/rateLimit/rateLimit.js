//==================
// Imports
//==================
import MongoStore from "rate-limit-mongo";
import { rateLimit } from "express-rate-limit";
import { apiResponse } from "#utils/apiRespond";
import { HOST_DEV, NODE_ENV, PASS_MONGO, PORT, URL_MONGO, USER_MONGO } from "#src/config";

//====================
// Allowed origins
//====================
const allowedOrigins = [
  `${HOST_DEV}:${PORT}`,
  `http://${HOST_DEV}:${PORT}`,
  `127.0.0.1:${PORT}`,
  `http://127.0.0.1:${PORT}`,
];

//==================
// Set Limit
//==================
export const SetLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 1500, // 1500 requests per IP
  message: async (req, res) => {
    apiResponse(res, 429, {
      error: "Too many requests from this IP, please try again later.",
    });
  },
  statusCode: 429,
  standardHeaders: true,
  keyGenerator: async (req) => {
    console.log("ip req->", req.ip);
    if (req.ip) {
      const separador = NODE_ENV === "development" ? ":" : ".";
      const ip = req.ip.toString().split(`${separador}`)
      const key = ip[ip.length - 1];
      console.log("key->", key);
      return key;
    }
  },
  requestPropertyName: "req",
  legacyHeaders: false,
  skip: (req) => {
    if (NODE_ENV !== "development") {
      return allowedOrigins.includes(req.get("host"));
    } else {
      return false;
    }
  },
  store: new MongoStore({
    uri: URL_MONGO,
    user: USER_MONGO,
    password: PASS_MONGO,
    // should match windowMs
    expireTimeMs: 15 * 60 * 1000,
    errorHandler: console.error.bind(null, "rate-limit-mongo"),
    // see Configuration section for more options and details
  }),
});
