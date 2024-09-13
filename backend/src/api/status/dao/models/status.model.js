//===========
// Imports
//===========
import { model, Schema } from "mongoose";
import { toLocalDate, toUTCDate } from "#utils/validations";

//==========================
// Schema Role
//==========================
const statuSchema = new Schema(
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

statuSchema.set("toJSON", {
  getters: true,
});

statuSchema.set("toObject", {
  getters: true,
});

export const StatuModel = model("Statu", statuSchema);
