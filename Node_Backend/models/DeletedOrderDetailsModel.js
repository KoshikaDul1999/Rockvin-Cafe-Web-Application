import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";
import User from "./UserModel.js";
import Foods from "./FoodModel.js";

const DeletedOrderDetails = db.define(
  'deleted_orderdetails',
  {
    orderid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'userid'
      }
    },
    food_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Foods,
        key: 'food_id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    totalprice: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    order_from: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pickup_time: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  },
  {
    freezeTableName: true
  }
);

// Define the associations between DeletedOrderDetails and User/Foods
DeletedOrderDetails.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
DeletedOrderDetails.belongsTo(Foods, { foreignKey: 'food_id', as: 'food' });
 
export default DeletedOrderDetails;
 
(async()=>{
    await db.sync();
})();
