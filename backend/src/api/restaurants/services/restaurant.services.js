import {
  getAllDao,
  getRestaurantByIdDao,
  getRestaurantsByOwnerDao,
  saveRestaurantDao,
  updateRestaurantByIdDao,
  updateRestaurantStatusByIdDao,
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
};

//==========================
// Create new restaurant
//==========================
export const createRestaurantService = async (restaurantData) => {
  try {
    const savedRestaurant = await saveRestaurantDao(restaurantData);

    return savedRestaurant;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

//==========================`
// Update restaurant by ID
//==========================
export const updateRestaurantByIdService = async (id, updatedData) => {
  try {
    const updatedRestaurant = await updateRestaurantByIdDao(id, updatedData, {
      new: true,
    });
    if (!updatedRestaurant) {
      throw new Error("Restaurant not found");
    }
    return updatedRestaurant;
  } catch (error) {
    throw new Error(error);
  }
};

//==========================
// Delete restaurant by ID
//==========================
export const updateRestaurantStatusByIdService = async (id) => {
  try {
    const restaurant = await updateRestaurantStatusByIdDao(id);
    return restaurant;
  } catch (error) {
    throw new Error("Error updating restaurant status");
  }
};
