import {
  getAllDao,
  getRestaurantByIdDao,
  getRestaurantsByOwnerDao,
  saveRestaurantDao,
} from "#api/restaurants";

//==========================
// Get all restaurants
//==========================
export const getAllRestaurantsService = async () => {
  try {
    const restaurantDoc = await getAllDao();
    if (!restaurantDoc) {
      throw new Error("Restaurant not found");
    }
    return restaurantDoc;
  } catch (error) {
    throw new Error(error);
  }
};

//==========================
// Get restaurant by ID
//==========================
export const getRestaurantByIdService = async (id) => {
  try {
    const restaurantDoc = await getRestaurantByIdDao(id);
    if (!restaurantDoc) {
      throw new Error("Restaurant not found");
    }
    return restaurantDoc;
  } catch (error) {
    throw new Error(error);
  }
};

//============================
// Get restaurants by owner
//============================
export const getRestaurantsByOwnerService = async (owner) => {
  try {
    const restaurantDoc = await getRestaurantsByOwnerDao(Owner);
    if (!restaurantDoc) {
      throw new Error("Restaurant not found");
    }
    return restaurantDoc;
  } catch (error) {
    throw new Error(error);
  }

}

//==========================
// Create new restaurant
//==========================
export const createRestaurantService = async (restaurantData) => {
  try {
    const savedRestaurant = await saveRestaurantDao(restaurantData);
    return savedRestaurant;
  } catch (error) {
    throw new Error(error);
  }
};

//==========================`
// Update restaurant by ID
//==========================
export const updateRestaurantByIdService = async (id, updatedData) => {
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );
    if (!updatedRestaurant) {
      throw new Error("Restaurant not found");
    }
    return toRestaurantDTO(updatedRestaurant);
  } catch (error) {
    throw new Error(error);
  }
};

//==========================
// Delete restaurant by ID
//==========================
export const deleteRestaurantByIdService = async (id) => {
  try {
    const deletedRestaurant = await deleteRestaurantByIdDao(id);
    if (!deletedRestaurant) {
      throw new Error("Restaurant not found");
    }
    return toRestaurantDTO(deletedRestaurant);
  } catch (error) {
    throw new Error(error);
  }
};
