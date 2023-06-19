import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const OrderDetails = db.define('orderDetails',{
    orderid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },    
    
    uid: {
        type:DataTypes.STRING,
        allowNull:false,
    },

    foodid: {
        type: DataTypes.INTEGER,
        allowNull: true,
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

    time: {
        type: DataTypes.DATE,
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
