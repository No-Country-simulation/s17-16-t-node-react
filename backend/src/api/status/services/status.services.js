//==========================
// Imports
//==========================
import { deleteStatusAdmin, getStatusBy, saveStatus, StatusDTO, upgradeStatus } from "#api/status";

//==========================
// Costume fields
//==========================
const fieldsToShow = ["id", "name", "description"];

//===============
// Create role
//===============
export const createStatus = async (role) => {
  try {
    const savedStatus = await saveStatus(role);
    return new StatusDTO(savedStatus).toDTO(fieldsToShow);
  } catch (error) {
    throw new Error(error);
  }
};

//==========================
// Get Status by value
//==========================
export const getStatusByValue = async (query) => {
  try {
    const response = await getStatusBy(query);
    return response.map((role) => new StatusDTO(role).toDTO(fieldsToShow));
  } catch (error) {
    throw new Error(error);
  }
};

//==========================
// Update status by value
//==========================
export const updateStatusBy = async (id, updatedStatus) => {
  try {
    const updated = await upgradeStatus(id, updatedStatus);
    return new StatusDTO(updated).toDTO(fieldsToShow);
  } catch (error) {
    throw new Error(error);
  }
};

//==========================
// Delete status by value
//==========================
export const deleteStatusBy = async (query) => {
  try {
    const deletedStatus = await deleteStatusAdmin(query);
    return new StatusDTO(deletedStatus).toDTO(fieldsToShow);
  } catch (error) {
    throw new Error(error);
  }
};
