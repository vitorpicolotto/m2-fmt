const Programador = require("./Programador");

class ProgramadorFrontEnd extends Programador {
    #framework = ''

    constructor(nome, tempoExperiencia, framework){
        super(nome, tempoExperiencia)
        this.#framework = framework
    }

    get getFramework(){
        return this.#framework
    }

    codificar(){
        console.log("Criando interfaces web")
    }

    centralizaDiv(){
        console.log("Centralizando Divs")
    }
}

module.exports = ProgramadorFrontEnd
