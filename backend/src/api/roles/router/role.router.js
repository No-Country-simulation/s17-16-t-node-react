//==========================
// Imports
//==========================
import { Router } from "express";
import {
  getRoles,
  addRole,
  updateRole,
  deleteRole,
} from "../controller/role.controller.js";

//==========================
// Router for roles
//==========================
export const roleRouter = Router();

roleRouter.get("/", getRoles);
roleRouter.post("/", addRole);
roleRouter.put("/", updateRole);
roleRouter.delete("/", deleteRole);
