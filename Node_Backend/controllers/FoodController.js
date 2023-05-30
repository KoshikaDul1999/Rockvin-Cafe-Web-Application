import Foods from "../models/FoodModel.js";
 
export const getFoods = async(req, res) =>{
    try {
        const response = await Foods.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getFoodById = async(req, res) =>{
    try {
        const response = await Foods.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const createFood = async(req, res) =>{
    try {
        await Foods.create(req.body);
        res.status(201).json({msg: "Food Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateFood = async(req, res) =>{
    try {
        await Foods.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Food Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteFood = async(req, res) =>{
    try {
        await Foods.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Food Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}