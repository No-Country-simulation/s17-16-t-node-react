import { model, Schema } from "mongoose";
import { toLocalDate, toUTCDate } from "../../../utils/validations/model.validations.js";

const roleSchema = new Schema({
  name: { type: String, required: true, unique: true, index: true },
  description: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  fechaRegistro: { type: Date, default: Date.now },
  permissions: [{ type: String, required: true, ref: 'Permission' }],
  createdAt: {
    type: Date,
    default: () => new Date(),
    set: toUTCDate,
    get: toLocalDate
  },
  updatedAt: {
    type: Date,
    default: () => new Date(),
    set: toUTCDate,
    get: toLocalDate
  }
});

roleSchema.set('toJSON', { getters: true });
roleSchema.set('toObject', { getters: true });

export default model('Role', roleSchema);
