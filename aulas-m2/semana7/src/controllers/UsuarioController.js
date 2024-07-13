const Usuario = require("../models/Usuario")
const regexEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

class UsuarioController {
    async criarConta(request, response){
        const dados = request.body 

        try {
            if(!dados.nome) {
                return response.status(400).json({erro: 'Nome é obrigatório!'})
            }
     
            if(regexEmail.test(dados.email) === false) {
                return response.status(400).json({erro: 'Email inválido!'})
            }
    
            if(!(dados.password.length >= 8 && dados.password.length <= 16)){
                return response.status(400).json({erro: 'Senha deve ter entre 8 e 16 caracteres'})
            }
    
            const usuarioExistente = await Usuario.findOne({
                where: {email: dados.email}
            })

            if (usuarioExistente){
                return response.status(409).json({erro: 'Email já cadastrado!'})
            }

            const usuario = await Usuario.create({
                ...dados,
                password_hash: dados.password
            })
            response.status(201).json({nome: usuario.nome, createdAt: usuario.createdAt, updatedAt: usuario.updatedAt})
            
        } catch (error) {
            return response.status(500).json({mensagem: 'Erro ao cadastrar usuário'})
        }

    }
}


module.exports = new UsuarioController