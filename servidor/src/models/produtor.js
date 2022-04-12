const { DataTypes } = require('sequelize')

module.exports = {
    prd_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    prd_nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validade: {
            notNull: {
                msg: "Informe um nome"
            }
        }
    },
    prd_email: {
        type: DataTypes.STRING,
        allowNull: false,
        validade: {
            notNull: {
                msg: "Informe um e-mail"
            },
            isEmail: {
                msg: "Informe um e-mail válido"
            }
        }
    },
    prd_senha: {
        type: DataTypes.STRING,
        allowNull: false,
        validade: {
            notNull: {
                msg: "Informe uma senha"
            },
            /*
            len: function (senha, next) {
                //console.log("senha", senha);
                if (senha.length < 6)
                    return next("A senha deve ter pelo menos 6 caracteres");
                return next();
            }*/
        }
    }
}