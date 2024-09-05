//==========================
// Imports
//==========================
import { errorProfiler, getModelFromRoute, isBodyParamsValidate, isQueryParamsValidate, isValidateFile, responseContentValidator, successProfiler } from "#utils/validations";
import { getAllUserProfiles, getUserProfile, loginUser, registerUser, updateUserProfile} from "#api/users";
import { deleteImage, deleteTempFile, uploadImage } from "#utils/cloudinary";
import { DEFAULT_AVATAR } from "#src/config";

//==========================
// Register
//==========================
export const register = async (req, res) => {
  try {
    const body = await isBodyParamsValidate(req);
    if (!req.file) {
      body.avatar = DEFAULT_AVATAR;
    } else {
    const folder = getModelFromRoute(req.baseUrl);
    const file = isValidateFile(req.file)
    const fieldName = `${body.name}_${body.lastName}`;
    body.avatar = await uploadImage(file, folder, fieldName);
    await deleteTempFile(file.path);
    }
    let response;
    try {
       response = await registerUser(body);
    } catch (error) {
      if (body.avatar !== DEFAULT_AVATAR) {
        await deleteImage(body.avatar);
      };
      throw error;
    }
    const user = responseContentValidator(response);
    successProfiler(res, 201, "Register", { user });
  } catch (error) {
    errorProfiler(error, res, "Register");
  }
};

//=========
// Login
//=========
export const login = async (req, res) => {
  try {
    const { email, password } = req.body; //cambiar contraseña por password
    const { user, token } = await loginUser(email, password);
    successProfiler(res, 201, "CreateProfile", { user, token });
  } catch (error) {
    errorProfiler(error, res, "Register");
  }
};

//===============
// Get Profile
//===============
export const getProfile = async (req, res) => {
  try {
    const response = await getUserProfile(req.user.id);
    const user = responseContentValidator(response);
    successProfiler(res, 200, "getProfile", { user });
  } catch (error) {
    errorProfiler(error, res, "getProfile");
  }
};

//==========================
// Get All Profiles
//==========================
export const getAllUsers = async (req, res) => {
  try {
    const users = await getAllUserProfiles();
    successProfiler(res, 200, "getAllUsers", { users });
  } catch (error) {
    errorProfiler(error, res, "getAllUsers");
  }
};

//==========================
// Upload Profile
//==========================
export const updateProfile = async (req, res) => {
  try {
    const id = isQueryParamsValidate(req);
    const body = await isBodyParamsValidate(req);
    const resp = await getUserProfile(id);
    let user = responseContentValidator(resp);
    if (req.file) {
      const file = isValidateFile(req.file)
      const folder = getModelFromRoute(req.baseUrl);
      const fieldName = `${body.name}_${body.lastName}`;
      if (user.avatar !== DEFAULT_AVATAR) {
        await deleteImage(user.avatar);
      };
      user.avatar = await uploadImage(file, folder, fieldName);
    }
    user = {...body};
    const response = await updateUserProfile(id, user);
    const uploadUser = responseContentValidator(response);
    successProfiler(res, 200, "uploadProfile", { uploadUser });
  } catch (error) {
    errorProfiler(error, res, "getProfile");
  }
};

//==========================
// Delete Profile
//==========================
export const deleteProfile = async (req, res) => {
  try {
    const id = isQueryParamsValidate(req);
    const resp = await updateUserProfile(id, { isActive: false });
    const deleteUser = responseContentValidator(resp);
    const delUser = responseContentValidator(deleteUser);
    successProfiler(res, 200, "deleteProfile", { delUser });
  } catch (error) {
    errorProfiler(error, res, "deleteProfile");
  }
};
