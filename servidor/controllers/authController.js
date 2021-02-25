const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.authUser = async (req, res) => {

    //Revisar si hay errores
    const errors = validationResult(req);
    if( !errors.isEmpty() ) {
        return res.status(400).json({errors: errors.array()});
    };

    // extraer el email y password
    const { email, password } = req.body;

    try {
        // revisar que sea un usuario registrado
        let user = await User.findOne({ email });
        
        if(!user ) {
            return res.status(400).json({ msg: 'El usuario no existe' });
        };

        // revisar el password
        const passCorrect = await bcryptjs.compare(password, user.password);
        
        if(!passCorrect) {
            return res.status(400).json({ msg: 'Password incorrecto'});
        }

        // si todo es correcto
        // creamos JWT
        const payload = {
            user: {
                id: user.id
            }
        };

        //Firmar el JWT
        jwt.sign(payload, process.env.SECRET, {
            expiresIn: 3600
        }, (error, token) => {
            if(error) throw error;
            
            res.json({ token });
        });


    } catch (error) {
        console.log(error);
    };
};
