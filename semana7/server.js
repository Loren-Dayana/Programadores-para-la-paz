const express = require('express');
const app = express();

// Middleware para leer formato JSON en las peticiones
app.use(express.json());

// Array global en memoria para almacenar los reportes de la comunidad
let reportes = [];

// Ruta GET para listar todos los reportes comunitarios registrados
app.get('/reportes', (req, res) => {
  res.json(reportes);
});

// Ruta POST para crear e insertar un nuevo reporte en la lista
app.post('/reportes', (req, res) => {
  const reporte = {
    id: reportes.length + 1,
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };

  // Se agrega el objeto al final del array
  reportes.push(reporte);

  res.json({
    mensaje: "Reporte registrado",
    reporte: reporte
  });
});

// El servidor escucha en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
