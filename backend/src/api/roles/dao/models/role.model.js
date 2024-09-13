//===========
// Imports
//===========
import { model, Schema } from "mongoose";
import { toLocalDate, toUTCDate } from "#utils/validations";

//===============
// Schema Role
//===============
const roleSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, index: true },
    description: { type: String, required: true },
    permissions: [{ type: String, required: true, ref: "Permission" }],
    isActive: { type: Boolean, default: true },
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

roleSchema.set("toJSON", {
  getters: true,
});

roleSchema.set("toObject", {
  getters: true,
});

export const RoleModel = model("Role", roleSchema);
