const mongoose = require('mongoose'); // Solo necesitas una importación

const dbconnect = () => {
    mongoose.connect('mongodb://localhost:27017/tienda_ropa')
      .then(() => {
        console.log('Conectado a MongoDB');
      })
      .catch(err => {
        console.error('Error al conectar a MongoDB', err);
      });
}

module.exports = dbconnect;
