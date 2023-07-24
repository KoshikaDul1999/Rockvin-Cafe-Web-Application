import OrderDetails from "../models/OrderDetailsModel.js";


export const getOrderDetails = async(req, res) =>{
    try {
        const response = await OrderDetails.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getOrderDetailsById = async(req, res) =>{
    try {
        const response = await OrderDetails.findOne({
            where:{
                orderid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const createOrderDetails = async(req, res) =>{
    try {
        await OrderDetails.create(req.body);
        res.status(201).json({msg: "OrderDetails Created"});
    } catch (error) {
        console.log(error.message);
    }
}
  
export const updateOrderDetails = async(req, res) =>{
    try {
        await OrderDetails.update(req.body,{
            where:{
                orderid: req.params.id
            }
        });
        res.status(200).json({msg: "OrderDetails Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteOrderDetails = async(req, res) =>{
    try {
        await OrderDetails.destroy({
            where:{
                orderid: req.params.id
            }
        });
        res.status(200).json({msg: "OrderDetails Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

export const getOrderDetailsCount = async (req, res) => {
    try {
        const count = await OrderDetails.count();
        res.status(200).json({count});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error: "Internal Server Error "});
    }
}
  

  