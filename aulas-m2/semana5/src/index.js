//express não reconhece arquivos json, então precisa desse código. Habilita o servidor a receber json.

//precisa definir as salas do prédio - DEFINIR UMA ROTA
/*
1. Verbo HTTP: GET (pegar dados), DELETE (deletar), POST (cadastrar dados), PUT (atualizar)
2. Path: caminho - não colocar espaço. Divisão por underline
3. Implementação: o que nosso código vai fazer quando entrar na rota?
*/

//Response é usado no momento em que quer encerrar a requisição.

//para cadastrar - tem o Body (corpo) da requisição

//o /:id não quer dizer que é literalmente dessa forma que tem que colocar. Serve para o express identificar que vai deletar o id que o desenvolvedor selecionar como /pets/1 - é uma rota dinâmica (usada em delete e put)

/*
Formas de manipulação de dados via:
Body: post e put
Query Params: get
Route Params (:id): delete, put e get
*/

const express = require("express")

const petRoutes = require('./routes/pets.routes')
const vacinasRoutes = require("./routes/vacinas.routes")
const servicosRoutes = require("./routes/servicos.routes")

const app = express()
app.use(express.json()) // Habilita o servidor a receber JSON

app.use('/pets', petRoutes)
app.use('/vacinas', vacinasRoutes)
app.use('/servicos', servicosRoutes)

app.listen(3000, () => {
    console.log("Servidor Online")
})