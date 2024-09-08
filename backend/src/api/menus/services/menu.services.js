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


export const getMenuService = async (_id) => {
    
    return await menuDao.findById(_id);
};

export const updateMenuService = async (_id, updateData) => {
    return await menuDao.update(_id, updateData);
};

export const deleteMenuService = async (_id) => {    
    return await menuDao.delete(_id);
};

export const getAllMenusService = async () => {
    return await menuDao.findAll();
};
