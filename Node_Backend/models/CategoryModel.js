import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Category = db.define('food_types',{
    id: {
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        
    },
    title: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    parent_id: {
        type:DataTypes.INTEGER,
        allowNull:true,
    },
    // created_at: {
    //     type: DataTypes.TIMESTAMP,
    //     defaultValue: DataTypes.NOW,
    //     allowNull: false,
    // },
    // updated_at: {
    //     type: DataTypes.TIMESTAMP,
    //     defaultValue: DataTypes.NOW,
    //     allowNull: false,
    // },
    order: {
        type: DataTypes.INTEGER,
        allowNull:true,
    },
    description: {
        type:DataTypes.STRING,
        allowNull:false,
    }, 
},{
    freezeTableName:true
});

export default Category;

(async()=>{
    await db.sync();
})();