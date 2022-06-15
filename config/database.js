const mongoose = require('mongoose')


const conn = async()=>{
    //mongoAtlas
    var atlas = await mongoose.connect('mongodb+srv://maah123:230205@fiaptec.n8xny.mongodb.net/todolist')
}

module.exports = conn