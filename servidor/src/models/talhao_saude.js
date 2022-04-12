const { DataTypes } = require('sequelize')

module.exports = {
    tsd_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tsd_nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tsd_descr: {
        type: DataTypes.STRING,
        defaultValue: "..."
    }
}