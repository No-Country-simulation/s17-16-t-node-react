//==========================
// Import
//==========================
import { StatuModel } from "#api/status";

//==========================
// Save status
//==========================
export const saveStatus = async (roleData) => {
  return await StatuModel.create(roleData);
};

//==========================
// Get status by
//==========================
export const getStatusBy = async (query) => {
  return await StatuModel.find(query);
};

//==========================
// Update status
//==========================
export const upgradeStatus = async (id, updatedRole) => {
  return await StatuModel.findByIdAndUpdate(id, updatedRole, {
    new: true,
  });
};

//==========================
// Delete status
//==========================
export const deleteStatusAdmin = async (id) => {
  return await StatuModel.findByIdAndDelete(id);
};
