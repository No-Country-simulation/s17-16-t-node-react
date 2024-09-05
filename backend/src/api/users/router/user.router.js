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

export const userRouter = Router();

userRouter.post("/register", setApiKey, setUpload, register);
userRouter.post("/login", setApiKey, login);
userRouter.get("/profile", setApiKey, setAuthorize, getProfile);

userRouter.get("/all", setApiKey, getAllUsers);
userRouter.put("/profile", setApiKey, setAuthorize, setUpload, updateProfile);
userRouter.delete("/profile", setApiKey, setAuthorize, deleteProfile);
