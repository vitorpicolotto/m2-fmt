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

app.get('/pets', async (request, response)=>{
    const dados = request.query

    if(dados.nome){
        const pets = await conexao.query("SELECT * from pets where nome ilike $1", [`%${dados.nome}%`])
        response.status(200).json(pets.rows)
    } else {
        const pets = await conexao.query("SELECT * from pets")
        response.status(200).json(pets.rows)
    }
})
//Response é usado no momento em que quer encerrar a requisição.

//para cadastrar - tem o Body (corpo) da requisição
app.post('/pets', async (request, response) =>{

    try {
        
        const dados = request.body
    
        if(!dados.nome || !dados.tipo || !dados.raca || !dados.idade){
            return response
            .status(400)
            .json({mensagem: "O nome, tipo, raça e idade são obrigatório!"})
        } 
    
        await conexao.query
        (`
        INSERT INTO pets (nome, idade, tipo, raca, responsavel)
        values ($1, $2, $3, $4, $5)
        `, [dados.nome, dados.idade, dados.tipo, dados.raca, dados.responsavel])
    
        response.status(201).json({mensagem: "Criado com sucesso"})
    } catch {
        response.status(500).json({mensagem: "Não foi possível cadastrar o pet"})
    }

})

app.post("/vacinas", async (request, response) => {

    try {
        const vacina = request.body
    
        if(!vacina.nome || !vacina.descricao || !vacina.dose){
            return response
            .status(400)
            .json({mensagem: "Os dados da vacina são obrigatórios"})
        }
    
        await conexao.query(`
            INSERT INTO vacinas (nome, descricao, dose)
            values ($1, $2, $3)    
        `, [vacina.nome, vacina.descricao, vacina.dose])
    
        response.status(201).json({mensagem: "Vacina cadastrada com sucesso"})
    } catch {
        response.status(500).json({mensagem:"Erro ao cadastrar a vacina"})
    }
})

//o /:id não quer dizer que é literalmente dessa forma que tem que colocar. Serve para o express identificar que vai deletar o id que o desenvolvedor selecionar como /pets/1 - é uma rota dinâmica (usada em delete e put)
app.delete('/pets/:id', (request, response) =>{
    const id = request.params.id

    conexao.query("DELETE FROM pets where id = $1", [id])

    response.status(204).json()
})


app.listen(3000, () => {
    console.log('Servidor online na porta 3000')
}) //porta do prédio, para acessarmos as informações


/*
Formas de manipulação de dados via:
Body: post e put
Query Params: get
Route Params (:id): delete, put e get
*/