//===========
// Imports
//===========
import {
  createUserService,
  getAllUserService,
  getUserByIdService,
  loginUserService,
  updateUserService,
} from "#api/users";
import { deleteTempFile } from "#utils/cloudinary";
import {
  errorProfiler,
  isBodyParamsValidate,
  isQueryParamsValidate,
  responseContentValidator,
  setUrlImage,
  successProfiler,
  uploadImageToCloud,
} from "#utils/validations";

//=========
// Login
//=========
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { userDTO, token } = await loginUserService(email, password);
    successProfiler(res, 201, "login", { user: { ...userDTO }, token });
  } catch (error) {
    errorProfiler(error, res, "login");
  }
};

//================
// Create User
//================
export const createUserController = async (req, res) => {
  try {
    const body = await isBodyParamsValidate(req);
    const saveUser = await createUserService(body);
    const userSave = responseContentValidator(saveUser);
    const tempImg = await uploadImageToCloud(
      req,
      userSave.id,
      userSave.name,
      userSave.avatar
    );
    userSave.avatar = await setUrlImage(tempImg, userSave.avatar, req.baseUrl);
    const updateUser = await updateUserService(userSave.id, {
      avatar: userSave.avatar,
    });
    const user = responseContentValidator(updateUser);
    successProfiler(res, 201, "createUserController", { user });
  } catch (error) {
    if (req.file) {
      deleteTempFile(req.file.path, false);
    }
    errorProfiler(error, res, "createUserController");
  }
};

//===================
// Get User by Id
//===================
export const getUserByIdController = async (req, res) => {
  try {
    const id = isQueryParamsValidate(req);
    const response = await getUserByIdService(id);
    const user = responseContentValidator(response);
    successProfiler(res, 200, "getUserByIdController", { user });
  } catch (error) {
    errorProfiler(error, res, "getUserByIdController");
  }
};

//==========================
// Get All users
//==========================
export const getAllUsersController = async (req, res) => {
  try {
    const users = await getAllUserService();
    successProfiler(res, 200, "getAllUsersController", { users });
  } catch (error) {
    errorProfiler(error, res, "getAllUsersController");
  }
};

//================
// Upload User
//================
export const updateUserController = async (req, res) => {
  try {
    const id = isQueryParamsValidate(req);
    const body = await isBodyParamsValidate(req);
    const searchUserId = await getUserByIdService(id);
    const searchUser = responseContentValidator(searchUserId);
    const updateResp = await updateUserService(searchUser.id, body);
    const userUpdate = responseContentValidator(updateResp);
    const tempImg = await uploadImageToCloud(
      req,
      userUpdate.id,
      searchUser.name,
      userUpdate.avatar
    );
    searchUser.avatar = await setUrlImage(tempImg, searchUser.avatar, req.baseUrl);
    const updateUser = await updateUserService(userUpdate.id, {
      avatar: userUpdate.avatar,
    });
    const user = responseContentValidator(updateUser);
    successProfiler(res, 201, "updateUserController", { user });
  } catch (error) {
    if (req.file) {
      deleteTempFile(req.file.path, false);
    }
    errorProfiler(error, res, "updateUserController");
  }
};

//===============
// Delete User
//===============
export const deleteUserController = async (req, res) => {
  try {
    const id = isQueryParamsValidate(req);
    const resp = await updateUserService(id, { isActive: false });
    const user = responseContentValidator(resp);
    successProfiler(res, 200, "deleteUserController", { user });
  } catch (error) {
    errorProfiler(error, res, "deleteUserController");
  }
};
