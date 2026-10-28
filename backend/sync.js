const { Motorista, Carga, Entrega } = require('./models/rel')
const Funcionario = require('./models/Funcionario')
const conn = require('./db/conn')

async function syncDataBase() {
    try{
        await conn.sync({ force: true})
        console.log('iniciando sincronização')
    }catch(err){
        console.error('erro ao sincronizar', err)
    }finally{
        await conn.close()
        console.log('finalizando sincronização')
    }
}

syncDataBase()