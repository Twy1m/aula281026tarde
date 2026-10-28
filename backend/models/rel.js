const Motorista = require('./Motorista')
const Carga = require('./Carga')
const Entrega = require('./Entrega')

Motorista.hasMany(Carga, {
    foreignKey: 'idMotorista',
    as: "CargaMotorista",
    onDelete: "CASCADE"
})
Carga.belongsTo(Motorista, {
    foreignKey: 'idMotorista',
    as: "MotoristaCarga",
    allowNull: false
})

Carga.hasMany(Entrega, {
    foreignKey: 'idCarga',
    as: "EntregaCarga",
    onDelete: "CASCADE"
})
Entrega.belongsTo(Carga, {
    foreignKey: 'idCarga',
    as: "CargaEntrega",
    allowNull: false
})

module.exports = { Motorista, Carga, Entrega }