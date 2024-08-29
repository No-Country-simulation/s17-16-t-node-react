import { apiResponse } from "../../../utils/apiRespond/apiResponse.js";
import { getInvalid } from "../services/invalid.services.js";


export const invalid = async (req, res) => {
  try {
    const invalidResponse = await getInvalid();
    apiResponse(res, 404, invalidResponse);
  } catch (error) {
    apiResponse(res, 500, { error: error.message });
  }
};
