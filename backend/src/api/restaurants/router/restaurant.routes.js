import { Router } from "express";

import { setUpload } from "#src/middlewares";
import { createRestaurantController, deleteRestaurantByIdController, getAllRestaurantsController, getRestaurantByIdController, getRestaurantsByOwnerController, updateRestaurantByIdController } from "#api/restaurants";

export const restaurantRouter = Router();

// Path to get all restaurants
restaurantRouter.get("/list", getAllRestaurantsController);

// Path to get a restaurant by ID
restaurantRouter.get("/search/:id", getRestaurantByIdController);

// Path to get all restaurants by user ID
restaurantRouter.get("/owner/:owner", getRestaurantsByOwnerController);

// Path to create a new restaurant with image upload
restaurantRouter.post("/create", setUpload, createRestaurantController);

// Path to update a restaurant by ID
restaurantRouter.put("/search/:id", setUpload, updateRestaurantByIdController);

// Path to delete a restaurant by ID
restaurantRouter.delete("/search/:id", deleteRestaurantByIdController);
