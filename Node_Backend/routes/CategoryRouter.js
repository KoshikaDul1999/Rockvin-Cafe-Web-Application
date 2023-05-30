import express from "express";

import {
    getCategories, getCategoryById, createCategory, updateCategory, deleteCategory
} from "../controllers/CategoryController.js";

const router = express.Router();
 
router.get('/categories', getCategories);
router.get('/category/:id', getCategoryById);
router.post('/category', createCategory);
router.put('/categories/:id', updateCategory);
router.delete('/category/:id', deleteCategory);

export default router;