//==========
// Import
//==========
import { MenuModel } from "#api/menus";

//==================
// Class Menu DAO
//==================
export class MenuDao {
  async create(menuData) {
    return await MenuModel.create(menuData);
  }

  async findById(id) {
    return await MenuModel.findById({ ...id, isActive: true });
  }

  async update(id, updateData) {
    return await MenuModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });
  }

  async delete(id) {
    return await MenuModel.findByIdAndDelete(id);
  }

  async findAll() {
    return await MenuModel.find({ isActive: true });
  }

  async findOne(info) {
    return await MenuModel.findOne({...info, isActive: true });
  }

  async updateWithSession(id, updateData, session) {
    return await MenuModel.findByIdAndUpdate(id, updateData, {
      new: true,
      session,
    });
  }
}
