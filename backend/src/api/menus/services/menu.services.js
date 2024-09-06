//==========================
// Imports
//==========================

import { MenuDao } from '#api/menus';

//==========================
// Const
//==========================
const menuDao = new MenuDao();

//==========================
// Register user
//==========================
export const createMenuService = async (menuData) => {
   
    const newMenu = await menuDao.create({
      ...menuData
    });
    return newMenu;
};



export const getMenuService = async (id) => {
    return await menuDao.findById(id);
};

export const updateMenuService = async (id, updateData) => {
    return await menuDao.update(id, updateData);
};

export const deleteMenuService = async (id) => {
    return await menuDao.delete(id);
};

export const getAllMenusService = async () => {
    return await menuDao.findAll();
};
