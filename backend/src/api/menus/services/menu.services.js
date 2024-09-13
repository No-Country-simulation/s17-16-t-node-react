//==========================
// Imports
//==========================
import { MenuDao, MenuDTO } from "#api/menus";

//==========================
// Const
//==========================
const menuDao = new MenuDao();
const fieldsToShow = [
  "id",
  "picture",
  "name",
  "description",
  "category",
  "restaurant",
];

//==========================
// create Menu
//==========================
export const createMenuService = async (menuData) => {
  const newMenu = await menuDao.create({ ...menuData });
  return new MenuDTO(newMenu).toDTO(fieldsToShow);
};

//============
// Find one
//============
export const getMenuService = async (id) => {
  const searchMenu = await menuDao.findById(id);
  return new MenuDTO(searchMenu).toDTO(fieldsToShow);
};

//=============
// Find all
//=============
export const getAllMenusService = async () => {
  const searchMenu = await menuDao.findAll();
  return searchMenu.map((menu) => new MenuDTO(menu).toDTO(fieldsToShow));
};

export const updateMenuService = async (id, updateData) => {
  const searchMenu = await menuDao.update(id, updateData);
  return new MenuDTO(searchMenu).toDTO(fieldsToShow);
};

export const deleteMenuService = async (_id) => {
  const deleteMenu = await menuDao.delete(id);
  return new MenuDTO(deleteMenu).toDTO(fieldsToShow);
};
