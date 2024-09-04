//==================
// Imports
//==================
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { errorProfiler } from "#utils/validations";

//=====================
// Class Auth Error
//=====================
class AuthError extends Error {
  constructor(key, message) {
    super(`${key}: ${message}`);
    this.key = key;
    this.message = message;
  }
};

//==================
// Config
//==================
config();

//====================
// Auth Middleware
//====================
export const setAuthorize = async (req, res, next) => {
  try {
    const bearerToken = req.header("authorization");
    if (!bearerToken)
      throw new AuthError("Token Error", "Fallo la autorización");
    const token = bearerToken.split(" ")[1];
    const user = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!user)
      throw new AuthError("Credential Error", "Credenciales inválidas.");
    req.user = user;
    next();
  } catch (error) {
    errorProfiler(error, res, "setAuthorize");
  }
};
