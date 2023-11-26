const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/projetoapi'

async function main()
{

    await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log('Conexão Estabelecida com SUCESSO!')
        })
        .catch(error => {
            console.log('Erro ao realizar conexão: ', error)
        })
}

main()

module.exports = mongoose