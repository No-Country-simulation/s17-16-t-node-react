import mongoose from 'mongoose';

// Modelo de Usuario (para el dueño del restaurante)
const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "The email format is not valid"],
  },
  password: { type: String, required: true },
  fechaRegistro: { type: Date, default: Date.now },
  foto: { type: String, default: null } // Campo opcional para la URL de la foto
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario




