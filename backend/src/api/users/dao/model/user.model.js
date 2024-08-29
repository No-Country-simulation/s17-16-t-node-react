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
  fechaRegistro: { type: Date, default: Date.now }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario




