import { Router } from "express";

<<<<<<< HEAD
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
=======
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
>>>>>>> c388b6eddd0db429e098585068a47fd581277b05
