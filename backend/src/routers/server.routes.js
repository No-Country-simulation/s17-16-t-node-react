
import favicon from "serve-favicon";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { controller, middleware } from "../config/swagger/sawgger.config.js";
import { invalidRouter } from "../api/invalid/router/invalid.router.js";
import { startRouter } from "../api/start/router/start.router.js";
import express, { Router } from "express";
import { apiLimiter } from "../utils/rateLimit/rateLimit.js";
import { roleRouter } from "../api/roles/router/role.router.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = join(__dirname, "..");
console.log(join(root, "assets/ico/favicon.ico"));

export const serverRouter = Router();

serverRouter.use(apiLimiter);
serverRouter.use("/assets", express.static(join(root, "assets")));
serverRouter.use(favicon(join(root, "assets/ico/favicon.ico")));
serverRouter.use("/docs", middleware, controller);
serverRouter.use("/roles", roleRouter);
serverRouter.use("/", startRouter);
serverRouter.use("*", invalidRouter);
