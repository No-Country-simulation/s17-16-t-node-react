import Pedido from "./model/pedido.model.js";

export class PedidoDao {
  async create(pedidoData) {
    return await Pedido.create(pedidoData);
  }

  async findById(id) {
    return await Pedido.findById(id)
  }

  async update(id, updateData) {
    return await Pedido.findByIdAndUpdate(id, updateData, {
      new: true,
    })
  }

  async delete(id) {
    return await Pedido.findByIdAndDelete(id)
  }

  async findAll() {
    return await Pedido.find()
  }

  async findOne(info){
    return await Pedido.findOne(info)
  }

}
