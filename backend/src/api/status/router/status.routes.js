//==========================
// Imports
//==========================
import { setApiKey, setAuthorize, setUpload } from "#src/middlewares";
import { Router } from "express";
import { addStatus, deleteStatus, listStatus, updateStatus } from "#api/status";

//==========================
// Router for roles
//==========================
export const statusRouter = Router();

statusRouter.get("/", setApiKey, listStatus);
statusRouter.post("/", setApiKey, setAuthorize, setUpload ,addStatus);
statusRouter.put("/", setApiKey, setAuthorize, updateStatus);
statusRouter.delete("/", setApiKey, setAuthorize, deleteStatus);
