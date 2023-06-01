import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const RecomendedFoods = db.define('recomended_foods',{
    rec_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true
    },
    rec_name: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    rec_price: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    rec_img:{
        type:DataTypes.STRING,
        allowNull: true,
    },
    rec_desc:{
        type:DataTypes.STRING,
        allowNull: true,
    },
},{
    freezeTableName:true
});

export default RecomendedFoods;

(async()=>{
    await db.sync();
})();
