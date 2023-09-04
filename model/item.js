const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const item=sequelize.define('product',{
    id:{
        type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

module.exports=item;

