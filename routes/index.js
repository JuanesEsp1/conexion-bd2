const express = require('express');
const router = express.Router();
const productos = require('../models/productos.js');
const usuarios = require('../models/usuarios.js');




router.get("/", async(req, res) => {
  try {
    const productos = await productos.find();
    res.status(200).json(productos);
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    res.status(500).json({ error: 'Hubo un problema al obtener los productos.' });
  }
});


router.post("/login", async (req, res) => {
  const { usuario, password } = req.body;
  try {
    const user = await usuarios.findOne({ "usuario": usuario });
      
    if (user && user.password === password) {
      res.status(200).json({ mensaje: 'Inicio de sesión exitoso.' });
    } else {
      res.status(401).json({ error: 'Credenciales inválidas.' });
    }
  } catch (error) {
    res.status(500).json('Error al obtener el usuario:', error);
    res.status(500).json({ error : 'Hubo un problema al obtener el usuario.' });
  }
});




router.get("/productos", async (req, res) => {
  try {
    const products = await productos.find();
      res.status(200).json(products);
      console.log(products);
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    res.status(500).json({ error: 'Hubo un problema al obtener los productos.' });
  }
});



router.post("/crear", async (req, res) => {
  const { nombre, precio, stock, descripcion, estado } = req.body;

  try {
    const nuevoProducto = await productos.create({ nombre, precio, stock, descripcion, estado });
    res.status(201).json(nuevoProducto); // Responder con el documento creado
  } catch (error) {
    console.error('Error al crear el producto:', error);
    res.status(500).json({ error: 'Hubo un problema al crear el producto.' });
  }

});


// Actualizar un producto por nombre (versión modificada)
router.put("/actualizar/:id", async (req, res) => {
  const { id } = req.params;
  const { nuevoNombre, nuevoPrecio, nuevoDescripcion, nuevoStock } = req.body;

  try {
    // Buscar y actualizar el producto por su nombre
    const productoActualizado = await productos.findOneAndUpdate(
      { id: id },
      {
        nombre: nuevoNombre,
        precio: nuevoPrecio,
        descripcion: nuevoDescripcion,
        stock: nuevoStock,
      }, { new: true });

    if (!productoActualizado) {
      return res.status(404).json({ error: 'Producto no encontrado.' });
    }

    res.status(200).json(productoActualizado); // Responder con el producto actualizado
  } catch (error) {
    console.error('Error al actualizar el producto:', error);
    res.status(500).json({ error: 'Hubo un problema al actualizar el producto.' });
  }
});








module.exports = router;