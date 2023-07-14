import express from "express";
import { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory} from "../controllers/CategoryController.js";
import { getFoods, getFoodById, updateFood, createFood, deleteFood, getFoodByName } from "../controllers/FoodController.js";
import { deleteOrderDetails, updateOrderDetails, getOrderDetailsById, getOrderDetails, createOrderDetails, getOrderDetailsCount } from "../controllers/OrderDetailsController.js";
import { getAdmins, getAdminById, createAdmin, updateAdmin, deleteAdmin} from "../controllers/AdminController.js";
import {getChefs, getChefById, createChef, updateChef, deleteChef} from "../controllers/ChefController.js";
import {getUsers, getUserById, createUser, updateUser, deleteUser} from "../controllers/UserController.js";

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
router.get('/foodsname/:id',getFoodByName);

router.get('/OrderDetails', getOrderDetails);
router.get('/OrderDetails/:id', getOrderDetailsById);
router.post('/OrderDetails', createOrderDetails);
router.patch('/OrderDetails/:id', updateOrderDetails);
router.delete('/OrderDetails/:id', deleteOrderDetails);
router.get('/OrderDetailsCount', getOrderDetailsCount);

router.get('/admins', getAdmins);
router.get('/admin/:id', getAdminById);
// router.get('/admin/:email', getAdminByEmail);
router.post('/admin', createAdmin);
router.put('/admin/:id', updateAdmin);
router.delete('/admin/:id', deleteAdmin);

router.get('/chefs', getChefs);
router.get('/chef/:id', getChefById);
router.post('/chef', createChef);
router.put('/chef/:id', updateChef);
router.delete('/chef/:id', deleteChef);

router.get('/user', getUsers);
router.get('/user/:id', getUserById);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;