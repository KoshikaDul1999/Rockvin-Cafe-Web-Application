import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";
import User from "./UserModel.js";
import Table from "./TableModel.js";

const TableBooking = db.define(
  'tablebooking',
  {
    booking_id: {
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
    table_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Table,
        key: 'table_id'
      }
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    freezeTableName: true
  }
);



export default TableBooking;
 
(async()=>{
    await db.sync();
})();
