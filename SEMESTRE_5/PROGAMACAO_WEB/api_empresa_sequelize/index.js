
// configuracoes gerais do aplicativo

const express = require('express')
const mime = require('mime-types')
const exphbs = require('express-handlebars')

const app = express()

const port = 3000 // variavel de ambiente

const path = require('path')

/*  conexao com o banco */
const conn = require('./db/conn')
/* esqueleto que vai ser compatibilizado no fim (nativo já entendese com sync()) */
const Users = require('./models/Users')
const Colaborador = require('./models/Colaborador')
const Departamento = require('./models/Departamento')
const Empresa = require('./models/Empresa')
const Cargo = require('./models/Cargo')
const Gerente = require('./models/Gerente')
const TPL_departamento_colaborador = require('./models/TPL_departamento_colaborador')



/* ROTAS */
const usersRouter = require('./routes/usersRoutes')


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


conn.sync().then(() => {
    app.listen(port)
    console.log('\n\n Sincronizado com PostgreSQL!')
}).catch(err => console.log('Não foi possivel conectar', err))