/*import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const User = db.define('users',{
    username: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull:false,
    },
    tel: {
        type: DataTypes.STRING,
        unique: true,
        allowNull:false,
    },
    password: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    profile:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    email_verified: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    tel_verified: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
},{
    freezeTableName:true
});
 
export default User;
 
(async()=>{
    await db.sync();
})();*/