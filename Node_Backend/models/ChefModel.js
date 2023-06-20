import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Chefs = db.define('chef',{
    chef_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey:true
    },
    chef_name: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    chef_email: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    chef_password: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    chef_address: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    chef_telephone: {
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