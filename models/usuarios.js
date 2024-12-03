const mongoose = require('mongoose')


const usuariosSchema = new mongoose.Schema({
    usuario: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    telefono: {
        type: String,
        required: true,
        trim: true
    },
    rol: {
        type: String,
        required: true,
        trim: true
    }   
}, {
    timestamps: false,
    versionKey: false
});

const usuarios = mongoose.model('usuarios', usuariosSchema);

module.exports = usuarios;  
