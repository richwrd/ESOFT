
const mongoose = require('../db/conn')
const { Schema } = mongoose

const Departamento = mongoose.model(
    'departamento',
    new Schema({ //campos da collection
        denominacao: { type: String, required: true },
        empresa: {  type: mongoose.Schema.Types.ObjectId, ref: 'empresa' , required: true },
        gerente: {  type: mongoose.Schema.Types.ObjectId, ref: 'gerente' , required: false  }
    })
    )

module.exports = Departamento