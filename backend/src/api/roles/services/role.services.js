//==========================
// Imports
//==========================
import { RoleDTO, getRoleBy, saveRole, upgradeRole} from "#api/roles";

//==========================
// Costume fields
//==========================
const fieldsToShow = ["id", "name", "description"];

//===============
// Create role
//===============
export const createRole = async (role) => {
  try {
    const savedRole = await saveRole(role);
    const roleDTO = new RoleDTO(savedRole).toDTO(fieldsToShow);
    return roleDTO;
  } catch (error) {
    throw new Error(error);
  }
};

//==========================
// Get role by value
//==========================
export const getRoleByValue = async (query) => {
  try {
    const response = await getRoleBy(query);
    return response.map((role) => new RoleDTO(role).toDTO(fieldsToShow));
  } catch (error) {
    throw new Error(error);
  }
};

//==========================
// Update role by value
//==========================
export const updateRoleBy = async (id, updatedRole) => {
  try {
    const updated = await upgradeRole(id, updatedRole);
    const roleDTO = new RoleDTO(updated).toDTO(fieldsToShow);
    return roleDTO;
  } catch (error) {
    throw new Error(error);
  }
};

//==========================
// Delete role by value
//==========================
export const deleteRoleBy = async (query) => {
  try {
    const deletedRole = await deleteRole(query);
    const roleDTO = new RoleDTO(deletedRole).toDTO(fieldsToShow);
    return roleDTO;
  } catch (error) {
    throw new Error(error);
  }
};
