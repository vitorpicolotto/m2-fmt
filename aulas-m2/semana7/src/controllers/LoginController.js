const Usuario = require('../models/Usuario')
const { compareSync} = require('bcryptjs')
const {sign} = require('jsonwebtoken')

class LoginController {
    async login(request,response){
        const dados = request.body 

        try {
            if(!dados.email || !dados.password){
                return response.status(400).json({erro: 'Email e senha são obrigatórios!'})
            }

            const usuario = await Usuario.findOne({
                where: {
                    email: dados.email,
                }
            })

            if(!usuario){
                return response.status(404).json({erro: 'Usuário não encontrado!'})
            }

            const senhaCorreta = compareSync(dados.password, usuario.password_hash) //as duas senhas estão batendo?
            if(senhaCorreta === false){
                return response.status(404).json({erro: 'Email ou senha incorretos!'})
            }

            //gerando um token único
            const token = sign({
                id: usuario.id,
            }, process.env.SECRET_JWT, {
                expiresIn: 86400 //1 dia
            }) 
            response.json({token: token, nome: usuario.nome})


            response.json({mensagem: 'Login realizado com sucesso!'})

        } catch (error) {
            return response.status(500).json({erro: 'Erro ao efetuar login!'})
        }

    }
}


module.exports = new LoginController()