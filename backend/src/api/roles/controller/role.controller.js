import { errorProfiler, successProfiler } from "../../../utils/validations/error.validations.js";
import { isBodyParamsValidate, isQueryParamsValidate, responseContentValidator } from "../../../utils/validations/params.validations.js";
import { createRole, getRoleByValue, updateRoleBy } from "../services/role.services.js";

//==========================
// Get role by value
//==========================
export const getRoles = async (
  req,
  res,
) => {
  try {
    const query = isQueryParamsValidate(req);
    const response = await getRoleByValue(query);
    const roles = responseContentValidator(response);
    successProfiler(res, 200, 'getRoles', { roles });
  } catch (error) {
    errorProfiler(error, res, 'getRoles');
  };
};

//===================
// Create role
//===================
export const addRole = async (
  req,
  res,
) => {
  try {
    const body = isBodyParamsValidate(req);
    const response = await createRole(body);
    const role = responseContentValidator(response);
    successProfiler(res, 201, 'createRole', { role });
  } catch (error) {
    errorProfiler(error, res, 'createRole');
  };
};

//============================
// Update role by value
//============================
export const updateRole = async (
  req,
  res,
) => {
  try {
    const query = isQueryParamsValidate(req);
    const body = isBodyParamsValidate(req);
    const role = await updateRoleBy(query, body);
    successProfiler(res, 202, 'updateRole', { role });
  } catch (error) {
    errorProfiler(error, res, 'updateRole');
  };
};

//=============================
// Delete role by value
//=============================
export const deleteRole = async (
  req,
  res,
) => {
  try {
    const query = isQueryParamsValidate(req);
    const role = await updateRoleBy(query, { isActive: false });
    successProfiler(res, 202, 'deleteRole', { role });
  } catch (error) {
    errorProfiler(error, res, 'deleteRole');
  };
};
