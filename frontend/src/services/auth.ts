import axios from "axios";

import type { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from "@/types/auth";
import { getExpToken, setCookie } from "@/lib/cookieUtils";

import axiosInstance from "./axios";

export const registerUser = async (data: RegisterRequest): Promise<RegisterResponse> => {
  try {
    const response = await axiosInstance.post<RegisterResponse>("/users/register", data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.code === "ECONNABORTED") {
        throw new Error("La solicitud ha excedido el tiempo de espera");
      }
      throw new Error(`Error en la solicitud: ${error.message}`);
    }
    throw new Error("Error inesperado");
  }
};

export const loginUser = async (data: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await axiosInstance.post<LoginResponse>("/users/login", data);
    const { token } = response.data;
    const expiresDate = getExpToken(token);
    setCookie("token", token, expiresDate);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.code === "ECONNABORTED") {
        throw new Error("La solicitud ha excedido el tiempo de espera");
      }
      throw new Error(`Error en la solicitud: ${error.message}`);
    }
    throw new Error("Error inesperado");
  }
};
