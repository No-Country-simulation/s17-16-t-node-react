//restaurant.controller.js
import {
  errorProfiler,
  getModelFromRoute,
  isBodyParamsValidate,
  isValidateFile,
  responseContentValidator,
  successProfiler,
} from "#utils/validations";
import {
  createRestaurantService,
  getAllRestaurantsService,
  getRestaurantByIdService,
  updateRestaurantByIdService,
  getRestaurantsByOwnerService,
  updateRestaurantStatusByIdService,
} from "#api/restaurants";
import { uploadImage } from "#utils/cloudinary";

//==========================
// Get all restaurants
//==========================
export const getAllRestaurantsController = async (req, res) => {
  try {
    const restaurants = await getAllRestaurantsService();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: "Error fetching restaurants", error });
  }
};

//==========================
// Create a new restaurant
//==========================
export const createRestaurantController = async (req, res) => {
  try {
    const body = await isBodyParamsValidate(req);
    const restaurantData = {
      name: body.name,
      address: body.address,
      category: body.category,
      owner: body.owner,
    };
    const folder = getModelFromRoute(req.baseUrl);
    const file = isValidateFile(req.file);
    const fieldName = `${restaurantData.name}`;
    restaurantData.logo = await uploadImage(file, folder, fieldName);
    const response = await createRestaurantService(restaurantData);
    const restaurant = responseContentValidator(response);
    console.log(restaurant);
    successProfiler(res, 201, "createRestaurantController", { restaurant });
  } catch (error) {
    errorProfiler(error, res, "createRestaurantController");
  }
};

//==========================
// Update a restaurant by ID
//==========================
export const updateRestaurantByIdController = async (req, res) => {
  try {
    let updatedRestaurantData = { ...req.body };

    /*
    if (req.user.role !== "admin") {
      console.log("User is not admin, deleting owner field");
      delete updatedRestaurantData.owner;
    }*/

    if (req.file) {
      console.log("File received:", req.file);

      const folder = getModelFromRoute(req.baseUrl);
      console.log("Folder determined from route:", folder);

      const file = req.file;
      const fieldName = `${updatedRestaurantData.name || req.params.id}`;
      console.log("Field name for image upload:", fieldName);

      try {
        updatedRestaurantData.logo = await uploadImage(file, folder, fieldName);
        console.log("Image uploaded, secure URL:", updatedRestaurantData.logo);
      } catch (uploadError) {
        console.error("Error uploading image:", uploadError);
        return res
          .status(500)
          .json({ message: "Error uploading image", error: uploadError });
      }
    } else {
      console.log("No file uploaded");
    }

    // Muestra los datos que se intentarán actualizar en la base de datos
    console.log("Updated restaurant data:", updatedRestaurantData);

    const updatedRestaurant = await updateRestaurantByIdService(
      req.params.id,
      updatedRestaurantData
    );

    if (!updatedRestaurant) {
      console.error("Restaurant not found");
      return res.status(404).json({ message: "Restaurant not found" });
    }

    console.log("Restaurant successfully updated:", updatedRestaurant);
    res.status(200).json(updatedRestaurant);
  } catch (error) {
    console.error("Error updating restaurant:", error); // Imprime el error si ocurre
    res.status(500).json({ message: "Error updating restaurant", error });
  }
};

//==========================
// Get a restaurant by ID
//==========================
export const getRestaurantByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    if (!id) {
      return res.status(400).json({ message: "Restaurant ID is required" });
    }
    const restaurant = await getRestaurantByIdService(req.params.id);

    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: "Error fetching restaurant", error });
  }
};

//============================
// Get restaurants by owner
//============================
export const getRestaurantsByOwnerController = async (req, res) => {
  try {
    const restaurants = await getRestaurantsByOwnerService({
      owner: req.params.owner,
    });
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: "Error fetching restaurants", error });
  }
};

//==========================
// update  restaurant status  by ID
//==========================

export const updateRestaurantStatusController = async (req, res) => {
  try {
    const { id } = req.params;

    const restaurant = await updateRestaurantStatusByIdService(id);

    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    successProfiler(res, 200, "updateRestaurantStatusController", {
      restaurant,
    });
  } catch (error) {
    errorProfiler(error, res, "updateRestaurantStatusController");
  }
};
