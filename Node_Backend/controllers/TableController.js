import Table from '../models/TableModel.js';

export const getTables = async(req, res) =>{
    try {
        const response = await Table.findAll();
        res.status(200).json(response);
    }catch(error){
        console.log(error.message);
    }
}

export const getTableById = async(req, res) =>{
    try {
        const response = await Table.findOne({
            where:{
                table_id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const updateTable = async(req, res) =>{
    try {
        await Table.update(req.body,{
            where:{
                table_id: req.params.id
            }
        });
        res.status(200).json({msg: "Table Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteTable = async(req, res) =>{
    try {
        await Table.destroy({
            where:{
                table_id: req.params.id
            }
        });
        res.status(200).json({msg: "Table Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}