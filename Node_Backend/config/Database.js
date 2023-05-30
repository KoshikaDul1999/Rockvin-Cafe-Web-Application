import {Sequelize} from "sequelize";

const db = new Sequelize('u812963415_caferockvin','root','',{
    host: 'localhost',
    dialect: 'mysql'
});
 

 
export default db;