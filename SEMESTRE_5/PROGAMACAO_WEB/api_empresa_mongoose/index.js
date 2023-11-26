
// configuracoes gerais do aplicativo

const express = require('express')
const mime = require('mime-types')
const exphbs = require('express-handlebars')

const app = express()

const port = 3000 // variavel de ambiente

const path = require('path')
 
/*  conexao com o banco */
const conn = require('./db/conn')

/* ROTAS */
const usersRouter = require('./routes/usersRoutes')
const cargoRouter = require('./routes/cargoRoutes')
const colaboradorRouter = require('./routes/colaboradorRoutes')
const departamentoRouter = require('./routes/departamentoRoutes')
const empresaRouter = require('./routes/empresaRoutes')
const gerenteRouter = require('./routes/gerenteRoutes')



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


app.get('/config', (req,res)=>{

    const page = 'Configurações'
    const iconpage = '/img/icon/config.svg'
    
    res.render('config', {page, iconpage})
})

app.use('/users', usersRouter)
app.use('/cargo',cargoRouter)
app.use('/colaborador',colaboradorRouter)
app.use('/empresa',empresaRouter)
app.use('/departamento',departamentoRouter)
app.use('/gerente',gerenteRouter)



app.get('/about', (req,res)=>{

    const page = 'Sobre'
    const iconpage = '/img/icon/info.ico'

    res.render('about', {page, iconpage})
})

app.get('/', (req,res)=> {


    const page = 'Home'
    const iconpage = '/img/icon/main.ico'
    

    const user = {
        name: 'Eduardo'
    }

    const auth = true


    res.render('home', {user:user , auth, page, iconpage} )
})

app.use(function(req,res,next){
    const page = 'Error 404'
    const iconpage = '/img/icon/error.ico'

    res.status(404).render('404', {page, iconpage})
})


app.listen(port, () => {

    console.log(`Servidor escutando na porta: ${port}`)

})

