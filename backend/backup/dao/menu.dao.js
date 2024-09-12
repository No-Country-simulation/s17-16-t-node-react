import Menu from "./model/menu.model.js";

export class MenuDao {
  async create(menuData) {
    return await Menu.create(menuData);
  }

  async findById(id) {
    return await Menu.findById(id)
  }

  async update(id, updateData) {
    return await Menu.findByIdAndUpdate(id, updateData, {
      new: true,
    })
  }

  async delete(id) {
    return await Menu.findByIdAndDelete(id)
  }

  async findAll() {
    return await Menu.find()
  }

  async findOne(info){
    return await Menu.findOne(info)
  }

}
