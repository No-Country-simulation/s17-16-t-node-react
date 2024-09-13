import axios from "axios";

import type { IRestaurant } from "@/components/dashboard/restaurant/restaurant.types";

import api from "./axios-instance";

// export const getRestaurant = () => api.get("/restaurant");
export const getRestaurant = async () => axios.get<IRestaurant>("/mockups/restaurantMock.json");
