import { Router } from "express";

import { setApiKey, setAuthorize, setUpload } from "#src/middlewares";
import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  getUserByIdController,
  login,
  updateUserController,
} from "#api/users";

export const userRouter = Router();

userRouter.post("/register", setApiKey, setUpload, createUserController);
userRouter.post("/login", setApiKey, login);
userRouter.get("/one", setApiKey, setAuthorize, getUserByIdController);

userRouter.get("/list", setApiKey, getAllUsersController);
userRouter.put("/", setApiKey, setAuthorize, setUpload, updateUserController);
userRouter.delete("/profile", setApiKey, setAuthorize, deleteUserController);
