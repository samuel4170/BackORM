const sequelize = require("../db/database");
const Sequelize = require('sequelize')


const CMS_GT = sequelize.define('CMS_SV', {
    "nombre": Sequelize.STRING,
    "email": Sequelize.STRING
}, {
    tableName: 'CMS_SV'
});


module.exports = CMS_GT;

