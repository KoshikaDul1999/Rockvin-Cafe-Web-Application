import express from "express";
//import { upload } from "../index.js"; // Import the upload object from index.js
import multer from 'multer';
import { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory, getCategoryCount} from "../controllers/CategoryController.js";
import { getFoods, getFoodById, updateFood, createFood, deleteFood, getFoodByName, getFoodsCount, uploadFoodImage, deleteFoodImage } from "../controllers/FoodController.js";
import { deleteOrderDetails, updateOrderDetails, getOrderDetailsById, getOrderDetails, createOrderDetails, getOrderDetailsCount } from "../controllers/OrderDetailsController.js";
import { getAdmins, getAdminById, createAdmin, updateAdmin, deleteAdmin} from "../controllers/SystemUserController.js";
import {getChefs, getChefById, createChef, updateChef, deleteChef} from "../controllers/ChefController.js";
import {getUsers, getUserById, createUser, updateUser, deleteUser, getCustomersCount} from "../controllers/UserController.js";

const router = express.Router();

router.get('/categories', getCategories);
router.get('/category/:id', getCategoryById);
router.post('/category', createCategory);
router.put('/categories/:id', updateCategory);
router.delete('/category/:id', deleteCategory);
router.get('/CategoryCount', getCategoryCount);
 
// router.get('/foods', getFoods);
// router.get('/foods/:id', getFoodById);
// // router.post('/foods', createFood);
// router.post('/foods', upload.single('food_image'), createFood); // Use the upload middleware for the /foods POST route
// router.patch('/foods/:id', updateFood);
// router.delete('/foods/:id', deleteFood);
// router.get('/foodsname/:id',getFoodByName);
// router.get('/FoodsCount', getFoodsCount);
// // Image upload and deletion routes
// router.post('/upload', upload.single('food_image'), uploadFoodImage);
// router.delete('/image/:filename', deleteFoodImage);

router.get('/foods', getFoods);
router.get('/foods/:id', getFoodById);
router.post('/foods', multer().single('food_image'), createFood); // Use the multer middleware for the /foods POST route
router.patch('/foods/:id', multer().single('food_image'), updateFood); // Use the multer middleware for the /foods PATCH route
router.delete('/foods/:id', deleteFood);
router.get('/foodsname/:id', getFoodByName);
router.get('/FoodsCount', getFoodsCount);
// Image upload and deletion routes
router.post('/upload', multer().single('food_image'), uploadFoodImage);
router.delete('/image/:filename', deleteFoodImage);

router.get('/OrderDetails', getOrderDetails);
router.get('/OrderDetails/:id', getOrderDetailsById);
router.post('/OrderDetails', createOrderDetails);
router.put('/OrderDetails/:id', updateOrderDetails);
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
router.get('/CustomersCount', getCustomersCount);

export default router;