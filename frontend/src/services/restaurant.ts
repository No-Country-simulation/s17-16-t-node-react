import axios from "axios";

import type { IRestaurant } from "@/components/dashboard/restaurant/restaurant.types";

import axiosInstance from "./axios";

// export const getRestaurant = () => axiosInstance.get("/restaurant");
export const getRestaurant = async () => axios.get<IRestaurant>("/mockups/restaurantMock.json");
