const mongoose = require('../db/conn')
const { Schema } = mongoose

const Cargo = mongoose.model(
    'cargo',
    new Schema({ //campos da collection
        denominacao: { type: String, required: true },
        salariobase: { type: Number, required: true }
    })
    )

module.exports = Cargo
