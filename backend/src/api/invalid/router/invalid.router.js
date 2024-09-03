import { Router } from "express";
import { invalid } from "#api/invalid";

export const invalidRouter = Router();

invalidRouter.get("*", invalid);
