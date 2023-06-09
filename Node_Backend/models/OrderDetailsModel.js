import {Sequelize} from "sequelize";
import db from "../config/Database.js";
import User from "./UserModel.js";
import Foods from "./FoodModel.js";
 
const {DataTypes} = Sequelize;
 
const OrderDetails = db.define('orderDetails',{
    orderid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },    
    
    userid: {
        type:DataTypes.STRING,
        allowNull:false,
        references: {
            model: User, // Replace 'food_categories' with the actual name of the table you want to reference
            key: 'userid' // Replace 'id' with the actual name of the primary key column in the referenced table
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

    quantity:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },

    totalprice:{
        type:DataTypes.DOUBLE,
        allowNull: true,
    },

    stutus:{
        type:DataTypes.INTEGER,
        allowNull: true,
    },

    

      order_from: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      picup_time: {
        type: DataTypes.DATE,
        allowNull: true,
        }


},{
    freezeTableName:true
});
 
export default OrderDetails;
 
(async()=>{
    await db.sync();
})();
