const express = require('express')
const router = express.Router()

const cargoController = require('../controllers/cargoController')

router.get('/find/:id', cargoController.findCargo)
router.get('/remove/:id', cargoController.removeCargo)
router.get('/list', cargoController.listAll)
router.get('/create', cargoController.createCargo) 
router.post('/create', cargoController.createCargoPost)
router.get('/edit/:id', cargoController.editCargo)
router.post('/edit', cargoController.editCargoPost)

module.exports = router