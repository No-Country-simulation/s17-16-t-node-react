//==========================
// Imports
//==========================
import { errorProfiler, getModelFromRoute, isBodyParamsValidate, isQueryParamsValidate, isValidateFile, responseContentValidator, successProfiler } from "#utils/validations";
import { getMenuService, createMenuService, updateMenuService, getAllMenusService,deleteMenuService} from "#api/menus";
import { deleteImage, deleteTempFile, uploadImage } from "#utils/cloudinary";
import { DEFAULT_AVATAR, DEFAULT_PICTURE } from "#src/config";
import { date } from "zod";

//==========================
// RegisterMenu
//==========================
export const crateMenuController = async (req, res) => {
  try {
    const body = await isBodyParamsValidate(req);
    if (!req.file) {
      body.picture = DEFAULT_PICTURE;
    } else {
    body.picture = await uploadImageToCloud(req, body);
    await deleteTempFile(file.path);
    }
    let response;
    try {
       response = await createMenuService(body);
    } catch (error) {
      if (body.picture !== DEFAULT_PICTURE) {
        await deleteImage(body.picture);
      };
      throw error;
    }
    const menu = responseContentValidator(response);
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
    console.log(req)
    const response = await getMenuService (req.query._id);
    const menu = responseContentValidator(response);
    successProfiler(res, 200, "getMenuController", { menu });
  } catch (error) {
    errorProfiler(error, res, "getMenuController");
  }
};

//==========================
// Get All Menus
//==========================
export const getAllMenusController = async (req, res) => {
  try {
    const menus = await getAllMenusService();
    successProfiler(res, 200, "getAllMenus", { menus });
  } catch (error) {
    errorProfiler(error, res, "getAllMenus");
  }
};

//==========================
// Upload Menu
//==========================
export const updateMenuController = async (req, res) => {
  try {
    const _id = isQueryParamsValidate(req);
    const body = await isBodyParamsValidate(req);
    const resp = await getMenuService(_id);
    let menu = responseContentValidator(resp);
    if (req.file) {
      if (menu.picture !== DEFAULT_PICTURE) {
        await deleteImage(menu.picture);
      };
      menu.picture = await uploadImage(req, menu);
    }
    menu = {...body};
    const response = await updateMenu(_id, menu);
    const uploadMenu = responseContentValidator(response);
    successProfiler(res, 200, "uploadMenu", { uploadMenu });
  } catch (error) {
    errorProfiler(error, res, "uploadMenu");
  }
};

//==========================
// Delete Menu
//==========================
export const deleteMenuController = async (req, res) => {
  try {
    const _id = isQueryParamsValidate(req);
    const resp = await deleteMenuService(_id, { isActive: false });
    const deleteMenu = responseContentValidator(resp);
  
    successProfiler(res, 200, "deleteMenuController", { deleteMenu });
  } catch (error) {
    errorProfiler(error, res, "deleteMenuController");
  }
};
