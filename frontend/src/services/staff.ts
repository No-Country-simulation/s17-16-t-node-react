import axios from "axios";

import type { IPersonal } from "@/components/dashboard/personal/personal.types";

import api from "./axios-instance";

// export const getStaff = () => api.get("/restaurant");
export const getStaff = async () => axios.get<IPersonal[]>("/mockups/personalMock.json");
