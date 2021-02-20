const express = require('express');
const connectDB = require('./config/db');

const chalk = require('chalk');

// Crear el servidor
const app = express();

// Conectar a la base de datos
connectDB();

// Puerto de la app
const PORT = process.env.PORT || 4000;

// Definir la pagina principal
// Probando si funciona el server.
/*
app.get('/', (req, res) => {
    res.send('Hola Mundo')
});
*/

// Importar rutas
app.use('/api/users', require('./routes/users'));

// Arranque
app.listen(PORT, () => {
    console.log(chalk.cyan('El servidor esta funcionando en el puerto '), PORT);
});
