import { restaurantModel } from "#api/restaurants";

// get all restaurants
export const getAllDao = async () => {
  try {
    const restaurants = await restaurantModel.find();
    return restaurants;
  } catch (error) {
    throw new Error("Error al obtener los restaurantes: " + error.message);
  }
};

// get a restaurant by ID
export const getRestaurantByIdDao = async (id) => {
  try {
    const restaurant = await restaurantModel.findById({ _id: id });
    if (!restaurant) {
      throw new Error("Restaurante no encontrado");
    }
    return restaurant;
  } catch (error) {
    throw new Error("Error al obtener el restaurante: " + error.message);
  }
};

// get restaurants by user ID
export const getRestaurantsByOwnerDao = async (owner) => {
  try {
    const restaurants = await restaurantModel.find({ owner: owner });
    return restaurants;
  } catch (error) {
    throw new Error("Error al obtener los restaurantes: " + error.message);
  }
};

// create a new restaurant
export const saveRestaurantDao = async (restaurantData) => {
  try {
    const restaurant = await restaurantModel.create(restaurantData);
    return restaurant;
  } catch (error) {
    throw new Error("Error al crear el restaurante: " + error.message);
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
export const deleteRestaurantByIdDao = async (id) => {
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
