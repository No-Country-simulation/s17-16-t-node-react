//Menu model
import { toLocalDate, toUTCDate } from '#utils/validations';
//import { model, Schema } from 'mongoose';

import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
    avatar: { type: String, default: null },
    name: { type: String, required: true },
    description: { type: String },
    price: { type: String, required: true },
    category: { type: String },
    available: { type: Boolean, default: true },
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
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
  
 export const Menu = mongoose.model('Menu', menuSchema);
  
