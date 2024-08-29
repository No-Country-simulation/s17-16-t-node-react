// Modelo de Restaurante
import mongoose from 'mongoose';

const restauranteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String },
    propietario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    horario: { type: String },
    capacidad: { type: Number },
    logo: { type: String }, // URL de la imagen del logo
    descripcion: { type: String }
  });
  
  const Restaurante = mongoose.model('Restaurante', restauranteSchema);

  export default Restaurante;