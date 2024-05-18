//viaCep

const readline = require('readline')
const fs = require('fs')
const input = readline.createInterface(
    process.stdin,
    process.stdout
)


input.question("Qual é o CEP da sua residência?", (cepDigitado)=>{

    if(cepDigitado.length === 8){
        fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
        .then(async(response) => {
            const data = await response.json()
            console.log(data)

            fs.writeFileSync('endereco.txt', `Meu endereço é: ${data.logradouro}, 1199 (apto 204B), ${data.bairro}, ${data.localidade}/${data.uf}`)
            fs.writeFileSync('endereco.html', `
            <html>
            <p>
            Meu endereço é: ${data.logradouro}, 1199 (apto 204B), ${data.bairro}, ${data.localidade}/${data.uf}
            </p>
            </html>
            `)
        })
        .catch(()=>{
            console.log("Erro ao pesquisar no viaCep")
        })
    }

})

// input.question("Qual é o CEP da sua residência?", (cepDigitado)=>{

//     if(cepDigitado.length === 8){
//         fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
//         .then(response => {
//          if(response.ok === true) {
//              return response.json()
//          } else {
//              throw new Error()      -> manda direto pro .catch se tem erro na requisição.
//          }
//      })
//         .then((data) => console.log(data))
//         .catch(()=>{
//             console.log("Erro ao pesquisar no viaCep")
//         })
//     }

// })