//==================
// Imports
//==================
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
}
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
    console.log("UCD -> ", result);
    if (!result) throw new CloudinaryError('Error con el servidor Cloudinary');
    return result.secure_url;
  } catch (error) {
    throw new CloudinaryError('Error al subir la foto');
  }
};

//=================
// delete Imagen
//=================
export const deleteImage = async (photoUrl) => {
  try {
    const publicId = photoUrl.split('/').pop().split('.')[0];
    const result = await cloudinary.uploader.destroy(publicId);
    if (!result) throw new Error("Error con el servidor Cloudinary");
    console.log("DCD -> ",result);
    return true;
  } catch (error) {
    throw new Error('Error al eliminar la foto');
  }
};
