function calcularEmprestimoJurosSimples (capital, tempo, taxaAnual){
    const juros = capital * tempo * (taxaAnual/100)
    return juros
}

module.exports= {
    calcularEmprestimoJurosSimples
}