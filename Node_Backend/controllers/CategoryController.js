import Category from "../models/CategoryModel.js";

export const getCategories = async(req, res) =>{
    try {
        const response = await Category.findAll();
        res.status(200).json(response);
    }catch(error){
        console.log(error.message);
    }
}

export const getCategoryById = async(req, res) =>{
    try {
        const response = await Category.findOne({
            where:{
                cate_id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createCategory = async(req, res) =>{
    try {
        await Category.create(req.body);
        res.status(201).json({msg: "Category Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateCategory = async(req, res) =>{
    try {
        await Category.update(req.body,{
            where:{
                cate_id: req.params.id
            }
        });
        res.status(200).json({msg: "Category Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteCategory = async(req, res) =>{
    try {
        await Category.destroy({
            where:{
                cate_id: req.params.id
            }
        });
        res.status(200).json({msg: "Category Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

export const getCategoryCount = async (req, res) => {
    try {
        const count = await Category.count();
        res.status(200).json({count});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error: "Internal Server Error "});
    }
}