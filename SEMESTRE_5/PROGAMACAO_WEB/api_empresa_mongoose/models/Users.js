const mongoose = require('../db/conn')
const { Schema } = mongoose

const Users = mongoose.model(
    'users',
    new Schema({ //campos da collection
        nome: { type: String, required: true },
        sobrenome: { type: String, required: true },
        permissoes: { type: String, required: true },
        image : { type: String, required: true},
    })
    )

module.exports = Users
