const express = require('express');
const dbconnect = require('./config/dbconnect');
const cors = require('cors');
const app = express();

const port = 3001;
const router = require('./routes/index.js')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Ruta básica para la página de inicio
app.get('/', (req, res) => {
  res.send('¡Hola Mundo desde Express!');
});

dbconnect();
app.use('/', router);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});