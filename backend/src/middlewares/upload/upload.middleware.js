//==================
// Imports
//==================
import multer from "multer";
import { errorProfiler, getModelFromRoute } from "#utils/validations";

//=====================
// Class Upload Error
//=====================
class UploadError extends Error {}
/*class UploadError extends Error {
  constructor(key, message) {
    super(`${key}: ${message}`);
    this.key = key;
    this.message = message;
  }
}*/

//==================
// Upload
//==================
const upload = multer({ dest: "src/assets/uploads/" });

/*
file ->  {
  fieldname: 'avatar',
  originalname: 'download (1).png',
  encoding: '7bit',
  mimetype: 'image/png',
  destination: 'src/assets/uploads/',
  filename: 'a4224174c56183424881d2ef21b8ef34',
  path: 'src\\assets\\uploads\\a4224174c56183424881d2ef21b8ef34',
  size: 3654
*/
//======================
// Upload Middleware
//======================
export const setUpload = (req, res, next) => {
  try {
    let folder = getFolderName(req.baseUrl);
    console.log("folder -> ", folder);
    upload.single(`${folder}`)(req, res, (err) => {
      if (err) {
        throw new UploadError("Error al subir el archivo");
      }
      next();
    });
  } catch (error) {
    errorProfiler(error, res, "setUpload");
  }
};

//======================
// Get Folder Name
//======================
export const getFolderName = (baseUrl) => {
  const ruta = getModelFromRoute(baseUrl);
  console.log("ruta -> ", ruta);
  if (ruta === "User") return "avatar";
  if (ruta === "Restaurant") return "logo";
  if (ruta === "Menu") return "foto";
  return "image";
};
