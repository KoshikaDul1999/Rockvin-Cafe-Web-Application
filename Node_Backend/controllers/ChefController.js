import Chefs from "../models/ChefModel.js";
 
export const getChefs = async(req, res) =>{
    try {
        const response = await Chefs.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getChefById = async(req, res) =>{
    try {
        const response = await Chefs.findOne({
            where:{
                chef_id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const createChef = async(req, res) =>{
    try {
        await Chefs.create(req.body);
        res.status(201).json({msg: "Chef Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateChef = async(req, res) =>{
    try {
        await Chefs.update(req.body,{
            where:{
                chef_id: req.params.id
            }
        });
        res.status(200).json({msg: "Chef Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteChef = async(req, res) =>{
    try {
        await Chefs.destroy({
            where:{
                chef_id: req.params.id
            }
        });
        res.status(200).json({msg: "Chef Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}