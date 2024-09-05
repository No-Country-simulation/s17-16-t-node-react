//==========================
// Imports
//==========================
import { errorProfiler, getModelFromRoute, isBodyParamsValidate, isQueryParamsValidate, isValidateFile, responseContentValidator, successProfiler } from "#utils/validations";
import { getAllUserProfiles, getUserProfile, loginUser, registerUser, updateUserProfile} from "#api/users";
import { deleteImage, uploadImage } from "#utils/cloudinary";
import { DEFAULT_AVATAR } from "#src/config";

//==========================
// Register
//==========================
export const register = async (req, res) => {
  try {
    const body = await isBodyParamsValidate(req);
    const folder = getModelFromRoute(req.baseUrl);
    const file = isValidateFile(req.file)
    const fieldName = `${body.name}_${body.lastName}`;
    body.avatar = await uploadImage(file, folder, fieldName);
    const response = await registerUser(body);
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
    res.json(users);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
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
    const folder = getModelFromRoute(req.baseUrl);
    const file = isValidateFile(req.file)
    const fieldName = `${body.name}_${body.lastName}`;
    if (user.avatar !== DEFAULT_AVATAR) {
      console.log('avartar -> ', user.avatar);
      const del = await deleteImage(user.avatar);
      console.log('del', (del===true)?'ok':'fail');
    };

    user = {...body};
    user.avatar = await uploadImage(file, folder, fieldName);
    console.log('user2', user);
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
    res.status(400).json({ mensaje: error.message });
  }
};
