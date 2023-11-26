const express = require('express')
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname,'../templates')
console.log(basePath)


router.get('/add', (req,res) => {

    const pathAbsolute = `${basePath}/productform.html`

    res.sendFile(pathAbsolute)
})

router.post('/save', (req,res) => {

    const name = req.body.name
    const price = req.body.price
    const desc = req.body.desc

    console.log(` Nome: ${name}\n Valor: R$ ${price}\n Descrição: ${desc}`)

    res.sendFile(`${basePath}/productform.html`)
})

router.get('/:id',(req,res)=> {
    const id = req.params.id
    
    /* leitura na tabela de users */
    console.log(`Estamos buscando pelo usuario: ${id}`)

    res.sendFile(`${basePath}/product.html`)
})

module.exports = router