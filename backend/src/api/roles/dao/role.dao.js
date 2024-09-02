//==========================
// Import
//==========================
import RoleModel from "./models/role.model.js";

//==========================
// Get role by
//==========================
export const getRoleBy = async (query) => {
  return await RoleModel.find(query);
};

//==========================
// Save role
//==========================
export const saveRole = async (roleData, fields = []) => {
  return await RoleModel.create(roleData);
};

//==========================
// Update role
//==========================
export const updateRole = async (id, updatedRole, fields = []) => {
  return await RoleModel.findByIdAndUpdate(id, updatedRole, { new: true });
};

//==========================
// Delete role
//==========================
const deleteRoleAdmin = async (id) => {
  return await RoleModel.findByIdAndDelete(id);
};
