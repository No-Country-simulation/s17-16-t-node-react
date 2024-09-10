import { v2 as cloudinary } from "cloudinary";
import { CD_API_KEY, CD_API_SECRET, CD_NAME } from "#src/config";

export const setCloudinary = () => cloudinary.config({
  cloud_name: CD_NAME,
  api_key: CD_API_KEY,
  api_secret: CD_API_SECRET,
});
