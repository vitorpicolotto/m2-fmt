//Dado um array de objetos representando pessoas com propriedades nome e idade, crie uma função que retorne um array, contendo apenas os nomes das pessoas com idade maior ou igual a 18 anos.

let pessoas =[
    {nome: 'Alice', idade: 17},
    {nome: 'Bob', idade: 22},
    {nome: 'Charlie', idade: 16},
    {nome: 'David', idade: 19}
]

function filtrarAdultos(pessoas){ //precisa primeiro filtrar quem tem mais de 18 e depois criar um array novo
   return pessoas.filter(pessoa => pessoa.idade >= 18).map(pessoa => pessoa.nome) 
}

console.log(filtrarAdultos(pessoas))