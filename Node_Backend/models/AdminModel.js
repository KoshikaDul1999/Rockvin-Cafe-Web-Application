import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Admins = db.define('admin',{
    admin_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true
    },
    admin_name: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    admin_email: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    admin_password: {
        type:DataTypes.STRING,
        allowNull:false,
    },


},{
    freezeTableName:true
});
 
export default Admins;
 
(async()=>{
    await db.sync();
})();