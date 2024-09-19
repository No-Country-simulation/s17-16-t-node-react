import axios from "axios";

import type { IProduct } from "@/types/menu";

import api from "./axios-instance";

// export const getProducts = async () => api.get("/products");
export const getProducts = async () => axios.get<IProduct[]>("/mockups/productsMock.json");
