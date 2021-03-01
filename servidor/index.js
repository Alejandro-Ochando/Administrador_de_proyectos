const express = require('express');
const connectDB = require('./config/db');

const chalk = require('chalk');

// Crear el servidor
const app = express();

// Conectar a la base de datos
connectDB();

// Puerto de la app
const PORT = process.env.PORT || 4000;

// Habilitar express.json
app.use( express.json({ extended: true }));

// Importar rutas
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/projects', require('./routes/projects'));

// Arranque
app.listen(PORT, () => {
    console.log(chalk.cyan('El servidor esta funcionando en el puerto '), PORT);
});
