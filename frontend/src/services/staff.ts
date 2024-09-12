import axios from "axios";

import type { IPersonal } from "@/components/dashboard/personal/personal.types";

import axiosInstance from "./axios";

// export const getStaff = () => axiosInstance.get("/restaurant");
export const getStaff = async () => axios.get<IPersonal[]>("/mockups/personalMock.json");
