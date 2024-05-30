const readline = require('readline/promises');
const { calcularAreaTriangulo } = require('./formulasAreas');
const { calcularPerimetroTriangulo } = require('./formulasPerimetros');
const { calcularEmprestimoJurosSimples } = require('./emprestimos');
const buscarInformacoesCep = require('./buscarCep');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})


async function areaTriangulo(){
    const altura = await input.question("Qual é a altura do triângulo?")
    const base = await input.question("Qual é a base?")

    console.log(calcularAreaTriangulo(altura, base))
    input.close()
}

//areaTriangulo()

async function perimetroTriangulo(){
    const lado1 = Number(await input.question("Qual é a medida do primeiro lado?"))
    const lado2 = Number(await input.question("Qual é a medida do segundo lado?"))
    const lado3 = Number(await input.question("Qual é a medida do terceiro lado?"))

    console.log(calcularPerimetroTriangulo(lado1, lado2, lado3))
    input.close()
}

//perimetroTriangulo()


async function realizarEmprestimo(){
    const capital = Number(await input.question("Quanto você precisa emprestar?"))
    const tempo = Number(await input.question("Em quanto tempo você gostaria de pagar?"))
    const taxaAnual = Number(await input.question("Qual a taxa de juros anual?"))

    const juros = calcularEmprestimoJurosSimples(capital, tempo, taxaAnual)

    console.log("Você pagará de juros: R$", juros )
    console.log("O valor total será de: R$", juros + capital)
    input.close()
}

//realizarEmprestimo()

async function cep(){
    const cep = await input.question("Qual o seu cep?")
    buscarInformacoesCep(cep)
}

//cep()


