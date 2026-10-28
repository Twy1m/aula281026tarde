const Funcionario = require('../models/Funcionario')
const cryptoJs = require('crypto-js')

const cadastrar = async (req, res)=>{
    let { nome, email, senha, } = req.body

    if(!nome || !email || !senha ){
        return res.status(400).json({ message: 'insira todos os campos!'})
    }

    try{
        let senhaCripto = cryptoJs.AES.encrypt(senha, "senha").toString()

        let funcionario = await Funcionario.create({
            nome,
            email,
            senha: senhaCripto
        })

        funcionario.cnh = undefined
        funcionario.cpf = undefined

        res.status(201).json({
            message: 'cadastro realizado'
        })
    }catch(err){
        console.error('erro ao cadastrar', err)
        res.status(500).json({message: 'erro ao cadastrar'})
    }
}

module.exports = { cadastrar }