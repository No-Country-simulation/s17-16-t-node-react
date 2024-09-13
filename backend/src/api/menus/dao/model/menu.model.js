//===========
// Imports
//===========
import { model, Schema } from "mongoose";
import { DEFAULT_PICTURE } from "#src/config";
import { toLocalDate, toUTCDate } from "#utils/validations";

//===============
// Schema Menu
//===============
const menuSchema = new Schema(
  {
    picture: { type: String, default: DEFAULT_PICTURE },
    name: { type: String, required: true },
    description: { type: String },
    price: { type: String, required: true },
    category: { type: String },
    restaurant: {
      type: Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
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

export const MenuModel = model("Menu", menuSchema);
