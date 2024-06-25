const {Pool} = require('pg')

const conexao = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'aramisRGB10!',
    database: 'api_pets'
})

class ServicoController {

    async criar(request, response){
        try {
            const dados = request.body
        
            if (!dados.nome || dados.preco === null || isNaN(dados.preco)){
                return response.status(400).json({mensagem: 'Os campos nome e preço são obrigatórios'})
            }
        
            const servico = await conexao.query(`
                INSERT INTO servicos (nome, descricao, preco)
                values ($1, $2, $3)
                returning *
                `, [dados.nome, dados.descricao, dados.preco]
            )
        
            response.status(201).json(servico.rows[0])   
            
        } catch {
            response.status(500).json({mensagem:'Não foi possível efetuar o cadastro de serviço'})
        }
    }


    async listarTodos(request, response){

        const query = request.query

        if (query.filtro){
            const servicos = await conexao.query(`
                SELECT * from servicos where nome ilike $1
                OR descricao ilike $1
                OR cast(preco as varchar) ilike $1
            `, [`%${query.filtro}%`])

            response.json(servicos.rows)

        } else {
            const servicos = await conexao.query("SELECT * from servicos")
            response.json(servicos.rows)
        }


    }




}

module.exports = new ServicoController()