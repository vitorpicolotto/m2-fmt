function buscarInformacoesCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(()=> {console.log("Falha ao fazer a requisição da API")
        
    })
}

module.exports = buscarInformacoesCep