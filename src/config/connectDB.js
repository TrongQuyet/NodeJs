const { Sequelize } = require('sequelize');
// sequelize connnect mysql is available
const sequelize = new Sequelize('testdatabase', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  logging:false //off dong lenh Executing (default): SELECT 1+1 AS result
});


//ham check connect 
let connectDB=async()=>{ //async + await
    try {
        await sequelize.authenticate();//ham bat dong bo
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

  module.exports = connectDB;