import { restaurantModel } from "#api/restaurants";

// create a new restaurant
export const saveRestaurant = async (restaurantData) => {
  try {
    const restaurant = new restaurantModel(restaurantData);
    await restaurant.save();
    return restaurant;
  } catch (error) {
    throw new Error("Error al crear el restaurante: " + error.message);
  }
};

// get all restaurants
export const getAll = async () => {
  try {
    const restaurants = await restaurantModel.find();
    return restaurants;
  } catch (error) {
    throw new Error("Error al obtener los restaurantes: " + error.message);
  }
};

// get a restaurant by ID
export const getRestaurantById = async (id) => {
  try {
    const restaurant = await restaurantModel.findById(id);
    if (!restaurant) {
      throw new Error("Restaurante no encontrado");
    }
    return restaurant;
  } catch (error) {
    throw new Error("Error al obtener el restaurante: " + error.message);
  }
};

// update a restaurant by ID
export const updateRestaurantById = async (id, updateData) => {
  try {
    const restaurant = await restaurantModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!restaurant) {
      throw new Error("Restaurante no encontrado");
    }
    return restaurant;
  } catch (error) {
    throw new Error("Error al actualizar el restaurante: " + error.message);
  }
};

// delete a restaurant by ID
export const deleteRestaurantById = async (id) => {
  try {
    const restaurant = await restaurantModel.findByIdAndDelete(id);
    if (!restaurant) {
      throw new Error("Restaurante no encontrado");
    }
    return restaurant;
  } catch (error) {
    throw new Error("Error al eliminar el restaurante: " + error.message);
  }
};

// get restaurants by user ID
export const getRestaurantsByUserId = async (userId) => {
  try {
    const restaurants = await restaurantModel.find({ owner: userId });
    return restaurants;
  } catch (error) {
    throw new Error("Error al obtener los restaurantes: " + error.message);
  }
};
