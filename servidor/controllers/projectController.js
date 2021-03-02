const Project = require('../models/Project');
const { validationResult } = require('express-validator')

exports.createProject = async (req, res ) => {
    
    // revisar si hay errores
    const errors = validationResult(req);
    if ( !errors.isEmpty() ) {
        return res.status(400).json({ errors: errors.array() });
    };

    
    try {
        //Crear un nuevo proyecto
        const project = new Project(req.body);
        
        //Guardar el creador via JWT
        project.owner = req.user.id;
        
        // Guardamos el proyecto
        project.save();
        res.json(project);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    };
};
