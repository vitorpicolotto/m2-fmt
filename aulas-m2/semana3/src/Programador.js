

class Programador {
    #nome = '' //valores iniciais para não ficar undefined
    #tempoExperiencia = 0

    constructor(nome, tempoExperiencia){
        this.#nome = nome
        this.#tempoExperiencia = tempoExperiencia
    }

    get getNome(){
        return this.#nome
    }
    set setNome(nome){
        return this.#nome = nome
    }

    get getTempoExperiencia(){
        return this.#tempoExperiencia
    }
    set setTempoExperiencia(tempoExperiencia){
        return this.#tempoExperiencia = tempoExperiencia
    }


    codificar(){
        console.log("Programando em Node.js")
    }
}

module.exports = Programador