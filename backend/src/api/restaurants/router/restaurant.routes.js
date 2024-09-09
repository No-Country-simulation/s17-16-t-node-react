import { Router } from "express";

import { setUpload } from "#src/middlewares";
import {
  createRestaurantController,
  getAllRestaurantsController,
  getRestaurantByIdController,
  getRestaurantsByOwnerController,
  updateRestaurantByIdController,
  updateRestaurantStatusController,
} from "#api/restaurants";

export const restaurantRouter = Router();

// Path to get all restaurants
restaurantRouter.get("/list", getAllRestaurantsController);

// Path to create a new restaurant with image upload
restaurantRouter.post("/create", setUpload, createRestaurantController);

// Path to get a restaurant by ID
restaurantRouter.get("/:id", getRestaurantByIdController);

// Path to get all restaurants by user ID
restaurantRouter.get("/owner/:owner", getRestaurantsByOwnerController);

// Path to update a restaurant by ID
restaurantRouter.put("/update/:id", setUpload, updateRestaurantByIdController);

// Path to delete a restaurant by ID
restaurantRouter.patch("/status/:id", updateRestaurantStatusController);
