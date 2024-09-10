import { Router } from "express";
import { start } from "../controller/start.controller.js";

export const startRouter = Router();

startRouter.get("/", start);
