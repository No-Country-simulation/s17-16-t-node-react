//==========================
// Imports
//==========================
import { errorProfiler, successProfiler } from "../../../utils/validations/error.validations.js";
import { isBodyParamsValidate, isQueryParamsValidate, responseContentValidator } from "../../../utils/validations/params.validations.js";
import { createRole, getRoleByValue, updateRoleBy } from "../services/role.services.js";
import axios from 'axios';

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
    console.log("respC -> ", roles);
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
    const response = await updateRoleBy(query, body);
    const role = responseContentValidator(response);
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
    const response = await updateRoleBy(query, { isActive: false });
    const role = responseContentValidator(response);
    successProfiler(res, 202, 'deleteRole', { role });
  } catch (error) {
    errorProfiler(error, res, 'deleteRole');
  };
};

//===============================
// Delete role with validation
//===============================
export const deleteRoleWithValidation = async (
  req,
  res,
) => {
  try {
    const loggedInUser = await fetchLoggedInUser();
    const userDetails = await fetchUserDetails(loggedInUser.id);
    if (userDetails.role !== 'admin' || !userDetails.permissions.includes('delete')) {
       throw new Error({ message: 'No tienes permisos para eliminar este rol.' });
    }
    const query = isQueryParamsValidate(req);
    const response = await Role.deleteOne(query);
    const role = responseContentValidator(response);
    successProfiler(res, 202, 'deleteRoleWithValidation', { role });
  } catch (error) {
    errorProfiler(error, res, 'deleteRoleWithValidation');
  };
};

//==========================
// Get User Logged In
//==========================
const fetchLoggedInUser = async () => {
  try {
    const response = await axios.get('/ruta/para/obtener/usuario/logueado');
    return response.data;
  } catch (error) {
    throw new Error('Error obteniendo el usuario logueado');
  }
};

//==========================
// Get User info
//==========================
// Función para obtener los detalles del usuario
const fetchUserDetails = async (userId) => {
  try {
    const response = await axios.get(`/ruta/para/obtener/detalles/usuario/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error obteniendo los detalles del usuario');
  }
};
