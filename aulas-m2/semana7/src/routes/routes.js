const { Router } = require('express')

const cursosRoutes = require('./cursos.routes')
const responsaveisRoutes = require('./responsaveis.routes')
const usuariosRoutes = require('./usuarios.routes')
const LoginController = require('../controllers/LoginController')
const auth = require('../middlewares/validaToken')

const routes = new Router()


routes.use('/usuarios', usuariosRoutes)
routes.post('/login', LoginController.login)

routes.use(auth)
routes.use('/responsaveis', auth, responsaveisRoutes)
routes.use('/cursos', cursosRoutes)

module.exports = routes