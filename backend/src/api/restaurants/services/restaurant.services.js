//import { restaurantModel as Restaurant } from "../dao/mongobd/model/restaurant.model.js";

import { getAll, saveRestaurant } from "#api/restaurants";

/*const restaurantDAO = new restaurantDAO();

function toRestaurantDTO(restaurantDoc) {
  return new RestaurantDTO({
    name: restaurantDoc.name,
    address: restaurantDoc.address,
    category: restaurantDoc.category,
    logo: restaurantDoc.logo,
    owner: restaurantDoc.owner,
    menus: restaurantDoc.menus,
    staff: restaurantDoc.staff,
    isActive: restaurantDoc.isActive,
    createdAt: restaurantDoc.createdAt,
    updatedAt: restaurantDoc.updatedAt,
  });
}*/

//==========================
// Get all restaurants
//==========================
export const getAllRestaurants = async () => {
  try {
    const restaurantDoc = await getAll();
    if (!restaurantDoc) {
      throw new Error("Restaurant not found");
    }
    return toRestaurantDTO(restaurantDoc);
  } catch (error) {
    throw new Error(error);
  }
};

//==========================
// Get restaurant by ID
//==========================
export const getRestaurantById = async (id) => {
  try {
    const restaurantDoc = await restaurantModel.findById(id);
    if (!restaurantDoc) {
      throw new Error("Restaurant not found");
    }
    return toRestaurantDTO(restaurantDoc);
  } catch (error) {
    throw new Error(error);
  }
};

//==========================
// Create new restaurant
//==========================
export const createRestaurant = async (restaurantData) => {
  try {
    const savedRestaurant = await saveRestaurant(newRestaurant);
    return toRestaurantDTO(savedRestaurant);
  } catch (error) {
    throw new Error(error);
  }
};

//==========================
// Update restaurant by ID
//==========================
export const updateRestaurantById = async (id, updatedData) => {
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
export const deleteRestaurantById = async (id) => {
  try {
    const deletedRestaurant = await Restaurant.findByIdAndDelete(id);
    if (!deletedRestaurant) {
      throw new Error("Restaurant not found");
    }
    return toRestaurantDTO(deletedRestaurant);
  } catch (error) {
    throw new Error(error);
  }
};
