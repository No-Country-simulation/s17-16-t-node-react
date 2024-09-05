//==================
// Imports
//==================
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import logger from "morgan";
import { invalidRouter } from "#api/invalid";
import { connectDB, HOST_DEV, HOST_PROD_BACK, NODE_ENV, PORT } from "#src/config";
import { serverRouter } from "#src/routers";
import { SetLimiter } from "#utils/rateLimit";

//==================
// Const
//==================
const host =
  NODE_ENV?.trim() === "production"
    ? `https://${HOST_PROD_BACK}`
    : `http://${HOST_DEV}:${PORT}`;
const server = express();

//==================
// Server Config
//==================
server.use(express.json());
server.use(express.urlencoded({ extends: true }));
server.use(cookieParser());
server.use(logger("dev"));
server.use(cors());
server.use(helmet());
server.use(SetLimiter);
server.use("/api/v1", serverRouter);
server.use("*", invalidRouter);

//==================
// Connect DB
//==================
connectDB();

//==================
// Server Listen
//==================
server.listen(PORT, (err) => {
  if (err) console.error("Error starting server", err);
  console.log(`✅ Server 🆗 is running 💯 on ${host}/api/v1/docs`);
});
