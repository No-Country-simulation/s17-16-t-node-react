import { Router } from "express";
import {
  deleteProfile,
  getAllUsers,
  getProfile,
  login,
  register,
  updateProfile,
} from "#api/users";
import { setApiKey, setAuthorize, setUpload } from "#src/middlewares";

export const authRouter = Router();

authRouter.post("/register", setApiKey, setUpload, register);
authRouter.post("/login", setApiKey, login);
authRouter.get("/profile", setApiKey, setAuthorize, getProfile);
