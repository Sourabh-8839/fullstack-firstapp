
const Sequelize = require('sequelize');

const sequelize = new Sequelize('user','root','Sourabh8839',{
    dialect:'mysql',
    host:'localhost'
});

module.exports = sequelize;

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('sourabh','root','Sourabh8839',{
//     dialect:'mysql',
//     host:'localhost'
// });

// module.exports = sequelize;