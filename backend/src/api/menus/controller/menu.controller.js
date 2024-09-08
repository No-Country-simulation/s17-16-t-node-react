//==========================
// Imports
//==========================
import { errorProfiler, getModelFromRoute, isBodyParamsValidate, isQueryParamsValidate, isValidateFile, responseContentValidator, successProfiler } from "#utils/validations";
import { getMenuService, createMenuService, updateMenuService, getAllMenusService,deleteMenuService} from "#api/menus";
import { deleteImage, deleteTempFile, uploadImage } from "#utils/cloudinary";
import { DEFAULT_AVATAR } from "#src/config";

//==========================
// RegisterMenu
//==========================
export const crateMenuController = async (req, res) => {
  try {
    const body = await isBodyParamsValidate(req);
    if (!req.file) {
      body.avatar = DEFAULT_AVATAR;
    } else {
    const folder = getModelFromRoute(req.baseUrl);
    const file = isValidateFile(req.file)
    const fieldName = `${body.name}`;
    body.avatar = await uploadImage(file, folder, fieldName);
    await deleteTempFile(file.path);
    }
    let response;
    try {
       response = await createMenuService(body);
    } catch (error) {
      if (body.avatar !== DEFAULT_AVATAR) {
        await deleteImage(body.avatar);
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
      const file = isValidateFile(req.file)
      const folder = getModelFromRoute(req.baseUrl);
      const fieldName = `${body.name}`;
      if (menu.avatar !== DEFAULT_AVATAR) {
        await deleteImage(menu.avatar);
      };
      menu.avatar = await uploadImage(file, folder, fieldName);
    }
    menu = {...body};
    const response = await updateMenu(_id, menu);
    const uploadMenu = responseContentValidator(response);
    successProfiler(res, 200, "uploadMenu", { uploadMenu });
  } catch (error) {
    errorProfiler(error, res, "getMenu");
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
    const delMenu = responseContentValidator(deleteMenu);
    const avatarDir = req.body.avatar;
    console.log(avatarDir)
    deleteImage(avatarDir);
    successProfiler(res, 200, "deleteMenuController", { delMenu });
  } catch (error) {
    errorProfiler(error, res, "deleteMenuController");
  }
};
