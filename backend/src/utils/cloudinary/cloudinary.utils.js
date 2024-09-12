//==================
// Imports
//==================
import { CD_SIZE_IMAGE, setCloudinary } from "#src/config";
import { v2 as cloudinary } from "cloudinary";
import { access, constants, readdir, unlink } from "fs";
import { join } from "path";

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
}

//=================
// Upload Image
//=================
export const uploadImage = async (file, folder, filedName) => {
  try {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: folder,
      public_id: filedName,
      resource_type: "image",
      transformation: [
        { width: CD_SIZE_IMAGE, height: CD_SIZE_IMAGE, crop: "limit" },
      ],
    });
    if (!result)
      throw new CloudinaryError(
        "UploadError",
        "Error con el servidor Cloudinary"
      );
    return result.secure_url;
  } catch (error) {
    throw new CloudinaryError("UploadError", "Error al subir la foto");
  } finally {
    deleteTempFile(file.path, false);
  }
};

//=================
// Delete Image
//=================
export const deleteImage = async (imageUrl) => {
  try {
    console.warn("imageUrl D ->", imageUrl);
    const publicId = getPublicIdFromUrl(imageUrl);
    const result = await cloudinary.api.delete_resources([`${publicId}`], {
      type: "upload",
      resource_type: "image",
    });
    // uploader.destroy(publicId);
    if (!result)
      throw new CloudinaryError(
        "DeleteError",
        "Error con el servidor Cloudinary"
      );
  } catch (error) {
    throw new CloudinaryError("DeleteError", "Error al eliminar la foto");
  }
};

//=====================================
// Delete Folder Content Cloudinary
//=====================================
export const deleteFolderContentCloudinary = async (folderName) => {
  try {
    const result = await cloudinary.api.delete_resources_by_prefix(
      `${folderName}/`
    );
    if (result.deleted_counts === 0)
      throw new CloudinaryError(
        "DeleteError",
        "No se encontraron recursos para eliminar"
      );
  } catch (error) {
    throw new CloudinaryError(
      "DeleteError",
      "Error al eliminar el contenido de la carpeta"
    );
  }
};

//======================
// Delete Temp File
//======================
export const deleteTempFile = (filePath, ext) => {
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
};

//======================
// Handle Error
//======================
const handleError = (message, ext) => {
  if (ext) {
    throw new CloudinaryError("ErrorTempFile", message);
  } else {
    console.error("ErrorTempFile", message);
  }
};

//=================
// Set File Name
//=================
export const setFileNameImage = async (fieldName, newName, folder) => {
  validateParameters(fieldName);
  validateParameters(newName);
  validateParameters(folder);
  const currentPublicId = getPublicId(folder, fieldName);
  const newPublicId = getPublicId(folder, newName);
  const renameResponse = await setImagePublicId(currentPublicId, newPublicId);
  const updateResponse = await setImageName(renameResponse.secure_url);
  return updateResponse.secure_url;
};

//==========================
// Validate Parameters
//==========================
const validateParameters = (value) => {
  if (!value) {
    throw new CloudinaryError(
      `${value}Error`,
      `Parámetro "${value}" inválido para renombrar la imagen`
    );
  }
};

//==========================
// Build Public Id
//==========================
const getPublicId = (folder, name) => {
  return `${folder}/${name}`;
};

//==========================
// Set Public Id Image
//==========================
const setImagePublicId = async (currentPublicId, newPublicId) => {
  console.warn("Actualizando el identificador publico de la imagen...");
  const response = await cloudinary.uploader.rename(
    currentPublicId,
    newPublicId,
    {
      type: "upload",
      resource_type: "image",
    }
  );
  if (!response) {
    throw new CloudinaryError(
      "RenameError",
      `Error al cambiar el id publico la imagen: ${response}`
    );
  }
  return response;
};

//==========================
// Set Image Name
//==========================
const setImageName = async (url) => {
  const publicId = getPublicIdFromUrl(url);
  const name = publicId.split("/")[1];
  console.warn("Actualizando el nombre de la imagen...");
  const response = await cloudinary.api.update(publicId, {
    resource_type: "image",
    type: "upload",
    display_name: name,
  });
  if (!response) {
    throw new CloudinaryError(
      "RenameError",
      `Error al cambiar nombre la imagen: ${response}`
    );
  }
  return response;
};

//==========================
// Get Utility Functions
//==========================
const getPublicIdFromUrl = (url) => {
  return url.split("/").slice(-2).join("/").split(".")[0];
};

//==========================
// Delete Folder Content
//==========================
export const deleteFolderContent = async (folderPath) => {
  try {
    const files = await readDirAsync(folderPath);
    await Promise.all(
      files.map((file) => deleteFileAsync(join(folderPath, file)))
    );
  } catch (error) {
    throw new CloudinaryError(
      "DeleteError",
      "Error al eliminar el contenido de la carpeta"
    );
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
