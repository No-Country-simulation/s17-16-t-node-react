// Modelo de Menú
import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    precio: { type: Number, required: true },
    categoria: { type: String },
    foto: { type: String}, // URL de la imagen del plato
    ingredientes: [String],
    disponible: { type: Boolean, default: true },
    restaurante: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurante', required: true }
  });

  const Menu = mongoose.model('Menu', menuSchema);

  export default Menu
