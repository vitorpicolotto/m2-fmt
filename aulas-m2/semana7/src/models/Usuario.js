const { DataTypes } = require('sequelize')
const connection = require('../database/connection')
const {hashSync} = require('bcryptjs') //criptografar a senha
const Permissao = require('./Permissao')
const UsuarioPermissoes = require('./UsuarioPermissoes')

const Usuario = connection.define('usuarios',{
    nome: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password_hash: {
        type: DataTypes.STRING
    }
})

//hooks
Permissao.belongsToMany(Usuario, {through: UsuarioPermissoes}) //é o passo que precisa para o Sequelize identificar a relação de muitos pra muitos e a tabela pivô
Usuario.belongsToMany(Permissao, {through: UsuarioPermissoes})



Usuario.beforeSave((usuario) =>{
    usuario.password_hash = hashSync(usuario.password_hash, 10) //palavra, numero de saltos/complexidade da criptografia - quanto mais, mais demorado - 10 é o padrão
    return usuario
})

module.exports = Usuario