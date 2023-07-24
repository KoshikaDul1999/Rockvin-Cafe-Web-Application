import { Op } from 'sequelize';
import TableBooking from '../models/TableBookingModel.js';

export const getBookingDetails = async (req, res) => {
    try {
      const { time, table } = req.query;

      let whereCondition = {};

      if (time) {
        whereCondition.time = {
          [Op.like]: `%${time}%`,
        };
      }

      if (table) {
        whereCondition['$table.table_name$'] = {
          [Op.like]: `%${table}%`,
        };
      }

      const response = await TableBooking.findAll({
        include: ['user', 'table'],
        where: whereCondition,
      });

      res.status(200).json(response);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}
 
export const getBookingDetailsById = async(req, res) =>{
    try {
        const response = await TableBooking.findOne({
            where:{
                booking_id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const createBookingDetails = async(req, res) =>{
    try {
        await TableBooking.create(req.body);
        res.status(201).json({msg: "Booking Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateBookingDetails = async(req, res) =>{
    try {
        await TableBooking.update(req.body,{
            where:{
                booking_id: req.params.id
            }
        });
        res.status(200).json({msg: "Booking Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteBookingDetails = async(req, res) =>{
    try {
        await TableBooking.destroy({
            where:{
                booking_id: req.params.id
            }
        });
        res.status(200).json({msg: "Booking Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}