import axios from "axios";

import type { Order } from "@/types/orders";
import type { Table } from "@/types/tables";

import api from "./axios-instance";

// export const getOrders = async () => axios.get("/orders");
export const getOrders = async () => axios.get<Order[]>("/mockups/ordersMock.json");

export const getTables = async () => axios.get<Table[]>("/mockups/tablesMock.json");
