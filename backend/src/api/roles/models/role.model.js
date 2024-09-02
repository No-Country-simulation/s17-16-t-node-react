//==========================
// Imports
//==========================
import { model, Schema } from "mongoose";
import {
  toLocalDate,
  toUTCDate,
  transform,
  updateCurrentUser,
} from "../../../utils/validations/model.validations.js";

//==========================
// Schema Role
//==========================
const roleSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, index: true },
    description: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    permissions: [{ type: String, required: true, ref: "Permission" }],
    createdAt: {
      type: Date,
      default: () => new Date(),
      set: toUTCDate,
      get: toLocalDate,
    },
    updatedAt: {
      type: Date,
      default: () => new Date(),
      set: toUTCDate,
      get: toLocalDate,
    },
  },
  { timestamps: true }
);

roleSchema.pre("updateOne", updateCurrentUser);

roleSchema.set("toJSON", {
  getters: true,
  transform: transform,
});

roleSchema.set("toObject", {
  getters: true,
  transform: transform,
});

export default model("Role", roleSchema);
