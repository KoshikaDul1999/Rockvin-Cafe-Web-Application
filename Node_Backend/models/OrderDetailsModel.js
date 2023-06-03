import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const OrderDetails = db.define('orderDetails',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true
    },
    
    order_id: {
        type:DataTypes.INTEGER,
        allowNull:false,
    },

    food_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },

    food_details: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    quantity:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },

    tax_amount:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },

    test:{
        type:DataTypes.INTEGER,
        allowNull: true,
    },

    total_price:{
        type:DataTypes.INTEGER,
        allowNull: true,
    },

},{
    freezeTableName:true
});
 
export default OrderDetails;
 
(async()=>{
    await db.sync();
})();
