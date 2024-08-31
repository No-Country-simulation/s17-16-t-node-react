import { model, Schema } from "mongoose";

const permissionSchema = new Schema({
  name: { type: String, required: true, index: true },
  description: { type: String, required: true },
  isActive: { type: Boolean, required: true, default: true },
  createdAt: {
    type: Date,
    default: () => new Date().setUTCHours(0, 0, 0, 0),
    set: (v) => v.setUTCHours(0, 0, 0, 0)
  },
  updatedAt: {
    type: Date,
    default: () => new Date().setUTCHours(0, 0, 0, 0),
    set: (v) => v.setUTCHours(0, 0, 0, 0)
  }
});

const Permission = model('Permission', permissionSchema);

module.exports = Permission;
