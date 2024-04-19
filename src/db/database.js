const { Sequelize } = require("sequelize");

const db = new Sequelize('Clinica','fact','123', {
    host: "localhost",
    dialect: "mssql"
});

module.exports = db;
