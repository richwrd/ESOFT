const express = require('express')
const router = express.Router()

const productController = require('../controllers/ProductController')

router.get('/create', productController.createProduct)
router.post('/create', productController.createProductPost)
router.post('/remove/:id', productController.removeProduct)
router.get('/edit/:id', productController.editProduct)
router.post('/edit', productController.editProductPost)
router.post('/price100up', productController.showProductsMaior100)
router.post('/price100down', productController.showProductsMenor100)
router.post('/showcoca', productController.showProductsCoca)
router.post('/showfood', productController.showProductsFood)
router.get('/:id', productController.getProduct)
router.get('/', productController.showProducts)

module.exports = router