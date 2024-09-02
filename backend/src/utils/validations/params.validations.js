import { validateKeysInMongooseModel } from "./model.validations.js";

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

//========================
// Validate query params
//========================
export const isQueryParamsValidate = (req) => {
  const method = req.method;
  console.log("method ->", method);
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
  const model = getModelFromRoute(req.baseUrl);
  if (Object.keys(body).length < 1) {
    throw new ParamError("Body error", "must have body");
  }
  const validateFields = validateKeysInMongooseModel(model, body);
  const validateZop = await getZodValidationSchema(model);
  validateZop(body);
  return validateFields;
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
const getModelFromRoute = (routePath) => {
  const parts = routePath.split("/");
  const modelName = parts[parts.length - 1].replace("s", "");
  return modelName.charAt(0).toUpperCase() + modelName.slice(1);
};

//=========================================
// Map model name to zod validation file
//=========================================
const modelToZodValidationMap = {
  Role: '../../api/roles/zod/role.zop.js',
};

//=======================================
// Get zod validation schema for model
//=======================================
const getZodValidationSchema = async (modelName) => {
  const validationFilePath = modelToZodValidationMap[modelName];
  if (!validationFilePath) {
    throw new ParamError("Validation error", `No validation schema found for model: ${modelName}`);
  }
  const { validateZop } = await import(validationFilePath);
  return validateZop;
};
