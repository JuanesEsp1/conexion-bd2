const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');

const dbconnect = () => {
    mongoose.connect('mongodb://localhost:27017/productos', { 
        useNewUrlParser: true,                  
        useUnifiedTopology: true,              
      })
      .then(() => {
        console.log('conectado a  MongoDB');
      })
      .catch(err => { //Captura de errores: 
        console.error('error al conectar a MongoDB', err);
      });
}

module.exports = dbconnect;