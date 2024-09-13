//============
// Imports
//============
import {
  createMenuService,
  getAllMenusService,
  getMenuService,
  updateMenuService
} from "#api/menus";
import { deleteTempFile } from "#utils/cloudinary";
import {
  errorProfiler,
  isBodyParamsValidate,
  isQueryParamsValidate,
  responseContentValidator,
  setUrlImage,
  successProfiler,
  uploadImageToCloud,
} from "#utils/validations";

//==============
// CrearMenu
//==============
export const crateMenuController = async (req, res) => {
  try {
    const body = await isBodyParamsValidate(req);
    const saveMenu = await createMenuService(body);
    const menuSave = responseContentValidator(saveMenu);
    const tempImg = await uploadImageToCloud(
      req,
      menuSave.id,
      menuSave.name,
      menuSave.picture
    );
    menuSave.picture =  await setUrlImage(tempImg, menuSave.picture, req.baseUrl);
    const menuPicture = await updateMenuService(menuSave.id, { picture: menuSave.picture });
    const menu = responseContentValidator(menuPicture);
    successProfiler(res, 201, "crateMenuController", { menu });
  } catch (error) {
    errorProfiler(error, res, "crateMenuController");
  }
};

//===============
// Get Menu
//===============
export const getMenuController = async (req, res) => {
  try {
    const id = isQueryParamsValidate(req);
    const response = await getMenuService(id);
    const menu = responseContentValidator(response);
    successProfiler(res, 200, "getMenuController", { menu });
  } catch (error) {
    errorProfiler(error, res, "getMenuController");
  }
};

//=================
// Get All Menus
//=================
export const getAllMenusController = async (req, res) => {
  try {
    const menus = await getAllMenusService();
    successProfiler(res, 200, "getAllMenus", { menus });
  } catch (error) {
    errorProfiler(error, res, "getAllMenus");
  }
};

//===============
// Upload Menu
//===============
export const updateMenuController = async (req, res) => {
  try {
    const id = isQueryParamsValidate(req);
    const body = await isBodyParamsValidate(req);
    const searchMenuId = await getMenuService(id);
    const searchMenu = responseContentValidator(searchMenuId);
    const updateResp = await updateMenuService(searchMenu.id, body);
    const menuUpdate = responseContentValidator(updateResp);
    const tempImg = await uploadImageToCloud(
      req,
      menuUpdate.id,
      searchMenu.name,
      menuUpdate.picture
    );
    searchMenu.picture = setUrlImage(tempImg, searchMenu.picture, req.baseUrl);
    const updateMenu = await updateMenuService(menuUpdate.id, {
      picture: menuUpdate.picture,
    });
    const menu = responseContentValidator(updateMenu);
    successProfiler(res, 200, "uploadMenu", { menu });
  } catch (error) {
    if (req.file) {
      deleteTempFile(req.file.path, false);
    }
    errorProfiler(error, res, "uploadMenu");
  }
};

//===============
// Delete Menu
//===============
export const deleteMenuController = async (req, res) => {
  try {
    const id = isQueryParamsValidate(req);
    const resp = await  await updateMenuService(id, { isActive: false });
    const menu = responseContentValidator(resp);
    successProfiler(res, 200, "deleteMenuController", { menu });
  } catch (error) {
    errorProfiler(error, res, "deleteMenuController");
  }
};
