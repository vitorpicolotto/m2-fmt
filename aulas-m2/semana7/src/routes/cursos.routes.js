const {Router} = require('express')
const CursoController = require('../controllers/CursoController')
const validaToken = require('../middlewares/validaToken')

const cursosRoutes = new Router()

cursosRoutes.post('/', validaToken, CursoController.criar)
cursosRoutes.get('/', CursoController.listaTodos)
cursosRoutes.get('/:id', CursoController.listarUm)
cursosRoutes.delete('/:id', CursoController.deletar)
cursosRoutes.put('/:id', CursoController.atualizar)

module.exports = cursosRoutes