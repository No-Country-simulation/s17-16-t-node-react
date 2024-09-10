import { Router } from "express";

import {
  deleteMenuController,
  getAllMenusController,
  getMenuController,
  crateMenuController,
  updateMenuController,
} from "#api/menus";

import { setApiKey, setAuthorize, setUpload } from "#src/middlewares";

export const menuRoutes = Router();

menuRoutes.post("/create", setApiKey, setUpload, crateMenuController);
menuRoutes.get("/", setApiKey, getMenuController);

menuRoutes.get("/all", setApiKey, getAllMenusController);
menuRoutes.put("/menu", setApiKey, setAuthorize, setUpload, updateMenuController);
menuRoutes.delete("/delete", setApiKey, /*setAuthorize,*/ deleteMenuController);
