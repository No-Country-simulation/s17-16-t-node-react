//===========
// Imports
//===========
import { UserModel } from "#api/users";

//=================
// Create user
//=================
export const createUserDao = async (userData) => {
  return await UserModel.create(userData);
};

//============
// Find one
//============
export const findOneDao= async (info) => {
  return await UserModel.findOne(info)
};

//=============
// Find all
//=============
export const findAllDao = async () => {
  return await UserModel.find({isActive: true})
};


//====================
// Find user by id
//====================
export const findByIdDao = async (id) => {
  return await UserModel.findById(id, {isActive: true});
};


//================
// Update user
//================
export const updateUserDao = async (id, updateData) => {
  return await UserModel.findByIdAndUpdate(id, updateData, { new: true });
};

//========================
// Update with session
//========================
export const updateWithSession = async (id, updateData, session) => {
  return await UserModel.findByIdAndUpdate(id, updateData, {
      new: true,
      session,
  });
};

//=================
// Delete user
//=================
export const deleteUserDao = async (id) => {
  return await UserModel.findByIdAndDelete(id)
};
