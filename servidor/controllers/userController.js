const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

exports.createUser = async (req, res) => {
    
    //Revisar si hay errores
    const errors = validationResult(req);
    if( !errors.isEmpty() ) {
        return res.status(400).json({errors: errors.array()});
    }

    // Extrae el email y password
    const { email, password } = req.body;
    
    try {
        //Validar que el usuario sea unico

        let user = await User.findOne({ email });

        if( user ) {
            return res.status(400).json({ msg: 'El usuario ya existe'});
        }
        
        //Crea el usuario
        user = new User(req.body);

        // Hashear el password
        const salt = await bcryptjs.genSalt(10);
        user.password = await bcryptjs.hash(password, salt);

        //Guarda el usuario
        await user.save();

        //Mensaje de confirmación
        res.json({ msg: 'Usuario creado correctamente'});

    } catch (error) {
        console.log(error);
        res.status(400).send('Hay un error al crear o guardar el usuario');
    }
};
