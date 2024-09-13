//=============
// Imports
//=============
import {
  CD_MAX_FILE_SIZE,
  CD_RESOURCE_EXT,
  CD_RESOURCE_TYPE,
} from "#src/config";
import { deleteImage, setFileNameImage, uploadImage } from "#utils/cloudinary";
import { validateKeysInMongooseModel } from "#utils/validations";
import { URL } from "url";

//=====================
// Class Param Error
//=====================
class ParamError extends Error {
  constructor(key, message) {
    super(`${key}: ${message}`);
    this.key = key;
    this.message = message;
  }
}

//==========
// Const
//==========
const routeToVariableMap = {
  User: "DEFAULT_AVATAR",
  Menu: "DEFAULT_PICTURE",
  Restaurant: "DEFAULT_LOGO",
  Payment: "DEFAULT_ICON",
};
const folderNameMap = {
  User: "avatar",
  Restaurant: "logo",
  Menu: "picture",
  Payment: "icon",
};

//=========================
// Validate query params
//=========================
export const isQueryParamsValidate = (req) => {
  const method = req.method;
  const model = getModelFromRoute(req.baseUrl);
  let validatedParams;
  if (method === "GET") {
    validatedParams = handleGetQueryParams(req.query, model);
  } else if (method === "PUT" || method === "DELETE") {
    validatedParams = handlePutOrDeleteQueryParams(req.query, model);
  }
  return validatedParams;
};

//============================
// Handle get query params
//============================
const handleGetQueryParams = (queryParams, model) => {
  if (Object.keys(queryParams).length === 0) {
    return { isActive: true };
  } else if (
    Object.keys(queryParams).length === 1 &&
    queryParams.hasOwnProperty("isActive")
  ) {
    return { isActive: queryParams.isActive !== "false" };
  } else {
    return isKeyAndValueValidate(queryParams, model);
  }
};

//======================================
// Handle put or delete query params
//======================================
const handlePutOrDeleteQueryParams = (queryParams, model) => {
  if (Object.keys(queryParams).length === 0) {
    throw new ParamError("QueryError", "must have parameter");
  }
  if (
    Object.keys(queryParams).length === 1 &&
    queryParams.hasOwnProperty("id")
  ) {
    return isKeyAndValueValidate({ _id: queryParams.id }, model);
  } else {
    throw new ParamError(
      "Query error",
      "The query parameter only supports id."
    );
  }
};

//======================================
// Validate key and value
//======================================
const isKeyAndValueValidate = (queryParams, model) => {
  let [key, value] = Object.entries(queryParams)[0];
  if (!key || !value) {
    throw new ParamError("Query error", "The wrong query parameter.");
  }
  if (key === "id") {
    key = "_id";
  }
  const query = validateKeysInMongooseModel(model, { [key]: value });
  return query;
};

//==============================
// Validate body params
//==============================
export const isBodyParamsValidate = async (req) => {
  const body = req.body;
  const method = req.method;
  if (Object.keys(body).length < 1 && method === "POST") {
    throw new ParamError("Body error", "must have body");
  }
  const model = getModelFromRoute(req.baseUrl);
  const validateFields = validateKeysInMongooseModel(model, body);
  const validateZod = await getZodValidationSchema(model);
  validateZod(body);
  return validateFields;
};

//=================
// Validate File
//=================
export const isValidateFile = (file) => {
  if (!file) {
    return null;
  }
  validateMimeType(file);
  validateSize(file);
  validateName(file);
  validatePath(file);
  return file;
};

//======================
// Validate Mime Type
//======================
const validateMimeType = (file) => {
  const resourceType = CD_RESOURCE_TYPE;
  const allowedExtensions = CD_RESOURCE_EXT.replace(/[[\]]/g, "").split(",");
  const allowedMimeTypes = allowedExtensions.map(
    (ext) => `${resourceType}/${ext}`
  );
  if (!allowedMimeTypes.includes(file.mimetype)) {
    throw new ParamError(
      "File error",
      `The file must be one of the following types: ${allowedMimeTypes.join(
        ", "
      )}`
    );
  }
};

//======================
// Validate File Size
//======================
const validateSize = (file) => {
  const maxSize = parseInt(CD_MAX_FILE_SIZE, 10);
  const minSize = 1; // 0B
  if (file.size > maxSize) {
    throw new ParamError(
      "File error",
      `The file size must be less than ${maxSize / (1024 * 1024)}MB`
    );
  }
  if (file.size < minSize) {
    throw new ParamError("File error", "The file size must be greater than 0B");
  }
};

