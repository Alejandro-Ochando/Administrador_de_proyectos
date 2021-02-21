const User = require('../models/User');

exports.createUser = async (req, res) => {
    try {
        let user;
        
        //Crea el usuario
        user = new User(req.body);

        //Guarda el usuario
        await user.save();

        //Mensaje de confirmación
        res.send('Usuario creado correctamente');

    } catch (error) {
        console.log(error);
        res.status(400).send('Hay un error al crear o guardar el usuario');
    }
};
