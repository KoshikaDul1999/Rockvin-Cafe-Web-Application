import {Sequelize} from "sequelize";

const db = new Sequelize('rockvincafe','root','',{
    host: 'localhost',
    dialect: 'mysql',
});

// const db = new Sequelize('rockvinw_cafe','rockvinw_admin','Rockvin99@admin',{
//     host: 'http://188.40.133.160/~rockvinw/',
//     dialect: 'mysql',
// });

export default db;
