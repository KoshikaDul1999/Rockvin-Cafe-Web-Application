import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Category = db.define('category',{
    cate_id: {
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        
    },
    cate_name: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    cate_desc: {
        type:DataTypes.INTEGER,
        allowNull:true,
    }, 
},{
    freezeTableName:true
});

export default Category;

(async()=>{
    await db.sync();
})();