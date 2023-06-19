import express from "express";
import { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory} from "../controllers/CategoryController.js";
import { getFoods, getFoodById, updateFood, createFood, deleteFood } from "../controllers/FoodController.js";
// import { deleteOrderDetails, updateOrderDetails, getOrderDetailsById, getOrderDetails, createOrderDetails } from "../controllers/OrderDetailsController.js";
// //import { getAdmins, getAdminById, createAdmin, updateAdmin, deleteAdmin} from "../controllers/CategoryController.js";
import {getChefs, getChefById, createChef, updateChef, deleteChef} from "../controllers/ChefController.js"

const router = express.Router();

router.get('/categories', getCategories);
router.get('/category/:id', getCategoryById);
router.post('/category', createCategory);
router.put('/categories/:id', updateCategory);
router.delete('/category/:id', deleteCategory);
 
router.get('/foods', getFoods);
router.get('/foods/:id', getFoodById);
router.post('/foods', createFood);
router.patch('/foods/:id', updateFood);
router.delete('/foods/:id', deleteFood);

// router.get('/OrderDetails', getOrderDetails);
// router.get('/OrderDetails/:id', getOrderDetailsById);
// router.post('/OrderDetails', createOrderDetails);
// router.patch('/OrderDetails/:id', updateOrderDetails);
// router.delete('/OrderDetails/:id', deleteOrderDetails);

// router.get('/admins', getAdmins);
// router.get('/admin/:id', getAdminById);
// router.post('/admin', createAdmin);
// router.put('/admins/:id', updateAdmin);
// router.delete('/admin/:id', deleteAdmin);

router.get('/chefs', getChefs);
router.get('/chef/:id', getChefById);
router.post('/chef', createChef);
router.put('/chef/:id', updateChef);
router.delete('/chef/:id', deleteChef);

export default router;