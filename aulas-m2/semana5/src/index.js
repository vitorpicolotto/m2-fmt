const express = require ('express') //criando o prédio - SERVIDOR
const {Pool} = require('pg')

const app = express()
app.use(express.json()) //express não reconhece arquivos json, então precisa desse código. Habilita o servidor a receber json.

const conexao = new Pool({
    host: 'localhost',
    port: 5432, //padrão do postgres!!
    user: 'postgres',
    password: 'aramisRGB10!',
    database: 'api_pets'
})

//precisa definir as salas do prédio - DEFINIR UMA ROTA
/*
1. Verbo HTTP: GET (pegar dados), DELETE (deletar), POST (cadastrar dados), PUT (atualizar)
2. Path: caminho - não colocar espaço. Divisão por underline
3. Implementação: o que nosso código vai fazer quando entrar na rota?
*/

app.get('/bemvindo', (request, response)=>{
    response.send("Bem vindo, usuário!")
})
//Response é usado no momento em que quer encerrar a requisição.

//para cadastrar - tem o Body (corpo) da requisição
app.post('/pets', async (request, response) =>{

    try {
        
        const dados = request.body
    
        if(!dados.nome || !dados.tipo || !dados.raca || !dados.idade){
            return response.send("O nome, tipo, raça e idade são obrigatório!")
        } 
    
        await conexao.query
        (`
        INSERT INTO pets (nome, idade, tipo, raca, responsavel)
        values ($1, $2, $3, $4, $5)
        `, [dados.nome, dados.idade, dados.tipo, dados.raca, dados.responsavel])
    
        console.log(dados)
        response.status(201).json({mensagem: "Criado com sucesso"})
    } catch {
        response.status(500).json({mensagem: "Não foi possível cadastrar o pet"})
    }

})

app.listen(3000, () => {
    console.log('Servidor online na porta 3000')
}) //porta do prédio, para acessarmos as informações