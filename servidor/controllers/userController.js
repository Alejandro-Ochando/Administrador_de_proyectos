const User = require('../models/User');

exports.createUser = async (req, res) => {
    
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

        //Guarda el usuario
        await user.save();

        //Mensaje de confirmación
        res.json({ msg: 'Usuario creado correctamente'});

    } catch (error) {
        console.log(error);
        res.status(400).send('Hay un error al crear o guardar el usuario');
    }
};
