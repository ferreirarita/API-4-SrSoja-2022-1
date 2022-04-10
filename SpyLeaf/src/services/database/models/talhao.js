const { DataTypes } = require('sequelize')

module.exports = {
    tlh_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    tlh_apelido: {
        type: DataTypes.STRING
    },
    tlh_media_producao: {
        type: DataTypes.DECIMAL(7,2),
        defaultValue: 0.00,
    }
}