import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import logger from "morgan";
import { config } from "dotenv";
/*import { serverRouter } from "./routers/routers.js";*/
import  connectDB  from "./config/database/db.js";


config();

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || "development";
const hostDev = process.env.HOST_DEV || "localhost";
const hostProd = process.env.HOST_PROD_BACK || "rutasdoradasback.vercel.app";
const host = env?.trim() === "production"
  ? `https://${hostProd}`
  : `http://${hostDev}:${port}`;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extends: true }));
server.use(cookieParser());
server.use(logger("dev"));
server.use(cors());
server.use(helmet());
//server.use(serverRouter);

connectDB();

server.listen(port, (err) => {
  if (err) console.error('Error starting server',err);
  console.log(
    `✅ Server 🆗 is running 💯 on ${host}/api/docs`
  );
});