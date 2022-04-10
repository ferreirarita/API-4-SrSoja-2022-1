const Sequelize = require('sequelize')
const postgres = new Sequelize({
    connectionString: process.env.DATABASE_URL,
    dialect: 'postgres'
})

const sqlite = new Sequelize({
    dialect: "sqlite",
	storage: "../../../store/sqlite.db"
})

module.exports = { postgres, sqlite }