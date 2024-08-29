import express from 'express';
import * as UserController from '../controller/user.controller.js';
import { logged } from '../middlewares/auth.middleware.js';

export const routerNew = express.Router();

routerNew.post('/register', UserController.register);
routerNew.post('/login', UserController.login);

routerNew.get('/profile', logged, UserController.getProfile);
routerNew.put('/profile', UserController.updateProfile);
routerNew.delete('/profile', UserController.deleteProfile);
routerNew.get('/all', UserController.getAllUsers);


