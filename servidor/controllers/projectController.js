const Project = require('../models/Project');

exports.createProject = async (req, res ) => {
    
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
