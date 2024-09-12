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
import { DEFAULT_AVATAR } from "#src/config";
import { deleteImage, deleteTempFile } from "#utils/cloudinary";
import {
  errorProfiler,
  isBodyParamsValidate,
  isQueryParamsValidate,
  responseContentValidator,
  setUrlImage,
  successProfiler,
  uploadImageToCloud,
} from "#utils/validations";

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
    const response = await createUserService(body);
    const user = responseContentValidator(response);
    const tempImg = await uploadImageToCloud(
      req,
      user.id,
      user.name,
      user.avatar
    );
    user.avatar = setUrlImage(tempImg, user.avatar);
    const updateUserLogo = await updateUserService(user.id, user);
    const newUser = responseContentValidator(updateUserLogo);
    successProfiler(res, 201, "createUserController", { newUser });
  } catch (error) {
    if (req.file) {
      deleteTempFile(req.file.path, false);
    }
    errorProfiler(error, res, "createUserController");
  }
};

//==========================
// Upload Profile
//==========================
export const updateUserController = async (req, res) => {
  try {
    const id = isQueryParamsValidate(req);
    const body = await isBodyParamsValidate(req);
    const response = await getUserByIdService(id);
    let updateUser = responseContentValidator(response);
    console.log('body -> ', body);
    const updateUserImgBase = await
    updateUserService(updateUser.id, body);
    const userUpdate = responseContentValidator(updateUserImgBase);
    const tempImg = await uploadImageToCloud(
      req,
      userUpdate.id,
      updateUser.name,
      userUpdate.avatar
    );
    userUpdate.avatar = setUrlImage(tempImg, updateUser.avatar);
    console.warn("updateUser.avatar.actl -> ", userUpdate.avatar);
    const userActImg = await updateUserService(userUpdate.id, { avatar: userUpdate.avatar });
    const user = responseContentValidator(userActImg);
    console.log("user -> ", user);
    successProfiler(res, 201, "updateUserController", { user });
  } catch (error) {
    if (req.file) {
      deleteTempFile(req.file.path, false);
    }
    errorProfiler(error, res, "updateUserController");
  }
};

//==========================
// Delete Profile
//==========================
export const deleteUserController = async (req, res) => {
  try {
    const id = isQueryParamsValidate(req);
    const resp = await updateUserService(id, { isActive: false });
    const delUser = responseContentValidator(resp);
    successProfiler(res, 200, "deleteUserController", { delUser });
  } catch (error) {
    errorProfiler(error, res, "deleteUserController");
  }
};
