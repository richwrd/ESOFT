const express = require('express')
const router = express.Router()

const usersController = require('../controllers/usersController')

router.get('/remove/:id', usersController.removeUser)
router.get('/list', usersController.listAll)
router.get('/create', usersController.createUser) 
router.post('/create', usersController.createUserPost)
router.get('/edit/:id', usersController.editUser)
router.post('/edit', usersController.editUserPost)

module.exports = router