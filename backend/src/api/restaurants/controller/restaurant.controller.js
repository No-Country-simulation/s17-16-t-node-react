//restaurant.controller.js
import {
  errorProfiler,
  getModelFromRoute,
  isBodyParamsValidate,
  isValidateFile,
  responseContentValidator,
  successProfiler,
  uploadImageToCloud,
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
import { DEFAULT_LOGO } from "#src/config";

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
      logo: DEFAULT_LOGO,
      name: body.name,
      address: body.address,
      category: body.category,
      owner: body.owner,
    };

    const response = await createRestaurantService(restaurantData);
    const restaurantValidate = responseContentValidator(response);

    restaurantValidate.logo = await uploadImageToCloud(req, restaurantValidate);
    const updatedRestaurant = await updateRestaurantByIdService(
      restaurantValidate.id,
      restaurantValidate
    );
    const restaurant = responseContentValidator(updatedRestaurant);
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
    const body = req.body;
    const id = req.params.id;
    let updatedRestaurantData = await getRestaurantByIdService(id);
    console.log("Updated restaurant data1:", updatedRestaurantData);
    console.log("body:", body);

    /*
    if (req.user.role !== "admin") {
      console.log("User is not admin, deleting owner field");
      delete updatedRestaurantData.owner;
    }*/
    updatedRestaurantData.logo = await uploadImageToCloud(
      req,
      updatedRestaurantData
    );
    console.log("Image uploaded, secure URL:", updatedRestaurantData.logo);
    //updatedRestaurantData = { ...updatedRestaurantData, ...body };
    updatedRestaurantData = Object.assign({}, updatedRestaurantData, body);
    console.log("Updated restaurant data2:", updatedRestaurantData);

    // Show Muestra los datos que se intentarán actualizar en la base de datos
    console.log("Updated restaurant data:", updatedRestaurantData);

    const updatedRestaurant = await updateRestaurantByIdService(
      req.params.id,
      updatedRestaurantData
    );

    const restaurant = responseContentValidator(updatedRestaurant);
    successProfiler(res, 201, "updateUserController", { restaurant });
  } catch (error) {
    errorProfiler(error, res, "updateUserController");
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
    successProfiler(res, 200, "getRestaurantByIdController", { restaurant });
  } catch (error) {
    errorProfiler(error, res, "getRestaurantByIdController");
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
    successProfiler(res, 200, "getRestaurantsByOwnerController", {
      restaurants,
    });
  } catch (error) {
    errorProfiler(error, res, "getRestaurantsByOwnerController");
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
