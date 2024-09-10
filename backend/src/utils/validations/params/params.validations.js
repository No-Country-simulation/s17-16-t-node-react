//=====================
// Imports
//=====================
import {
  CD_MAX_FILE_SIZE,
  CD_RESOURCE_EXT,
  CD_RESOURCE_TYPE,
  DEFAULT_AVATAR,
} from "#src/config";
import { deleteTempFile, uploadImage } from "#utils/cloudinary";
import { getFieldName, validateKeysInMongooseModel } from "#utils/validations";

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
  if (Object.keys(body).length < 1) {
    throw new ParamError("Body error", "must have body");
  }
  const model = getModelFromRoute(req.baseUrl);
  const validateFields = validateKeysInMongooseModel(model, body);
  const validateZod = await getZodValidationSchema(model);
  validateZod(body);
  return validateFields;
};

//=================
// validate File
//================
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
const validateMimeType = (file) => {
  const resourceType = CD_RESOURCE_TYPE;
  const allowedExtensions = CD_RESOURCE_EXT.replace(/[\[\]]/g, "").split(",");
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

const validateSize = (file) => {
  const maxSize = parseInt(CD_MAX_FILE_SIZE, 10); // Max size from .env
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

const validateName = (file) => {
  if (!file.originalname) {
    throw new ParamError("File error", "The file must have a name");
  }
};

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

//=========================================
// Map model name to zod validation file
//=========================================
const modelToZodValidationMap = {
  Role: "#api/roles",
  User: "#api/users",
  Restaurant: "#api/restaurants",
  Menu: "#api/menus",
};

//=======================================
// Get zod validation schema for model
//=======================================
const getZodValidationSchema = async (modelName) => {
  const validationFilePath = modelToZodValidationMap[modelName];
  if (!validationFilePath) {
    throw new ParamError(
      "Validation error",
      `No validation schema found for model: ${modelName}`
    );
  }
  const { validateZod } = await import(validationFilePath);
  return validateZod;
};

//===================
// Upload img cloud
//===================
export const uploadImageToCloud = async (req, body) => {
  const file = req.file;
  console.log("file -> ", file);
  if (!file) {
    return DEFAULT_AVATAR;
  }
  const folder = getModelFromRoute(req.baseUrl);
  const fieldName = getFieldName(body.name, body.id.slice(-5));
  deleteTempFile(file.path);
  const url = await uploadImage(file, folder, fieldName);
  return url;
};
