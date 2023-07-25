import { Op } from 'sequelize';
import DeletedOrderDetails from '../models/DeletedOrderDetailsModel.js';
import User from "../models/UserModel.js";
import Foods from "../models/FoodModel.js";

// Fetch sales report with username, foodname, and total price for a specific date range
export const getSalesByDateRange = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    const sales = await DeletedOrderDetails.findAll({
      where: {
        pickup_time: {
          [Op.between]: [startDate, endDate],
        },
      },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['fname', 'lname'],
        },
        {
          model: Foods,
          as: 'food',
          attributes: ['food_name'],
        },
      ],
    });

    res.json(sales);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Fetch daily sales report with username, foodname, and total price
export const getDailySales = async (req, res) => {
  try {
    const { date } = req.query;
    const selectedDate = new Date(date);
    const startOfDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
    const endOfDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() + 1);

    const sales = await DeletedOrderDetails.findAll({
      where: {
        pickup_time: {
          [Op.between]: [startOfDay, endOfDay],
        },
      },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['fname', 'lname'],
        },
        {
          model: Foods,
          as: 'food',
          attributes: ['food_name'],
        },
      ],
    });

    res.json(sales);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Fetch weekly sales report with username, foodname, and total price
export const getWeeklySales = async (req, res) => {
  try {
    const today = new Date();
    const startOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
    const endOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 7);

    const sales = await DeletedOrderDetails.findAll({
      where: {
        createdAt: {
          [Op.between]: [startOfWeek, endOfWeek],
        },
      },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['fname', 'lname'],
        },
        {
          model: Foods,
          as: 'food',
          attributes: ['food_name'],
        },
      ],
    });

    res.json(sales);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Fetch monthly sales report with username, foodname, and total price
export const getMonthlySales = async (req, res) => {
  try {
    const { month, year } = req.query;
    const numericMonth = parseInt(month, 10);
    const startOfMonth = new Date(year, numericMonth - 1, 1);
    const endOfMonth = new Date(year, numericMonth, 0);

    const sales = await DeletedOrderDetails.findAll({
      where: {
        pickup_time: {
          [Op.between]: [startOfMonth, endOfMonth],
        },
      },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['fname', 'lname'],
        },
        {
          model: Foods,
          as: 'food',
          attributes: ['food_name'],
        },
      ],
    });

    res.json(sales);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};




// export const getTotalSalesAmount = async () => {
//   try {
//     const totalSalesAmount = await DeletedOrderDetails.sum(
//       Sequelize.literal('totalprice * quantity')
//     );
//     return totalSalesAmount;
//   } catch (error) {
//     console.error(error);
//     throw new Error('Error fetching total sales amount');
//   }
// };


// import { Op } from 'sequelize';
// import DeletedOrderDetails from '../models/DeletedOrderDetailsModel.js';

// // Fetch daily sales report
// export const getDailySales = async (req, res) => {
//   try {
//     const today = new Date();
//     const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
//     const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

//     const sales = await DeletedOrderDetails.findAll({
//       where: {
//         createdAt: {
//           [Op.between]: [startOfDay, endOfDay],
//         },
//       },
//     });

//     res.json(sales);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// // Fetch weekly sales report
// export const getWeeklySales = async (req, res) => {
//   try {
//     const today = new Date();
//     const startOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
//     const endOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 7);

//     const sales = await DeletedOrderDetails.findAll({
//       where: {
//         createdAt: {
//           [Op.between]: [startOfWeek, endOfWeek],
//         },
//       },
//     });

//     res.json(sales);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// // Fetch monthly sales report
// export const getMonthlySales = async (req, res) => {
//   try {
//     const today = new Date();
//     const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
//     const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

//     const sales = await DeletedOrderDetails.findAll({
//       where: {
//         createdAt: {
//           [Op.between]: [startOfMonth, endOfMonth],
//         },
//       },
//     });

//     res.json(sales);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
