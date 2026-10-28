const express = require('express')
const cors = require('cors')
const app = express()

const hostname = 'localhost'
const PORT = 3000
const conn = require('./db/conn')

const authMiddleware = require('./middleware/auth.middleware')
const authController = require('./controller/auth.controller')
const funcionarioController = require('./controller/funcionario.controller')
const motoristaController = require('./controller/motorista.controller')

//MIDDLEWARE

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

//ROTAS

app.post('/funcionario', funcionarioController.cadastrar)
app.post('/login', authController.login)

app.use(authMiddleware)

app.post('/motorista', motoristaController.cadastrar)
app.get('/motoristas', motoristaController.listar)
app.get('/motorista/id/:id', motoristaController.buscarID)
app.get('/motoristas/nome/:nome', motoristaController.buscarNome)
app.patch('/motorista/:id', motoristaController.atualizar)
app.delete('/motorista/:id', motoristaController.apagar)

//SERVIDOR

app.listen(PORT, hostname, ()=>{
    console.log(`servidor rodando em http://${hostname}:${PORT}`)
})
