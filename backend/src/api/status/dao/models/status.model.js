//===========
// Imports
//===========
import { model, Schema } from "mongoose";
import { toLocalDate, toUTCDate } from "#utils/validations";

//==========================
// Schema Role
//==========================
const statusSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, index: true },
    description: { type: String, required: true },
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

statusSchema.set("toJSON", {
  getters: true,
});

statusSchema.set("toObject", {
  getters: true,
});

export const StatusModel = model("Status", statusSchema);
