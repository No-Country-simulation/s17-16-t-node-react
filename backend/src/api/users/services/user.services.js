import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserDao } from '../dao/user.dao.js';

const userDao = new UserDao();

export const registerUser = async (userData) => {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const newUser = await userDao.create({ ...userData, password: hashedPassword });
    return newUser;
};

export const loginUser = async (email, password) => {
    const user = await userDao.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Credenciales inválidas');
    }
    const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
    return { user, token };
};

export const getUserProfile = async (id) => {
    return await userDao.findById(id);
};

export const updateUserProfile = async (id, updateData) => {
    if (updateData.contraseña) {
        updateData.contraseña = await bcrypt.hash(updateData.contraseña, 10);
    }
    return await userDao.update(id, updateData);
};

export const deleteUserProfile = async (id) => {
    return await userDao.delete(id);
};

export const getAllUserProfiles = async () => {
    return await userDao.findAll();
};