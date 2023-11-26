const express = require('express')
const router = express.Router()

const colaboradorController = require('../controllers/colaboradorController')


router.get('/view/:id', colaboradorController.viewColaborador)
router.get('/remove/:id', colaboradorController.removeColaborador)
router.get('/list', colaboradorController.listAll)
router.get('/create', colaboradorController.createColaborador) 
router.post('/create', colaboradorController.createColaboradorPost)
router.get('/edit/:id', colaboradorController.editColaborador)
router.post('/edit', colaboradorController.editColaboradorPost)

module.exports = router