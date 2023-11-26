
// configuracoes gerais do aplicativo

const express = require('express')
const mime = require('mime-types')
const app = express()
const exphbs = require('express-handlebars')

const port = 3000 // variavel de ambiente

const path = require('path')

const conn = require('../db/conn')

// const product = require('./product/index.js')
const productsRouter = require('../routes/productsRoutes')

const basePath = path.join(__dirname, '../views')


/* setup Engine Handlebars */
const hbs = exphbs.create({
    partialsDir: "views/partials"
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

/* ler css formato correto (linux) e liberar a pasta public para os arquivos serem lidos */
app.use(express.static('public', {

    setHeaders: (res, path) => {
        const mimeType = mime.contentType(path);

        if(mimeType && mimeType.startsWith('text/css')){
            res.setHeader('Content-Type', 'text/css')
        }
    }
}))


// receber dados corretamente do post 
app.use(
    express.urlencoded({
        extended: true,
    })
)

/*  toda requisicao do body é em json */
app.use(express.json())


/* para rotas de produtos utilize productsRouter */
app.use('/products', productsRouter)

app.get('/dashboard',(req,res)=> {

    const itens = ["item A", "Item B", "Item C"]

    const post = {
        title: 'Coca-Cola',
        category: 'Refrigerante',
        body: 'Geladinha',
        comments: 4,
    }

    res.render('dashboard', {itens:itens, post} )
})

app.get('/about', (req,res)=>{

    const page = 'Sobre'
    const iconpage = '/images/icon/info.ico'

    res.render('about', {page, iconpage})
})

app.get('/',(req,res)=> {

    const page = 'Home'
    const iconpage = '/images/icon/main.ico'
    

    const user = {
        name: 'Eduardo'
    }

    const auth = true


    res.render('home', {user:user , auth, page, iconpage} )
})

app.use(function(req,res,next){
    const page = 'Error 404'
    const iconpage = '/images/icon/error.ico'

    res.status(404).render('404', {page, iconpage})
})


app.listen(port, () => {

    console.log(`Servidor escutando na porta: ${port}`)

})

