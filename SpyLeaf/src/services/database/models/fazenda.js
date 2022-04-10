const { DataTypes } = require('sequelize')

module.exports = {
    fzd_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    fzd_nome: {
        type: DataTypes.STRING
    },
    fzd_cep: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fzd_estado: {
        type: DataTypes.STRING(2),
        allowNull: false
    },
    fzd_municipio: {
        type: DataTypes.STRING,
        allowNull: false
    }
}