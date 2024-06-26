//Dado um array de objetos representando produtos com propriedades categoria e preço, crie uma função que agrupe os produtos por categoria e calcule o preço total de cada categoria.

let produtos = [
    {categoria: 'eletronicos', preco: 99.99},
    {categoria: 'livros', preco: 19.99},
    {categoria: 'eletronicos', preco: 199.99},
    {categoria: 'livros', preco: 29.99},
    {categoria: 'roupas', preco: 49.99},
]


function agruparPorCategoria(produtos){
    return produtos.reduce((acumulador, produto) =>{
        let {categoria, preco} = produto; //desestruturação
    
        if (acumulador[categoria]){
            acumulador[categoria] += preco;
        }else {
            acumulador[categoria] = preco
        }
        return acumulador
       }, {})
}

console.log(agruparPorCategoria(produtos))

