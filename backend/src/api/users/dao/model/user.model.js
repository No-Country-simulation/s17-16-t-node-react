//===========
// Imports
//===========
import { model, Schema } from "mongoose";
import { toLocalDate, toUTCDate } from "#utils/validations";
import { DEFAULT_AVATAR } from "#src/config";

//==========================
// Schema Role
//==========================
const userSchema = new Schema(
  {
    avatar: { type: String, default: DEFAULT_AVATAR },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    dni: { type: String, default: null },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "The email format is not valid"],
    },
    password: { type: String, required: true },
    phone: { type: String, default: null },
    role: { type: Schema.Types.ObjectId, ref: "Role", default: null },
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

userSchema.set("toJSON", {
  getters: true,
});

userSchema.set("toObject", {
  getters: true,
});

export const UserModel = model("User", userSchema);
