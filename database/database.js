const Sequelize = require('sequelize');

const connection = new Sequelize('qa','root','852hjk',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;