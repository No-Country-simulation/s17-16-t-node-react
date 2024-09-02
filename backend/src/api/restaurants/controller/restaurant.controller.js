const Restaurant = require("../dao/mongodb/model/restaurant.model");
const upload = require("../../../config/multer.config");

// Create a new restaurant
const createRestaurant = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res
        .status(400)
        .json({ message: "Error uploading image", error: err });
    }

    try {
      const newRestaurantData = {
        name: req.body.name,
        address: req.body.address,
        category: req.body.category,
        userId: req.body.userId,
        image: req.file ? req.file.path : null, // Guarda la ruta de la imagen cargada
        menus: req.body.menus || [],
        staff: req.body.staff || [],
      };

      const newRestaurant = await Restaurant.create(newRestaurantData);
      res.status(201).json(newRestaurant);
    } catch (error) {
      res.status(500).json({ message: "Error creating restaurant", error });
    }
  });
};

// Get all restaurants
const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: "Error fetching restaurants", error });
  }
};

// Get a restaurant by ID
const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: "Error fetching restaurant", error });
  }
};

// Update a restaurant by ID
const updateRestaurantById = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res
        .status(400)
        .json({ message: "Error uploading image", error: err });
    }

    try {
      const updatedRestaurantData = {
        name: req.body.name,
        address: req.body.address,
        category: req.body.category,
        userId: req.body.userId,
        image: req.file ? req.file.path : null, // Actualiza la ruta de la imagen cargada
        menus: req.body.menus || [],
        staff: req.body.staff || [],
      };

      const updatedRestaurant = await Restaurant.findByIdAndUpdate(
        req.params.id,
        updatedRestaurantData,
        { new: true }
      );
      if (!updatedRestaurant) {
        return res.status(404).json({ message: "Restaurant not found" });
      }
      res.status(200).json(updatedRestaurant);
    } catch (error) {
      res.status(500).json({ message: "Error updating restaurant", error });
    }
  });
};

// Delete a restaurant by ID
const deleteRestaurantById = async (req, res) => {
  try {
    const deletedRestaurant = await Restaurant.findByIdAndDelete(req.params.id);
    if (!deletedRestaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.status(200).json({ message: "Restaurant deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting restaurant", error });
  }
};

// Get restaurants by user ID
const getRestaurantsByUserId = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ userId: req.params.userId });
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: "Error fetching restaurants", error });
  }
};

module.exports = {
  createRestaurant,
  getAllRestaurants,
  getRestaurantById,
  updateRestaurantById,
  deleteRestaurantById,
  getRestaurantsByUserId,
};
