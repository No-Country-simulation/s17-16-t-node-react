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

//================
// Create User
//================
export const createUserController = async (req, res) => {
  try {
    //validad y guarda body
    const body = await isBodyParamsValidate(req);
    const response = await createUserService(body);
    const user = responseContentValidator(response);
    //validamos y subimos img
    const tempImg = await uploadImageToCloud(
      req,
      user.id,
      user.name,
      user.avatar
    );
    console.warn("tempImg -> ", tempImg);
    console.warn("user.avatar -> ", user.avatar);
    if (tempImg !== DEFAULT_AVATAR) {
      console.info("update Image ok");
      user.avatar = tempImg;
    } else {
      console.warn("Imagen por defecto");
    }
    console.warn("user.avatar update -> ", user.avatar);
    // actualizado el logo del usuario
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

//==========================
// Upload Profile
//==========================
export const updateUserController = async (req, res) => {
  try {
    const id = isQueryParamsValidate(req);
    const body = await isBodyParamsValidate(req);
    const response = await getUserByIdService(id);
    let updateUser = responseContentValidator(response);
    const tempImg = await uploadImageToCloud(
      req,
      updateUser.id,
      updateUser.name,
      updateUser.avatar
    );
    console.warn("tempImg -> ", tempImg);
    console.warn("updateUser.avatar -> ", updateUser.avatar);
    if (tempImg !== DEFAULT_AVATAR) {
      console.log("body -> ", body);
      if (updateUser.avatar !== tempImg) {
        if (!body) {
          console.info("update Image ok");
        }
        if (updateUser.avatar !== tempImg && body.length > 0){
          console.info("deleteImage ok");
          await deleteImage(updateUser.avatar);
        }
        updateUser = { ...updateUser, avatar: tempImg };
      } else {
        console.warn("Imagen ya existe");
      }
    }
    updateUser = { ...updateUser, ...body };
    const updateUserLogo = await updateUserService(updateUser.id, updateUser);
    const user = responseContentValidator(updateUserLogo);
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
