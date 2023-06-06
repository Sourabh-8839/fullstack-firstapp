
const Sequelize =require('sequelize');

const sequelize = require('../util/database');

const details = sequelize.define('user',{

    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },

    userName:{
        type:Sequelize.STRING,
        allowNull:false,

    },
    phoneNumber:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    }

}) 

module.exports = details;