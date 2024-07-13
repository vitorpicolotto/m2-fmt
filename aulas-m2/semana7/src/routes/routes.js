const { Router } = require('express')

// const petRoutes = require('./pets.routes')
// const vacinasRoutes = require('./vacinas.routes')
// const servicosRoutes = require('./servicos.routes')
// const pedidosRoutes = require('./pedidos.routes')
const responsaveisRoutes = require('./responsaveis.routes')
const usuariosRoutes = require('./usuarios.routes')
const LoginController = require('../controllers/LoginController')

const routes = new Router()

// routes.use('/pets', petRoutes)
// routes.use('/vacinas', vacinasRoutes)
// routes.use('/servicos', servicosRoutes)
// routes.use('/pedidos', pedidosRoutes)
routes.use('/responsaveis', responsaveisRoutes)
routes.use('/usuarios', usuariosRoutes)
routes.post('/login', LoginController.login)

module.exports = routes