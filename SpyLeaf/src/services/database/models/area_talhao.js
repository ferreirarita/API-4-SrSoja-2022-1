const { DataTypes } = require('sequelize')

module.exports = {
    area_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    area_latitude: {
        type: DataTypes.STRING
    },
    area_longitude: {
        type: DataTypes.STRING
    }
}