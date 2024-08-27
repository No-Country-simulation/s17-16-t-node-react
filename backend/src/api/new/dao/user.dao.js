import User from "./model/user.model";

export class UserDao {
  async create(userData) {
    return await User.create(userData);
  }

  async findById(id) {
    return await User.findById(id)
  }

  async update(id, updateData) {
    return await User.findByIdAndUpdate(id, updateData, {
      new: true,
    })
  }

  async delete(id) {
    return await User.findByIdAndDelete(id)
  }

  async findAll() {
    return await User.find()
  }

  async findOne(info){
    return await User.findOne(info)
  }

  async updateWithSession(id, updateData, session) {
    return await User.findByIdAndUpdate(id, updateData, {
        new: true,
        session
    });
  }
}
