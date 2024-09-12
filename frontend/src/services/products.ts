import axios from "axios";

import axiosInstance from "./axios";

// export const getProducts = async () => axiosInstance.get("/products");
export const getProducts = async () => axios.get("/mockups/productsMock.json");
