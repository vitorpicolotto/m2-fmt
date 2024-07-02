const express = require("express")
const cors = require("cors")
const routes = require('./routes/routes')
const connection = require("./database/connection")

const PORT_API = process.env.PORT_API

class Server {
    constructor(server = express()){
        this.middlewares(server)
        this.database()
        server.use(routes)
        this.initializeServer(server)
    }

    async middlewares(app){
        app.use(cors())
        app.use(express.json())
    }

    async database(){
        try {
            await connection.authenticate()
            console.log('Connection has been established successfully.')
        } catch (error) {
            console.log('Erro ao conectar com o banco de dados!')
        }
    }

    async initializeServer(app){
        app.listen(PORT_API, () => {
            console.log(`Servidor rodando na porta ${PORT_API}`)
        })
    }

}

module.exports = { Server }