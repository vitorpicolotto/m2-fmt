const { Router } = require('express')

const cursosRoutes = require('./cursos.routes')
const responsaveisRoutes = require('./responsaveis.routes')
const usuariosRoutes = require('./usuarios.routes')
const LoginController = require('../controllers/LoginController')

const routes = new Router()


routes.use('/cursos', cursosRoutes)
routes.use('/responsaveis', responsaveisRoutes)
routes.use('/usuarios', usuariosRoutes)
routes.post('/login', LoginController.login)

module.exports = routes