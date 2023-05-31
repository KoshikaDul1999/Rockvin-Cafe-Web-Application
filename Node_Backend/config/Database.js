import {Sequelize} from "sequelize";

// const db = new Sequelize('u812963415_caferockvin','u812963415_caferockvin','S4iko>BTA*',{
//     host: '191.96.56.1',
//     dialect: 'mysql'
// });

const db = new Sequelize('u812963415_caferockvin','root','',{
    host: 'localhost',
    dialect: 'mysql'
});
 

 
export default db;
