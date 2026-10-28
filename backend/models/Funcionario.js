const { DataTypes } = require('sequelize')
const conn = require('../db/conn')

const Funcionario = conn.define('funcionario', {
    codFuncionario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'funcionarios'
})

module.exports = Funcionario