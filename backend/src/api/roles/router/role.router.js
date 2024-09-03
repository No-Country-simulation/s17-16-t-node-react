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
import { setApiKey } from "#src/middlewares";

//==========================
// Router for roles
//==========================
export const roleRouter = Router();

roleRouter.get("/", setApiKey, listRoles);
roleRouter.post("/", addRole);
roleRouter.put("/", updateRole);
roleRouter.delete("/", deleteRole);
