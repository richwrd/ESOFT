const express = require('express')
const router = express.Router()

const gerenteController = require('../controllers/gerenteController')

router.get('/remove/:id', gerenteController.removeGerente)
router.get('/list', gerenteController.listAll)
router.get('/create', gerenteController.createGerente) 
router.post('/create', gerenteController.createGerentePost)
router.get('/edit/:id', gerenteController.editGerente)
router.post('/edit', gerenteController.editGerentePost)

module.exports = router