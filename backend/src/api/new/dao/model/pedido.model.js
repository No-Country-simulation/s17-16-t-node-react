// Modelo de Pedido
import mongoose from 'mongoose';

const pedidoSchema = new mongoose.Schema({
    restaurante: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurante', required: true },
    cliente: {
      nombre: { type: String, required: false },
      telefono: { type: String, required: false },
      direccion: { type: String }
    },
    items: [{
      menu: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu' },
      cantidad: { type: Number, default: 1 },
      precio: { type: Number, required: true }
    }],
    total: { type: Number, required: true },
    estado: { type: String, enum: ['pendiente', 'en proceso', 'completado', 'cancelado'], default: 'pendiente' },
    fechaPedido: { type: Date, default: Date.now },
    metodoPago: { type: String, enum: ['efectivo', 'tarjeta', 'online'], required: true },
    notas: { type: String }
  });
  
  const Pedido = mongoose.model('Pedido', pedidoSchema);
  
  export default Pedido;