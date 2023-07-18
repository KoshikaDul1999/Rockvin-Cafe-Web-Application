import { Op } from 'sequelize';
import OrderDetails from '../models/OrderDetailsModel.js';

// Fetch daily sales report
export const getDailySales = async (req, res) => {
  try {
    const today = new Date();
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

    const sales = await OrderDetails.findAll({
      where: {
        createdAt: {
          [Op.between]: [startOfDay, endOfDay],
        },
      },
    });

    res.json(sales);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Fetch weekly sales report
export const getWeeklySales = async (req, res) => {
  try {
    const today = new Date();
    const startOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
    const endOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 7);

    const sales = await OrderDetails.findAll({
      where: {
        createdAt: {
          [Op.between]: [startOfWeek, endOfWeek],
        },
      },
    });

    res.json(sales);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Fetch monthly sales report
export const getMonthlySales = async (req, res) => {
  try {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    const sales = await OrderDetails.findAll({
      where: {
        createdAt: {
          [Op.between]: [startOfMonth, endOfMonth],
        },
      },
    });

    res.json(sales);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
