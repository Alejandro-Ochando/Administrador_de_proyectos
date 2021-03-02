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

// Obtiene todos los proyectos del usuario actual
exports.getProjects = async (req, res) => {

    try {
        const projects = await Project.find({owner: req.user.id})
            .sort({owner: -1});

        res.json({ projects });
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error ');
    };
};

// Actualiza un proyecto
exports.updateProject = async (req, res) => {
    
    // revisar si hay errores
    const errors = validationResult(req);
    if ( !errors.isEmpty() ) {
        return res.status(400).json({ errors: errors.array() });
    };

    // Extraer la información del proyecto
    const { name } = req.body;
    const newProject = {};

    if(name){
        newProject.name = name;
    };

    try {
        //Revisar el ID
        let project = await Project.findById(req.params.id);

        // Si el proyecto existe o no
        if(!project) {
            return res.status(404).json({ msg: 'Proyecto no encontrado' });
        };

        // Verificar el creador del proyecto
        if(project.owner.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'No Autorizado' });
        };

        // actualizar
        project = await Project.findByIdAndUpdate(
            { _id: req.params.id },
            { $set : newProject}, 
            { new :  true }
        );

        res.json({ project });


    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    };

};
