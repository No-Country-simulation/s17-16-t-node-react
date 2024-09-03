//==========================
// Imports
//==========================
import { Router } from "express";
import {
  addRole,
  deleteRole,
  listRoles,
  updateRole,
} from "#api/roles";

//==========================
// Router for roles
//==========================
export const roleRouter = Router();

roleRouter.get("/", listRoles);
roleRouter.post("/", addRole);
roleRouter.put("/", updateRole);
roleRouter.delete("/", deleteRole);
