// Modelo de Restaurante
import mongoose from 'mongoose';

const restauranteSchema = new mongoose.Schema({
    logo: { type: String }, // URL de la imagen del logo
    nombre: { type: String, required: true },
    categoria: { type: String },
    descripcion: { type: String }
    direccion: { type: String, required: true },
    telefono: { type: String },
    horario: { type: String },
    propietario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    capacidad: { type: Number },
});

  const Restaurante = mongoose.model('Restaurante', restauranteSchema);

  export default Restaurante;
