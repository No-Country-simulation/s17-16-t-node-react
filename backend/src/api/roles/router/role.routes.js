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
import { setApiKey, setAuthorize } from "#src/middlewares";

//==========================
// Router for roles
//==========================
export const roleRouter = Router();

roleRouter.get("/", setApiKey, listRoles);
roleRouter.post("/", setApiKey, setAuthorize ,addRole);
roleRouter.put("/", setApiKey, setAuthorize, updateRole);
roleRouter.delete("/", setApiKey, setAuthorize, deleteRole);
