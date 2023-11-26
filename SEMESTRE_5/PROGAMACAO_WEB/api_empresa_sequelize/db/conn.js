const { Sequelize } = require('sequelize')


const sequelize = new Sequelize('projeto', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
})

try{

    sequelize.authenticate().then(console.log('Conexão estabelecida com SUCESSO [SEQUELIZE - POSTGRESQL]!\n\n'))
    

}catch(err){ 

    console.log('Não foi possivel conectar: ', error)
}

module.exports = sequelize