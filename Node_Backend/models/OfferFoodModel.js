import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const OfferFoods = db.define('offer_foods',{
    offer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true
    },
    offer_name: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    offer_price: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    offer_img:{
        type:DataTypes.STRING,
        allowNull: true,
    },
    offer_desc:{
        type:DataTypes.STRING,
        allowNull: true,
    },
},{
    freezeTableName:true
});

(async()=>{
    await db.sync();
})();

export default OfferFoods;