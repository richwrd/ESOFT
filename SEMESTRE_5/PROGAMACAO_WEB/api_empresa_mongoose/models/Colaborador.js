
const mongoose = require('../db/conn')
const { Schema } = mongoose

const Colaborador = mongoose.model(
    'colaborador',
    new Schema({ //campos da collection
        nome: { type: String, required: true },
        sobrenome: { type: String, required: true },
        cpf: { type: String, required: true },
        cargo: { type: mongoose.Schema.Types.ObjectId, ref: 'cargo', required: false},
        departamento: { type: mongoose.Schema.Types.ObjectId, ref: 'departamento', required: false},
    })
    )

module.exports = Colaborador

 