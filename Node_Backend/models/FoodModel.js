import { DataTypes } from 'sequelize';
import db from '../config/Database.js';
import Category from './CategoryModel.js';

const Foods = db.define(
  'foods',
  {
    food_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    food_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    food_price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    food_img: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    food_desc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    food_cat_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Category,
        key: 'cate_id',
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default Foods;

(async () => {
  try {
    await Foods.sync();
    console.log('Foods table synced successfully');
  } catch (error) {
    console.error('Error syncing Foods table:', error);
  }
})();


// import { DataTypes } from 'sequelize';
// import db from '../config/Database.js';
// import Category from './CategoryModel.js';

// const Foods = db.define(
//   'foods',
//   {
//     food_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//     },
//     food_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     food_price: {
//       type: DataTypes.INTEGER,
//       allowNull: true,
//     },
//     food_img: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     food_desc: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     food_cat_id: {
//       type: DataTypes.INTEGER,
//       allowNull: true,
//       references: {
//         model: Category,
//         key: 'cate_id',
//       },
//     },
//   },
//   {
//     freezeTableName: true,
//     timestamps: false, // Disable timestamps
//   }
// );

// export default Foods;

// (async () => {
//   try {
//     await Foods.sync();
//     console.log('Foods table synced successfully');
//   } catch (error) {
//     console.error('Error syncing Foods table:', error);
//   }
// })();




// import {Sequelize} from "sequelize";
// import db from "../config/Database.js";
// import Category from "./CategoryModel.js"; // Import the Category model
 
// const {DataTypes} = Sequelize;
 
// const Foods = db.define('foods',{
//     food_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey:true
//     },
//     food_name: {
//         type:DataTypes.STRING,
//         allowNull:false,
//     },
//     food_price: {
//         type: DataTypes.INTEGER,
//         allowNull: true,
//     },
//     food_img:{
//         type:DataTypes.STRING,
//         allowNull: true,
//     },
//     food_desc:{
//         type:DataTypes.STRING,
//         allowNull: true,
//     },
//     food_cat_id: {
//         type: DataTypes.INTEGER,
//         allowNull: true,
//         references: {
//             model: Category, // Replace 'food_categories' with the actual name of the table you want to reference
//             key: 'cate_id' // Replace 'id' with the actual name of the primary key column in the referenced table
//         }
//     },
// },{
//     freezeTableName:true
// });
 
// export default Foods;
 
// (async()=>{
//     await db.sync();
// })();