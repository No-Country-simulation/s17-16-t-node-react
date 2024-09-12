import axios from "axios";

import axiosInstance from "./axios";

// export const getStaff = () => axiosInstance.get("/restaurant");
export const getStaff = async () => axios.get("/mockups/personalMock.json");
