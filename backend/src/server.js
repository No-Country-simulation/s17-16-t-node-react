import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import logger from "morgan";
import { config } from "dotenv";

import connectDB from "./config/database/db.js";
import { invalidRouter } from "./api/invalid/router/invalid.router.js";
import { serverRouter } from "./routers/server.routes.js";

config();

const port = process.env.PORT || 3002;
const env = process.env.NODE_ENV || "development";
const hostDev = process.env.HOST_DEV || "localhost";
const hostProd = process.env.HOST_PROD_BACK || "restifyApi.onrender.com";
const host =
  env?.trim() === "production"
    ? `https://${hostProd}`
    : `http://${hostDev}:${port}`;
const server = express();
//server
server.use(express.json());
server.use(express.urlencoded({ extends: true }));
server.use(cookieParser());
server.use(logger("dev"));
server.use(cors());
server.use(helmet());
server.use("/api/v1", serverRouter);
server.use("*", invalidRouter);

connectDB();

server.listen(port, (err) => {
  if (err) console.error("Error starting server", err);
  console.log(`✅ Server 🆗 is running 💯 on ${host}/api/v1/docs`);
});
