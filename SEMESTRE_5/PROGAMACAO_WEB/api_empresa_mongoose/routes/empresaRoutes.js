const express = require('express')
const router = express.Router()

const empresaController = require('../controllers/empresaController')

router.get('/remove/:id', empresaController.removeEmpresa)
router.get('/list', empresaController.listAll)
router.get('/create', empresaController.createEmpresa) 
router.post('/create', empresaController.createEmpresaPost)
router.get('/edit/:id', empresaController.editEmpresa)
router.post('/edit', empresaController.editEmpresaPost)

module.exports = router