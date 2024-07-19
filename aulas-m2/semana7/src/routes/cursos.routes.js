const {Router} = require('express')
const CursoController = require('../controllers/CursoController')
const verificarPermissao = require('../middlewares/verificarPermissao')

const cursosRoutes = new Router()

cursosRoutes.post('/', verificarPermissao(['criarCursos']), CursoController.criar)
cursosRoutes.get('/', listarPermissao(['criarCursos']),CursoController.listaTodos)
cursosRoutes.get('/:id', CursoController.listarUm)
cursosRoutes.delete('/:id', CursoController.deletar)
cursosRoutes.put('/:id', CursoController.atualizar)

module.exports = cursosRoutes