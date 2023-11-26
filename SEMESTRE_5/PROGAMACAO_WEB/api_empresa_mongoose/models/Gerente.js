const mongoose = require('../db/conn')
const { Schema } = mongoose

const Gerente = mongoose.model(
    'gerente',
    new Schema({ //campos da collection
        denominacao: { type: String, required: true },
        nivel: { type: String, required: false },
        colaborador: {  type: mongoose.Schema.Types.ObjectId, ref: 'colaborador' , required: false },
    })
    )

module.exports = Gerente
