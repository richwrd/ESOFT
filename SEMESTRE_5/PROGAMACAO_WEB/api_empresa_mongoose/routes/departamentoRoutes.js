const express = require('express')
const router = express.Router()

const departamentoController = require('../controllers/departamentoController')

router.get('/remove/:id', departamentoController.removeDepartamento)
router.get('/list', departamentoController.listAll)
router.get('/create', departamentoController.createDepartamento) 
router.post('/create', departamentoController.createDepartamentoPost)
router.get('/edit/:id', departamentoController.editDepartamento)
router.post('/edit', departamentoController.editDepartamentoPost)

module.exports = router