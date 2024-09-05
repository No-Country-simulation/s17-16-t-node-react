//==================
// Imports
//==================
import { readdir, unlink } from 'fs';
import { join } from 'path';
import { CD_MAX_SIZE_IMAGE, setCloudinary } from '#src/config';
import { v2 as cloudinary } from 'cloudinary';

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
    this.key = key;
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
        { width: CD_MAX_SIZE_IMAGE, height: CD_MAX_SIZE_IMAGE, crop: "limit" },
      ],
    };
    const result = await cloudinary.uploader.upload(file.path, options);
    if (!result) throw new CloudinaryError('Error con el servidor Cloudinary');
    return result.secure_url;
  } catch (error) {
    throw new CloudinaryError('Error al subir la foto');
  }
};

//=================
// Delete Image
//=================
export const deleteImage = async (imageUrl) => {
  try {
    const publicId = imageUrl.split('/').slice(-2).join('/').split('.')[0];
    const result = await cloudinary.uploader.destroy(publicId);
    if (result.result !== 'ok') throw new CloudinaryError("Error con el servidor Cloudinary");
    return true;
  } catch (error) {
    throw new CloudinaryError("Error al eliminar la foto");
  }
};

//=====================================
// Delete Folder Content Cloudinary
//=====================================
export const deleteFolderContentCloudinary = async (folderName) => {
  try {
    const result = await cloudinary.api.delete_resources_by_prefix(folderName + '/');
    if (result.deleted_counts === 0) throw new CloudinaryError("No se encontraron recursos para eliminar");
    return true;
  } catch (error) {
    throw new CloudinaryError("Error al eliminar el contenido de la carpeta");
  }
};

//======================
// Delete Temp File
//======================
export const deleteTempFile = (filePath) => {
  try {
    unlink(filePath, (err) => {
      if (err) {
        throw new CloudinaryError('Error al eliminar el archivo temporal', err.message);
      }
    });
  } catch (error) {
    throw new CloudinaryError('Error al intentar eliminar el archivo temporal', error.message);
  }
};

//==========================
// Delete Folder Content
//==========================
export const deleteFolderContent = async (folderPath) => {
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
