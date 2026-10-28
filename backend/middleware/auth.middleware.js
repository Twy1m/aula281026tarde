const CryptoJs = require('crypto-js')

const authMiddleware = async (req, res, next)=>{

    const token = req.headers['authorization']

    if(!token){
        return res.status(401).json({ message: 'token expirado2'})
    }

    try{
        let bytes = CryptoJs.AES.decrypt(token, "senha").toString(CryptoJs.enc.Utf8)
        if(!bytes){
            return res.status(401).json({ message: 'token invalido'})
        }
        
        bytes = JSON.parse(bytes)
        
        if(!bytes){
            return res.status(401).json({ message: 'token invalido'})
        }
        if(bytes.expiraEm < Date.now()){
            return res.status(401).json({ message: 'token expirado'})
        }
    }catch(err){
        console.error('erro', err)
        res.status(500).json({ message: 'erro ao autenticar'})
    }

    next()
}

module.exports = authMiddleware