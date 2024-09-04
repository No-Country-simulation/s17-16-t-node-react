import { Router } from "express";
import restaurantController from "../controller/restaurant.controller.js";
import { upload } from "../../../config/multer/multer.config.js";

export const restaurantRouter = Router();

// Path to create a new restaurant with image upload
restaurantRouter.post(
  "/restaurants",
  upload.single("image"),
  restaurantController.createRestaurantController
);

// Path to get all restaurants
restaurantRouter.get(
  "/restaurants",
  restaurantController.getAllRestaurantsController
);

// Path to get a restaurant by ID
restaurantRouter.get(
  "/restaurants/:id",
  restaurantController.getRestaurantByIdController
);

// Path to update a restaurant by ID
restaurantRouter.put(
  "/restaurants/:id",
  upload.single("image"),
  restaurantController.updateRestaurantByIdController
);

// Path to delete a restaurant by ID
restaurantRouter.delete(
  "/restaurants/:id",
  restaurantController.deleteRestaurantByIdController
);

// Path to get all restaurants by user ID
restaurantRouter.get(
  "/users/:owner/restaurants",
  restaurantController.getRestaurantsByUserIdController
);
