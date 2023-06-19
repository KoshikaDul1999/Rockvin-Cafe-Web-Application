import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Chefs = db.define('chef',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true
    },
    
    email: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    password: {
        type:DataTypes.STRING,
        allowNull:false,
    },


},{
    freezeTableName:true
});
 
export default Chefs;
 
(async()=>{
    await db.sync();
})();