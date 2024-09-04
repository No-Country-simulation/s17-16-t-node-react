import {
  getRestaurantById,
  createRestaurant,
  updateRestaurantById,
  deleteRestaurantById,
} from "../services/restaurant.services";
import upload from "../../../config/multer.config";

//==========================
// Create a new restaurant
//==========================
const createRestaurantController = async (req, res) => {
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
        owner: req.body.userId,
        logo: req.file ? req.file.path : null, // save the route of the uploaded image
        menus: req.body.menus || [],
        staff: req.body.staff || [],
      };

      const newRestaurant = await createRestaurant(newRestaurantData);
      res.status(201).json(newRestaurant);
    } catch (error) {
      res.status(500).json({ message: "Error creating restaurant", error });
    }
  });
};

//==========================
// Get all restaurants
//==========================
const getAllRestaurantsController = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: "Error fetching restaurants", error });
  }
};

//==========================
// Get a restaurant by ID
//==========================
const getRestaurantByIdController = async (req, res) => {
  try {
    const restaurant = await getRestaurantById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: "Error fetching restaurant", error });
  }
};

//==========================
// Update a restaurant by ID
//==========================
const updateRestaurantByIdController = async (req, res) => {
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
        owner: req.body.userId,
        logo: req.file ? req.file.path : null, // Actualiza la ruta de la imagen cargada
        menus: req.body.menus || [],
        staff: req.body.staff || [],
      };

      const updatedRestaurant = await updateRestaurantById(
        req.params.id,
        updatedRestaurantData
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

//==========================
// Delete a restaurant by ID
//==========================
const deleteRestaurantByIdController = async (req, res) => {
  try {
    const deletedRestaurant = await deleteRestaurantById(req.params.id);
    if (!deletedRestaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.status(200).json({ message: "Restaurant deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting restaurant", error });
  }
};

//==========================
// Get restaurants by user ID
//==========================
const getRestaurantsByUserIdController = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ userId: req.params.userId });
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: "Error fetching restaurants", error });
  }
};

export default {
  createRestaurantController,
  getAllRestaurantsController,
  getRestaurantByIdController,
  updateRestaurantByIdController,
  deleteRestaurantByIdController,
  getRestaurantsByUserIdController,
};
