const mongoose = require('../db/conn')
const { Schema } = mongoose

const Empresa = mongoose.model(
    'empresa',
    new Schema({ //campos da collection
        denominacao: { type: String, required: true } })
    )

module.exports = Empresa