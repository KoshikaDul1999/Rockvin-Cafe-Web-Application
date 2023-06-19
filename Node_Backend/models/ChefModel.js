import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Chefs = db.define('chef',{
    chef_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey:true
    },
    name: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    email: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    password: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    address: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    telephone: {
        type:DataTypes.INTEGER,
        allowNull:false,
    },
},{
    freezeTableName:true
});
 
export default Chefs;
 
(async()=>{
    await db.sync();
})();