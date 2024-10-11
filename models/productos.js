const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const moment = require('moment-timezone');

const fechaActual = new Date();


const productosSchema = new mongoose.Schema({
    nombre: {
        type: String, 
        required: true, 
        trim: true 
    },
    categoria: {
        type: String,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true, 
        min: [0, 'El precio debe ser un número positivo'] 
    },
    stock: {
        type: Number,
        required: true,
        min: [0, 'El stock debe ser un número positivo']
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    estado: {
        type: String,
        required: true,
        trim: true
    },
    fecha: {
        type: Date,
        default: fechaActual
    }
}, {
    timestamps: false,
    versionKey: false
});

productosSchema.plugin(AutoIncrement, { inc_field: 'id' });

const productos = mongoose.model('productos', productosSchema); 

module.exports = productos;