const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const chalk = require('chalk');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log(chalk.cyan("DB conectada"));
    } catch {
        console.log(error);
        process.exit(1); //Detener la app
    }
}

module.exports = connectDB;