//Classes/POO

const Funcionario = require('./Funcionarios.js')
const Pessoa = require('./Pessoa.js')
const ProgramadorFrontEnd = require('./ProgamadorFrontEnd.js')
const Programador = require('./Programador.js')

const vp = new Pessoa('Vitor André', 29)

console.log(vp.nome)
console.log(vp.idade)

vp.cumprimentar()

vp.setIdade = 30
console.log(vp.idade)

//Herança

const funcionario = new Funcionario('Vitor', 29, 'oceanógrafo')

console.log(funcionario.nome, funcionario.idade, funcionario.cargo)


//EXERCÍCIO - programador

const programador = new Programador('Renato Botteon', 4)

console.log(programador.getNome, programador.getTempoExperiencia)


const programadorFront = new ProgramadorFrontEnd ('Aramis Merki', 6, 'React')

console.log(programadorFront.getNome, programadorFront.getTempoExperiencia, programadorFront.getFramework)
console.log(programadorFront.centralizaDiv())






