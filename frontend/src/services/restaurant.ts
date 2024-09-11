import axios from "axios";

import axiosInstance from "./axios";

// export const getRestaurant = () => axiosInstance.get("/restaurant");
export const getRestaurant = async () => axios.get("/mockups/restaurantMock.json");
