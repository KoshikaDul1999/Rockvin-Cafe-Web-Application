import express from "express";

import {
    getChefs, getChefById, createChef, updateChef, deleteChef
} from "../controllers/ChefController.js";

const router = express.Router();
 
router.get('/chefs', getChefs);
router.get('/chef/:id', getChefById);
router.post('/ched', createChef);
router.put('/chef/:id', updateChef);
router.delete('/chef/:id', deleteChef);

export default router;

