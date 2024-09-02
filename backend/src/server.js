import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import logger from "morgan";
import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

import { serverRouter } from "./routers/server.routes.js";

import connectDB from "./config/database/db.js";

config();

const port = process.env.PORT || 3002;
const env = process.env.NODE_ENV || "development";
const hostDev = process.env.HOST_DEV || "localhost";
const hostProd = process.env.HOST_PROD_BACK || "restifyApi.onrender.com";
const host =
  env?.trim() === "production"
    ? `https://${hostProd}`
    : `http://${hostDev}:${port}`;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = express();
//server
server.use(express.json());
server.use(express.urlencoded({ extends: true }));
server.use(cookieParser());
server.use(logger("dev"));
server.use(cors());
server.use(helmet());
// Middleware to serve static files (uploaded images)
server.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Use '/api/v1' as the base path for the routes in serverRouter
server.use("/api/v1", serverRouter);

connectDB();

server.listen(port, (err) => {
  if (err) console.error("Error starting server", err);
  console.log(`✅ Server 🆗 is running 💯 on ${host}/api/v1/docs`);
});
