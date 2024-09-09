//==================
// Imports
//==================
import { CD_MAX_SIZE_IMAGE, setCloudinary } from "#src/config";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

//===============================
// Configuración de Cloudinary
//===============================
dotenv.config();
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
    if (!result) throw new CloudinaryError("Error con el servidor Cloudinary");
    return result.secure_url;
  } catch (error) {
    throw new CloudinaryError("Error al subir la foto");
  }
};

//=================
// Delete Image
//=================
export const deleteImage = async (photoUrl) => {
  try {
    const publicId = photoUrl.split("/").slice(-2).join("/").split(".")[0];
    const result = await cloudinary.uploader.destroy(publicId);
    if (result.result !== "ok")
      throw new CloudinaryError("Error con el servidor Cloudinary");
    return true;
  } catch (error) {
    throw new CloudinaryError("Error al eliminar la foto");
  }
};

//=================
// Delete Folder Content
//=================
export const deleteFolderContent = async (folderName) => {
  try {
    const result = await cloudinary.api.delete_resources_by_prefix(
      folderName + "/"
    );
    if (result.deleted_counts === 0)
      throw new Error("No se encontraron recursos para eliminar");
    return true;
  } catch (error) {
    throw new CloudinaryError("Error al eliminar el contenido de la carpeta");
  }
};
