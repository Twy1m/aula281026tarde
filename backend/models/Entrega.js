const { DataTypes } = require('sequelize')
const conn = require('../db/conn')

const Entrega = conn.define('entrega', {
    codEntrega: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cidadeDestino: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM("ENTREGUE", "TRANSITO"),
        allowNull: false
    },
    dataHora: {
        type: DataTypes.DATE,
        allowNull: false
    },
    idCarga: {
        type: DataTypes.INTEGER,
        references: {
            module: 'cargas',
            key: 'codCarga'
        }
    }
}, {
    timestamps: false,
    tableName: 'entregas'
})

module.exports = Entrega