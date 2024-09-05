//====================
// Imports
//====================
import { ZodError } from "zod";
import { apiResponse } from "#utils/apiRespond";

//====================
// Success Profiler
//====================
export const successProfiler = (res, statusCode, functionName, data) => {
  handleApiResponse(res, statusCode, functionName, data);
};

//====================
// Error Profiler
//====================
export const errorProfiler = (error, res, functionName) => {
  const errorType = error.constructor.name;
  const { statusCode, key } = errorMapping[errorType] || {
    statusCode: 500,
    key: "Server error",
  };
  const errorMessage = generateErrorMessage(error);
  const errorKey = error.key || key || "Error";

  handleApiResponse(res, statusCode, functionName, {
    [errorKey]: errorMessage,
  });
};

//============================================
// Error mapping for cleaner error handling
//============================================
const errorMapping = {
  Error: { statusCode: 401, key: "Client error" },
  FieldError: { statusCode: 409, key: "Field error" },
  ParamError: { statusCode: 409 },
  QueryError: { statusCode: 409 },
  RouterError: { statusCode: 409 },
  ZodError: { statusCode: 422, key: "Validation error" },
  MongooseError: { statusCode: 500, key: "Mongoose error" },
  CastError: { statusCode: 400, key: "Mongoose cast error" },
  ValidationError: { statusCode: 400, key: "Mongoose validation error" },
  TypeError: { statusCode: 500, key: "Type error" },
  SyntaxError: { statusCode: 500, key: "Syntax error" },
  ReferenceError: { statusCode: 500, key: "Reference error" },
  ApiKeyError: { statusCode: 404 },
  AuthError: { statusCode: 401 },
  UploadError: { statusCode: 500},
  CloudinaryError: { statusCode: 500, key: "Cloudinary error" },
};

//==============================================
// Generate error message based on error type
//==============================================
const generateErrorMessage = (error) => {
  if (error instanceof ZodError) {
    return error.errors.map((e) => `${e.path}: ${e.message}`).join(",");
  } else if (error instanceof Error) {
    return error.message;
  }
  return error.message;
};

//=======================
// Handle api response
//=======================
const handleApiResponse = (res, statusCode, functionName, content) => {
  apiResponse(res, statusCode, functionName, content);
};
