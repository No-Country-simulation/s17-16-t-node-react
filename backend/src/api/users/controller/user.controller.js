import multer from 'multer';
import * as UserService from '../services/user.services.js';

const upload = multer({ dest: 'uploads/' });

export const register = async (req, res) => {
    try {
        const newUser = await UserService.registerUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body; //cambiar contraseña por password
        const { user, token } = await UserService.loginUser(email, password);
        res.json({ user, token });
    } catch (error) {
        res.status(401).json({ mensaje: error.message });
    }
};

export const getProfile = async (req, res) => {
    try {
        const user = await UserService.getUserProfile(req.user._id);
        res.json(user);
    } catch (error) {
        res.status(404).json({ mensaje: error.message });
    }
};
/*
export const updateProfile = async (req, res) => {
    try {
        const updatedUser = await UserService.updateUserProfile(req.user._id, req.body);
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};
*/

export const updateProfile = async (req, res) => {
    try {
        upload.single('foto')(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ mensaje: 'Error al subir el archivo' });
            }
            const updatedUser = await UserService.updateUserProfileWithPhoto(req.user._id, req.body, req.file);
            res.json(updatedUser);
        });
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

export const deleteProfile = async (req, res) => {
    try {
        await UserService.deleteUserProfile(req.user._id);
        res.json({ mensaje: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await UserService.getAllUserProfiles();
        res.json(users);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};
