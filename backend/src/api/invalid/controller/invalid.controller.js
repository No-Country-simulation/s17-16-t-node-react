//===========
// Imports
//===========
import { apiResponse } from "#utils/apiRespond";
import { getInvalid } from "#api/invalid";

//===========
// Invalid
//===========
export const invalid = async (req, res) => {
  try {
    const invalidResponse = await getInvalid();
    apiResponse(res, 404, "invalid", invalidResponse);
  } catch (error) {
    apiResponse(res, 500, "invalid", { error: error.message });
  }
};
