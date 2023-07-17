import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const SystemUsers = db.define('systemusers',{
    sysusr_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },      
    sysusr_name: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    sysusr_email: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    sysusr_password: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    role: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
},{
    freezeTableName:true
});
 
export default SystemUsers;
 
(async()=>{
    await db.sync();
})();