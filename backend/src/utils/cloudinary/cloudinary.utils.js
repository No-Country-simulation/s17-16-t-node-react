//==================
// Imports
//==================
import { access, constants, readdir, unlink } from "fs";
import { join } from "path";
import { CD_MAX_SIZE_IMAGE, setCloudinary } from "#src/config";
import { v2 as cloudinary } from "cloudinary";

//===============================
// Cloudinary configuration
//===============================
dotenv.config();
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
    const result = await cloudinary.uploader
      .upload(file.path, options)
      .catch((error) => {
        throw error;
      });
    if (!result) throw error("Error con el servidor Cloudinary");
    return result.secure_url;
  } catch (error) {
    throw error("Error al subir la foto");
  } finally {
    deleteTempFile(file.path, false);
  }
};

//=================
// Delete Image
//=================
export const deleteImage = async (imageUrl) => {
  try {
    const publicId = imageUrl.split("/").slice(-2).join("/").split(".")[0];
    const result = await cloudinary.uploader.destroy(publicId);
    if (result.result !== "ok") throw error("Error con el servidor Cloudinary");
  } catch (error) {
    throw new CloudinaryError("Error al eliminar la foto");
  }
};

//=====================================
// Delete Folder Content Cloudinary
//=====================================
export const deleteFolderContentCloudinary = async (folderName) => {
  try {
    const result = await cloudinary.api.delete_resources_by_prefix(
      folderName + "/"
    );
    if (result.deleted_counts === 0)
      throw new CloudinaryError("No se encontraron recursos para eliminar");
  } catch (error) {
    throw new CloudinaryError("Error al eliminar el contenido de la carpeta");
  }
};

//======================
// Delete Temp File
//======================
export const deleteTempFile = (filePath, ext) => {
  try {
    access(filePath, constants.F_OK, (err) => {
      if (err) {
        handleError("El archivo temporal no existe", ext);
      } else {
        unlink(filePath, (err) => {
          if (err) {
            handleError("Error al eliminar el archivo temporal", ext);
          }
        });
      }
    });
  } catch (error) {
    handleError("Error al intentar eliminar el archivo temporal", ext);
  }
};

//======================
// Handle Error
//======================
const handleError = (message, ext) => {
  if (ext) {
    throw new CloudinaryError(message);
  } else {
    console.error(message);
  }
};

//==========================
// Delete Folder Content
//==========================
export const deleteFolderContent = async (folderPath) => {
  try {
    readdir(folderPath, (err, files) => {
      if (err) {
        throw new CloudinaryError(
          "Error al leer la carpeta temporal",
          err.message
        );
      }
      files.forEach((file) => {
        const filePath = join(folderPath, file);
        unlink(filePath, (err) => {
          if (err) {
            throw new CloudinaryError(
              "Error al eliminar el archivo temporal",
              err.message
            );
          }
        });
      });
    });
  } catch (error) {
    throw new CloudinaryError(
      "Error al eliminar el contenido de la carpeta",
      error.message
    );
  }
};
