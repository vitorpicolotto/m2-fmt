//Crie uma função contador que retorna uma outra função que incrementa um valor interno e retorna o valor atualizado a cada chamada.

let contador1 = contador()
let contador2 = contador()

function contador(){
    let valor = 0
    return function (){
        valor += 1
        return valor
    }
}

console.log(contador1());
console.log(contador1());
console.log(contador1());

console.log(contador2());
console.log(contador2());