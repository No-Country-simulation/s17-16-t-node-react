//==========================
// Imports
//==========================
import {
  createStatus,
  deleteStatusBy,
  getStatusByValue,
  updateStatusBy,
} from "#api/status";
import {
  errorProfiler,
  isBodyParamsValidate,
  isQueryParamsValidate,
  responseContentValidator,
  successProfiler,
} from "#utils/validations";

//===================
// Create Status
//===================
export const addStatus = async (req, res) => {
  try {
    const body = await isBodyParamsValidate(req);
    const response = await createStatus(body);
    const status = responseContentValidator(response);
    successProfiler(res, 201, "addStatus", { status });
  } catch (error) {
    errorProfiler(error, res, "addStatus");
  }
};
//==========================
// Get status by value
//==========================
export const listStatus = async (req, res) => {
  try {
    const query = isQueryParamsValidate(req);
    const response = await getStatusByValue(query);
    const status = responseContentValidator(response);
    successProfiler(res, 200, "listStatus", { status });
  } catch (error) {
    errorProfiler(error, res, "listStatus");
  }
};

//============================
// Update status by value
//============================
export const updateStatus = async (req, res) => {
  try {
    const query = isQueryParamsValidate(req);
    const body = await isBodyParamsValidate(req);
    const response = await updateStatusBy(query, body);
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
    const response = await updateStatusBy(query, { isActive: false });
    const status = responseContentValidator(response);
    successProfiler(res, 202, "deleteStatus", { status });
  } catch (error) {
    errorProfiler(error, res, "deleteStatus");
  }
};

//=================================
// Delete status with validation
//=================================
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
    const response = await deleteStatusBy(query);
    const status = responseContentValidator(response);
    successProfiler(res, 202, "deleteStatusWithValidation", { status });
  } catch (error) {
    errorProfiler(error, res, "deleteStatusWithValidation");
  }
};
