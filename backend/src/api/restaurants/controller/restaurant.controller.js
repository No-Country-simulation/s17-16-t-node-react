//restaurant.controller.js
import {
  errorProfiler,
  getModelFromRoute,
  isValidateFile,
  responseContentValidator,
  successProfiler,
} from "#utils/validations";
import {
  getRestaurantById,
  createRestaurant,
  updateRestaurantById,
  deleteRestaurantById,
} from "../services/restaurant.services.js";

//==========================
// Create a new restaurant
//==========================
export const createRestaurantController = async (req, res) => {
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
    const folder = getModelFromRoute(req.baseUrl);
    const file = isValidateFile(req.file);
    const fieldName = `${newRestaurantData.name}_${newRestaurantData.lastName}`;
    newRestaurantData.logo = await uploadImage(file, folder, fieldName);
    const response = await createRestaurant(newRestaurantData);
    const restaurant = responseContentValidator(response);
    successProfiler(res, 201, "createRestaurantController", { restaurant });
  } catch (error) {
    errorProfiler(error, res, "createRestaurantController");
  }
};

//==========================
// Get all restaurants
//==========================
export const getAllRestaurantsController = async (req, res) => {
  try {
    const restaurants = await getAllRestaurants();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: "Error fetching restaurants", error });
  }
};

//==========================
// Get a restaurant by ID
//==========================
export const getRestaurantByIdController = async (req, res) => {
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
export const updateRestaurantByIdController = async (req, res) => {
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
        logo: req.file ? req.file.path : null, //update the route of the uploaded image
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
export const deleteRestaurantByIdController = async (req, res) => {
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
export const getRestaurantsByUserIdController = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ owner: req.params.id });
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: "Error fetching restaurants", error });
  }
};
