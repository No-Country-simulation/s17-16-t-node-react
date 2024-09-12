import axios from "axios";

import type { IProduct } from "@/components/dashboard/menu/menu.types";

import axiosInstance from "./axios";

// export const getProducts = async () => axiosInstance.get("/products");
export const getProducts = async () => axios.get<IProduct[]>("/mockups/productsMock.json");
