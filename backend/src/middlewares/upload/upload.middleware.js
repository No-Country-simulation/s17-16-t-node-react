//==================
// Imports
//==================
import { errorProfiler, getFolderName } from "#utils/validations";
import multer from "multer";

//=====================
// Class Upload Error
//=====================
class UploadError extends Error {
  constructor(key, message) {
    super(`${key}: ${message}`);
    this.key = key;
    this.message = message;
  }
}

//==================
// Upload
//==================
const upload = multer({ dest: "uploads/" });

//======================
// Upload Middleware
//======================
export const setUpload = (req, res, next) => {
  try {
    let folder = getFolderName(req.baseUrl);
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
