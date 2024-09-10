//===========
// Imports
//===========
import {
  getAllUserProfiles,
  getUserProfile,
  loginUser,
  registerUser,
  updateUserProfile,
} from "#api/users";
import { deleteImage, deleteTempFile, uploadImage } from "#utils/cloudinary";
import {
  errorProfiler,
  getModelFromRoute,
  isBodyParamsValidate,
  isQueryParamsValidate,
  isValidateFile,
  responseContentValidator,
  successProfiler,
  uploadImageToCloud,
} from "#utils/validations";

//=============
// Register
//=============
export const register = async (req, res) => {
  try {
    //validad y guarda body
    const body = await isBodyParamsValidate(req);
    const response = await registerUser(body);
    const user = responseContentValidator(response);
    //validamos y subimos img
    user.avatar = await uploadImageToCloud(req, user);
    const updateUserLogo = await updateUserProfile(user._id, user);
    const newUser = responseContentValidator(updateUserLogo);
    successProfiler(res, 201, "Register", { newUser });
  } catch (error) {
    if (req.file) {
      deleteTempFile(req.file.path, false);
    }
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
