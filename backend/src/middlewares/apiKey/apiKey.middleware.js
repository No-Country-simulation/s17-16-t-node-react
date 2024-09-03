import { HostDev, HostProdBack, HostProdFront, Key, PORT } from "#src/config";
import { errorProfiler } from "#utils/validations";
//=====================
// Class Param Error
//=====================
class ApiKeyError extends Error {
  constructor(key, message) {
    super(`${key}: ${message}`);
    this.key = key;
    this.message = message;
  }
}

//======================
// Host Authorization
//======================
const authorizedHosts = [
  `${HostProdFront}`,
  `${HostProdBack}`,
  `${HostDev}:${PORT}`,
];

//===================
// Require Api Key
//===================
export const setApiKey = (req, res, next) => {
  try {
    const apiKey = req.headers.apikey;
    if (!apiKey || Key !== apiKey) {
      throw new ApiKeyError('Key error', 'The api key is not valid.');
    }
    const host = req.headers.host;
    if (!host || !authorizedHosts.includes(host)) {
      throw new ApiKeyError(
        'Host error',
        'The address of the request is not authorized',
      );
    }
    next();
  } catch (error) {
    errorProfiler(error, res, "createProject");
  }
};
