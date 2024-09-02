const express = require("express");
const restaurantController = require("../controller/restaurant.controller");
const upload = require("../../../config/multer/multer.config");

const router = express.Router();

// Route to create a new restaurant with image upload
router.post(
  "/restaurants",
  upload.single("image"),
  restaurantController.createRestaurant
);

// Route to get all restaurants
router.get("/restaurants", restaurantController.getAllRestaurants);

// Route to get a restaurant by ID
router.get("/restaurants/:id", restaurantController.getRestaurantById);

// Route to update a restaurant by ID
router.put(
  "/restaurants/:id",
  upload.single("image"),
  restaurantController.updateRestaurantById
);

// Route to delete a restaurant by ID
router.delete("/restaurants/:id", restaurantController.deleteRestaurantById);

// Route to get restaurants by user ID
router.get(
  "/users/:userId/restaurants",
  restaurantController.getRestaurantsByUserId
);

module.exports = router;
