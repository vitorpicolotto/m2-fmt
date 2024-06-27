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

    async listarUm(request, response) {
        try {
            const id = request.params.id
    
            const servico = await conexao.query(`
                select * from servicos
                where id = $1
                `, [id]
            )

            if(servico.rowCount === 0){
                return response.status(404).json({mensagem: 'Não foi possível encontrar um serviço'})
            }

            response.json(servico.rows[0]) //[0] para retornar apenas um serviço.       
        } catch (error) {
            response.status(500).json({mensagem: 'Não foi possível encontrar o serviço'}) //o catch vai pegar se colocar algo diferente da id
        }
    }

    async deletar(request, response){
        try {
            const id = request.params.id
            const servico = await conexao.query(`
                DELETE from servicos
                where id = $1
                `, [id]
            )

            if(servico.rowCount === 0){
                return response.status(404).json({mensagem: 'Não foi possível encontrar um serviço'})
            }

            response.status(204).json({mensagem: 'Serviço deletado com sucesso!'})
        } catch (error) {
            response.status(500).json({mensagem: 'Não foi possível deletar o serviço'})
        }
    }

    async atualizar(request, response){
        try {
            const dados = request.body
            const id = request.params.id

            const dadosDoServico = await conexao.query(`
                select * from servicos
                where id = $1
                `, [id]
            )

            await conexao.query(`
                UPDATE servicos 
                set nome = $1,
                descricao = $2,
                preco = $3
                where id = $4
                `, [dados.nome || dadosDoServico.rows[0].nome, 
                    dados.descricao || dadosDoServico.rows[0].descricao, 
                    dados.preco || dadosDoServico.rows[0].preco, 
                    id]
            )

            response.status(200).json({mensagem: 'Atualizado com sucesso!'})
            
        } catch (error) {
            response.status(500).json({mensagem: 'Não foi possível atualizar o serviço'})
        }
    }

}

module.exports = new ServicoController()