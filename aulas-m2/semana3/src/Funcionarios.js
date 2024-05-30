const Pessoa = require('./Pessoa')

class Funcionario extends Pessoa {
    #cargo
    
    constructor(nome, idade, cargo){
        super(nome, idade) //pega as informações da classe Pessoa
        this.#cargo = cargo
    }

    get cargo(){
        return this.#cargo
    }
}

module.exports = Funcionario