//==================
// Imports
//==================
import { CD_SIZE_IMAGE, setCloudinary } from '#src/config';
import { v2 as cloudinary } from 'cloudinary';
import { access, constants, readdir, unlink } from 'fs';
import { join } from 'path';

//===============================
// Configuración de Cloudinary
//===============================
setCloudinary();

//===========================
// Class Cloudinary Error
//===========================
class CloudinaryError extends Error {
  constructor(key, message) {
    super(`${key}: ${message}`);
    this.name = key;
    this.message = message;
  }
};

//=================
// Upload Image
//=================
export const uploadImage = async (file, folder, filedName) => {
  try {
    const options = {
      folder: folder,
      public_id: filedName,
      transformation: [
        { width: CD_SIZE_IMAGE, height: CD_SIZE_IMAGE, crop: "limit" },
      ],
    };
    const result = await cloudinary.uploader.upload(file.path, options);
    if (!result) throw new CloudinaryError('UploadError', 'Error con el servidor Cloudinary');
    return result.secure_url;
  } catch (error) {
    throw new CloudinaryError('UploadError', 'Error al subir la foto');
  } finally {
    deleteTempFile(file.path, false);
  }
};

//=================
// Delete Image
//=================
export const deleteImage = async (imageUrl) => {
  try {
    const publicId = getPublicIdFromUrl(imageUrl);
    const result = await cloudinary.uploader.destroy(publicId);
    if (result.result !== 'ok') throw new CloudinaryError('DeleteError', 'Error con el servidor Cloudinary');
  } catch (error) {
    throw new CloudinaryError('DeleteError', 'Error al eliminar la foto');
  }
};


//=====================================
// Delete Folder Content Cloudinary
//=====================================
export const deleteFolderContentCloudinary = async (folderName) => {
  try {
    const result = await cloudinary.api.delete_resources_by_prefix(`${folderName}/`);
    if (result.deleted_counts === 0) throw new CloudinaryError('DeleteError', 'No se encontraron recursos para eliminar');
  } catch (error) {
    throw new CloudinaryError('DeleteError', 'Error al eliminar el contenido de la carpeta');
  }
};

//======================
// Delete Temp File
//======================
export const deleteTempFile = (filePath, ext) => {
  access(filePath, constants.F_OK, (err) => {
    if (err) {
      handleError('El archivo temporal no existe', ext);
    } else {
      unlink(filePath, (err) => {
        if (err) {
          handleError('Error al eliminar el archivo temporal', ext);
        }
      });
    }
  });
};

//======================
// Handle Error
//======================
const handleError = (message, ext) => {
  if (ext) {
    throw new CloudinaryError("ErrorTempFile",message);
  } else {
    console.error("ErrorTempFile", message);
  }
};

//=================
// Set File Name
//=================
export const setFileName = async (fieldName, newName, folder) => {
  validateParameters(fieldName);
  validateParameters(newName);
  validateParameters(folder);
  const currentPublicId = setPublicId(folder, fieldName);
  console.log("currentPublicId -> ", currentPublicId);
  const newPublicId = setPublicId(folder, newName);
  console.log("newPublicId -> ", newPublicId);
  const result = await setNameImage(currentPublicId, newPublicId);
  return result.secure_url;
};

//==========================
// Validate Parameters
//==========================
const validateParameters = (value) => {
 if (!value) {
    throw new CloudinaryError(`${value}Error`, `Parámetro "${value}" inválido para renombrar la imagen`);
  }
};

//==========================
// Build Public Id
//==========================
const setPublicId = (folder, name) => {
  return `${folder}/${name}`;
};

//==========================
// Rename Image
//==========================
const setNameImage = async (currentPublicId, newPublicId) => {
  console.log("currentPublicId SN -> ", currentPublicId);
  console.log("newPublicId SN-> ", newPublicId);
  const result = await cloudinary.uploader.rename(currentPublicId, newPublicId);
  if (!result) {
    throw new CloudinaryError('RenameError', `Error al renombrar la imagen: ${result}`);
  }
  return result.secure_url;
};


//==========================
// Get Utility Functions
//==========================
const getPublicIdFromUrl = (url) => {
  return url.split('/').slice(-2).join('/').split('.')[0];
};

//==========================
// Delete Folder Content
//==========================
export const deleteFolderContent = async (folderPath) => {
  try {
    const files = await readDirAsync(folderPath);
    await Promise.all(files.map(file => deleteFileAsync(join(folderPath, file))));
  } catch (error) {
    throw new CloudinaryError('DeleteError', 'Error al eliminar el contenido de la carpeta');
  }
};
//==========================
// Read dir async
//==========================
const readDirAsync = (path) => {
  return new Promise((resolve, reject) => {
    readdir(path, (err, files) => {
      if (err) {
        return reject(
          new CloudinaryError("ReadError", "Error al leer la carpeta temporal")
        );
      }
      resolve(files);
    });
  });
};

//==========================
// Delete Folder Content
//==========================
const deleteFileAsync = (filePath) => {
  return new Promise((resolve, reject) => {
    unlink(filePath, (err) => {
      if (err) {
        return reject(
          new CloudinaryError(
            "DeleteError",
            "Error al eliminar el archivo temporal"
          )
        );
      }
      resolve();
    });
  });
};

//==========================
// Delete Folder Content
//==========================
export const deleteFolderContent2 = async (folderPath) => {
  try {
    readdir(folderPath, (err, files) => {
      if (err) {
        throw new CloudinaryError('Error al leer la carpeta temporal', err.message);
      }
      files.forEach((file) => {
        const filePath = join(folderPath, file);
        unlink(filePath, (err) => {
          if (err) {
            throw new CloudinaryError('Error al eliminar el archivo temporal', err.message);
          }
        });
      });
    });
  } catch (error) {
    throw new CloudinaryError('Error al eliminar el contenido de la carpeta', error.message);
  }
};
