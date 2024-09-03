import { getStart } from "../services/start.services.js";
import { apiResponse } from "../../../utils/apiRespond/apiResponse.js";

export const start = async (req, res) => {
  try {
    const startResponse = await getStart();
    apiResponse(res, 200, startResponse);
  } catch (error) {
    apiResponse(res, 500, { error: error.message });
  }
};
