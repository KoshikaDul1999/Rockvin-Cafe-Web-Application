import {Sequelize} from "sequelize";
import db from "../config/Database.js";
import Category from "./CategoryModel.js"; // Import the Category model
 
const {DataTypes} = Sequelize;
 
const Foods = db.define('foods',{
    food_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true
    },
    food_name: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    food_price: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    food_img:{
        type:DataTypes.STRING,
        allowNull: true,
    },
    food_desc:{
        type:DataTypes.STRING,
        allowNull: true,
    },
    food_cat_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Category, // Replace 'food_categories' with the actual name of the table you want to reference
            key: 'cate_id' // Replace 'id' with the actual name of the primary key column in the referenced table
        }
    },
},{
    freezeTableName:true
});
 
export default Foods;
 
(async()=>{
    await db.sync();
})();