import express from "express";
import favicon from "serve-favicon";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { startRouter } from "#api/start";
import { invalidRouter } from "#api/invalid";
import { roleRouter } from "#api/roles";
import { apiLimiter } from "#utils/rateLimit";
import { controller, middleware } from "#src/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = join(__dirname, "..");

export const serverRouter = express.Router();

serverRouter.use(apiLimiter);
serverRouter.use("/assets", express.static(join(root, "assets")));
serverRouter.use(favicon(join(root, "assets/ico/favicon.ico")));
serverRouter.use("/docs", middleware, controller);
serverRouter.use("/roles", roleRouter);
serverRouter.use("/", startRouter);
serverRouter.use("*", invalidRouter);
