class Pessoa {
    #nome //atributo privado
    #idade //atributo privado - não pode ser alterado - usar o metodo get e set

    //atributos
    constructor(nome, idade){ //informações que a classe recebe quando é criada
        this.#nome = nome; //atributo name recebe o valor passado no construtor 
        this.#idade = idade; //atributo idade recebe o valor passado no construtor
    }
    get nome(){ //usa o método get para conseguir acessar as informações privadas
        return this.#nome
    }
    get idade(){
        return this.#idade
    }

    set setIdade(idade){ //quando for chamado, poderá alterar o valor da idade no objeto
        return this.#idade = idade
    }

    cumprimentar(){
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos!`);
    }
}

module.exports = Pessoa;