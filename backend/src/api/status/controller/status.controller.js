//==========================
// Imports
//==========================
import axios from "axios";
import {
  errorProfiler,
  successProfiler,
  isBodyParamsValidate,
  isQueryParamsValidate,
  responseContentValidator,
} from "#utils/validations";
import { createRole, getRoleByValue, updateRoleBy } from "#api/roles";

//==========================
// Get role by value
//==========================
export const listStatus = async (req, res) => {
  try {
    const query = isQueryParamsValidate(req);
    const response = await getRoleByValue(query);
    const status = responseContentValidator(response);
    successProfiler(res, 200, "listStatus", { status });
  } catch (error) {
    errorProfiler(error, res, "listStatus");
  }
};

//===================
// Create role
//===================
export const addStatus = async (req, res) => {
  try {
    const body = await isBodyParamsValidate(req);
    const response = await createRole(body);
    const status = responseContentValidator(response);
    successProfiler(res, 201, "addStatus", { status });
  } catch (error) {
    errorProfiler(error, res, "addStatus");
  }
};

//============================
// Update role by value
//============================
export const updateStatus = async (req, res) => {
  try {
    const query = isQueryParamsValidate(req);
    const body =  await isBodyParamsValidate(req);
    const response = await updateRoleBy(query, body);
    const status = responseContentValidator(response);
    successProfiler(res, 202, "updateStatus", { status });
  } catch (error) {
    errorProfiler(error, res, "updateStatus");
  }
};

//=============================
// Delete role by value
//=============================
export const deleteStatus = async (req, res) => {
  try {
    const query = isQueryParamsValidate(req);
    const response = await updateRoleBy(query, { isActive: false });
    const status = responseContentValidator(response);
    successProfiler(res, 202, "deleteRole", { status });
  } catch (error) {
    errorProfiler(error, res, "deleteRole");
  }
};

//===============================
// Delete role with validation
//===============================
export const deleteStatusWithValidation = async (req, res) => {
  try {
    const loggedInUser = await fetchLoggedInUser();
    const userDetails = await fetchUserDetails(loggedInUser.id);
    if (
      userDetails.role !== "admin" ||
      !userDetails.permissions.includes("delete")
    ) {
      throw new Error({
        message: "No tienes permisos para eliminar este estado.",
      });
    }
    const query = isQueryParamsValidate(req);
    const response = await Role.deleteOne(query);
    const status = responseContentValidator(response);
    successProfiler(res, 202, "deleteStatusWithValidation", { status });
  } catch (error) {
    errorProfiler(error, res, "deleteStatusWithValidation");
  }
};
