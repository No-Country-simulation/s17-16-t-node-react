//==========================
// Imports
//==========================
import { getRoleBy, saveRole, updateRole } from "../dao/role.dao.js";
import { RoleDTO } from "../dto/role.dto.js";

//==========================
// Costume fields
//==========================
const fieldsToShow = ["id", "name", "description", "isActive","updatedAt"];

//==========================
// Get role by value
//==========================
export const getRoleByValue = async (query) => {
  try {
    console.log("queryS -> ", query);
    const response = await getRoleBy(query);
    return response.map((role) => new RoleDTO(role).toDTO(fieldsToShow));
  } catch (error) {
    throw new Error(error);
  }
};

//==========================
// Create role
//==========================
export const createRole = async (role) => {
  try {
    const savedRole = await saveRole(role);
    const roleDTO = new RoleDTO(savedRole);
    return roleDTO.toDTO(fieldsToShow);
  } catch (error) {
    throw new Error(error);
  }
};

//==========================
// Update role by value
//==========================
export const updateRoleBy = async (id, updatedRole) => {
  try {
    const updated = await updateRole(id, updatedRole);
    const roleDTO = new RoleDTO(updated);
    return roleDTO.toDTO(fieldsToShow);
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
    const roleDTO = new RoleDTO(deletedRole);
    return roleDTO.toDTO(fieldsToShow);
  } catch (error) {
    throw new Error(error);
  }
};
