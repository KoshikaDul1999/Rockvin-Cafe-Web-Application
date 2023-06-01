// import {Sequelize} from "sequelize";
// import db from "../config/Database.js";
 
// const {DataTypes} = Sequelize;
 
// const Foods = db.define('foods',{
//     id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey:true
//     },
    
//     name: {
//         type:DataTypes.STRING,
//         allowNull:false,
//     },

//     price: {
//         type: DataTypes.INTEGER,
//         allowNull: true,
//     },

//     stars: {
//         type: DataTypes.INTEGER,
//         allowNull: true,
//     },

//     people:{
//         type: DataTypes.INTEGER,
//         allowNull: true,
//     },

//     selected_people:{
//         type: DataTypes.INTEGER,
//         allowNull: true,
//     },

//     img:{
//         type:DataTypes.STRING,
//         allowNull: true,
//     },

//     location:{
//         type:DataTypes.STRING,
//         allowNull: true,
//     },

// //     // created_at:{
// //     //     type:DataTypes.STRING,
// //     //     allowNull: true,
// //     // },

// //     // updated_at:{
// //     //     type:DataTypes.STRING,
// //     //     allowNull: true,
// //     // },

//     type_id: {
//         type: DataTypes.INTEGER,
//         allowNull: true,
//     },

// },{
//     freezeTableName:true
// });
 
// export default Foods;
 
// (async()=>{
//     await db.sync();
// })();