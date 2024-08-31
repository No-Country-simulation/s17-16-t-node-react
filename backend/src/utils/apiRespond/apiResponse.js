import { statusCodes } from "../data/statusCode.js";

const findStatusCode = (code) => {
  if (!Array.isArray(statusCodes)) return null;
  return statusCodes
    .flatMap((item) => item.codes)
    .find((item) => item.code === code.toString());
};

export const apiResponse = (res, code, endPoint, data) => {
  const isValidCode =
    code > 99 && code < 600 && code !== null && code !== undefined;
  if (isValidCode) {
    const foundData = findStatusCode(code);
    if (foundData) {
      foundData.status = statusCodes[code.toString().slice(0, -2) - 1]?.status;
      return res.status(code).json({
        code: code,
        status: foundData.status,
        description: foundData.description,
        endPoint: endPoint,
        limit: `You have ${res.get(
          "RateLimit-Limit"
        )} requests every 15 minutes`,
        remaining: `You have ${res.get(
          "RateLimit-Remaining"
        )} remaining requests`,
        rest: `${Math.floor(res.get("RateLimit-Reset") / 60)} minute and ${(res.get("RateLimit-Reset") % 60).toString().padStart(2, "0")} seconds to reset`,
        data: data || { message: "no data" },
      });
    } else {
      return res.status(404).json({
        code: 404,
        status: "Error",
        description: "Not found",
        data: {
          msg: "Unassigned code",
        },
      });
    }
  } else {
    return res.status(404).json({
      code: 404,
      status: "error",
      description: "Not found",
      data: {
          msg: "Invalid code",
        },
    });
  }
};
