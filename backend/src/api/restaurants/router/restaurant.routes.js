import { Router } from "express";
import {
  createRestaurantController,
  deleteRestaurantByIdController,
  getAllRestaurantsController,
  getRestaurantByIdController,
  getRestaurantsByUserIdController,
  updateRestaurantByIdController,
} from "../controller/restaurant.controller.js";
import { upload } from "../../../config/multer/multer.config.js";
import { setUpload } from "#src/middlewares";

export const restaurantRouter = Router();

// Path to create a new restaurant with image upload
restaurantRouter.post("/create", setUpload, createRestaurantController);

// Path to get all restaurants
restaurantRouter.get("/list", getAllRestaurantsController);

// Path to get a restaurant by ID
restaurantRouter.get("/search/:id", getRestaurantByIdController);

// Path to update a restaurant by ID
restaurantRouter.put("/search/:id", setUpload, updateRestaurantByIdController);

// Path to delete a restaurant by ID
restaurantRouter.delete("/search/:id", deleteRestaurantByIdController);

// Path to get all restaurants by user ID
restaurantRouter.get("/owner/:id", getRestaurantsByUserIdController);