//======================
// Validate File Name
//======================
const validateName = (file) => {
  if (!file.originalname) {
    throw new ParamError("File error", "The file must have a name");
  }
};

//======================
// Validate File Path
//======================
const validatePath = (file) => {
  if (!file.path) {
    throw new ParamError("File error", "The file must have a path");
  }
};

//==============================
// response content validator
//==============================
export const responseContentValidator = (response) => {
  if (response.length < 1) {
    throw new ParamError("Content error", "Search value not found");
  }
  return response;
};

//aqui

//===================
// Upload img cloud
//===================
export const uploadImageToCloud = async (req, id, name, image) => {
  try {
    const method = req.method;
    const file = isValidateFile(req.file);
    const folder = getModelFromRoute(req.baseUrl);
    const fieldName = getFieldName(name, id.slice(-5));
    if (method === "POST") {
      return handlePostMethod(file, folder, fieldName, req.baseUrl);
    }
    if (method === "PUT") {
      return await handlePutMethod({ req, id, file, folder, fieldName, image });
    }
  } catch (error) {
    throw new Error(error);
  }
};

//=====================
// Handle post method
//=====================
const handlePostMethod = async (file, folder, fieldName, route) => {
  if (!file) return await getDefaultImage(route);
  return uploadImage(file, folder, fieldName);
};

//======================
// Handle put method
//======================
const handlePutMethod = async ({ req, id, file, folder, fieldName, image }) => {
  let name = req.body.name;
  if (!name) {
    name = fieldName.split("_").slice(0, -1).join("_");
  }
  const newName = getFieldName(name, id.slice(-5));
  if (!file) {
    if (fieldName !== newName) {
      console.warn("actualizando nombre...");
      return await setFileNameImage(fieldName, newName, folder);
    }
    return await getDefaultImage(req.baseUrl);
  }
  console.warn("Subiendo imagen...");
  const imgUp = await uploadImage(file, folder, newName);
  if (fieldName !== newName) {
    console.warn("borrando imagen...");
    await deleteImage(image);
  }
  return imgUp;
};

//==================
// Get field name
//==================
export const getFieldName = (...args) => {
  if (args.length === 0) {
    return "default";
  }
  const formattedName = args
    .filter((arg) => arg) // Filtrar valores nulos o indefinidos
    .join(" ")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_");
  return formattedName;
};

//======================
// validate fieldName
//======================
const isValidateFieldName = (ruta, fieldName) => {
  const url = new URL(ruta);
  const nameImage = url.pathname
    .split("/")
    .pop()
    .replace(/\.[^/.]+$/, "");
  return fieldName.includes(nameImage);
};

//======================
// Get Folder Name
//======================
export const getFolderName = (routePath) => {
  const ruta = getModelFromRoute(routePath);
  return folderNameMap[ruta] || "image";
};

//==============================
// Get model from route
//==============================
export const getModelFromRoute = (routePath) => {
  const parts = routePath.split("/");
  let modelName = parts[parts.length - 1];
  if (modelName.endsWith("s")) {
    modelName = modelName.slice(0, -1);
  }
  return modelName.charAt(0).toUpperCase() + modelName.slice(1);
};

//====================
// Set Url Image
//====================
export const setUrlImage = async (tempImg, image, route) => {
  const defaultImage = await getDefaultImage(route);
  if (tempImg !== defaultImage) {
    console.warn("Actualizando Image...");
    return tempImg;
  } else {
    console.warn("Imagen actualizada.");
    return image;
  }
};

//==============================
// Get default image
//==============================
const getDefaultImage = async (route) => {
  const modelName = getModelFromRoute(route);
  const variableName = routeToVariableMap[modelName];
  if (!variableName) {
    throw new ParamError(
      "Validation error",
      `No se encontró una variable para el modelo: ${modelName}`
    );
  }
  const config = await import("#src/config");
  return config[variableName];
};
//=======================================
// Get zod validation schema for model
//=======================================
const getZodValidationSchema = async (modelName) => {
  const validationFilePath = `#api/${modelName.toLowerCase()}s`;
  console.log("VFP->",validationFilePath);
  const modelZodName = `validate${modelName}`;
  console.log("VZN->",modelZodName);
  const module = await import(validationFilePath);
  const validateZod = module[modelZodName];
  if (!validateZod) {
    throw new ParamError(
      "Validation error",
      `No validation schema found for model: ${modelName}`
    );
  }
  return validateZod;
};
