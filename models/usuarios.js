const mongoose = require('mongoose')

const modelo = mongoose.Schema({
    nome:String,
    email:String,
    senha:String,
    enviado: {type: Date, default: Date.now}
})

const usuario = mongoose.model('usuarios',modelo)

module.exports = usuario