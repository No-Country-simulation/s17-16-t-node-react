import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { UserDao } from '../dao/user.dao.js';

dotenv.config();
const userDao = new UserDao();

export const logged = async (req, res, next) => {
    try {
        const bearerToken = req.header("authorization");
        if (!bearerToken) return res.status(401).json({mensaje: "Fallo la autorización"});
        
        const token = bearerToken.split(' ')[1];
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        
        const user = await userDao.findById(decoded.id);
        if (!user) return res.status(401).json({mensaje: "Credenciales inválidas"});
        
        req.user = user;
        next();
    } catch (error) {
        console.error('Error en autenticación:', error);
        return res.status(500).json({mensaje: "Error inesperado"});
    }
};