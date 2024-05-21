//Arrays em JS
let filmes = ['Rambo', 'Braddock', 'O Grande Dragão Branco']
let numeros = new Array (1,2,3,4,5)

//Acessando os elementos
console.log(filmes[0]);
console.log(numeros[2]);

//Desestruturando 
const [filmeUm, filmeDois, filmeTres] = filmes
console.log(filmeUm)
console.log(filmeDois)

//Modificando um elemento de um array
filmes[0] = "Stallone: Cobra"
filmes[2] = "Comando Delta"

console.log(filmes)

//Comprimento de array
const comprimentoListaDeFilmes = filmes.length
console.log(comprimentoListaDeFilmes)

    // MANIPULAÇÃO DE ARRAYS //
//Adicionando elementos em um array
//Push adiciona no final do array, unshift adiciona no início
filmes.push("Invasão USA")
filmes.unshift("Walker Texas Ranger")

//Removendo elementos
//Pop remove o último, shift remove o primeiro
filmes.pop()
filmes.shift()


//Transformação de Arrays
//Map cria um novo array com os resultados da chamada de uma função para cada elemento
let numerosDobro = numeros.map((numeros) =>{
    return numeros * 2
})

console.log(numerosDobro)

let testes = numeros.map((numero, index) =>{
    return `testes ${index}`
})

//Filter - validar dados para uma dada condição.
let numerosPares = numeros.filter((numero) =>{
    return numero % 2 === 0
})
console.log(numerosPares)

//Reduce - aplica uma função contra um acumulador e cada elemento do array (da esquerda pra direita), para reduzí-lo a um único valor

let soma = numeros.reduce((total, numero) => {
    return total + numero
}, 0) //0 é a posição que começa a soma
console.log(soma)

//Métodos de busca
//Find - retorna o primeiro elemento que atende a uma condição/que satisfaz a função de teste
let numeroEncontrado = numeros.find((numero) => {
    return numero > 3
})
console.log(numeroEncontrado)

//FindIndex retorna o índice do primeiro elemento que satisfaz a função de teste
let indiceEncontrado = numeros.findIndex((numero) =>{
    return numero > 3
})
console.log(indiceEncontrado)

//Métodos de ordenação
//Sort - ordena os elementos do array e retorna o próprio array
let filmesOrdenados = filmes.sort()
console.log(filmesOrdenados)

//Reverse - inverte o array e retorna o próprio array
let numerosInvertidos = numeros.reverse()
console.log(numerosInvertidos)
