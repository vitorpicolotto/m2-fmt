//Dado um array de números, crie uma função que use reduce para calcular o produto de todos os números no array.

let numeros = [1,2,3,4,5]

function calcularProduto(numeros){
    let produto = numeros.reduce((total, numero) =>{
    return total * numero}, 1)
    return produto
}

console.log(calcularProduto(numeros))