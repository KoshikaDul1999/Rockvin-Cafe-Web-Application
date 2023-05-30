import express from "express";

import { getFoods, getFoodById, updateFood, createFood, deleteFood } from "../controllers/FoodController.js";
import { /*  ,deleteOrderDetails,*/ updateOrderDetails, getOrderDetailsById, getOrderDetails, createOrderDetails } from "../controllers/OrderDetailsController.js";


const router = express.Router();
 
router.get('/foods', getFoods);
router.get('/foods/:id', getFoodById);
router.post('/foods', createFood);
router.patch('/foods/:id', updateFood);
router.delete('/foods/:id', deleteFood);

 router.get('/OrderDetails', getOrderDetails);
 router.get('/OrderDetails/:id', getOrderDetailsById);
 router.post('/OrderDetails', createOrderDetails);
 router.patch('/OrderDetails/:id', updateOrderDetails);
// router.delete('/OrderDetails/:id', deleteOrderDetails);

 



export default router;