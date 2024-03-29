import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const User = db.define('users',{
   userid: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    phoneno: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    fname: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    lname: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    address: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    city: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    emailaddress: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    
},{
    freezeTableName:true
});
 
export default User;
 
(async()=>{
    await db.sync();
})();