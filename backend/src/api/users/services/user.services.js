//==========================
// Imports
//==========================
import jwt from "jsonwebtoken";
import { compare, hash } from "bcrypt";
import {
  createUserDao,
  deleteUserDao,
  findAllDao,
  findByIdDao,
  findOneDao,
  updateUserDao,
  UserDTO,
} from "#api/users";
import { BC_SALT, JWT_EXPIRATION, JWT_SECRET } from "#src/config";

//==========================
// Const
//==========================
const fieldsToShow = [
  "id",
  "avatar",
  "dni",
  "name",
  "lastName",
  "email",
  "phone",
  "role"
];

//==========================
// Get all users
//==========================
export const getAllUserService = async () => {
  try {
    const searchUsers = await findAllDao();
    return searchUsers.map((user) => new UserDTO(user).toDTO(fieldsToShow));
  } catch (error) {
    throw new Error(error);
  }
};

//==========================
// Get User by id
//==========================
export const getUserByIdService = async (id) => {
  try {
    const searchUser = await findByIdDao(id);
    const userDTO = new UserDTO(searchUser).toDTO(fieldsToShow);
    return userDTO;
  } catch (error) {
    throw new Error(error);
  }
};

//==========================
// Create user
//==========================
export const createUserService = async (userData) => {
  try {
    const hashedPassword = await hash(userData.password, 10);
    const saveUser = await createUserDao({
      ...userData,
      password: hashedPassword,
    });
    const userDTO = new UserDTO(saveUser).toDTO(fieldsToShow);
    return userDTO;
  } catch (error) {
    throw new Error(error);
  }
};

//==========================
// Update user
//==========================
export const updateUserService = async (id, updateData) => {
  try {
    if (updateData.password) {
      updateData.password = await hash(updateData.password, BC_SALT);
    }
    const updateUser = await updateUserDao(id, updateData);
    const userDTO = new UserDTO(updateUser).toDTO(fieldsToShow);
    return userDTO;
  } catch (error) {
    throw new Error(error);
  }
};

//==========================
// Delete user by admin
//==========================
export const deleteUserAdminService = async (id) => {
  try {
    const deleteUser = await deleteUserDao(id);
    const userDTO = new UserDTO(deleteUser).toDTO(fieldsToShow);
    return userDTO;
  } catch (error) {
    throw new Error(error);
  }
};

//==========================
// Login user
//==========================
export const loginUserService = async (email, password) => {
  try {
    const user = await findOneDao({ email });
    if (!user || !(await compare(password, user.password))) {
      throw new Error("Credenciales inválidas");
    }
    const token = jwt.sign({ id: user.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRATION,
    });
    const userDTO = new UserDTO(user).toDTO(fieldsToShow);
    return { userDTO, token };
  } catch (error) {
    throw new Error(error);
  }
};
