        //AULA 1//

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



        //AULA 2//


//Declaração de objetos

let pessoa = {
    nome: "Vitor",
    idade: 29,
    profissao: "Oceanógrafo"
}

//Modificando propriedades de objetos

//Acessando
console.log(pessoa.nome)
console.log(pessoa["nome"])

//Alterando
pessoa.profissao = "Desenvolvedor"
console.log(pessoa.profissao)

//Adicionando
pessoa.time = "Coritiba"
console.log(pessoa.time)

//Deletar
delete pessoa.time


    //Chaves dinâmicas 

//Criando objetos com CD
let chaves = ["A", "B", "C"]
let valores = [1, 2, 3]

let novoArray = chaves.map((chave, indice) =>{
    return {[chave]: valores[indice]}
})
console.log(novoArray)

let propriedade = "nome"
let pessoa1 = {
    [propriedade]: "Vitor"
}
console.log(pessoa1)

//Acessando valores de propriedades com CD
let chave = "idade"
let pessoa2 = {
    nome: "VP",
    idade: 29
}
console.log(pessoa2[chave])

//Criando propriedades dinamicamente / propriedades dinamicas
let usuario = {}
let chave1 = "email"

usuario[chave1] = "vitor@email.com"
console.log(usuario)

//Usando expressões como chaves
let contador = 0;
let prefixo = "item"
let carrinho ={
    [prefixo + ++contador]: "Livros",
    [prefixo + ++contador]: "Caneta",
    [prefixo + ++contador]: "Borracha"
}

console.log(carrinho)

//Iterando arrays para criar propriedades
let campos = ["nome", "idade", "email"]
let valores1 = ["Vitor", 28, "vitor@email.com"]
let usuario1 = {}

campos.forEach((campo, indice) =>{
   usuario1[campo] = valores1[indice]
})
console.log(usuario1)

    //Hash Map

let mapa = new Map()
mapa.set("nome", "André") //set para adicionar
mapa.set("idade", 32) 
mapa.set("profissão", "jornalista")

console.log(mapa.get("nome")) //pega a chave
console.log(mapa.has("idade")) //tem essa chave?

mapa.delete("profissão")
console.log(mapa.has("profissão")) 

mapa.forEach((valor, chave) =>{
    console.log(`${chave}: ${valor}`)
})


    //Classe Object
//Base de todos os objetos em JS. Todos os objetos herdam métodos e propriedades da classe Object.

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

//Object.assign - Junta objetos diferentes dentro de um objeto
const dados = Object.keys(pessoa).map((p) =>{
    return {[p]: pessoa[p]}
})
const novoObjeto = Object.assign({}, ...dados)

console.log(novoObjeto)

//Object.freeze - impede uma alteração no objeto
let livro = {titulo: "Harry Potter e a Ordem da Fênix"}
Object.freeze(livro)
livro.titulo = "Senhor dos Anés: A Sociedade do Anel"
console.log(livro.titulo) //não altera o valor do objeto

    //Integração Array, Objeto e Hash Map

let paresChaveValor = [
    ["nome", "André"],
    ["idade", 32],
    ["profissão", "jornalista"]
]
let mapa1 = new Map(paresChaveValor)
console.log(mapa1.get("nome"))


let dados1 = [
    {id: 1, nome: "André", notas: [7, 9, 8]},
    {id: 2, nome: "Maria", notas: [6, 7, 8]},
    {id: 3, nome: "João", notas: [8, 9, 8]}
]

let medias = dados1.map(({nome, notas})=>{ //aqui desestruturou o objeto pra já chamar nome e nota
    let soma = notas.reduce((total, nota) =>{ //reduce para acumular
        return total + nota
    }, 0)
    let media = soma/notas.length

    return {nome, media}
})

console.log(medias)


        //AULA 3//

    //Funções de alta ordem - recebe uma ou mais funções como argumento ou retorna uma função como resultado


function executarOperacao(a, b, operacao){
    return operacao(a, b)
}
function soma1 (x,y){
    return x + y
}
function subtracao1 (x,y){
    return x - y
}
function multiplicacao1 (x,y){
    return x * y
}

console.log(executarOperacao(12, 3, soma1))
console.log(executarOperacao(30, 15, subtracao1))
console.log(executarOperacao(4, 3, multiplicacao1))


function criarSaudacao(saudacao) {
    return function (nome) {
        return `${saudacao}, ${nome}!`
    }
}

const saudacaoOla = criarSaudacao("Olá")
console.log(saudacaoOla("Vitor"))

    //CLOSURES
    //Função interna tem acesso às variáveis da função externa mesmo após a função externa ter sido executada.

function contador1(){
    let contagem = 0
    return function(){
        contagem += 1
        return contagem
    }
}
const incrementar = contador1();
console.log(incrementar())
console.log(incrementar())
//No exemplo, a função retornada pelo contador mantém uma referência a variável 'contagem', demonstrando como closures podem lembrar do estado entre execuções. MANTEM OS VALORES ATUALIZADOS, COMO O USESTATE.

function criarUsuario(nome){
    let senha = "senhaSegura"
    return {
        getNome: function(){return nome},
        validarSenha: function(tentativa){
            return tentativa === senha
        }
    }
}
const usuario2 = criarUsuario("Vitor");
console.log(usuario2.getNome());
console.log(usuario2.validarSenha("senhaSegura")) //true
console.log(usuario2.validarSenha("senhaErrada")) //false
