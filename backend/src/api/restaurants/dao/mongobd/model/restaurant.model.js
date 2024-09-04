import { model, Schema } from "mongoose";
import { toLocalDate, toUTCDate } from "#utils/validations";

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    logo: {
      type: String, // Path to the uploaded image file
      required: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    menus: [
      {
        type: Schema.Types.ObjectId,
        ref: "Menu",
      },
    ],
    staff: [
      {
        type: Schema.Types.ObjectId,
        ref: "Staff",
      },
    ],

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
restaurantSchema.set("toJSON", {
  getters: true,
});

restaurantSchema.set("toObject", {
  getters: true,
});

export const restaurantModel = model("Restaurant", restaurantSchema);
