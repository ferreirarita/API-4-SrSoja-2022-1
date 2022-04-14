const dbConfig = require('../config')
const Sequelize = require('sequelize')

const Models = {
    produtor: require('./produtor'),
    fazenda: require('./fazenda'),
    talhao_saude: require('./talhao_saude'),
    area_talhao: require('./area_talhao'),
    talhao: require('./talhao')
}

const tableConfig = {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
}

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
        operatorAliases: false,
        ssl: {
            require: true,
            rejectUnauthorized: false
        },
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)


const models = {
    Produtor: sequelize.define(
        'produtor', Models.produtor, tableConfig
    ),
    Fazenda: sequelize.define(
        'fazenda', Models.fazenda, tableConfig
    ),
    Talhao_Saude: sequelize.define(
        'talhao_saude', Models.talhao_saude, tableConfig
    ),
    Area_Talhao: sequelize.define(
        'area_talhao', Models.area_talhao, tableConfig
    ),
    Talhao: sequelize.define(
        'talhao', Models.talhao, tableConfig
    )
}

// foreign key produtor -> fazenda
models.Produtor.hasMany(models.Fazenda, {
    foreignKey: {
        name: 'prd_id',
        allowNull: false
    },
    sourceKey: 'prd_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    hooks: true
})
models.Fazenda.belongsTo(models.Produtor, {
    foreignKey: 'prd_id',
    targetKey: 'prd_id'
})

// foreign key fazenda -> talhao
models.Fazenda.hasMany(models.Talhao, {
    foreignKey: {
        name: 'fzd_id',
        allowNull: false
    },
    sourceKey: 'fzd_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    hooks: true
})
models.Talhao.belongsTo(models.Fazenda, {
    foreignKey: 'fzd_id',
    targetKey: 'fzd_id'
})

// foreign key area_talhao -> talhao
models.Talhao.hasOne(models.Area_Talhao, {
    foreignKey: {
        name: 'tlh_id',
        allowNull: false
    },
    sourceKey: 'tlh_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    hooks: true
})

// foreign key talhao_saude -> talhao
models.Talhao_Saude.hasMany(models.Talhao, {
    foreignKey: {
        name: 'tlh_saude',
        allowNull: true
    },
    sourceKey: 'tsd_id',
    onDelete: 'set null',
    onUpdate: 'cascade',
    hooks: true
})
models.Talhao.belongsTo(models.Talhao_Saude, {
    foreignKey: 'tlh_saude',
    targetKey: 'tsd_id'
})

module.exports = { Sequelize, sequelize, models }