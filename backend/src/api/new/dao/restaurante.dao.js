import Restaurante from "./model/restaurante.model.js";

export class RestauranteDao {
  async create(resData) {
    return await Restaurante.create(resData);
  }

  async findById(id) {
    return await Restaurante.findById(id)
  }

  async update(id, updateData) {
    return await Restaurante.findByIdAndUpdate(id, updateData, {
      new: true,
    })
  }

  async delete(id) {
    return await Restaurante.findByIdAndDelete(id)
  }

  async findAll() {
    return await Restaurante.find()
  }

  async findOne(info){
    return await Restaurante.findOne(info)
  }

}
