//==================
// Imports
//==================
import multer from 'multer';
import { errorProfiler } from '#utils/validations';

//=====================
// Class Upload Error
//=====================
class UploadError extends Error {
  constructor(key, message) {
    super(`${key}: ${message}`);
    this.key = key;
    this.message = message;
  }
};

//==================
// Upload
//==================
const upload = multer({ dest: 'uploads/' });

//======================
// Upload Middleware
//======================
export const setUpload = (req, res, next) => {
  try {
    upload.single('image')(req, res, (err) => {
      console.log('req', req.file);
      if (err) {
        throw new UploadError("Upload error", "Error al subir el archivo");
      }
      next();
    });
  } catch (error) {
    errorProfiler(error, res, "setUpload");
  }
};
