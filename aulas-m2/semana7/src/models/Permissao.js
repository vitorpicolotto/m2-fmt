const connection = require("../database/connection");
const {DataTypes} = require('sequelize')

const Permissao = connection.define('permissao',{
    descricao: DataTypes.STRING
})


module.exports = Permissao