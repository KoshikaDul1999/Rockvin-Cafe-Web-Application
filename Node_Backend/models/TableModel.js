import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Table = db.define('table',{
    table_id: {
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    table_name: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    table_price: {
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    place_desc: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    persons: {
        type:DataTypes.INTEGER,
        allowNull:false,
    }, 
},{
    freezeTableName:true
});

export default Table;

(async()=>{
    await db.sync();
})();