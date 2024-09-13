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

menuRoutes.post(
  "/create",
  setApiKey,
  setAuthorize,
  setUpload,
  crateMenuController
);
menuRoutes.get("/one", setApiKey, getMenuController);
menuRoutes.get("/all", setApiKey, getAllMenusController);
menuRoutes.put(
  "/update",
  setApiKey,
  setAuthorize,
  setUpload,
  updateMenuController
);
menuRoutes.delete("/delete", setApiKey, setAuthorize, deleteMenuController);
