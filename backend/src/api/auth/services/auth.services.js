//==========================
// Imports
//==========================
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserDao } from '#api/users';
import { JWT_EXPIRATION, JWT_SECRET } from '#src/config';

//==========================
// Const
//==========================
const fieldsToShow = ["id", "avatar", "name", "lastName", "email", "phone", "role"];

//==========================
// Register user
//==========================
export const registerUser = async (userData) => {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const newUser = await create({
      ...userData,
      password: hashedPassword,
    });
    const userDTO = new userDTO(savedRole).toDTO(fieldsToShow);
    return newUser;
};

//==========================
// Login user
//==========================
export const loginUser = async (email, password) => {
    const user = await userDao.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Credenciales inválidas');
    }
    const token = jwt.sign({ id: user.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRATION,
    });
    return { user, token };
};

export const getUserProfile = async (id) => {
    return await userDao.findById(id);
};

export const updateUserProfile = async (id, updateData) => {
    if (updateData.password) {
        updateData.password = await bcrypt.hash(updateData.password, 10);
    }
    return await userDao.update(id, updateData);
};

export const deleteUserProfile = async (id) => {
    return await userDao.delete(id);
};

export const getAllUserProfiles = async () => {
    return await userDao.findAll();
};
