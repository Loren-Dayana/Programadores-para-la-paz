const express = require('express');
const app = express();

// Middleware para procesar datos JSON en el cuerpo de las peticiones (Body)
app.use(express.json());

// Ruta raíz (Pregunta 6)
app.get('/', (req, res) => {
  res.send('Servidor activo');
});

// Ruta de saludo
app.get('/saludo', (req, res) => {
  res.send('Hola comunidad');
});

// Ruta con parámetros dinámicos
app.get('/mensaje/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Hola ' + nombre);
});

// Ruta POST para reportes (Pregunta 8)
app.post('/reporte', (req, res) => {
  const mensaje = req.body.mensaje;
  res.json({
    estado: "Reporte recibido",
    mensaje: mensaje
  });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto http://localhost:3000');
});
