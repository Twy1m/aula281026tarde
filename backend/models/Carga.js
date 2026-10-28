const { DataTypes } = require('sequelize')
const conn = require('../db/conn')

const Carga = conn.define('carga', {
    codCarga: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    peso: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    volume: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    codRastreio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idMotorista: {
        type: DataTypes.INTEGER,
        references: {
            module: 'motoristas',
            key: 'codMotorista'
        }
    }
}, {
    timestamps: false,
    tableName: 'cargas'
})

module.exports = Carga