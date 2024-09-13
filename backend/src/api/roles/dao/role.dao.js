//=============
// Import
//=============
import { RoleModel } from "#api/roles";

//==========================
// Get role by
//==========================
export const getRoleBy = async (query) => {
  return await RoleModel.find(query);
};

//==========================
// Save role
//==========================
export const saveRole = async (roleData) => {
  return await RoleModel.create(roleData);
};

//==========================
// Update role
//==========================
export const upgradeRole = async (id, updatedRole) => {
  return await RoleModel.findByIdAndUpdate(id, updatedRole, { new: true });
};

//==========================
// Delete role
//==========================
const deleteRoleAdmin = async (id) => {
  return await RoleModel.findByIdAndDelete(id);
};
