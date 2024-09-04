import { toLocalDate, toUTCDate } from '#utils/validations';
import { model, Schema } from 'mongoose';

// Modelo de Usuario (para el dueño del restaurante)
const userSchema = new Schema({
  avatar: { type: String, default: null },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
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
  role: { type: Schema.Types.ObjectId, ref: 'Role', default: null },
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

export const User = model('User', userSchema);
