const Funcionario = require('../models/Funcionario')
const CryptoJs = require('crypto-js')

const login = async (req, res)=>{
    let { email, senha } = req.body

    try{
        let funcionario = await Funcionario.findOne({where: {email: email}})

        let senhaDescripto = CryptoJs.AES.decrypt(funcionario.senha, "senha").toString(CryptoJs.enc.Utf8)

        if(!email || senha !== senhaDescripto){
            return res.status(400).json({message: 'credenciais incorretas'})
        }

        const DuasHorasMs = 2 * 60 * 60 * 1000
        const tempoExpiracao = Date.now() + DuasHorasMs

        const token = CryptoJs.AES.encrypt(
            JSON.stringify({
            nomeFuncionario: funcionario.nome,
            expiraEm: tempoExpiracao
        }), "senha").toString()

        res.status(200).json({ token: token, nome: funcionario.nome})
    }catch(err){
        console.error('erro ao logar', err)
        res.status(500).json({message: 'erro ao logar'})

    }
}

module.exports = {login}