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

userRouter.post("/login", setApiKey, login);
userRouter.post("/register", setApiKey, setUpload, createUserController);
userRouter.post(
  "/add",
  setApiKey,
  setAuthorize,
  setUpload,
  createUserController
);
userRouter.get("/one", setApiKey, setAuthorize, getUserByIdController);
userRouter.get("/list", setApiKey, getAllUsersController);
userRouter.put("/upload", setApiKey, setAuthorize, setUpload, updateUserController);
userRouter.delete("/delete", setApiKey, setAuthorize, deleteUserController);
