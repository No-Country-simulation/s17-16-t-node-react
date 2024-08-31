import { getRoleBy, saveRole, updateRole } from '../dao/role.dao.js';

//==========================
// Get role by value
//==========================
export const getRoleByValue = async (query) => {
  try {
    return await getRoleBy(query);
  } catch (error) {
    throw new Error(error);
  }
};

//==========================
// Create role
//==========================
export const createRole = async (role) => {
  try {
    return await saveRole(role);
  } catch (error) {
    throw new Error(error);
  }
};


//==========================
// Update role by value
//==========================
export const updateRoleBy = async (id, updatedRole) => {
  try {
    return await updateRole(id, updatedRole);
  } catch (error) {
    throw new Error(error);
  }


};
/*
//==========================
// Delete role by value
//==========================
const deleteRole = async (id) => {
  const role = await RoleDAO.deleteRole(id);
  return role;
};
*/
