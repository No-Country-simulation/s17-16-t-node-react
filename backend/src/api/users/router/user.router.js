import express from 'express';
import * as UserController from '../controller/user.controller.js';
import { logged } from '../middlewares/auth.middleware.js';

export const userRouter = express.Router();

userRouter.post('/register', UserController.register);
userRouter.post('/login', UserController.login);

userRouter.get('/profile', logged, UserController.getProfile);
userRouter.put('/profile', UserController.updateProfile);
userRouter.delete('/profile', UserController.deleteProfile);
userRouter.get('/all', UserController.getAllUsers);


