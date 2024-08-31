import RoleModel from '../models/role.model.js';

//==========================
// Get role by
//==========================
export const getRoleBy = async (query) => {
  return await RoleModel.find(query);
};

//==========================
// Save role
//==========================
export const saveRole = async (role) => {
  return await RoleModel.create(role)
};

//==========================
// Update role
//==========================
export const updateRole = async (id, updatedRole) => {
  return await RoleModel.findByIdAndUpdate(id, updatedRole, { new: true });
};

/*
//==========================
// Delete role
//==========================
const deleteRoleAdmin = async (id) => {
  const role = await RoleModel.findByIdAndDelete(id);
  return role;
};
*/
