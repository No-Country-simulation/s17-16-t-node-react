//==========================
// Import
//==========================
import { StatusModel } from "#api/status";

//==========================
// Get role by
//==========================
export const getStatusBy = async (query) => {
  return await StatusModel.find(query);
};

//==========================
// Save role
//==========================
export const saveStatus = async (roleData) => {
  return await StatusModel.create(roleData);
};

//==========================
// Update role
//==========================
export const upgradeStatus = async (id, updatedRole) => {
  return await StatusModel.findByIdAndUpdate(id, updatedRole, { new: true, session });
};

//==========================
// Delete role
//==========================
const deleteStatusAdmin = async (id) => {
  return await StatusModel.findByIdAndDelete(id);
};
