//==========================
// Imports
//==========================
import { errorProfiler, getModelFromRoute, isBodyParamsValidate, isValidateFile, responseContentValidator, successProfiler } from "#utils/validations";
import { getAllUserProfiles, getUserProfile, loginUser, registerUser, updateUserProfileWithPhoto } from "#api/users";
import { uploadImage } from "#utils/cloudinary";


//==========================
// Register
//==========================
export const register = async (req, res) => {
  try {
    const body = await isBodyParamsValidate(req);
    const folder = getModelFromRoute(req.baseUrl);
    const file = isValidateFile(req.file)
    const fieldName = `${body.name}_${body.lastName}`;
    if (file) {
      body.avatar = await uploadImage(file, folder, fieldName);
    }
    const response = await registerUser(body);
    const user = responseContentValidator(response);
    successProfiler(res, 201, "Register", { user });
  } catch (error) {
    errorProfiler(error, res, "Register");
  }
};

//==========================
// Create Profile
//==========================
export const createProfile = async (req, res) => {
  try {
    const photoUrl = await uploadPhoto(req.file);
    req.body.photo = photoUrl; // Asignar la URL de la nueva foto al campo photo
    const newUser = await createUserProfile(req.body, photoUrl);
    res.json(newUser);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body; //cambiar contraseña por password
    const { user, token } = await loginUser(email, password);
    res.json({ user, token });
  } catch (error) {
    res.status(401).json({ mensaje: error.message });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await getUserProfile(req.user.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ mensaje: error.message });
  }
};
/*
export const updateProfile = async (req, res) => {
    try {
        const updatedUser = await UserService.updateUserProfile(req.user._id, req.body);
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};
*/

export const updateProfile = async (req, res) => {
  try {
    upload.single("foto")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ mensaje: "Error al subir el archivo" });
      }
      console.log(req);
      const updatedUser = await updateUserProfileWithPhoto(
        req.query._id,
        req.body,
        req.file
      );
      res.json(updatedUser);
    });
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};


export const updateProfile2 = async (req, res) => {
  try {
    const user = await getUserProfile(req.query._id);
    if (user.photoUrl) {
      await deletePhoto(user.photoUrl);
    }
    const photoUrl = await uploadPhoto(req.file);
    req.body.photo = photoUrl; // Asignar la URL de la nueva foto al campo photo
    const updatedUser = await updateUserProfileWithPhoto(
      req.query._id,
      req.body,
      photoUrl
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};
export const deleteProfile = async (req, res) => {
  try {
    await UserService.deleteUserProfile(req.body._id);
    res.json({ mensaje: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await getAllUserProfiles();
    res.json(users);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

// Función para eliminar el perfil del usuario
export const deleteProfile2 = async (req, res) => {
  try {
    const user = await getUserProfile(req.body._id);
    if (user.photoUrl) {
      await deletePhoto(user.photoUrl);
    }
    await deleteUserProfile(req.body._id);
    res.json({ mensaje: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};
