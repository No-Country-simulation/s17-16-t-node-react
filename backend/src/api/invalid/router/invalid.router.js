import { Router } from "express";
import { invalid } from "../controller/invalid.controller.js";

export const invalidRouter = Router();

invalidRouter.get("*", invalid);
